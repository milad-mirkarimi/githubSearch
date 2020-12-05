<template>
	<div class="sort-control">
		<button 
            @click="displayList = !displayList" 
            v-click-outside="hide" >
            Sort: <span>{{ selected }} <i class="fa fa-chevron-down"></i></span>
        </button>
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false" >
            <ul v-if="displayList">
                <li @click="selected = sort.name" v-for="(sort,i) in sorts" :key="i" >{{sort.name}}</li>
            </ul>
        </transition>
	</div>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import Velocity from 'velocity-animate';
export default {
    name: "SortControl",
    directives: {
        ClickOutside
    },
    props: {
        sorts: {
            type: Array,
            default: () => []
        },
        defaultSort: {
            type: String,
            default: '',
            required: true
        }
    },
	data: () => ({
        displayList: false,
        selected: ""
    }),
    created(){
        this.selected = this.defaultSort;
    },
    watch: {
        selected: function (newVal, oldVal) {
            if(oldVal === newVal || oldVal === '')
                return;
            this.$emit('selected-sort-changed', this.selected);    
        }
    },
	methods:{
		hide(){
            this.displayList = false;
        },
        // Drop down open and close animation events
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.height = '0px';
        },
        enter(el, done){
            Velocity(
                el,
                { opacity: 1, height: '90px'},
                { duration: 250, easing: [90, 10], complete: done}
            )
        },
        leave(el, done){
            Velocity(
                el,
                { opacity: 0, height: '0px'},
                { duration: 200, easing: 'easeInCubic', complete: done}
            )

        }
    }
}
</script>