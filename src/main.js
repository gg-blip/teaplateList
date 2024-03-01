/*eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
//导入配置好的路由
import router from "./router";

//用于配置是否在项目启动时生成提示信息
Vue.config.productionTip = false;

new Vue({
  router,//简写 相当于router:router
  //h代表createElement
  render: (h) => h(App),
}).$mount('#app');

