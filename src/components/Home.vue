<template>
  <div>
    <Header></Header>
    <h1>{{ msg }}</h1>
   <!-- <Body/>-->
  </div>
</template>

<script>
  import Header from './Header';
  import Body from './Body';

  export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home page'
    }
  },
  components:{
    Header,
    Body
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
