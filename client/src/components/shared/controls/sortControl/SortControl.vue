<template>
	<div class="sort-control">
		<button 
            @click="displayList = !displayList" 
            v-click-outside="hide" >
            Sort: <span>best match <i class="fa fa-chevron-down"></i></span>
        </button>
	    <ul v-if="displayList">
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
export default {
    name: "SortControl",
    directives: {
        ClickOutside
    },
	data: () => ({
		displayList: false
	}),
	methods:{
		hide(){
            this.displayList = false;
		}
	}
}
</script>