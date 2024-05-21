<template>
    <section class="project__content center">
        <CategoriesComp/>
        <div class="project__box">
            <ProjectCard v-for="card in filteredProjects" 
                :key="card.id" 
                :card="card"/>
        </div>
        <PaginationComp/>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import PaginationComp from './PaginationComp.vue'
import CategoriesComp from './CategoriesComp.vue'
import {  mapState, mapMutations, mapActions, mapGetters} from 'vuex';

export default {
  name: 'ProjectComp',
  components: {
    ProjectCard,
    CategoriesComp,
    PaginationComp
  },

  methods: {
    ...mapMutations(['SET_FILTERED_PROJECTS']),
    ...mapActions(['setProjectCards']),
},

  computed: {
    ...mapState(['projectCards', 'activeIndex']),
    ...mapGetters(['getProjectCards', 'getCategories', ]),

    filteredProjects(){
        return this.getProjectCards.filter(project => project.category.includes(this.getCategories[this.activeIndex]))
    }
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
    gap: 20px;
    height: 3230px;
}

</style>