<template>
  <div id="app">
    <!--
    hello firstname="Marge" lastname="Simpson" from="New York" img="/static/marge.png"></hello-->
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
  import hello from './components/chap1/Hello.vue'

  export default {
    name: 'app',
    components: {
      hello
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

