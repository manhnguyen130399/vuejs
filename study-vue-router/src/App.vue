<template>
  <div id="app">
    <page-header />
    <div class="container">
      <router-view />
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
</style>
