<template>
  <div id="app">
    <Nav />
    <div class="dashboard">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
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

