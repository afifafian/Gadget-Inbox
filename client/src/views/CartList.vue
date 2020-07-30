<template>
  <div class="container">
    <Navbar></Navbar>
    <router-link :to="{name: 'MainPage'}" class="text-secondary">
      <h4 style="margin-right:800px; margin-top:20px;">Back to Product List</h4>
    </router-link>
    <div>
      <h2 v-if="$store.state.isEmpty" class="mt-5">Hmm.. looks like you haven't add anything yet
      </h2>
    </div>
    <div class="mt-4 row no-gutters">
    <div v-for="(cart,idx) in $store.state.carts" :key="idx" class="card col-md-4"
      style="width: 18rem;">
      <div class="card-body">
        <img :src="cart.Product.image_url" class="w3-round" style="width:250px;height:250px;">
        <h5 class="card-title mt-3">{{cart.Product.name}}</h5>
        <p class="card-text">
          {{cart.Product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}}
        </p>
        <br>
        <p>Quantity: {{cart.quantity}}</p>
        <router-link :to="{name: 'EditCart', params: {id: cart.id}}">
        <button @click="editCart(cart.id)" type="button"
          class="btn btn-success"><i class="fa fa-pencil" aria-hidden="true"> Edit Cart</i>
        </button>
        </router-link> &nbsp;
        <button @click="deleteCart(cart.id)" type="button" style="margin-left:20px;"
          class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"> Remove from Cart</i>
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      carts: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    editCart(id) {
      this.$store.dispatch('processEdit', id);
    },
    deleteCart(id) {
      swal({
        title: 'Delete this cart?',
        text: 'You will not be able to recover after Delete it!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            swal('Succesfully Deleted Cart!', {
              icon: 'success',
            });
            this.$store.dispatch('deleteCart', id);
          } else {
            swal('Delete Cart Canceled!');
          }
        });
    },
  },
  created() {
    this.$store.dispatch('fetchCarts');
  },
};
</script>

<style></style>
