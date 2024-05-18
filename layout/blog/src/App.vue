<template>
  <div id="app">
    <HeaderComp/>
    <BannerComp/>
    <LatestPost/>
    <aside class="articles center">
        <h2 class="articles__title">Articles & News</h2>
        <div class="blog__cards">
            <ArticlesNews :article="article" v-for="article in articles" :key="article.id"/>
        </div>
        <PaginationComp/>
    </aside>
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import BannerComp from './components/BannerComp.vue'
import LatestPost from './components/LatestPost.vue'
import ArticlesNews from './components/ArticlesNews.vue'
import PaginationComp from './components/PaginationComp.vue'


export default {
  name: 'App',
  components: {
    HeaderComp,
    BannerComp,
    LatestPost,
    ArticlesNews,
    PaginationComp,
    FooterComp
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

.breadcrumbs:not(:last-child)::after {
    content: "/";
    padding-left: 8px;
    padding-right: 4px;
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
