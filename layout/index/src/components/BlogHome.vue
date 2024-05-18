<template>
    <aside class="blog center">
        <div class="blog__heading">
            <h2 class="blog__title">Articles & News</h2>
            <p class="blog__text">It is a long established fact that a reader will be distracted by the of readable
                content of a page when lookings at its layouts the points of using.
            </p>
        </div>
        <div class="blog__cards">
            <ArticlesNews :article="article" v-for="article in articles" :key="article.id"/>
        </div>
    </aside>
</template>

<script>
import ArticlesNews from './ArticlesNews.vue';
export default {
  name: 'BlogHome',
  components: {
    ArticlesNews,
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
    ]
    };
  },

  mounted() {
    
  },

  methods: {
    
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