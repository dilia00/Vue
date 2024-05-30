<template>
    <nav class="pagination">
        <router-link 
            :to="`/${path}/${page}`" 
            class="pagination__item" 
            :class="{pagination__item_active: page == currentPage}"
            v-for="page in pages" 
            :key="page.id">
            {{page}}
        </router-link>
    </nav>
</template>
<script>
export default {
  name: 'PaginationComp',
  props: {
    path: {
        type: String,
        default: undefined,
    },
    pages: {
        type: Number,
        default: undefined,
    },
    currentPage: {
        type: String,
      default: undefined,
    },   
  },
};
</script>

<style scoped>
.pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 61px;
    margin-bottom: 200px;
}

.pagination__item {
    background-color: #fff;
    border: 1px solid rgb(205, 162, 116);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    font-size: 16px;
    text-align: center;
    padding: 8px;
}

.pagination__item:hover {
    background-color: #F4F0EC;
}

.pagination__item_active {
    background-color: #F4F0EC;
    border: 1px solid #F4F0EC;
}

</style>