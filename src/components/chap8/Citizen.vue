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
    <button @click="doUpdate('toto')">Do update</button>
  </div>
</template>


<script>
  import Vue from 'vue'
  import VueX from 'vuex'

  export default{
    computed: {
      ...VueX.mapGetters({citizen: 'selectedCitizen'}),
    },
    methods: {
      doUpdate(firstname){
        this.$store.state.citizen.firstname = firstname
      }
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
