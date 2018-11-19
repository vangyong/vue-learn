<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ 哈哈 }}</h1>

    <p v-html="hello"></p>

    <p v-text="hello"></p>
    <span v-bind:class="ha">带样式</span>

    <span v-bind:title="ts">提示</span>

    <h1>{{ msg.split('').reverse().join('') }}</h1>
    <div>
      <h1 v-if='ok'>Yes</h1>
      <h1 v-else>false看到的</h1>
    </div>

    <template v-if="show">
      <span>这是show true看到的</span>

    </template>

    <template v-else>
       <span>这是show false看到的</span>

    </template>
    
    <div v-show="show">
      我是v-show的显示
    </div>

    <div>
      <ul>
        <li v-for="(name,index) in names" v-bind:key="index"> {{name}}-{{index}}</li>
      </ul>

      <ul>
        <li v-for="(item,index) in user" v-bind:key="index"> 
        {{index}}-{{item.name}}-{{item.age}}

      </li>
      </ul>

    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Helllo,VUE',
      "哈哈":"哈哈",
      hello:'<p>这是带标签</p>',
      ha:"ha",
      ts:"我是提示",
      ok:false,
      show:false,
      names:["a","b","c"],
      user:[{
        name:"xiaoming",
        age:20
      },{
         name:"xiaohong",
        age:10
      }]
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
.ha{
  color:red
}

</style>
