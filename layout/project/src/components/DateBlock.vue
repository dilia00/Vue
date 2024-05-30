<template>
  <div class="date-bloсk">
    <p class="date-bloсk_txt">{{article.date}}</p>
    <router-link class="date-bloсk_btn" :to="`/blog-details/${article.id}`">
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.7715 14.9529L7.71435 8.26717L1.7715 1.58145" stroke="#292F36"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'DateBlock',
  props: {
    article: {
      type: Object,
      default: () => {
          return {};
      },
    },
  },
};
</script>

<style scoped>
.date-bloсk {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-bloсk_btn {
  background-color: #F4F0EC;
  border: 1px solid #F4F0EC;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  text-align: center;
  padding: 8px;
}
.blog__card:hover .date-bloсk_btn {
  background-color: #fff;
}
.post__date:hover .date-bloсk_btn {
  background-color: #CDA274;
}
</style>