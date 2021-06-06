<template>
  <div id="app">
    <!-- <page-header /> -->
    <router-view name="page-header" />
    <div class="container">
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/layout/Header.vue";
export default {
  components: { PageHeader },
  name: "App",
};
</script>

<style>
.slide-leave-active{
  transition: opacity 1s;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave{
  opacity: 1;
  transform: translateY(0);
}
@keyframes slide-out{
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(30px);

  }
}
</style>
