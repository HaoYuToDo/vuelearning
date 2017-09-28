<template>
  <div class="hello">
        <div>{{msg}}</div>
        <!--<div @click="aaa">点击我跳转页面onetest</div>-->
        <!--<div @click="bbb">点击我跳转页面twotest</div>-->
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
  </div>
</template>

<script>
export default {
//  name: 'hello',
  data () {
    return {
      msg: '我是页面hello'
    }
  },
  created(){
//    this.$router.params
    console.log("带过来的数据为"+this.$route.params.id)
    console.log("带过来的数据为"+this.$route.params.name)
  },
  methods:{
//    aaa(){
//      //path:'/hello/123/post/321'
//      this.$router.push({path:'/hello/123/post/321/onetest/22'})
//    },
//    bbb(){
//      this.$router.push({path:'/hello/123/post/321/twotest'})
//    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
