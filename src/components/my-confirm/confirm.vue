<template>
    <div class="mask" v-if="isShow">
        <div class="confirm-main">
            <div class="confirm-msg">
                {{msg}}
            </div>
            <div :class="{'confirm-handle':true,center:btns.length==1}">
                <div class="btn" v-for="(item,index) in btns" :key="index" @click="handleClick(index)">{{item.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-confirm',
  data() {
    return {
      isShow: true,
      msg: '',
      btns: [],
    };
  },
  methods: {
    handleClick(index) {
      if (this.btns[index].onPress) {
        this.btns[index].onPress();
      }
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
    .mask{width:100%;height:100%;position: fixed;z-index:99;left:0px;top:0px;background-color:rgba(0,0,0,0.6)}
    .confirm-main{width:400px;height:200px;background-color:#FFFFFF;border-radius: 4px;position: absolute;z-index:1;left:50%;top:50%;transform: translate(-50%,-50%)}
    .confirm-main .confirm-msg{font-size:16px;text-align: center;margin-top:50px;}
    .confirm-main .confirm-handle{width:100%;margin-top:40px;display: flex;justify-content: space-between;padding:0px 40px;box-sizing: border-box;}
    .confirm-main .confirm-handle.center{justify-content: center;}
    .confirm-main .confirm-handle.center .btn{width:80%;background-color:#F22E2B;text-align:center;color:#FFFFFF;border-radius: 50px;}
    .confirm-main .confirm-handle .btn{font-size:16px;cursor:pointer;background-color:#EFEFEF;padding:8px 15px;border-radius: 5px;}
</style>
