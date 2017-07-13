<template>
  <div id="app">
    <!-- Uncomment for chapter 1 -->
    <!--img src="./assets/logo.png">
    <hello></hello-->
    <!-- End uncomment for chapter 1-->

    <!-- Uncomment for chapter 2 -->
    <!--hello></hello-->
    <!-- END uncomment for chapter 2-->

    <!-- Uncomment for chapter 3 -->
    <!--hello firstname="Marge" lastname="Simpson" from="New York" img="/static/marge.png"></hello-->
    <!-- END uncomment for chapter 2-->

    <!-- Uncomment for chapter 4.1 -->
    <!--hello></hello>
    <hello></hello-->
    <!-- END uncomment for chapter 4.1-->

    <!-- Uncomment for chapter 4.2 -->
    <!--citizens firstname="Maggie" lastname="Simpson" age="1"></citizens-->
    <!-- END uncomment for chapter 4.2-->

    <!-- Uncomment for chapter 5.1 -->
    <!--citizens firstname="Maggie" lastname="Simpson" age="1"></citizens-->
    <!-- END uncomment for chapter 5.1-->

    <!-- Uncomment for chapter 6, 7, 8 -->
    <!--citizens></citizens-->
    <!-- END uncomment for chapter 6, 7, 8 -->

    <!-- Uncomment for chapter 9 -->
    <div class="container">
      <div>
        <app-menu></app-menu>
      </div>
      <div class="componentItem">
        <router-view></router-view>
      </div>
    </div>
    <!-- END uncomment for chapter 9 -->

  </div>
</template>

<script>

  //-----------------------
  //Required for chapter 1
  //import hello from './components/chap1/Hello.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 2
  //import hello from './components/chap2/Hello.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 3
  //import hello from './components/chap3/Hello.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 4.1
  //import hello from './components/chap4.1/Hello.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 4.2
  //import citizens from './components/chap4.2/Citizens.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 5.1
  //import citizens from './components/chap5.1/Citizens.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 6
  //import citizens from './pages/chap6/CitizenPage.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 7
  //import citizens from './pages/chap7/CitizenPage.vue'
  //-----------------------

  //-----------------------
  //Required for chapter 8
  //import citizens from './pages/chap8/CitizenPage.vue'
  //-----------------------

  //-----------------------
  // Required for chapter 9
  import appMenu from './components/chap9/Menu.vue'
  //-----------------------

  export default {
    name: 'app',
    components: {
      //hello, //chap1, chap2, chap3, chap4.1
      //citizens, //chap4.2, chap5.1, chap6, chap7, chap8
      appMenu //chap9
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

