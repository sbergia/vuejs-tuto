<template>
  <div id="page">
    <div id="head">
      <img src="../../assets/simpsons.png">
    </div>
    <div id="content">
      <citizens></citizens>
      <citizen></citizen>
    </div>
  </div>
</template>

<script>

  import citizens from '../../components/chap8/Citizens.vue'
  import citizen from '../../components/chap8/Citizen.vue'

  export default {
    components: {citizens, citizen},
  }

</script>
