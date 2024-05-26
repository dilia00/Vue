<template>
    <div >
      <div class="banner-articles"></div>
      <main class="blog-articles center" >
          <div v-if="!id" class="blog-articles__content">
            <CompArticle v-for="article in filteredArticle" 
              :articles="article" 
              :key="article.id">
            </CompArticle>
          </div>
          <div v-else class="blog-articles__content" >
            <div v-if="getArticleById(id)">
                <CompArticle :articles="getArticleById(id)"/>
            </div>
            <div v-else>
                <h1>the post {{ id }} has not found</h1>
            </div>
          </div>
          <div class="tags">
            <h2 class="tags__title">Tags</h2>
            <div class="tags__btn-box">
                <TagsComp v-for="(tag, index) in getActualTags" 
                  :tag_active="activeTag === index" 
                  :tag="tag" :key="tag.id"
                  @click="onClickTag(index)">
                </TagsComp>
            </div>
          </div>
      </main>      
    </div>
  </template>
  
  <script>
  import CompArticle from '@/components/articles/CompArticle.vue'
  import TagsComp from '@/components/articles/TagsComp.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
  
  export default {
    name: 'ArticlesPage',
    components: {
      CompArticle,
      TagsComp,
    },
    data() {
      return {
        id: null,
        activeTag: null,
      }
    },
    methods: {
      ...mapMutations(['SET_ARTICLES']),
      onClickTag(index) {
        if (this.activeTag === index) {
          this.activeTag = null;
          this.id = this.$route.params.id;
        } else {
          this.id = null;
          this.activeTag = index;
        }
      }
    },
    computed: {
      ...mapState(['articles']),
      ...mapActions(['setArticles']),
      ...mapGetters(['getArticleById']),
      getActualTags(){
        const allTags = [];
        Array.from(this.articles).forEach(article => {
            if (!allTags.includes(article.tag)) {
                allTags.push(article.tag);
            }
        })
        return allTags;
      },
      filteredArticle() {
          return Array.from(this.articles).filter(article => article.tag.includes(this.getActualTags[this.activeTag]));
      }
    },
    created() {
        this.SET_ARTICLES(this.setArticles);
        this.id = this.$route.params.id;
    },
  }    
  
  
  </script>
  
  <style>
  
  .banner-articles {
      margin-top: 45px;
      background-image: url(@/assets/img/banner-article.jpg);
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
  