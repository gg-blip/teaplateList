<template>
    <div>
        <div class="nav">
            <div :class="{item:true, active:unpaidStyle}" @click="$router.replace('/order/list?status=0')">待付款</div>
            <div :class="{item:true, active:payStyle}" @click="$router.replace('/order/list?status=1')">已付款</div>
            <div :class="{item:true, active:refundStyle}" @click="$router.replace('/order/list?status=-1')">已退款</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'order',
    data() {
      return {
        unpaidStyle: true,
        payStyle: false,
        refundStyle: false
      };
    },
    beforeRouteUpdate(to, from, next) {
      switch (to.query.status) {
        case '0':
          this.unpaidStyle = true;
          this.payStyle = false;
          this.refundStyle = false;
          break;
        case '1':
          this.unpaidStyle = false;
          this.payStyle = true;
          this.refundStyle = false;
          break;
        case '-1':
          this.unpaidStyle = false;
          this.payStyle = false;
          this.refundStyle = true;
          break;
        default:
          this.unpaidStyle = true;
          this.payStyle = false;
          this.refundStyle = false;
          break;
      }
      next();
    }
  };
</script>

<style scoped>
    .nav {
        width: 100%;
        background-color: black;
        display: flex
    }

    .nav .item {
        font-size: 14px;
        padding: 10px 20px;
        color: #FFFFFF
    }

    .nav .item.active {
        background-color: #F22E2B
    }
</style>
