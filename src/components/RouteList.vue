<template>
 <div>
    <br>
    <h3 class ="text-center mt-5"> | nuestras rutas |</h3>
    <br><br>
    <b-row deck class="cardgroup">
              <RouteItem
                v-for="rout in paginatedItems"
                :key="rout.id"
                :rout="rout"
              ></RouteItem>
    </b-row>
      <br>
    <b-row>
      <b-col md="1" class="mx-auto">
                <b-pagination
                  @change="onPageChanged"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  v-model="currentPage"
                />
      </b-col>
    </b-row>
  </div>
        
   
  </template>
  
  <script>
  
  
  
  //import {BRow ,BPagination,BCol} from "bootstrap-vue";
  import RouteItem from "./RouteItem.vue";
  export default {
    name: "RouteList",
   //components: { RouteItem, BRow,BCol ,BPagination},
   components: { RouteItem},
    data() {
      return {
        routes: [],
        items: [],
        paginatedItems: [],
        currentPage: 1,
        perPage: 6,
        totalRows: 2,
      };
    },
    async mounted() {
      let response = await fetch("https://caminicosapi.azurewebsites.net/routes").then((data) =>
      //let response = await fetch("http://localhost:2044/routes").then((data) =>
        data.json()
      );
      this.routes = response;
      this.items = response;
      console.log(response);
  
      this.paginate(this.perPage, 0);
      this.totalRows = response.length
    },
    methods: {
      paginate(page_size, page_number) {
        let itemsToParse = this.items;
        this.paginatedItems = itemsToParse.slice(
          page_number * page_size,
          (page_number + 1) * page_size
        );
      },
      onPageChanged(page) {
        this.paginate(this.perPage, page - 1);
      },
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