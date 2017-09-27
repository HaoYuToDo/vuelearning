<!--如果是要传递数据的向同一组件，原来的组件实例会被复用，这也意味着组件的生命周期钩子不会再被调用（第一次会调用生命周期）-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>{{msg}}</div>-->
     <div @click="goToHello">跳转页面</div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
//  name: 'app',
  data(){
    return{

    }
  },
  methods:{
    goToHello(){

     //传递普通的不带数据的
//      this.$router.push({name:'Hello'})或者
//      this.$router.push({path:'/hello'})

      //传递path上有数据的

      /* path: '/hello/:id',
         name: 'Hello',
         component: Hello*/
//      this.$router.push({path:'/hello/123/post/321'})
//      this.$router.push({name:'Hello',params:{id:123,name:321}})

      //传递path上带隐形数据的
      /* path: '/hello',
         name: 'Hello',
         component: Hello*/
     //this.$router.push({name:'Hello',params:{id:123}})


    }
  }
}
</script>

<style>

</style>
