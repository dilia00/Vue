<template>
    <div class="blog__card" >
        <div class="blog__card-img">
            <img :src=" require('../assets/' + article.imageUrl)" :alt="article.alt">
            <div class="blog__card-tag">{{article.tag}}</div>
        </div>
        <h3 class="blog__card-title">{{article.title}}</h3>
        <DateBlock/>
    </div>
</template>

<script>
import DateBlock from './DateBlock.vue'

export default {
  name: 'ArticlesNews',
  components: {
    DateBlock
  },
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
  },

};
</script>

<style  scoped>
.blog__card {
    padding: 21px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    font-size: 16px;
    margin-bottom: 28px;
}

.blog__card:hover {
    background-color: #F4F0EC;
}

.blog__card-img {
    position: relative;
    display: flex;
}

.blog__card-tag {
    position: absolute;
    left: 20px;
    bottom: 20px;
    border-radius: 8px 8px 8px 0px;
    background: rgb(255, 255, 255);
    padding: 4px 11px;
}

.blog__card-title {
    margin-top: 20px;
    margin-bottom: 30px;
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 31.25px;
    text-align: left;
    max-width: 300px;
    letter-spacing: 1px;
}
</style>