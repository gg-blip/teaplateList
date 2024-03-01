<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button>
        <button @click="$router.replace('/')">首页</button>
        <div class="nav">
            <div class="item" @click="$router.replace('/goods/item')">商品</div>
            <div class="item"  @click="$router.replace('/goods/details')">详情</div>
            <div class="item"  @click="$router.replace('/goods/review')">评价</div>
        </div>
        <router-view></router-view>
        <div :class="{ad:true, active:isActive}" @click="isActive=true">{{isActive?'已点击广告':'未点击广告'}}</div>
    </div>
</template>

<script>
export default {
  name: 'goods',
  data(){
    return {
      isActive:false
    }
  },
  beforeRouteLeave(to,from,next){
    if(this.isActive){
      next();
    }else{
      alert('必须单击广告才能离开');
    }
  }
};
</script>

<style scoped>
    .nav{width:100%;display:flex}
    .nav .item{padding:10px 20px;}
    .ad{width: 100px;height:100px;background-color: #000000;font-size:14px;color:#FFFFFF;position: absolute;left:100px;top:100px;z-index:100;text-align: center;line-height:100px;}
    .ad.active{background-color: #FF0000}
</style>
