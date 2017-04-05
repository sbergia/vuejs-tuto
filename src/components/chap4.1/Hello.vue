<template>
  <div>
    <img src="../../assets/homer.png">
    <h1>Hello {{person.firstname}} {{person.lastname}} from {{from}} !!!!</h1>
    <label>Firstname : <input type="text" v-model="person.firstname"></label>
    <label>Lastname : <input type="text" v-model="person.lastname"></label>
    <label>From : <input type="text" v-model="from"></label>
  </div>
</template>


<script>
  export default{
    data () {
      return {
        person: {
          firstname: 'Homer',
          lastname: 'Simpson'
        },
        from: 'Springfield'
      }
    }
  }
</script>
