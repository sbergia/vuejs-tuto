<template>
  <div>
    <!--h1>
    Hello {{firstname}} {{lastname}}, you're the citizen number {{id}} !!!!</h1-->
    <h1>Hello {{firstname}} {{lastname}}, you are citizen number {{id}} !!!!</h1>
  </div>
</template>


<script>
  export default{
    data () {
      return {
        firstname: '',
        lastname: '',
        /*
        id: ''
        */
      }
    },
    props: ['id'],
    mounted() {
      this.lastname = this.$route.query.lastname
      this.firstname = this.$route.query.firstname
      /*
      this.id = this.$route.params.id
       */
    }
  }

</script>
