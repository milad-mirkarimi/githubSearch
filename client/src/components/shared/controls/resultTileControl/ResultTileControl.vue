<template>
	<div class="result-control">
		<img :src="imgSrc" />
		<p>{{ title }}</p>
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