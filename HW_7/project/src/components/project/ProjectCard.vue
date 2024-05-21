<template>
    <div class="project__card">
        <div>
            <img 
            :class="card.class"
            :src="require('../assets/img/' + card.img[0])" 
            :alt="card.alt"
            >
        </div>
        <ProjectCardDescription :card="card"/>
    </div>
</template>

<script>
import ProjectCardDescription from './ProjectCardDescription.vue'

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

};
</script>

<style scoped>
.project__card-img{
  width: 100%;
  object-fit: cover;
  object-position: center; 
}

.project__card-img_1{
  border-radius: 0px 80px 0px 0px;
}
.project__card-img_2{
  border-radius:80px 0px 0px  0px;
}
.project__card-img_3{
  border-radius: 0px 0px 80px 0px;
}
.project__card-img_4{
  border-radius: 0px 0px 0px 80px;
}
</style>