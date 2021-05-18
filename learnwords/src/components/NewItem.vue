<template>
  <div class="container">
    <div class="row">
      <form action="">
        <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
          <label for="">You can saying --------</label>
          <input type="text" v-model="msg" />
        </div>
        <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
          <button class="btn btn-primary" @click.prevent="createItem">
            Add new item
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-item",
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    createItem() {
      this.$emit("newItem", this.msg);
      this.msg = "";
    },
  },
};
</script>

<style>
</style>