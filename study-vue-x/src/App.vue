<template>
  <div id="app">
    <!-- <router-view/> -->
    <result ></result>
    <counter ></counter>
    <hr>
    <orther></orther>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Orther from './components/Orther.vue'
import Result from './components/Result.vue'
export default {
  components: { Result, Counter, Orther },
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
