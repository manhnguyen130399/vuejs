<template>
  <div>
     <h1>this is user detail</h1>
     <p>UserId : {{id}}</p>
     <hr>
     <router-link tag="button" :to="{
         name:'edit',params:{id}, query:{locate:'vi'}}">
        Edit user
     </router-link>

  </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    // watch:{
    //     '$route'(to,from){
    //         this.id= to.params.id
    //     }
    // }
    beforeRouteEnter(to, from, next){
        if(true){
            next()
        }else{
            next(false)
        }
    }

}
</script>

<style>

</style>