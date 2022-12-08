<template>
  <div>
    
    <h3 class ="text-center mt-5"> | consejos antes de inciar tu ruta |</h3>
    <br><br>
        <div class="grid-container">
          <div class="item" >
            <img src="~@/assets/img/mapa_dibujo.svg" style="justify-content: center" alt="map" class="img">
            <div class="contenedor-texto">
              <p class="title-card">Planea tu ruta, lleva siempre mapa y avisa a donde vas.</p>
            </div>
          </div>
          <div class="item">
            <img src="~@/assets/img/senial_dibujo.svg" alt="sign" class="img">
            <div class="contenedor-texto">
              <p class="title-card">Sigue el mapa, el track y/o la señalización existente.</p>
            </div>
          </div>
          <div class="item">
            <img src="~@/assets/img/mariposa_dibujo.svg" alt="nature" class="img">
            <div class="contenedor-texto">
              <p class="title-card">Respeta la naturaleza. Mantén el entorno limpio.</p>
            </div>
          </div>
          <div class="item">
            <img src="~@/assets/img/botas_dibujo.svg" alt="boots" class="img">
            <div class="contenedor-texto">
              <p class="title-card">Utiliza calzado adecuado y lleva el equipo necesario.</p>
            </div>
          </div>

        </div>
        </div>

  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  
  
  
  /* Grid*/
  .grid-container {
    width: 100%;
    margin: 30 auto 0 auto;
    display: grid;
    justify-content: space-evenly;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(25px, 300px));
  }
  
  .item {
    text-align: center;
    overflow: hidden;
    height: auto;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0px 0px -14px rgba(0, 0, 0, .25);
  }
  
  .img {
    
    height: 35%;
    align-content: center;
  }
  
  
  .contenedor-texto {
    width: 100%;
    padding: 30px 0 10px 0;
  }
  
  
  .title-card {
    font-weight: 300;
    text-decoration: none;
    color: rgb(12, 11, 11);
    font-size: 20px;
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
  