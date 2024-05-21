<template>
    <div >
      <HeaderComp/>
      <BannerComp/>
      <ProjectComp/>
      <FooterComp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from './components/HeaderComp.vue'
  import FooterComp from './components/FooterComp.vue'
  import BannerComp from './components/project/BannerComp.vue'
  import ProjectComp from './components/project/ProjectComp.vue'
  
  
  export default {
    name: 'ProdgectPage',
    components: {
      HeaderComp,
      FooterComp,
      BannerComp,
      ProjectComp
    }
  }
  </script>
  
  <style>
 
  </style>