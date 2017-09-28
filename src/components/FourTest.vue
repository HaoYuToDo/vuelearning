<template>
  <div >
    <div>{{msg}}</div>
    <div @click="aaa">跳转到第五个界面</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '页面跳转成功,当前页面是fourTest'
      }
    },
    created(){
      console.log("fourtest执行了")
//      console.log(this.$route.params.abc)
    },
    methods:{
      aaa(){
        this.$router.push({name:'内容',params:{yyy:666}})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
