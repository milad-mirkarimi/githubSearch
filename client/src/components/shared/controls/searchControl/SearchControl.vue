<template>
	<div class="search-control">
		<input type="search" v-model="searchTerm" placeholder="Search Github">
		<button @click.prevent="emitSearch()">Search</button>
	</div>
</template>

<script>
export default {
	name: "SearchControl",
	data: () => ({
		searchTerm: ''
	}),
	methods:{
		emitSearch(){
			this.$emit('emit-search',this.searchTerm);
			// Listen from parent
		}
	}
}
</script>