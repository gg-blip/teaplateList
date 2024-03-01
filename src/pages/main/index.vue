<template>
    <div>
        <router-link to="/">首页</router-link><br/>
        <router-link to="/news">新闻页面</router-link><br/>
        <router-link to="/goods">商品页面</router-link><br/>
<!--        <router-link to="/user/1/张三">张三</router-link><br/>-->
<!--        <router-link to="/user/2">李四</router-link>-->
        <router-link to="/user?id=1&nickname=张三">张三</router-link><br/>
        <router-link to="/user?id=2">李四</router-link><br/>
        <button type="button" @click="pushPage('/category',{cid:1,title:'女装'})">女装</button><br/>
        <button type="button" @click="pushNamePage('/category',{cid:2,title:'男装'})">男装</button><br/>
        <button type="button" @click="pushPage('/login')">登录</button><br/>
        <button type="button" @click="pushPage('/ucenter')">个人中心</button><br/>
        <button type="button" @click="pushPage('/order')">订单管理</button><br/>
    </div>
</template>

<script>
export default {
  name: 'main-index',

  methods: {

    pushPage(url, params) {
      // this.$router.push(url);
      // this.$router.push({ path: url, query: params }).catch(()=>{});
      this.$router.push({ path: url, query: params })
    },
    pushNamePage(url, params) {
      this.$router.push({ name: 'category', params });
    },
  },
};
</script>

<style scoped>

</style>
