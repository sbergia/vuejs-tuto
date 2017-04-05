<template>
  <div>
    <img src="../../assets/simpsons.png">
    <table>
      <tr v-for="citizen in citizens">
        <td>{{citizen.firstname}}</td>
        <td>{{citizen.lastname}}</td>
      </tr>
    </table>
    <button @click="addCitizen">Add</button>
    <label>#citizens {{counter}}</label>
  </div>
</template>


<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default{
    data () {
      return {
        citizens: []
      }
    },
    http: {
      root: 'http://localhost:3000'
    },
    methods: {
      addCitizen(){
        this.citizens.push({"firstname":"Lisa", "lastname":"Simpson", "age":"10"})
      }
    },
    computed:{
        counter(){
          return this.citizens.length
        }
    },
    mounted() {
      this.$resource('citizens').get().then((response) => {
          this.citizens = response.data
        }, (response) => {
          console.log('erreur', response);
        }
      )
    }
  }
</script>

<style>
  div {
    float: left;
    clear: none;
  }
</style>
