<template>
  <div >
    {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '页面跳转成功,当前页面是oneTest'
      }
    },
    created(){
       console.log("onetest执行了")
        console.log("onotest带过来的数据为"+this.$route.params.mm)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
