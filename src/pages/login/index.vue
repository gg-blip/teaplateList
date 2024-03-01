<template>
    <div>
        <div>用户名：<input type="text" placeholder="请输入用户名" v-model="username"></div>
        <div>密码：<input type="password" placeholder="请输入密码" v-model="password"></div>
        <div><button type="button" @click="submit()">登录</button></div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return {
        username:"",
        password:""
      }
    },
    methods:{
      submit() {
        if(this.username.trim()==""){
          alert("请输入用户名");
          return;
        }
        if(this.password.trim()==''){
          alert("请输入密码");
          return;
        }
        localStorage["username"]=this.username;
        localStorage["isLogin"]=true;
        this.$router.replace("/");
      }
    }
  };
</script>

<style scoped>

</style>
