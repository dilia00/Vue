<template>
    <div >
      <BannerComp/>
      <LatestPost/>
      <aside class="articles center">
          <h2 class="articles__title">Articles & News</h2>
          <div class="blog__cards">
              <ArticlesNews :article="article" v-for="article in articles" :key="article.id"/>
          </div>
          <PaginationComp/>
      </aside>
    </div>
  </template>
  
  <script>
  import BannerComp from './components/BannerComp.vue'
  import LatestPost from './components/LatestPost.vue'
  import ArticlesNews from './components/ArticlesNews.vue'
  import PaginationComp from './components/PaginationComp.vue'
  
  
  export default {
    name: 'BlogPage',
    components: {
      BannerComp,
      LatestPost,
      ArticlesNews,
      PaginationComp,
    },
    data() {
      return {
        articles: [
        {
          id: 1,
          tag: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          imageUrl: 'blog_1.png',
          alt: 'image 1'
        },
        {
          id: 2,
          tag: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          imageUrl: 'blog_2.png',
          alt: 'image 2'
        },
        {
          id: 3,
          tag: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          imageUrl: 'blog_3.png',
          alt: 'image 3'
        },
        {
          id: 4,
          tag: 'Kitchan Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          imageUrl: 'blog_4.png',
          alt: 'image 4'
        },
        {
          id: 5,
          tag: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          imageUrl: 'blog_5.png',
          alt: 'image 5'
        },
        {
          id: 6,
          tag: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '25 December,2022',
          imageUrl: 'blog_6.png',
          alt: 'image 6'
        }
        ]
      };
    },
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
  