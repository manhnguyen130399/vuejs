<template>
  <div class="container">
    This is header
    {{ (currentValue / maxValue) * 100 }} %
    <br />
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :aria-valuenow="(currentValue / maxValue) * 100"
        :style="{ width: (currentValue / maxValue) * 100 + '%' }"
        aria-valuemin="0"
        :aria-valuemax="maxValue * 10"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",
  props: {
    currentValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>