<template>
 


  <div class="card" style="width: 20rem;">
  <img alt="foto ruta" :src="rout.photo1" />
  <div class="card-body">
    
    <img src="~@/assets/img/origen.svg" width="40px" alt="km"/>
    <h5 class="card-title">{{ rout.name }}</h5>
    <h6 class="card-text">{{ rout.title }}</h6>
    
    

    
    <button @click="() => this.$router.push('/routes/' + rout.id)" type="button"  class="btn btn-dark">Ver Ruta</button>
    
  </div>
</div>

  </template>

  
  
  <script>
 
  
  
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