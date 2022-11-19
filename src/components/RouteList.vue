<template>
    <div class="home">
      
      <div>
        Nuestra rutas
  
        <div>
          <div>
            <b-row deck class="cardgroup">
              <RouteItem
                v-for="rout in paginatedItems"
                :key="rout.id"
                :rout="rout"
              ></RouteItem>
            </b-row>
            <b-row>
              <b-col md="6" class="my-1">
                <b-pagination
                  @change="onPageChanged"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  v-model="currentPage"
                  class="my-0"
                />
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  
  //import { BRow ,BPagination,BCol} from "bootstrap-vue";
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
        perPage: 8,
        totalRows: 4,
      };
    },
    async mounted() {
      let response = await fetch("http://localhost:2044/routes").then((data) =>
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
  width: 100%;
}
.card-item {
  max-width: 270px;
}
.cardgroup {
  row-gap: 10px;
  column-gap: 10px;
  justify-content: center;
}
.space-between {
  display: flex;
  justify-content: space-around;
}
</style>