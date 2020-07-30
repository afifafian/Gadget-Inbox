<template>
  <div class="col-4 col bg-info p-3 rounded-lg mt-3">
        <form v-on:submit.prevent="editCart" class="mt-3">
            <h2>Edit Cart</h2><br>
            <div class="form-group">
                <label for="exampleInputDueDate1">Quantity(s)</label>
                <input type="number" min="1" class="form-control" aria-describedby="emailHelp" v-model="quantity">
                <small class="form-text">*required</small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button> &nbsp;&nbsp;
            <router-link :to="{name: 'CartList'}">
            <button type="submit" class="btn btn-warning">Cancel</button>
            </router-link>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        editCart() {
            const data = {
                id: this.$store.state.idCart,
                quantity: this.quantity,
            };
            this.$store.dispatch('editCart', data);
        },
    },
    computed: {
        quantity: {
            get () {
                return this.$store.state.quantity;
            },
            set (quantity) {
                this.$store.commit('EDIT_QUANTITY', quantity);
            },
        },
    }
}
</script>

<style></style>
