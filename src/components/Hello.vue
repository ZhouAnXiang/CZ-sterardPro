<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span><router-link to="/risk_Assessment">跳转</router-link></span>
    <span><router-link to="/scale_list">量表</router-link></span>
    <span><router-link to="/outreport/report">报告</router-link></span>
    <span><router-link to="/test">111</router-link></span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
