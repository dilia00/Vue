<template>
    <div>
      <BannerHome/>
      <ProjectHome/>
      <CounterComp/>
      <BlogHome/>
    </div>
  </template>
  
  <script>

  import BannerHome from './components/home/BannerHome.vue'
  import ProjectHome from './components/home/ProjectHome.vue'
  import CounterComp from './components/home/CounterComp.vue'
  import BlogHome from './components/home/BlogHome.vue'

  
  
  
  export default {
    name: 'HomePage',
    components: {
      BannerHome,
      ProjectHome,
      CounterComp,
      BlogHome,
    }
  }
  </script>
  
  <style>
  
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

  </style>