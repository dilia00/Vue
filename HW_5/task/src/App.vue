<template>
  <div id="app">
    <HeaderComp/>
    <ProductDetails/>
    <!-- <ProductDetails v-for="product in products" :key="product.id" :products="product"/> -->
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    ProductDetails,
    FooterComp
  },
  // data() {
  //   return {
  //     products:[
  //       {
  //         name: 'Product 1',
  //         price: 100,
  //         available: true
  //       },
  //       {
  //         name: 'Product 2',
  //         price: 200,
  //         available: false
  //       },
  //       {
  //         name: 'Product 3',
  //         price: 300,
  //         available: true,
  //       },
  //     ]
  //   };
  // },
  // computed: {
  //   formattedPrice(price){
  //       // return this.products.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  //       return `$${price}`
  //   }
  // }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #4D5053;
}

a:hover {
    color: #CDA274;
}

body {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    font-style: normal;
    color: #4D5053;
}

button {
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    text-align: center;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

.breadcrumbs:not(:last-child)::after {
    content: "/";
    padding-left: 8px;
    padding-right: 4px;
}
</style>
