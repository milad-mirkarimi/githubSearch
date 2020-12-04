<template>
	<div class="result-control">
		<img :src="imgSrc" />
		<h4>{{ title }}</h4>
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
		}
	}
}
</script>