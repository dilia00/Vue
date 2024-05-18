<template>
  <header class="header center">
    <div class="header__left">
        <a href="index.html" class="header__logo"><img src="@/assets/img/logo.svg" alt="logo image"></a>
    </div>
    <nav class="header__right">
        <a href="#" class="header__link">Home</a>
        <a href="#" class="header__link">Project</a>
        <a href="#" class="header__link">Blog</a>
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