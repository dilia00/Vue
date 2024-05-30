<template>
  <aside class="blog center">
    <div class="blog__heading">
      <h2 class="blog__title">Articles & News</h2>
      <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable
          content of a page when lookings at its layouts the points of using.
      </p>
    </div>
    <div class="blog__cards">
      <ArticlesNews :article="article" v-for="article in getLastArticles" :key="article.id"/>
    </div>
  </aside>
</template>

<script>
import ArticlesNews from '@/components/blog/ArticlesNews.vue';
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  name: 'BlogHome',
  components: {
    ArticlesNews,
  },
  methods: {
    ...mapMutations(['SET_ARTICLES']),
  },
  computed: {
    ...mapState(['articles']),
    ...mapActions(['setArticles']),
    getLastArticles(){
      return Array.from(this.articles).slice(this.articles.length - 3, this.articles.length);
    }
  },
  created() {
    this.SET_ARTICLES(this.setArticles);
  },
};
</script>

<style scoped>
.blog {
    margin-top: 96px;
}

.blog__heading {
    text-align: center;
}

.blog__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.blog__text {
    margin: 12px auto 52px;
    max-width: 800px;
    align-items: center;
}
</style>