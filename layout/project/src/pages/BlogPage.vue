<template>
  <div >
    <BannerComp :dataBanner="dataBlog"/>
    <LatestPost/>
    <div class="articles center">
      <h2 class="articles__title">{{ dataBlog.heder }}</h2>
      <div class="blog__cards">
          <ArticlesNews :article="article" v-for="article in paginatedCatalog" :key="article.id"/>
      </div>
      <PaginationComp 
        :pages="totalPages"
        :path="path"
        :currentPage="currentPage.toString()"
        />
    </div>
  </div>
</template>
<script>
import BannerComp from '@/components/BannerComp.vue'
import LatestPost from '@/components/blog/LatestPost.vue'
import ArticlesNews from '@/components/blog/ArticlesNews.vue'
import PaginationComp from '@/components/PaginationComp.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';  
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
      path: 'blog',
      perPage: 6,
      dataBlog:{
        heder: 'Articles & News',
        nav: [
          {
              title: 'Home',
              path: '/'
          }, 
          {
              title: 'Blog',
              path: '/blog/:page?'
          }, 
        ]
      },
      
    };
  },
  methods: {
    ...mapMutations(['SET_ARTICLES']),
  },
  computed: {
    ...mapState(['articles']),
    ...mapActions(['setArticles']),
    ...mapGetters(['getArticlesPages', 'getArticles']),
    currentPage() {
      return this.$route.params.page || 1;
    },
    totalPages() {
      return this.getArticlesPages(this.perPage);
    },
    paginatedCatalog() {
      const { currentPage, perPage } = this;
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      return Array.from(this.getArticles).slice(startIndex, endIndex);
    },
  },
  created() {
    this.SET_ARTICLES(this.setArticles);
  },
}
</script>

<style>
.banner {
  margin-top: 45px;
  background-image: url(@/assets/img/banner_blog.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 356px;
  position: relative;
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
  gap: 22px;
  justify-content: start;
}
</style>
