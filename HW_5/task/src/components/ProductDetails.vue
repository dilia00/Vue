<template>
  <div >
    <h3>{{ product.name }}</h3>
    <p>{{ formattedPrice }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {
          name: 'Product 1',
          price: 99.99,
          available: true
        },
     
    };
  },
  computed: {
    formattedPrice() {
      return '$' + this.product.price
    }
  }

};
</script>

<style scoped>
  *{
    text-align: center;
  }

</style>