<template>
  <div class="col-4 col bg-info p-3 rounded-lg mt-3">
        <form v-on:submit.prevent="addCart" class="mt-3">
            <h2>Add to Cart</h2><br>
            <div class="form-group">
                <label for="exampleInputDueDate1">How many do you want to add?</label>
                <input type="number" min="1" class="form-control" aria-describedby="emailHelp" v-model="quantity">
                <small class="form-text">*required</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button> &nbsp;&nbsp;
            <router-link :to="{name: 'MainPage'}">
            <button type="submit" class="btn btn-warning">Cancel</button>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0,
        };
    },
    methods: {
        addCart() {
            const data = {
                quantity: this.quantity,
            };
            this.$store.dispatch('addCart', data);
        },
    },
}
</script>

<style></style>
