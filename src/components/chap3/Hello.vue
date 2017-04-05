<template>
  <div>
    <img :src="img">
    <h1>Hello {{firstname}} {{lastname}} from {{from}} !!!!</h1>
  </div>
</template>


<script>
  export default{
    data () {
      return {
        from: 'Springfield'
      }
    },
    props: ['firstname', 'lastname', 'from', 'img'], //attributs de l'élément HTML
  }
</script>
