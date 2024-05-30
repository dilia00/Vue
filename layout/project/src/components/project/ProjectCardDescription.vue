<template>
  <div class="project__card-description">
    <div>
      <h3 class="project__card-title">{{ card.title }}</h3>
      <NavComp :items="card.nav"/>
    </div>
    <router-link 
      class="project__card-btn"
      :to="`/project-details/${card.id}`">
      <svg class="project__card-svg" width="10" height="20" viewBox="0 0 10 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </router-link>
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue'
export default {
  name: 'ProjectCardDescription',
  components: {
    NavComp
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

<style >
.project__card-description{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.project__card-title {
    margin-bottom: 4px;
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
}

.project__card-btn {
    background: #F4F0EC;
    border: 1px solid #F4F0EC;
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.project__card-svg{
  margin: 23px 30px;
}

.project__card-btn:hover {
    background-color: #CDA274;
}
</style>