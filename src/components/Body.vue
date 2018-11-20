<template>
  <div>
    <h1>{{ msg }}</h1>
    <img src="../assets/body.png">
    <p><button @click="getBodyData()">body get2</button></p>
  </div>
</template>

<script>
  import Header from './Header';
  export default {
  name: 'Body',
  data () {
    return {
      msg: 'App Body'
    }
  },
 components:{
    Header
  },
  methods:{
      getBodyData:function() {
      this.$http.get('/v1/user/1').then(response => {
        console.log(response.data);
        // this.someData = response.body;

      }, response => {
        console.log("error");
      });
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
