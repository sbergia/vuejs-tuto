<template>
  <div id="citizen">
    <table>
      <tr><td><label>ID : </label>{{citizen.id}}</td></tr>
      <tr><td><label>Firstname : </label>{{citizen.firstname}}</td></tr>
      <tr><td><label>Lastname : </label>{{citizen.lastname}}</td></tr>
      <tr><td><label>Age : </label>{{citizen.age}}</td></tr>
      <tr><td><label>Birthdate : </label>{{citizen.birthdate}}</td></tr>
      <tr><td><label>Mail address : </label>{{citizen.mail}}</td></tr>
      <tr><td><label>Phone number : </label>{{citizen.phone}}</td></tr>
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
        citizen: {}
      }
    },
    http: {
      root: 'http://localhost:3000'
    },
    created(){
      bus.$on('selectedCitizen', (selectedCitizen) =>  {
        /*arrow function (selectedCitizen) =>
            plutot que function(selectedCitizen) : permet d'accéder au contexte et donc d'accéder à this */
        this.$resource('citizens{/id}/details').get({id:selectedCitizen}).then((response) => {
            this.citizen = response.data[0]
          }, (response) => {
            console.log('erreur', response)
          }
        )
      })
    }
  }
</script>

<style>
  #citizen {
    display:inline-block;
    width: 50%;
  }
  table{
    margin: 0 auto;
  }
</style>
