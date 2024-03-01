<template>
    <div>欢迎{{username}}回来！{{message}}<br/><button type="button" @click="outLogin()">安全退出</button></div>
</template>

<script>
  export default {
    name: 'ucenter',
    data(){
      return {
        username:localStorage['username'],
        message:""
      }
    },
    methods:{
      outLogin(){
        localStorage.removeItem("username");
        localStorage.removeItem("isLogin");
        this.$router.replace("/login");
      }
    },
    beforeRouteEnter(to,from,next){
      if(localStorage['isLogin']){
        next();
        next((vm)=>{
          vm.message="我是组件内的守卫beforeRouteEnter"
        })
      }else{
        next("/login");
      }
    }
  };
</script>

<style scoped>

</style>
