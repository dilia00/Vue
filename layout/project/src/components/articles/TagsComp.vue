<template>
  <button 
    class="tags__btn" 
    :class="{tag_active}" 
    @click="$emit('click')"
    >
    {{tag}}
  </button>
</template>

<script>
export default {
  name: 'TagsComp',
  props: {
    tag_active: { type: Boolean, default: false },
    // tags: { 
    //   type: Object, 
    //   default() {
    //     return { title: 'Kitchen'}
    //   } 
    // },
    tag: {
      type: String,
      default: 'Kitchen',
    },
    
  },
}
  
</script>

<style  scoped>
  .tags__btn {
      border-radius: 10px;
      background: rgb(244, 240, 236);
      padding: 9px 30px;
      font-size: 18px;
      font-family: "Jost", sans-serif;
      color: #292F36;
      border: none;
  }

  .tag_active {
      background: #292F36;
      color: #FFFFFF;
  }
</style>