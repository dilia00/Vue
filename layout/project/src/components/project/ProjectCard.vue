<template>
  <div class="project__card">
    <div class="project__card_box" @click="setStarCard(card.id)">
      <img 
      :class="card.class"
      :src="require('@/assets/img/' + card.img[0])" 
      :alt="card.alt"
      >
      <div class="star" v-if="card.isLiked"></div>
    </div>
    <ProjectCardDescription :card="card"/>
  </div>
</template>
<script>
import ProjectCardDescription from '@/components/project/ProjectCardDescription.vue'
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'ProjectCard',
  components: {
    ProjectCardDescription,
  },
  props: {
    card: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapMutations(['SET_STAR']),
    ...mapActions(['setStar']),
    setStarCard(id) {
      this.SET_STAR(id)
    },
  },
};
</script>

<style scoped>
.project__card-img{
  width: 100%;
  object-fit: cover;
  object-position: center; 
}
.project__card_box{
  position: relative;
}
.star{
  width: 36px;
  height: 34px;
  margin-top: 3px;
  background-image: url(@/assets/img/star.svg);
  position: absolute;
  right: 0;
  top: 0;
}


</style>