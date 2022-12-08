<template>
  <div class="home">
    
      
        <RouteList></RouteList>
      <br>
       <AppTipVue></AppTipVue>
    
    
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RouteList from "../components/RouteList.vue";
import AppTipVue from '@/components/AppTip.vue';

export default {
  name: "HomeView",
  components: {
    RouteList,
    AppTipVue
  },
}
  
</script>