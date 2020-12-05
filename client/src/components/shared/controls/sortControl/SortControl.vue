<template>
	<div class="sort-control">
		<button>Sort: <span>best match ></span></button>
	</div>
</template>

<script>
export default {
	name: "SortControl",
	// props: {
	// 	isDisabled: {
	// 		type: Boolean,
	// 		default: false
	// 	}
	// },
	// data: () => ({
	// 	searchTerm: ''
	// }),
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