<template>
  <div class="home">
    <div class="row">
      <div class="col-8">
        <RouteList></RouteList>
      </div></div>
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
<!-- ANTERIORRRRRR
<template>
  <div class="home">
  <AppTipVue></AppTipVue>
    
  </div>
</template>

<script>
import AppTipVue from '@/components/AppTip.vue';

export default {
  name: 'HomeView',
  components: {
    AppTipVue
  }
}
</script>

-->