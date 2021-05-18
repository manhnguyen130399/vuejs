<template>
  <div class="container">
    <div class="row">
      <span
        ><items
          v-for="(item, index) in items"
          :key="item"
          @click.native="removeItem(index)"
          >{{ item }}</items
        ></span
      >
    </div>
  </div>
</template>
<script>
import Items from "./Items.vue";
export default {
  components: { Items },
  name: "item-layout",
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  methods: {
    removeItem(index) {
      console.log(index);
      this.$emit("removeItem", index);
    },
  },
};
</script>

<style>
</style>