<!--如果是要传递数据(:id)的向同一组件，原来的组件实例会被复用，这也意味着组件的生命周期钩子不会再被调用(测试发现并没有这样。郁闷)（第一次会调用生命周期）-->
<!--如果直接改变/xx路由，生命周期都会执行-->

<!--如果跳转子路由的router-view 必须写全路径（子内内部也可以跳转router-view，但是没有意义，因为需要全路径，就要知道父的参数,
如果需要在子路径内部跳转 带显示路径可以用/:id 的形式），并且配置children path 前面不能加/-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>{{msg}}</div>-->
     <div @click="goToHello">跳转页面</div>

    <div @click="aaa">点击我跳转页面onetest</div>
    <div @click="bbb">点击我跳转页面twotest</div>
    <div @click="ccc">点击我跳转页面fourtest</div>
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
      this.$router.push({path:'/hello/123/post/321'})
//      this.$router.push({name:'Hello',params:{id:123,name:321}})

      //传递path上带隐形数据的
      /* path: '/hello',
         name: 'Hello',
         component: Hello*/
     //this.$router.push({name:'Hello',params:{id:123}})


    },
    aaa(){
      //path:'/hello/123/post/321'
      this.$router.push({path:'/hello/123/post/321/onetest/111'})
    },
    bbb(){
      this.$router.push({path:'/hello/123/post/321/twotest'})
    },
    ccc(){
      this.$router.push({name:'个人'})
    }

  }

}
</script>

<style>

</style>
