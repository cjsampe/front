<template>
  <div>
    
    <div class="home" v-if="route">
      <div class="container d-flex justify-content-center">
        <div class="col-8">
          <br><br>  
          <img :src="route.photo2"/>
          <br><br>  

          <h1 class="container d-flex">
            {{ route.name }} <br>
            
          </h1>
          <div>Descripción:{{ route.description}}</div>
          <br>
          <div><img src="~@/assets/img/km.svg" alt="km">  :{{ route.km}} Km
              <img src="~@/assets/img/origen.svg" alt="origen">  :{{ route.village}} 
              <img src="~@/assets/img/provincia.svg" alt="provincia">  :{{ route.province}}
              <img src="~@/assets/img/tipo.svg" alt="tipo">  :{{ route.type}}
              <img src="~@/assets/img/desnivel.svg" alt="desnivel">  :{{ route.unevenness }} metros
          </div>
          <div><img src="~@/assets/img/reloj.svg" alt="desnivel">  :{{ route.time }}
              <img src="~@/assets/img/max.svg" alt="max">  :{{ route.max }} metros
              <img src="~@/assets/img/min.svg" alt="min">  :{{ route.min }} metros
              <img src="~@/assets/img/estacion.svg" alt="estacion">  :{{ route.season }} </div>
              <br><br>    
            <div class="space-between">
          <router-link button to="/" class="btn btn-dark">Volver</router-link>
          </div>
          </div>  
      </div>
      <br><br>   
      


   



      
      <h4>Comentarios de nuestros usuarios:</h4>
      <div class="card">
      <div v-for="post in posts" :key="post.key">
        <hr />
        <h6>Usuario: {{ post.user }}</h6>
        <p>Comentario: {{ post.post }}</p>
        <p>{{ post.post }}</p>
      </div>
    </div>
    </div>


     <RouteForm></RouteForm>


    </div>
  </template>
  
  <script>


// prueba post
 // import PostList from "@/components/PostList.vue";


 // nuevo
 import API from "./api";
 import RouteForm from "./RouteForm.vue";

  export default {
    name: "RouteDetails",
   // components: { PostList},
  components:{RouteForm},
    data() {
    return {
      //nuevo
      api: {},

      //viejo
      route: null,

      //nuevo
      posts: null,
    };
},
async created() {
    this.api = new API("http://localhost:2044");
    this.route = await this.api.getRouteById(this.$route.params.id);
    console.log(this.$route.params.id);

    // this.posts = await this.api.getPostsByRoute(this.route.id);
    let posts = await this.api.getPostsByRoute(this.route.id);
    this.posts = posts.filter(post=>{
      return post.route == this.$route.params.id
    })

    console.log(this.posts);
  },
};
</script>