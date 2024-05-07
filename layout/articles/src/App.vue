<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <header class="header center">
        <div class="header__left">
            <a href="index.html" class="header__logo"><img src="./assets/logo.svg" alt="logo image"></a>
        </div>
        <nav class="header__right">
            <a href="#" class="header__link">Home</a>
            <a href="#" class="header__link">Project</a>
            <a href="#" class="header__link">Blog</a>
        </nav>
    </header>
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
    <footer class="footer center">
        <div class="footer__interno footer__item">
            <a href="#" class="header__logo"><img src="./assets/logo.svg" alt="logo image"></a>
            <p class="footer__interno-text">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__social">
                <a href="https://twitter.com/" class="social__link"><svg xmlns="http://www.w3.org/2000/svg" height="22"
                        width="18" viewBox="0 0 512 512">
                        <path
                            d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg></a>
                <a href="https://www.linkedin.com/" class="social__link">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="16" viewBox="0 0 448 512">
                        <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="footer__pages footer__item">
            <h4 class="footer__pages-title">Pages</h4>
            <a href="#" class="footer__pages-link">Home</a>
            <a href="#" class="footer__pages-link">Project</a>
            <a href="#" class="footer__pages-link">Blog</a>
        </div>
        <div class="footer__contact footer__item">
            <h4 class="footer__contact-title">Contact</h4>
            <p class="footer__contact-adres">55 East Birchwood Ave. Brooklyn,&nbsp;New York 11201</p>
            <p class="footer__contact-emale">contact@interno.com</p>
            <p class="footer__contact-phone">(123) 456 - 7890</p>
        </div>
    </footer>
  </div>
</template>

<script>

import CompArticle from './components/CompArticle.vue'
import TagsComp from './components/TagsComp.vue'

export default {
  name: 'App',
  components: {
    CompArticle,
    TagsComp
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
                imageUrl_1: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageUrl_2: 'https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'image'
                },
                {
                id: 2,
                tag: 'Bedroom',
                title: 'Let’s Get Solution for Building Construction Work',
                subtitle: 'Design sprints are great',
                date: '26 December,2022 ',
                imageUrl_1: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageUrl_2: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'image'
                },
                {
                id: 3,
                tag: 'Building',
                title: 'Let’s Get Solution for Building Construction Work',
                subtitle: 'Design sprints are great',
                date: '26 December,2022 ',
                imageUrl_1: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageUrl_2: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'image'
                },
                {
                id: 4,
                tag: 'Architecture',
                title: 'Let’s Get Solution for Building Construction Work',
                subtitle: 'Design sprints are great',
                date: '26 December,2022 ',
                imageUrl_1: 'https://images.unsplash.com/photo-1611444143036-6678f7f94652?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageUrl_2: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                alt: 'image'
                },
                {
                id: 5,
                tag: 'Kitchen Planning',
                title: 'Let’s Get Solution for Building Construction Work',
                subtitle: 'Design sprints are great',
                date: '26 December,2022 ',
                imageUrl_1: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                imageUrl_2: 'https://images.unsplash.com/photo-1598928473162-0316ade00bbe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
