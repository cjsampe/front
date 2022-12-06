<template>
 


 <div class="container d-flex justify-content-center">
    <div class="card-body">
      
      <img src="~@/assets/img/origen.svg" width="40px" alt="km"/>
      <h5 class="card-title">{{ level.name }}</h5>
      <h6 class="card-text">{{ level.characteristics }}</h6>
      
    </div>
    </div>
  
  
    </template>
  
    
    
    <script>
   
    
    
    export default {
      name: "LevelItem",
     
      props: ["level"],
      data() {
        return {
          levels: [],
        };
      },
      async mounted() {}, 
    };
    </script>
    <style>
    
    </style>