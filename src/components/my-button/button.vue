<template>
    <button class="btn" @click="handleClick()"><slot>按钮</slot></button>
</template>

<script>
export default {
  name: 'my-button',
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
    .btn{padding:3px 15px;border:0 none;outline: none;background-color: #FF0000;font-size:14px;color:#FFFFFF;border-radius: 5px;}
</style>
