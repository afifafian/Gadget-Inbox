<template>
  <div class="col-4 mt-4">
      <form v-on:submit.prevent="register" class="login-form col bg-info p-4 rounded-lg mt-3">
        <router-link :to="{name: 'MainPage'}">
          <a class="text-warning" style="margin-right:500px;">Cancel</a>
        </router-link><br><br>
        <h2 class="tagline">Register Now, then explore our Products!</h2><br>
        <div class="form-group">
          <label class="text-white" for="exampleInputEmail1">Your Email</label>
          <input type="email" class="form-control" id="emailLogin"
          aria-describedby="emailHelp" v-model="email">
          <small id="emailHelpLogin" class="form-text">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label class="text-white" for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="passwordLogin" v-model="password">
        </div><br>
        <div class="form-group">
          <label class="text-white" for="exampleInputPassword1">Let us know what you are doing?</label>
          <select v-model="role" class="form-control" id="exampleFormControlSelect1">
            <option>Student</option>
            <option>Employee</option>
            <option>Enterpreneur</option>
            <option>Freelancer</option>
            <option>Household</option>
            <option>Others</option>
          </select>
        </div> <br>
        <button type="submit" class="btn btn-primary mt-2 mb-2">Register</button><br><br>
        <p>Already have an account?</p>
        <router-link :to="{name: 'Login'}" class="text-white"><a>Login Here</a></router-link>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: '',
    };
  },
  methods: {
    register() {
      const obj = {
        email: this.email,
        password: this.password,
        role: this.role,
      };
      this.$store.dispatch('register', obj);
    },
  },
};
</script>

<style>
.tagline {
  font-weight: bolder;
}
</style>
