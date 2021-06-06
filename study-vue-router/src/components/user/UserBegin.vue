<template>
  <div><h1>This is list user</h1>
  <ul class="list-group">
   <router-link
   tag="li"
   to="user/1" class="list-group-item">User01</router-link>
     <router-link
   tag="li"
   to="user/2" class="list-group-item">User02</router-link>
     <router-link
   tag="li"
   to="user/3" class="list-group-item">User03</router-link>
     <router-link
   tag="li"
   to="user/4" class="list-group-item">User04</router-link>
  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>