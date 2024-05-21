<template>
    <div >
      <div class="banner-articles"></div>
      <main class="blog-articles center" >
          <div class="blog-articles__content">
              <CompArticle v-for="article in filteredArticle" :articles="article" :key="article.id"></CompArticle>
          </div>
          <div class="tags">
              <h2 class="tags__title">Tags</h2>
              <div class="tags__btn-box">
                  <TagsComp v-for="(tag, index) in tags" :tag_active="activeIndex === index" :tags="tag" :key="tag.id"
                      @click="onClickTag(index)"></TagsComp>
              </div>
          </div>
      </main>      
    </div>
  </template>
  
  <script>
  
  import CompArticle from './components/CompArticle.vue'
  import TagsComp from './components/TagsComp.vue'
  
  export default {
    name: 'ArticlesPage',
    components: {
      HeaderComp,
      CompArticle,
      TagsComp,
      FooterComp
    },
    data() {
      return {
          activeIndex: 0,
          articles: [
                  {
                  id: 1,
                  tag: 'Kitchen',
                  title: 'Let’s Get Solution for Building Construction Work',
                  subtitle: 'Design sprints are great',
                  date: '26 December,2022 ',
                  imageUrl_1: 'article_1.png',
                  imageUrl_2: 'article_2.png',
                  alt: 'image'
                  },
                  {
                  id: 2,
                  tag: 'Bedroom',
                  title: 'Let’s Get Solution for Building Construction Work',
                  subtitle: 'Design sprints are great',
                  date: '26 December,2022 ',
                  imageUrl_1: 'bedroom_1.jpg',
                  imageUrl_2: 'bedroom_2.jpg',
                  alt: 'image'
                  },
                  {
                  id: 3,
                  tag: 'Building',
                  title: 'Let’s Get Solution for Building Construction Work',
                  subtitle: 'Design sprints are great',
                  date: '26 December,2022 ',
                  imageUrl_1: 'building_1.jpg',
                  imageUrl_2: 'building_2.jpg',
                  alt: 'image'
                  },
                  {
                  id: 4,
                  tag: 'Architecture',
                  title: 'Let’s Get Solution for Building Construction Work',
                  subtitle: 'Design sprints are great',
                  date: '26 December,2022 ',
                  imageUrl_1: 'architecture_1.jpg',
                  imageUrl_2: 'architecture_2.jpg',
                  alt: 'image'
                  },
                  {
                  id: 5,
                  tag: 'Kitchen Planning',
                  title: 'Let’s Get Solution for Building Construction Work',
                  subtitle: 'Design sprints are great',
                  date: '26 December,2022 ',
                  imageUrl_1: 'kitchen-planning_1.jpg',
                  imageUrl_2: 'kitchen-planning_2.jpg',
                  alt: 'image'
                  }
              ],
          tags: [
              { title: 'Kitchen' },
              { title: 'Bedroom' },
              { title: 'Building' },
              { title: 'Architecture' },
              { title: 'Kitchen Planning' },
              { title: 'Bedroom' }
          ]
      }
    },
    methods: {
      onClickTag(index) {
          if (this.activeIndex === index) {
              this.activeIndex = 0;
          } else {
              this.activeIndex = index;
          }
      }
    },
    computed: {
      filteredArticle() {
          return this.articles.filter(article => article.tag.includes(this.tags[this.activeIndex].title));
      }
    } 
  }    
  
  
  </script>
  
  <style>
  
  .banner-articles {
      margin-top: 45px;
      background-image: url(./assets/img/banner-article.jpg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      min-height: 351px;
  }
  
  .blog-articles {
      display: flex;
      margin-top: 200px;
      gap: 57px;
  }
  .blog-articles__content {
      max-width: 799px;
  }
  
  .tags__title {
      margin-bottom: 24px;
      font-family: "DM Serif Display", serif;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      text-align: left;
      color: #292F36;
  }
  
  .tags__btn-box {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
      align-content: flex-start;
  }

  </style>
  