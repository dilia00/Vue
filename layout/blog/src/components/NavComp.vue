<template>
    <nav class="nav">
        <a class="breadcrumbs" 
            v-for="item in items" :key="item.id"
            :href="item.href" >
            {{ item.title }}
        </a>
    </nav>
</template>

<script>
export default {
  name: 'NavComp',

  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

};
</script>

<style scoped>
.breadcrumbs:not(:last-child)::after {
    content: "/";
    padding-left: 8px;
    padding-right: 4px;
}
</style>