<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info mt-1">
    <img src="../assets/gadget.png" style="width:120px;height:80px;">
    <a class="navbar-brand text-white">Gadget Inbox</a>
    <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="navbar-brand" style="margin-left: 230px;">
            <router-link class="text-white" :to="{name: 'CartList'}">
              <a type="button">MyCart List</a>
            </router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" style="margin-left: 300px;">
              <router-link class="text-white" :to="{name: 'Login'}">
              <button type="button" class="btn btn-warning">Login</button>
              </router-link>
          </li>
          <li v-if="$store.state.isLoggedOut"
            style="margin-left: 70px;" class="navbar-brand text-white">
              <a>Welcome, {{data}}</a>
          </li>
          <li v-if="$store.state.isLoggedOut" class="nav-item" style="margin-left: 20px;">
            <router-link :to="{name: 'MainPage'}">
              <button @click="logout" type="button" class="btn btn-danger text-white">Logout
              </button>
            </router-link>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      data: localStorage.email,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit('SET_LOGOUT');
    },
  },
  created() {
    this.$store.commit('SET_LOGIN');
  },
};
</script>

<style></style>
