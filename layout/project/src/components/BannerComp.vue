<template>
    <div class="banner">
        <div class="banner__intro">
            <h2 class="banner__intro-title">{{ dataBanner.heder }}</h2>
            <NavComp :items="dataBanner.nav"/>
        </div>
    </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';

export default {
  name: 'BannerComp',
  components: {
    NavComp
  },
  props: {
    dataBanner:{
        type: Object,
        default() {
            return {};
        },
    }
  },
};
</script>

<style scoped>
.banner {
    margin-top: 45px;
    background-image: url(@/assets/img/banner_blog.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 356px;
    position: relative;
}

.banner__intro {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    padding: 41px 78px;
}

.banner__intro-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
}

.nav {
    text-align: center;
}
</style>