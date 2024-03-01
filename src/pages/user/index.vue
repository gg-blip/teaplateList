<template>
    <div>用户的ID：{{$route.query.id}}，用户的昵称：{{$route.query.nickname}}</div>
</template>

<script>
export default {
  name: 'user',
  created() {
    // console.log(this.$route.params.id,this.$route.params.nickname);
    console.log(this.$route.query.id, this.$route.query.nickname);
  },
};
</script>

<style scoped>

</style>
