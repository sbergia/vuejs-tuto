<template>
  <div id="citizen">
    <table>
      <tr><td><label>ID : </label>{{citizen.id}}</td></tr>
      <tr><td><label>Firstname : </label>{{citizen.firstname}}</td></tr>
      <tr><td><label>Lastname : </label>{{citizen.lastname}}</td></tr>
      <tr><td><label>Age : </label>{{citizen.age}}</td></tr>
    </table>
  </div>
</template>


<script>
  export default{
    props: ['citizen']
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
