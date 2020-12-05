<template>
	<div class="sort-control">
		<button @click="displayList = !displayList">Sort: <span>best match <i class="fa fa-chevron-down"></i></span></button>
	    <ul v-if="displayList">
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
	</div>
</template>

<script>
export default {
	name: "SortControl",
	data: () => ({
		displayList: false
	}),
	// methods:{
	// 	emitSearch(){
	// 		this.$emit('emit-search',this.searchTerm);
	// 		this.searchTerm = "";
	// 		// Listen from parent
	// 	},
	// 	trigger(){
	// 		this.$refs.emitSearch.click()
	// 	}
	// }
}
</script>