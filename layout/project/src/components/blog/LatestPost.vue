<template>
    <section class="latest-post center">
        <h2 class="latest-post__title">Latest Post</h2>
        <div class="post">
            <div class="post__content" v-if="getLastPost">
                <h3 class="post__title">{{ getLastPost.title }}</h3>
                <div v-html="getLastPost.text" class="post__text"></div>
                <DateBlock :article="getLastPost" class="post__date"/>  
            </div>
        </div>
    </section>
</template>
<script>
import DateBlock from '@/components/DateBlock.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'LatestPost',
  components: {
    DateBlock
  },
  computed: {
    ...mapGetters(['getLastPost'])
  },
};
</script>

<style>
.latest-post {
    margin-top: 200px;
}

.latest-post__title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
}

.post {
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 22px;
    margin-top: 27px;
    align-items: center;
}

.post__content {
    padding: 22px;
    position: relative;
}
.post__date{
    position: absolute;
    width: 489px;
    right: 7px;
    bottom: 74px;

}

.post__date:hover .date-bloсk_btn {
    background-color: #fff;
}

.post__title {
    margin-top: 22px;
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
    position: absolute;
    width: 520px;
    right: -20px;
}

.post__text {
    display: flex;
    gap: 65px;
    align-items: center;
}
.post__content .blog-articles__date{
    display: none;
}
.post__content .blog-articles__img-1{
    width: 569px;
}
.post__content .blog-articles__text p{
    padding-bottom: 40px;
}
</style>