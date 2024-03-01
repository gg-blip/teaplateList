<template>
    <div class="toast-wrap">{{message}}</div>
</template>

<script>
export default {
  name: 'my-toast',
  data() {
    return {
      message: '',
    };
  },
};
</script>

<style scoped>
    .toast-wrap{padding:8px 15px;background-color: rgba(0,0,0,0.8);font-size:14px;color:#FFFFFF;text-align: center;position: fixed;z-index:99;left:50%;top:50%;transform: translate(-50%,-50%);border-radius: 5px;}
</style>
