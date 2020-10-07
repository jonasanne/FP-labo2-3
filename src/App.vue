<template >
<div class="bg-white">
<headerBar/> 
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderBar from '@/presentations/shared/components/HeaderBar.vue';
export default defineComponent({
  components:{
    HeaderBar
  },
  
  setup(){
    return{}
  }
})
</script>

