<template>
  <div>
    <div class="cart">
      <div class="cart-body item"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "items",
  data() {
    return {};
  },
};
</script>

<style>
.cart-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.item {
  cursor: pointer;
}
.item:hover {
  background-color: red;
}
</style>