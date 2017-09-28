<template>
  <div >
    {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '页面跳转成功,当前页面是fiveTest'
      }
    },
    created(){
      console.log("fivetest执行了")
      console.log(this.$route.params.yyy)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
