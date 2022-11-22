<template>
    <div class="home">
        Comentarios sobre la ruta
        <PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
        <div>
        </div>
      
    </div>
  </template>
  
  <script>

  import PostItem from "./PostItem.vue";
  import API from "./api";
  export default {
    name: "PostList",
   components: { PostItem },
    data() {
      return {
        api: {},
        posts: [],
      };
    },
    async created() {
    this.api = new API("http://localhost:2044");
    this.posts = await this.api.getPostByRouteId();
    console.log(this.posts);
  },
}
    
</script>
<style scoped>
.card-item img {
  width: 100%;
}