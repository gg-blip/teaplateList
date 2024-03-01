<template>
    <div>
        <button type="button" @click="$router.go(-1)">返回</button>
        分类的ID：{{$route.params.cid}},分类的名称：{{$route.params.title}}</div>
</template>

<script>
export default {
  name: 'category',
  created() {
    // console.log(this.$route.query.cid,this.$route.query.title);
    console.log(this.$route.params.cid, this.$route.params.title);
    // this.$router.go(-1)
  },
};
</script>

<style scoped>

</style>
