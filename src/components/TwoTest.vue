<template>
  <div >
    {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '页面跳转成功,当前页面是twoTest'
      }
    },
    created(){
      console.log("twotest执行了")
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
