<template>
  <div class="hello">
        {{msg}}
  </div>
</template>

<script>
export default {
//  name: 'hello',
  data () {
    return {
      msg: '页面跳转成功'
    }
  },
  created(){
//    this.$router.params
    console.log("带过来的数据为"+this.$route.params.id)
    console.log("带过来的数据为"+this.$route.params.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
