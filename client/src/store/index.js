import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    isEmpty: true,
    isLoggedIn: true,
    isLoggedOut: false,
    id: 0,
    idCart: 0,
    quantity: 0,
  },
  mutations: {
    SET_PRODUCT(state, dataProducts) {
      state.products = dataProducts;
    },
    SET_CART(state, dataCarts) {
      state.carts = dataCarts;
      if (state.carts.length === 0) {
        state.isEmpty = true;
      } else {
        state.isEmpty = false;
      }
    },
    GET_ID(state, id) {
      state.id = id;
    },
    GET_CARTID(state, data) {
      state.idCart = data.id;
      state.quantity = data.quantity;
    },
    EDIT_QUANTITY(state, quantity) {
      state.quantity = quantity;
    },
    DELETE_CART(state, id) {
      state.carts = state.carts.filter((cart) => cart.id !== id);
    },
    SET_LOGIN(state, data) {
      if (localStorage.token) {
        state.isLoggedOut = true;
        state.isLoggedIn = false;
      } else {
        state.isLoggedOut = false;
        state.isLoggedIn = true;
      }
    },
    SET_LOGOUT(state, data) {
      state.isLoggedOut = false;
      state.isLoggedIn = true;
      swal({ title: 'Success!', text: 'Logged Out Successfully!', icon: 'success' });
    },
  },
  actions: {
    register(context, payload) {
      axios({
        method: 'POST',
        url: 'https://murmuring-wave-46445.herokuapp.com/users/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: payload.role,
        },
      })
        .then((results) => {
          console.log(results);
          router.push({ name: 'Login' });
          swal({ title: 'Success!', text: 'Succesfully Registered!\n Login to Continue', icon: 'success' });
        })
        .catch((err) => {
          console.log(err.response);
          swal({ title: 'Warning!', text: 'All fields is required!', icon: 'warning' });
        });
    },
    login(context, payload) {
      axios({
        method: 'POST',
        url: 'https://murmuring-wave-46445.herokuapp.com/users/login',
        data: {
          email: payload.email,
          password: payload.password,
        },
      })
        .then((results) => {
          localStorage.setItem('token', results.data.access_token);
          localStorage.setItem('id', results.data.id);
          localStorage.setItem('email', results.data.email);
          context.commit('SET_LOGIN');
          router.push({ name: 'MainPage' });
        })
        .catch((err) => {
          const validate = err.response.data.message;
          swal({ title: 'Warning!', text: validate, icon: 'warning' });
        });
    },
    getProducts(context) {
      axios({
        method: 'GET',
        url: 'https://murmuring-wave-46445.herokuapp.com/productsbuyer',
      })
        .then((results) => {
          context.commit('SET_PRODUCT', results.data);
        })
        .catch((err) => {
          const validate = err.response.data.message;
          swal({ title: 'Warning!', text: validate, icon: 'warning' });
        });
    },
    fetchCarts(context) {
      axios({
        method: 'GET',
        url: 'https://murmuring-wave-46445.herokuapp.com/cart',
        headers: {
          access_token: localStorage.token,
        },
      })
        .then((results) => {
          context.commit('SET_CART', results.data);
        })
        .catch((err) => {
          console.log(err);
        // router.push({ name: 'Login' });
        });
    },
    addCart(context, payload) {
      axios({
        method: 'POST',
        url: `https://murmuring-wave-46445.herokuapp.com/cart/${this.state.id}`,
        headers: {
          access_token: localStorage.token,
        },
        data: {
          UserId: localStorage.id,
          ProductId: this.state.id,
          quantity: payload.quantity,
        },
      })
        .then((results) => {
          console.log(results);
          router.push({ name: 'CartList' });
        })
        .catch((err) => {
          console.log(err.response);
        // router.push({ name: 'Login' });
        // swal({ title: 'Whoops..', text: 'Login first, then start shooping! /(^ u ^)/', icon: 'info' });
        });
    },
    processEdit(context, payload) {
      axios({
        method: 'GET',
        url: `https://murmuring-wave-46445.herokuapp.com/cart/${payload}`,
        headers: {
          access_token: localStorage.token,
        },
      })
        .then((results) => {
          context.commit('GET_CARTID', results.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editCart(context, payload) {
      axios({
        method: 'PUT',
        url: `https://murmuring-wave-46445.herokuapp.com/cart/${payload.id}`,
        headers: {
          access_token: localStorage.token,
        },
        data: { quantity: payload.quantity },
      })
        .then((results) => {
          console.log(results.data);
          router.push({ name: 'CartList' });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCart(context, payload) {
      axios({
        method: 'DELETE',
        url: `https://murmuring-wave-46445.herokuapp.com/cart/${payload}`,
        headers: {
          access_token: localStorage.token,
        },
      })
        .then((results) => {
          console.log(results);
          context.commit('DELETE_CART', payload);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
