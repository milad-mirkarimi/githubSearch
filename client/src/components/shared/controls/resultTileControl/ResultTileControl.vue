<template>
	<div class="result-control">
		<a :href="link" target="_blank" rel="noopener" >
			<img :src="imgSrc" :style= "[isForUsers ? {'width': '50px'} : {'width': '30px'}]" />
		</a>
		<a :href="link" target="_blank" rel="noopener" >
			<p>{{ title }}</p>
		</a>
		<button v-if="isForUsers" @click="displayRepos()">Repos</button>
		<p class="result-control__desc" v-if="description">{{ description }}</p>
	</div>
</template>

<script>
export default {
	name: "ResultTileControl",
	props: {
		imgSrc: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		link: {
			type: String,
			default: ''
		},
		isForUsers: {
			type: Boolean,
			default: false
		},
		description: {
			type: String,
			default: ''
		}
	},
	methods: {
		displayRepos(){
			this.$emit('display-repos', true);
		}
	}
}
</script>