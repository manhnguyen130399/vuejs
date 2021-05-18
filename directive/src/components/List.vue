<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-6">
      <!-- <p>{{ msg | toLowerCase }}</p> -->
      <h3>List product</h3>
      <input type="text" class="form-control" v-model="filterProdut" />
      <hr />
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="product in filterProduct" :key="product">
              {{ product }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "../productMixin.js";
export default {
  mixins: [productMixin],
};
</script>

<style>
</style>