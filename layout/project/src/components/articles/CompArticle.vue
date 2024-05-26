<template>
  <div class="blog-article"> 
    <h2 class="blog-articles__title">{{articles.title}}</h2>
    <div v-html="articles.text" ></div>
  </div> 
</template>

<script>
export default {
  name: 'CompArticle',
  props: {
    articles: { type: Object},
  },
 };
</script>

<style>
  .blog-article {
      margin-bottom: 60px;
  }

  .blog-articles__title, .blog-articles__subtitle {
      color: rgb(41, 47, 54);
      font-family: "DM Serif Display", serif;
      font-size: 50px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      text-align: left;
      margin-bottom: 21px;
  }

  .blog-articles__img-1 {
      width: 799px;
      object-fit: cover;
      border-radius: 50px;
  }

  .blog-articles__date {
      display: flex;
      justify-content: space-between;
      margin-top: 46px;
      margin-bottom: 48px;
      padding-right: 68px;
  }

  .blog-articles__text:not(:last-child) {
      padding-bottom: 32px;
  }

  .quotes {
      padding: 53px calc(50% - 200px);
      border-radius: 50px;
      background: #F4F0EC;
      text-align: center;
      color: rgb(205, 162, 116);
      font-family: "DM Serif Display", serif;
      font-size: 25px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      margin-bottom: 28px;
  }

  .blog-articles__ol {
      list-style-type: none;
      counter-reset: num;
  }

  .blog-articles__list {
      position: relative;
      margin-left: 20px;
      padding-bottom: 32px;
  }

  .blog-articles__list:before {
      content: counter(num);
      counter-increment: num;
      display: inline-block;
      position: absolute;
      top: 6px;
      left: -20px;
      color: #CDA274;
      font-family: "DM Serif Display", serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      text-align: left;
  }

  .blog-articles__img-2 {
      margin-top: 12px;
      margin-bottom: 35px;
      width: 799px;
      object-fit: cover;
      border-radius: 50px;
  }
</style>