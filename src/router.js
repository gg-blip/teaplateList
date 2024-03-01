import Vue from 'vue';
// 导入vue-router
import Router from 'vue-router';

// 导入组件
import Main from './pages/main';
// 使用路由插件
Vue.use(Router);

// 实例化路由
const router = new Router({
  mode: 'history', // 1、hash:url带#号，2、history历史:url不带#号
  base: process.env.BASE_URL, // 自动获取根目录路径
  routes: [
    {
      path: '*',
      name: '404',
      component: () => import('./pages/error/404'),
    },
    {
      path: '/', // url路径"/"代表首页，http://localhost:8080/
      name: 'main', // 路由的名字
      // components: {
      //   header: () => import('./pages/main/header'),
      //   default: () => import('./pages/main/index'),
      //   footer: () => import('./pages/main/footer'),
      // },
      component:()=>import("./pages/main/index")
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./pages/news'), // 异步导入组件，实现路由懒加载
      // redirect:"/goods"
      // redirect:{name:"category",params:{cid:1,title:'女装'}}
      // redirect:{path:"category",query:{cid:1,title:'女装'}}
      // redirect:(to)=>{
      //   console.log(to);
      //   return {name:"category",params:{cid:1,title:"女装"}}
      // }
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('./pages/goods'),
      // alias:"/product"
      redirect:"/goods/item",
      children:[
        {
          path:"item",
          name:"goods-item",
          component:()=>import("./pages/goods/item")
        },
        {
          path:"details",
          name:"goods-details",
          component:()=>import("./pages/goods/details")
        },
        {
          path:"review",
          name:"goods-review",
          component:()=>import("./pages/goods/review")
        }
      ]
    },
    // {
    //   path:"/user/:id/:nickname",
    //   name:"user",
    //   component:()=>import("./pages/user")
    // },
    {
      path: '/user',
      name: 'user',
      component: () => import('./pages/user'),
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./pages/category'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login'),
    },
    {
      path: '/ucenter',
      name: 'ucenter',
      component: () => import('./pages/ucenter'),
      meta:{auth:true},
      // beforeEnter:(to,from,next)=>{
      //   if(localStorage['isLogin']){
      //     next();
      //   }else{
      //     next("/login");
      //   }
      // }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./pages/order'),
      redirect:{path:"/order/list",query:{status:0}},
      children:[
        {
          path:"list",
          name:"order-list",
          component:()=>import("./pages/order/list")
        }
      ]
    }
  ],
});
//全局前置守卫
// router.beforeEach((to,from,next)=>{
//     // console.log(to);
//     if(to.meta.auth){//如果需要会员登录验证
//       if(localStorage['isLogin']){
//         next();
//       }else{
//         next('/login');
//       }
//     }else{//不需要会员验证
//       next()
//     }
// })
// let routerPush=Router.prototype.push;
// Router.prototype.push=function(location,resolve,reject){
//   if(resolve || reject) return routerPush.call(this,location,resolve,reject);
//   return routerPush.call(this,location).catch(()=>{})
// }
export default router;
