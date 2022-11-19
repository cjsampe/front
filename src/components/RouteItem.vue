<template>
 
  
  
  
  <div class="card" style="width: 18rem;">
  <img :src="rout.map" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ rout.name }}</h5>
    <p class="card-text">{{ rout.title }}</p>
    <b-button @click="() => this.$router.push('/routes/' + rout.id)" variant="primary">Ver Ruta</b-button>
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
  //import { BCard, BButton, BCardText } from "bootstrap-vue";
  
  export default {
    name: "RouteItem",
    //
   ///components: { BCard, BButton, BCardText },
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
  .grid-container {
  width: 100%;
  margin: 10px auto 0 auto;
  display: grid;
  justify-content: space-evenly;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(25px, 50px));
}

.item {
  text-align: center;
  overflow: hidden;
  height: auto;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0px 0px -14px rgba(0, 0, 0, .25);
}

.img {
  display: block;
  height: 180px;
  width: 150px;
  object-fit: cover;
}


.contenedor-texto {
  width: 20%;
  padding: 10px 0 20px 0;
}


.title-card {
  font-weight: 700;
  text-decoration: none;
  color: rgb(12, 11, 11);
  font-size: 400px;
}

.cta {
  background: #ffce38;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: center;
  border-radius: 10px;
  font-size: 10px;
}




/*RESPONSIVE*/

@media screen and (max-width:800px) {
  .menu-navegacion {
    /*flex-direction: column;*/
    height: 120px;
    justify-content: space-evenly;
  }

  .hero h1 {
    font-size: 38px;
  }

  .contenedor-imagenes img {
    width: 100%;
  }


}

@media screen and (max-width: 700px) {
  .enlaces {
    display: none;
  }

  .tabla2 {
    width: 45%;
    padding: 30px;
  }

  .tabla2>h2 {
    margin-top: 40px;
  }

  .contenedor-imagenes2 {
    width: 85%;
    flex-direction: column;
    align-items: center;
  }

  .contenedor-imagenes2 .imagen2 {
    width: 85%;
  }

  .galeria h1 {
    font-size: 40px;
  }
}
  </style>