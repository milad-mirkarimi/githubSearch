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

<style lang="scss">
  // Page to page transition
  .slide-fade-enter{
      transform: translateX(10px);
      opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active{
      transition: all .2s ease;
  }

  .slide-fade-leave-to{
      transform: translateX(-10px);
      opacity: 0
  }
</style>
