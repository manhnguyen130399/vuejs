<template>
  <div>
    <button @click="up">Up</button>
    <hr />
    <button @click="asyncDecrement">Down</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    up() {
      this.$store.commit("hunIncrementOp");
    },
    ...mapActions(["hunIncrementOp","asyncDecrement" ]),
  },
};
</script>

<style>
</style>