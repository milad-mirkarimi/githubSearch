<template>
	<div class="search-control">
		<input 
			type="search" 
			v-model="searchTerm" 
			placeholder="Search Github"
			:disabled="isDisabled" 
			@keyup.enter="trigger" />
		<button 
			@click.prevent="emitSearch()" 
			ref="emitSearch">Search</button>
	</div>
</template>

<script>
export default {
	name: "SearchControl",
	props: {
		isDisabled: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		searchTerm: ''
	}),
	methods:{
		emitSearch(){
			this.$emit('emit-search',this.searchTerm);
			// Listen from parent
		},
		trigger(){
			this.$refs.emitSearch.click()
		}
	}
}
</script>