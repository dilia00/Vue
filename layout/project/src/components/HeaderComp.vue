<template>
  <header class="header center">
    <div class="header__left">
        <router-link to="/" class="header__logo"><img src="@/assets/img/logo.svg" alt="logo image"></router-link>
    </div>
    <nav class="header__right">
        <router-link to="/" class="header__link">Home</router-link>
        <router-link to="/project" class="header__link">Project</router-link>
        <router-link to="/blog" class="header__link">Blog</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',

};
</script>

<style  scoped>
.header {
    margin-top: 53px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__logo img {
    padding-right: 8px;
}

.header__link {
    margin-left: 30px;
}
</style>