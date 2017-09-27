<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div>{{msg}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      msg:'我是app页面的'
    }
  }
}
</script>

<style>

</style>
