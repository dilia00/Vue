<template>
  <div id="app">
    <HeaderComp/>
    <router-view />
    <FooterComp/>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
  created () {
    this.$router.push({ name: 'home' })
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #4D5053;
}

a:hover {
  color: #CDA274;
}

body {
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  font-style: normal;
  color: #4D5053;
}

button {
  outline: none;
  transition: all 0.3s;
  cursor: pointer;
  text-align: center;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

</style>
