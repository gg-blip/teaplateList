<template>
  <div>
      <my-button></my-button>
      <my-button @click="submit()">提交</my-button>
      <my-button @click="del()">删除</my-button>
      <my-button @click="add()">添加</my-button>
      <div class="banner-wrap">
          <my-banner :images="banners" :autoplay="3000"></my-banner>
      </div>
      <div class="banner-wrap">
          <my-banner :images="banners" :autoplay="1000"></my-banner>
      </div>
  </div>
</template>

<script>/*eslint-disable*/
import Vue from 'vue';
import MyButton from "./components/my-button";
import MyToast from "./components/my-toast";
import MyConfirm from "./components/my-confirm";
import MyBanner from "./components/my-banner";
Vue.use(MyButton);
Vue.use(MyToast);
Vue.use(MyConfirm);
Vue.use(MyBanner);
  export default {
    name: 'App',
    data(){
      return {
        banners:[]
      }
    },
    // components: {
    //   MyBanner
    // },
    created(){
      // console.log(process.env.VUE_APP_DOMAIN);
      // console.log(process.env.VUE_APP_TITLE);
      setTimeout(()=>{
        this.banners=[
          {image:require("./assets/images/banner/banner1.jpg")},
          {image:require("./assets/images/banner/banner2.jpg")},
          {image:require("./assets/images/banner/banner3.jpg")}
        ]
      },300)
    },
    methods:{
      submit(){
        this.$toast({
          message:"请输入姓名",
          duration:3000,
          onClose:()=>{
            console.log("已关闭");
          }
        })
      },
      del(){
        this.$confirm("确认要删除吗？",[
          {
            text:"取消",
            onPress:()=>{
              console.log("取消");
            }
          },
          {
            text:"确认",
            onPress:()=>{
              console.log("确认");
            }
          }
        ])
      },
      add(){
        this.$confirm("添加成功",[
          {
            text:"确认"
          }
        ]);
      }
    }
  }
</script>

<style>
    .banner-wrap{width:700px;height:350px;}
</style>
