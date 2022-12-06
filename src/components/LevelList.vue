<template>
    <div>
     <br>
     <h3 class ="text-center mt-5"> | niveles de rutas |</h3>
     
                <div class="card">
                    <div class="card-body" >
                 <LevelItem
                   v-for="level in levels"
                   :key="level.id"
                   :level="level"
                 ></LevelItem>
                    </div>
             </div>
           </div>
        
      
     </template>
     
     <script>
     
     import LevelItem from "./LevelItem.vue";
     export default {
       name: "LevelList",
      components: { LevelItem},
       data() {
         return {
           levels: [],
           items: [],
         };
       },
       async mounted() {
         let response = await fetch("http://localhost:2044/levels").then((data) =>
           data.json()
         );
         this.levels = response;
         this.items = response;
         console.log(response);
       },
     };
   </script>
   <style scoped>
   .card-item img {
     width: 80%;
   }
   .card-item {
     max-width: 50px;
   }
   .cardgroup {
     row-gap: 50px;
     column-gap: 80px;
     justify-content: center;
   }
   .space-between {
     display: flex;
     justify-content: space-around;
   }
   </style>