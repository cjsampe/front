<template>

  <div>
    <br>
    <div class="home" v-if="route">
      <div class="container d-flex justify-content-center">
        <div class="col-6">  

    <div class="card" style="max-width: 48rem;">
      <img :src="route.photo2" alt="Rutas"/>
    </div>
          <br>

          <h1 style="max-width: 48rem; justify-content: center">
            |{{ route.name }}|<br>
            
          </h1>

      <div>Descripción:{{ route.description}}</div>
          <br>      

          <div class="card" style="max-width: 48rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <img src="~@/assets/img/km.svg" width="50px" alt="km"> {{ route.km}} Km tiene esta ruta</li>
    <li class="list-group-item">
      <img src="~@/assets/img/origen.svg" width="50px" alt="origen"> Esta ruta comienza en {{ route.village}}</li>
    <li class="list-group-item">
      <img src="~@/assets/img/provincia.svg" width="50px" alt="provinvia"> Pertenece a la provincia de {{ route.province}}</li>
    <li class="list-group-item">
      <img src="~@/assets/img/tipo.svg" width="50px" alt="tipo_ruta"> Se trata de una ruta {{ route.type}}</li>
    <li class="list-group-item">
      <img src="~@/assets/img/reloj.svg" width="50px" alt="reloj"> Se hace aproximádamente en  {{ route.time}}</li>
    <li class="list-group-item">
      <img src="~@/assets/img/desnivel.svg" width="50px" alt="desnivel"> Con un desnivel de {{ route.unevenness}} metros</li>
    <li class="list-group-item">
      <img src="~@/assets/img/max.svg" width="50px" alt="max"> Desnivel máximo de {{ route.max}} metros </li>
      <li class="list-group-item"> 
    <img src="~@/assets/img/min.svg" width="50px" alt="min"> Desnivel mínimo de {{ route.min}} metros</li>
    <li class="list-group-item">
      <img src="~@/assets/img/estacion.svg" width="50px" alt="estacion"> Estación ideal {{ route.season}}</li>
    <li class="list-group-item"> Ruta de nivel {{ route.levelys}}</li>

  </ul>
  </div>

    <br>
    <div class="space-between">
      <router-link button to="/" class="btn btn-dark" >Volver</router-link>
    </div>


  </div>  
  </div> 
      <br><br><br>
  <div class="container d-flex justify-content-center">
    <img src="~@/assets/img/gif.gif"  class="img">
  </div>

  <h4>| Comentarios de nuestros usuarios |</h4>
    
        <div class="card-body">
      <div v-for="post in posts" :key="post.key">
        <hr />
        <h5>Usuario: {{ post.user }}</h5>
        <h6>{{ post.name }}</h6>
        <h6>" {{ post.post }} "</h6> 
    </div>
    </div>
    </div>
    <br>
    <h4>|      ¿Has hecho esta ruta? Deja tu comentario si lo deseas      |</h4>
   


     <RouteForm></RouteForm>

    
    </div>
  </template>
  
  <script>


 // nuevo
 import API from "./api";
 import RouteForm from "./RouteForm.vue";

  export default {
    name: "RouteDetails",
   
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
<style scoped>
 
div h1 {
    text-align: center;
}
div h4 {
    text-align: center;
}
.card-body {
  padding-left: 20%;
  padding-right: 20%;
  max-width: 90rem;
}
</style>