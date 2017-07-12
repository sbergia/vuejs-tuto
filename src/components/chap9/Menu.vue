<template>
  <div id="menu">
    <ul>
      <li><router-link :to="'/vuejs-tuto/chap1'">Chap1</router-link></li>
      <li><router-link :to="'/vuejs-tuto/chap2'">Chap2</router-link></li>
      <!--li>
        <router-link :to="'/vuejs-tuto/chap9/123123123?firstname=Maggie&lastname=Simpson'">Chap9</router-link>
      </li-->
      <li><router-link :to="{ name: 'pagechap9', params: {id: 123123123}, query: {firstname: 'Maggie', lastname: 'Simpson'}}">Chap9</router-link></li>
      <li><router-link :to="{ name: 'pagechap9', params: {id: 555555555}, query: {firstname: 'Montgomery', lastname: 'Burnes'}}">Chap9 bis</router-link></li>

    </ul>
  </div>
</template>

<script>



</script>
