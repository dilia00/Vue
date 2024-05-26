<template>
    <section class="project center">
        <div class="project__heading">
            <h2 class="project__title">Follow Our Projects</h2>
            <p class="project__text">It is a long established fact that a reader will be distracted by the of
                readable content of page lookings at its layouts points.
            </p>
        </div>
        <div class="project__cards_home">
            <ProjectCard v-for="card in getProjectCardsForHomePage"  
                :key="card.id" 
                :card="card"
                />
        </div>
    </section>
</template>

<script>
import ProjectCard from '@/components/project/ProjectCard.vue'
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  name: 'ProjectHome',
  components: {
    ProjectCard
  },
  methods: {
    ...mapMutations(['SET_CARDS']),
    ...mapActions(['setProjectCards']),
  },
  computed: {
    ...mapGetters(['getProjectCards']),
    getProjectCardsForHomePage(){
        let randomId = Math.floor(Math.random() * (this.getProjectCards.length-4))
        return Array.from(this.getProjectCards).slice(randomId, randomId + 4)
    },

  },
  created() {
    this.SET_CARDS(this.setProjectCards())
  },
};
</script>

<style >
.project {
    margin-top: 96px;
}

.project__heading {
    text-align: center;
}

.project__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
}

.project__text {
    margin: 8px auto 93px;
    width: 737px;
    align-items: center;
}

.project__cards_home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 56px;
}
.project__cards_home .project__card_box{
    width: 525px;
    height: 548px;
}
.project__cards_home .project__card-img{
    height: 548px;
    object-fit: cover;
    object-position: center;
}
.project__cards_home .project__card:nth-child(1) .project__card-img{
  border-radius: 0px 80px 0px 0px;
}
.project__cards_home .project__card:nth-child(2) .project__card-img{
  border-radius: 80px 0px 0px  0px;
}
.project__cards_home .project__card:nth-child(3) .project__card-img{
  border-radius: 0px 0px 80px 0px;
}
.project__cards_home .project__card:nth-child(4) .project__card-img{
  border-radius: 0px 0px 0px 80px;
}

</style>