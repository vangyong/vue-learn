<template>
  <div>
    <div>{{msg}}</div>
    <img src="../assets/header.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'This is Header!'
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
