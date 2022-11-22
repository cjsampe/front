<template>
 
  
 <div class="home">
    <div class="card" style="width: 18rem;">
      <h5 class="card-title">{{ post.user }}</h5>
      <h5 class="card-title">{{ post.name }}</h5>
      <p class="card-text">{{ post.post }}</p>
    </div>
</div>
      
  
  
    </template>
  
    
    
    <script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    //
    //import { BCard, BButton, BCardText } from "bootstrap-vue";
    
    export default {
      name: "PostItem",
      //
     ///components: { BCard, BButton, BCardText },
      props: ["post"],
      data() {
        return {
          posts: [],
        };
      },
      async mounted() {},
    };
    </script>
    <style>
    </style>