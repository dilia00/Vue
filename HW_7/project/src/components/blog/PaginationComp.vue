<template>
    <nav class="pagination">
        <button class="pagination__btn" v-for="page in pages" :key="page.id">{{page}}</button>

        <button class="pagination__btn"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg></button>
    </nav>
</template>

<script>
export default {
  name: 'PaginationComp',

  data() {
    return {
        pages: ['01', '02', '03']
    };
  },

};
</script>

<style scoped>
.pagination {
    display: flex;
    gap: 20px;
    margin-top: 23px;
    margin-bottom: 200px;
    padding-left: calc(50% - 134px);
    padding-right: calc(50% - 134px);
}


.pagination__btn {
    background-color: #fff;
    border: 1px solid #F4F0EC;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    font-size: 16px;
}

.pagination__btn:hover {
    background-color: #F4F0EC;
}

.active {
    background-color: #F4F0EC;
}

</style>