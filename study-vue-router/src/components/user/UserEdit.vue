<template>
  <div>
    thiss is usser edit
    <div>locate : {{ locate }}</div>
    <button @click="!status" class="btn btn-block btn-danger">
      Something
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locate: this.$route.query.locate,
      status: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.status) {
      next();
    } else {
      if (confirm("Are u sure")) {
        if (true) {
          next();
        } else {
          next(false);
        }
      }
    }
  },
};
</script>

<style>
</style>