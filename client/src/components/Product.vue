<template>
  <div>
    <h2 class="title-page mt-4">Product List</h2>
    <div class="mt-5 row no-gutters">
      <div v-for="(product,idx) in $store.state.products" :key="idx" class="card col-md-4"
          style="width: 18rem;">
        <div class="card-body">
          <img :src="product.image_url" class="w3-round" style="width:250px;height:250px;">
          <h5 class="card-title mt-3">{{product.name}}</h5>
          <p class="card-text">
            {{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}}
          </p>
          <br>
          <p>Stock: {{product.stock}} pcs</p>
          <router-link :to="{name: 'AddCart'}">
            <button @click="addCart(product.id)" type="button"
              class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"> Add to Cart</i>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    addCart(id) {
      this.$store.commit('GET_ID', id);
    },
    // addCart(id) {
    //   this.$store.dispatch('addCart', id);
    // },
    showModal() {
      this.$store.commit('SHOW_MODAL');
    },
  },
  created() {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style>
.title-page {
  font-weight: bolder;
}
</style>
