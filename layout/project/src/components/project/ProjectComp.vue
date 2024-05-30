<template>
  <section class="project__content center">
    <CategoriesComp/>
    <div class="project__box">
      <ProjectCard v-for="card in paginatedCatalog" 
        :key="card.id" 
        :card="card"/>
    </div>
    <PaginationComp
      :pages="totalPages"
      :path="path"
      :currentPage="currentPage.toString()"/>
  </section>
</template>
<script>
import ProjectCard from '@/components/project/ProjectCard.vue'
import PaginationComp from '@/components/PaginationComp.vue'
import CategoriesComp from '@/components/project/CategoriesComp.vue'
import {  mapState, mapMutations, mapActions, mapGetters} from 'vuex';
export default {
  name: 'ProjectComp',
  components: {
    ProjectCard,
    CategoriesComp,
    PaginationComp
  },
  data() {
    return {
      path: 'project',
      perPage:8,
    }
  },
  methods: {
    ...mapMutations(['SET_CARDS']),
    ...mapActions(['setProjectCards']),
  },

  computed: {
    ...mapState(['projectCards', 'activeIndex']),
    ...mapGetters(['getProjectCards', 'getCategories', ]),

    filteredProjects(){
      return Array.from(this.getProjectCards)
        .filter(project => project.category.includes(this.getCategories[this.activeIndex]))
    },
    currentPage() {
      return this.$route.params.page || 1;
    },
    totalPages() {
      if (this.perPage) {
        return Math.ceil(Array.from(this.filteredProjects).length / this.perPage);
      } else {
        return 1;
      }
    },
    paginatedCatalog() {
      const { currentPage, perPage } = this;
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      return Array.from(this.filteredProjects).slice(startIndex, endIndex);
    },
  },
  created() {
    this.SET_CARDS(this.setProjectCards())
  },
 
};
</script>

<style scoped>

.project__box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  max-height: 3280px;
}
.project__card{
  width: 585px;
}

</style>