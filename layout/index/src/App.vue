<template>
  <div id="app">
    <HeaderComp/>
    <BannerHome/>
    <ProjectHome/>
    <CounterComp/>
    <BlogHome/>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import BannerHome from './components/BannerHome.vue'
import ProjectHome from './components/ProjectHome.vue'
import CounterComp from './components/CounterComp.vue'
import BlogHome from './components/BlogHome.vue'

import FooterComp from './components/FooterComp.vue'



export default {
  name: 'App',
  components: {
    HeaderComp,
    BannerHome,
    ProjectHome,
    CounterComp,
    BlogHome,
    FooterComp
  }
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



.header {
    margin-top: 53px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo img {
    padding-right: 8px;
}

.header__link {
    margin-left: 30px;
}

.articles {
    margin-top: 150px;
}

.articles__title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 30px;
}

.blog__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}



.footer {
    margin-top: 96px;
    margin-bottom: 134px;
    display: flex;
    justify-content: space-between;
}

.footer__item {
    width: 400px;
}

.footer__interno-text {
    margin-top: 10px;
    margin-bottom: 31px;
}

.social__link {
    margin-right: 54px;
}

.social__link:hover path {
    fill: #CDA274;
}

.footer__pages-title, .footer__contact-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
}

.footer__pages {
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-left: 126px;
}

.footer__contact {
    display: flex;
    flex-direction: column;
    gap: 26px;
    width: 250px;
}
</style>
