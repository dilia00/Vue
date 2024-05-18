<template>
  <div id="app">

    <HeaderComp/>
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
    <FooterComp/>
    
  </div>
</template>

<script>

import CompArticle from './components/CompArticle.vue'
import TagsComp from './components/TagsComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'



export default {
  name: 'App',
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

.banner-articles {
    margin-top: 45px;
    background-image: url(./assets/banner-article.jpg);
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
