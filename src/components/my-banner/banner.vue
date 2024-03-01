<template>
    <div class="banner-main" @mouseover="stop()" @mouseout="play()">
        <transition-group name="banner">
            <div class="banner-slide" v-for="(item,index) in data" :key="index" v-show="item.checked"><img :src="item.image" alt=""></div>
        </transition-group>
        <div class="spot-wrap">
            <div :class="{spot:true, active:item.checked}" v-for="(item,index) in data" :key="index" @click="changeImage(index)"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-banner',
  data() {
    return {
      data: [],
    };
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Number,
      default: 2000,
    },
  },
  created() {
    this.index = 0;
    this.timer = null;
    this.play();
  },
  methods: {
    changeImage(index) {
      this.index = index;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].checked) {
          this.data[i].checked = false;
          break;
        }
      }
      this.data[this.index].checked = true;
      this.$set(this.data, this.index, this.data[this.index]);
    },
    stop() {
      clearInterval(this.timer);
    },
    play() {
      this.timer = setInterval(() => {
        if (this.index < this.data.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }
        this.changeImage(this.index);
      }, this.autoplay);
    },
  },
  destroyed() {
    this.stop();
  },
  watch: {
    images(val) {
      this.data = [...val];
      if (this.data.length > 0) {
        for (let i = 0; i < this.data.length; i++) {
          if (i == 0) {
            this.data[i].checked = true;
          } else {
            this.data[i].checked = false;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
    .banner-main{width:100%;height:100%;position:relative;z-index:1;}
    .banner-main .banner-slide{width:100%;height:100%;position: absolute;z-index:1;left:0px;top:0px;}
    .banner-main .banner-slide img{width:100%;height:100%;}
    .banner-main .spot-wrap{width:auto;height:auto;position: absolute;z-index:2;left:50%;bottom:8%;transform: translateX(-50%);display: flex;justify-content: center}
    .banner-main .spot-wrap .spot{width:25px;height:8px;background-color:rgba(0,0,0,0.6);margin:0px 3px;cursor:pointer}
    .banner-main .spot-wrap .spot.active{background-color:rgba(255,255,255,0.6);}

    .banner-enter-active,.banner-leave-active{transition:all 1s}
    .banner-enter{opacity:0}
    .banner-enter-to{opacity:1}
    .banner-leave{opacity:1}
    .banner-leave-to{opacity:0}
</style>
