<template>
 


  <div class="card" style="width: 20rem;">
  <img alt="foto ruta" :src="rout.photo1" />
  <div class="card-body">
    
    <img src="~@/assets/img/origen.svg" width="40px" alt="km"/><h5 class="card-title">{{ rout.name }}</h5>
    <p class="card-text">{{ rout.title }}</p>

    
    <button @click="() => this.$router.push('/routes/' + rout.id)" type="button"  class="btn btn-dark">Ver Ruta</button>
    
  </div>
</div>

<!-- 

    <main class="grid-container">
        <div class="item">
          <img :src="rout.map" alt="map" class="img">
          <div class="contenedor-texto">
            <p class="title-card">{{ rout.name }}</p>
            <p class="title-card">{{ rout.title }}</p>
            <p class="title-card">{{ rout.province }}</p>
            <button class="cta" href="#" @click="()=>this.$router.push('/routes/'+rout.id)" variant="primary">Ver ruta</button>
          </div>
        </div>
      
        </main>
  
      
       
       
      
  


  <b-card
  :title="rout.name"
  src="~@/assets/img/mapa_dibujo.svg" alt="map" 
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>{{ rout.title }}</b-card-text>
    <b-card-text>{{ rout.title }}</b-card-text>

    <b-button href="#" @click="()=>this.$router.push('/routes/'+rout.id)" variant="primary">Ver ruta</b-button>
  </b-card>

   -->

  </template>

  
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  //
  
  
  export default {
    name: "RouteItem",
   
    props: ["rout"],
    data() {
      return {
        routes: [],
      };
    },
    async mounted() {},
  };
  </script>
  <style>
  
  </style>