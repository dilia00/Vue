<template>
  <div class="blog-article"> 
    <h2 class="blog-articles__title">{{articles.title}}</h2>
    <img class="blog-articles__img-1" :src="require('../assets/' + articles.imageUrl_1)" :alt="articles.alt">
    <div class="blog-articles__date">
        <p>{{articles.date}}</p>
        <nav class="blog-articles__nav">
            <a href="#" class="blog-articles__link breadcrumbs">Interior</a>
            <a href="index.html" class="blog-articles__link breadcrumbs">Home</a>
            <a href="#" class="blog-articles__link breadcrumbs">Decore</a>
        </nav>
    </div>
    <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in some form, by injecthumour, or randomised words
        which don't look even slightly believable.</p>
    <p class="blog-articles__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
        the Internet tend to repeat predefined chunks as necessary.</p>
    <div class="quotes">
        <img src="@/assets/quotes.svg" alt="quotes" class="quotes__img">
        <p class="quotes__text">The details are not the details. They make the design.</p>
    </div>
    <h2 class="blog-articles__subtitle">{{articles.subtitle}}</h2>
    <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered.</p>
    <ol class="blog-articles__ol">
        <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.</li>
        <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.</li>
        <li class="blog-articles__list">Contrary to popular belief.There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered.</li>
    </ol>
    <img class="blog-articles__img-2" :src="require('../assets/' + articles.imageUrl_2)" :alt="articles.alt">
    <p class="blog-articles__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered.</p>
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

<style scoped>
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
      top: 0px;
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