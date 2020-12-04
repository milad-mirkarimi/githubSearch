<template>
  <div id="app">
    <Nav />
    <div class="dashboard">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Nav from "@/components/shared/Nav.vue";

  export default {
    components: {
      Nav
    }
  }

</script>

