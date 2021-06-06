<template>
  <div>
    <p>This is result {{ rs }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tenRs"]),
  }
};
</script>

<style>
</style>