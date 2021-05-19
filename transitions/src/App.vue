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
      <transition :name="typeAnimate">
        <p v-if="isShow">hello</p>
      </transition>
      <transition :name="typeAnimate">
        <p v-if="isShow">hello</p>
      </transition>
      <transition
        enter-class=""
        enter-active-class="animated animate__wobble"
        leave-class=""
        leave-active-class="animated animate__wobble"
        appear
      >
        <p v-if="isShow">hello</p>
      </transition>
      <select name="" id="" v-model="typeAnimate">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <br />
      <button class="btn btn-success" @click="status = !status">
        Add or Remove
      </button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="cancelled"
      >
        <div v-if="status"><p>ress</p></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShow: true,
      status: false,
      typeAnimate: "fade",
    };
  },
  methods: {
    click() {
      return (this.isShow = !this.isShow);
    },
    beforeEnter: (el) => {
      console.log("before enter");
    },
    enter(el, done) {
      let point = 1;
      console.log("enter");
      const inteval = setInterval(() => {
        point++;
        if (point > 20) {
          clearInterval(inteval);
          done();
        }
      }, 20);
      done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    cancelled(el) {
      console.log("enter-canel");
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

/* keyframe */
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
