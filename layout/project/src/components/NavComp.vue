<template>
  <nav class="nav">
    <router-link class="breadcrumbs" :to="item.path"
      v-for="item in items" :key="item.id" >
      {{ item.title }}
    </router-link>
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
<style >
.breadcrumbs:not(:last-child)::after {
    content: "/";
    padding-left: 8px;
    padding-right: 4px;
}
</style>