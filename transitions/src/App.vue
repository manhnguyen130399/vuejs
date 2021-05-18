<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">Animations</div>
        <hr />
        <button @click="click" class="btn btn-primary">
          Show notification
        </button>
      </div>
      <br />
      <transition>
        <div v-if="isShow" class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    click() {
      return (this.isShow = !this.isShow);
    },
  },
};
</script>

<style>
.fade-enter {
}
.fade-enter-active {
}
.fade-leave {
}
.fade-leave-active {
}
</style>
