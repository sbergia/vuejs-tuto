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
    },
    beforeRouteEnter(to, from, next) {
      console.log('>>> (Hello.beforeRouteEnter) Render the component Hello.vue')
      next(vm => {
        console.log('>>> (Hello.beforeRouteEnter) Manage callback')
      })
    },
    beforeRouteUpdate(to, from, next) {
      console.log('>>> (Hello.beforeRouteUpdate) The route parameters have been updated. Now id = '+this.id)
      this.lastname = to.query.lastname
      this.firstname = to.query.firstname
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log('>>> (Hello.beforeRouteLeave) Leaving the route '+from.path)
      next()
    }
  }

</script>
