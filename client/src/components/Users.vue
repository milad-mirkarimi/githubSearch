<template>
  <div class="row">
    <div class="column">
      <h1>Search more than 63M users</h1>
      <SearchControl />
    </div>
  </div>
</template>

<script>
import SearchControl from "@/components/shared/controls/SearchControl.vue";
export default {
  name: "Users",
  components: {
    SearchControl
  }
};
</script>
