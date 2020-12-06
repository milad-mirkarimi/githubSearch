<template>
	<div class="checkbox-container">
		<div 
		class="checkbox-inner"
		:class="{ 'is-on': selected }">
			<input
					class="checkbox-input"
					type="checkbox"
					v-bind:checked="selected" 
					@change="handleChange" />

      <div class="checkbox-background">
        <svg class="checkbox-checkmark" viewBox="0 0 24 24">
          <path class="checkbox-checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
        </svg>
        <div class="checkbox-mixedmark"></div>
      </div>
    </div>
    <label>Featured</label>
  </div>
</template>

<script>

export default {
	name: "CheckboxControl",
	props: {
		updateValue: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		selected: false
	}),
	created(){
		this.selected = this.updateValue
	},
	methods: {
		handleChange(){
			this.selected = !this.selected;
			this.$emit('checkbox-onChange', this.selected);
		}
	}
}
</script>