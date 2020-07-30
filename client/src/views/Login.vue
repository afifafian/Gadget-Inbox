<template>
  <div class="col-4 mt-4">
      <form v-on:submit.prevent="login" class="login-form col bg-info p-3 rounded-lg mt-3">
        <router-link :to="{name: 'MainPage'}">
          <a class="text-warning" style="margin-right:500px;">Cancel</a>
        </router-link>
        <h2 class="tagline">LOGIN</h2><br>
        <div class="form-group">
          <label class="text-white" for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="emailLogin"
          aria-describedby="emailHelp" v-model="email">
          <small id="emailHelpLogin" class="form-text">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label class="text-white" for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="passwordLogin" v-model="password">
        </div> <br>
        <button type="submit" class="btn btn-primary mt-2 mb-2">Login</button><br><br>
        <p>Don't have an account?</p>
        <router-link :to="{name: 'Register'}" class="text-white"><a>Register</a></router-link>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const obj = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', obj);
    },
  },
};
</script>

<style></style>
