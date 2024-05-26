<template>
  <section class="banner-home center">
        <h1 class="banner-home__title">Let Your Home Be Unique</h1>
        <p class="banner-home__text">There are many variations of the passages of lorem Ipsum fromavailable,
            majority.
        </p>
        <router-link to="/project"  class="banner-home__btn">Get Started
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                    stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
        </router-link>
    </section>
</template>

<script>

export default {
  name: 'BannerHome',
};
</script>

<style scoped>
.banner-home {
    height: 758px;
    margin-top: 57px;
    background: url(@/assets/img/top.png) no-repeat;
    background-position: center;
}

.banner-home__title {
    font-family: "DM Serif Display", serif;
    color: #292F36;
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    padding-left: 52px;
    padding-top: 208px;
    max-width: 480px;

}

.banner-home__text {
    margin-top: 18px;
    padding-left: 52px;
    max-width: 480px;
    margin-bottom: 41px;
}

.banner-home__btn {
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    padding: 26px 49px 26px 48px;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    margin-left: 52px;
    border: 1px solid rgb(41, 47, 54);
}

.banner-home__btn svg {
    margin-left: 10px;

}

.banner-home__btn path {
    transition: all 0.3s;
}

.banner-home__btn:hover {
    background-color: #CDA274;
    border: 1px solid #CDA274;
}

.banner-home__btn:hover path {
    stroke: #292F36;
}
</style>