<template>
  <div id="citizens">
    <table>
      <tr v-for="citizen in citizens" @click="selectCitizen(citizen)">
        <td>{{citizen.firstname}}</td>
        <td>{{citizen.lastname}}</td>
      </tr>
    </table>
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
        selectCitizen(citizen){
          this.$emit('selected', citizen)
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
  #citizens {
    display:inline-block;
  }
  table{
    margin: 0 auto;
  }
</style>
