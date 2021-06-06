<template>
  <div>
    <p>This is result {{ rs }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    rs() {
      return this.$store.state.rs;
    },
  },
};
</script>

<style>
</style>