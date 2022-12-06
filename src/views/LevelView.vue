<template>
    <div class="level">
      <div class="row">
        
        <div>
          <LevelList></LevelList>

        </div></div>
    
    </div>
    
  </template>
  
  <script>
  import LevelList from "@/components/LevelList.vue";

  export default {
    name: "LevelView",
    components: {
    LevelList,
  },
  }
    
  </script>
  