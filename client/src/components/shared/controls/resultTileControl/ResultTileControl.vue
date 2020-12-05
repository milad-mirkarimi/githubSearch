<template>
	<div class="result-control">
		<a :href="link" target="_blank" rel="noopener" >
			<img :src="imgSrc" />
		</a>
		<a :href="link" target="_blank" rel="noopener" >
			<p>{{ title }}</p>
		</a>
		<button>Repos</button>
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
		}
	}
}
</script>