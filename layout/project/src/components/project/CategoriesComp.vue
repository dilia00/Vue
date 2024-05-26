<template>
  <div class="categories">
    <CategoriesActive v-for="(item, index) in getCategories" 
        :categories_active="activeIndex === index" 
        :title="item" 
        :key="item.id"
        @foo="onClick(index)"></CategoriesActive>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import CategoriesActive from './CategoriesActive.vue'

export default {
  name: 'CategoriesComp',
  components: {
    CategoriesActive,
  },
  computed: {
    ...mapState(['activeIndex','categories' ]),
    ...mapGetters(["getCategories"])
  },

  methods: {
    ...mapMutations(['SET_CATEGORIES', 'ON_CLICK']),
    ...mapActions(['setCategories']),
    onClick(index) {
      this.ON_CLICK(index);
    }
  },
  created() {
    this.SET_CATEGORIES(this.setCategories())
  },
};
</script>

<style scoped>
.categories{
    margin: 200px auto 61px;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 18px;
    max-width: 880px;
    display: flex;
    justify-content: space-between;
}


</style>