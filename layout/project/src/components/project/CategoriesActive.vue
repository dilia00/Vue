<template>
  <button class="categories_btn" :class="{categories_active}" @click="$emit('foo')">{{title}}</button>
</template>

<script>
export default {
  name: 'CategoriesActive',
  props: {
    categories_active: { type: Boolean, default: false },
    title: { type: String, default:''},
  },
}
  
</script>

<style  scoped>
  .categories_btn{
    padding: 26px 66px;
    border-radius: 18px;
    color: rgb(41, 47, 54);
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    border: none;
    background-color: rgb(255, 255, 255);
}

.categories_active {
      background: #CDA274;
      color: #FFFFFF;
  }
</style>