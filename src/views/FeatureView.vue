<template>
    <div class="feature">
      <div class="row">
        
        <div>

          <br>
          <FeatureDetails></FeatureDetails>
        </div></div>
    
    </div>
    
  </template>
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import FeatureDetails from "../components/FeatureDetails.vue";

  export default {
    name: "FeatureView",
    components: {
    FeatureDetails,
  },
  }
    
  </script>
  