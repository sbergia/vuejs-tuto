<template>
  <div>
    <img src="../../assets/homer.png">
    <h1>Hello {{person.firstname}} {{person.lastname}} from {{from}} !!!!</h1>
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
