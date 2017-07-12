<template>
  <div id="app">
    <!--
    hello firstname="Marge" lastname="Simpson" from="New York" img="/static/marge.png"></hello-->
    <!--img src="./assets/logo.png"-->
    <!--hello></hello-->

    <div class="container">
      <div>
        <app-menu></app-menu>
      </div>
      <div class="componentItem">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>

  import appMenu from './components/chap9/Menu.vue'

  export default {
    name: 'app',
    components: {
      appMenu
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

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.componentItem{
  flex-grow: 1;

}
</style>

