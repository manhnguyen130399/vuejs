<template>
  <div id="app">
    <app-header :maxValue="maxItems" :currentValue="items.length" />
    <new-item v-on:newItem="addNewItem" />
    <items-layout :items="items" v-on:removeItem="removeItem" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ItemsLayout from "./components/ItemsLayout.vue";
import NewItem from "./components/NewItem.vue";
export default {
  components: { ItemsLayout, NewItem, appHeader: Header },
  name: "App",
  data() {
    return {
      items: ["I love u", " This is my code"],
      maxItems: 10,
    };
  },
  methods: {
    addNewItem(data) {
      this.items.push(data);
    },
    removeItem(data) {
      this.items.splice(data, 1);
    },
  },
};
</script>

<style>
</style>
