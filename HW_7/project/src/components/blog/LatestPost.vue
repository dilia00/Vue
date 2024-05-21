<template>
    <section class="latest-post center">
        <h2 class="latest-post__title">Latest Post</h2>
        <div class="post">
            <div class="post__img">
                <img src="@/assets/post_1.png" alt="post-1">
            </div>
            <div class="post__content">
                <h3 class="post__title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="post__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                    in.Contrary to popular belief.</p>
                <p class="post__text">
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </p>
                <DateBlock/>  
            </div>
        </div>
    </section>
</template>

<script>
import DateBlock from './DateBlock.vue'

export default {
  name: 'LatestPost',
  components: {
    DateBlock
  },

};
</script>

<style scoped>
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
    display: flex;
    margin-top: 27px;
    align-items: center;
}

.post__content {
    padding: 51px 34px 51px 65px;
}

.post__title {
    margin-bottom: 22px;
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    text-align: left;
}

.post__text {
    margin-bottom: 41px;
}
</style>