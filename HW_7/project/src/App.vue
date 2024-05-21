<template>
  <div id="app">
    <HeaderComp/>
    <div >
      <div class="banner_project-details"></div>
      <div class="project-details center"  v-if="getProjectCardById(id)">
        <h2 class="project-details__title">
            {{ getProjectCardById(id).title }}
        </h2>
        <div class="project-details__text" v-html="getProjectCardById(id).text"></div>
        <div class="project-details__slider">
          <VueSlickCarousel :arrows="false" :dots="true">
              <div v-for="(pic, index) in getProjectCardById(id).img"
                :key="index">
                  <img 
                    class="project-details__img"
                    :src="require('./assets/img/' + pic)" 
                    :alt="getProjectCardById(id).alt" />
              </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div v-else class="project-details__title">
          <h1 >the project {{ id  }} has not found</h1>
      </div>      
    </div>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';


export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    VueSlickCarousel
  },
  data() {
    return {
        id: 1,
    };
  },
  methods: {
        ...mapMutations(['SET_CARDS']),
    },
    computed: {
        ...mapState(['projectCards']),
        ...mapActions(['setProjectCards']),
        ...mapGetters(['getProjectCardById']),
    },
    created() {
        this.SET_CARDS(this.setProjectCards);
        // this.id = this.$route.params.id;
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #4D5053;
}

a:hover {
    color: #CDA274;
}

body {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    font-style: normal;
    color: #4D5053;
}

button {
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    text-align: center;
}

.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}


.banner_project-details {
  margin-top: 45px;
  margin-bottom: 200px;
  background-image: url(./assets/img/banner_project-details.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 351px;
  }
.project-details__title{
  color: rgb(41, 47, 54);
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 11px;
}
.project-details__text p{
  padding-bottom: 30px;
  width: 660px;
  margin: 0 auto;
} 
.project-details__slider{
  margin-top: 70px;
  padding-bottom: 100px;
}
.project-details__img{
  margin: 0 auto;
  border-radius: 70px;
  width: 1200px;
  height: 799px;
  object-fit: cover;
  object-position: center;
}
.slick-dots li button:before{
  font-size: 16px;
}
</style>
