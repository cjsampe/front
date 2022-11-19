<template>
    <div class="home" v-if="route">
      <div class="container d-flex justify-content-center">
        <div class="col-8">
          
          <h1 class="container d-flex justify-content-end">
            {{ route.name }} <br>
          </h1>
          
          <div>Descripción:{{ route.description}}</div>
          <div>Km:{{ route.km}}</div>
          <div>Ciudad/Pueblo:{{ route.village}}</div>
          <div>Provincia:{{ route.province}}</div>
          <div>Estación:{{ route.season}}</div>
          <div>Desnivel:{{ route.signaling }}</div>
          <div>Tiempo:{{ route.time}}</div>
            <div class="space-between">
          <b-button variant="primary">Volver</b-button>
          </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>

  
  export default {
    name: "RouteDetails",
    data() {
    return {
      route: null
    };
},
    async mounted() {
      let response = await fetch("http://localhost:2044/routes/"+this.$route.params.id).then(
        (data) => data.json()
      );
      this.route = response;
      console.log(response);
    },
  };
  
  
  </script>