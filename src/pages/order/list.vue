<template>
    <div>订单状态：{{status==0?'未付款':status==1?'已付款':status==-1?'已退款':'未付款'}}</div>
</template>

<script>
  export default {
    name: 'order-list',
    data(){
      return {
        status:""
      }
    },
    created(){
      this.status=this.$route.query.status;
      // console.log(this.$route.query.status);
    },
    beforeRouteUpdate(to,from,next){
      // console.log(to.query.status);
      this.status=to.query.status;
      next();
    }
  };
</script>

<style scoped>

</style>
