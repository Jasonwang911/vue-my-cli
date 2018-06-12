<template>
  <div id="app">
    <img src="./assets/logo.png" @click="useMint">
    <router-view/>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  name: 'App',
  created() {
    this.$post('/u/getBandingCardAmount')
    .then(res => {
      console.log(res)
    })
    .then( err => {
    })
  },
  methods: {
    useMint: function() {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
