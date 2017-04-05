<template>
  <div id="app">
    <!--
    hello firstname="Marge" lastname="Simpson" from="New York" img="/static/marge.png"></hello-->
    <!--img src="./assets/logo.png"-->
    <citizens></citizens>
  </div>
</template>

<script>
  import citizens from './pages/chap7/CitizenPage.vue'

  export default {
    name: 'app',
    components: {
      citizens
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
