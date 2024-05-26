<template>
  <div >
    <BannerComp :dataBanner="dataProject"/>
    <ProjectComp/>
  </div>
</template>

<script>
import BannerComp from '@/components/BannerComp.vue'
import ProjectComp from '@/components/project/ProjectComp.vue'
  
export default {
  name: 'ProdgectPage',
  components: {
    BannerComp,
    ProjectComp
  },
  data() {
    return {
      dataProject:{
        heder: 'Our Project',
        nav: [
          {
              title: 'Home',
              path: '/'
          }, 
          {
              title: 'Project',
              path: '/project/:page?'
          }, 
        ]
      }    
    };
  },
}
</script>

<style>

</style>