<template>
<div>
  <div class="text-center">User management</div>
  <hr>
  <button class="btn btn-danger" @click="backHome">Back Home </button>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  methods:{
    backHome(){
      this.$router.push('/')
    },
    gotoDetail(){
      this.$router.push('/user/10')
    },
    gotoUser(){
      this.$router.push('user/100')
    }
  }
};
</script>

<style>
</style>