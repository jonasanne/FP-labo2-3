<template>
  <header class="flex justify-around items-center w-full max-w-6x1 mx-auto my-8 px-4">
    <router-link class="text-alpha font-semibold text-2xl opacity-75 hover:opacity-100" to="/">Countries Explorer</router-link>
    <nav class="flex">
        <router-link class="text-lg" to="/">Home</router-link>
        <router-link class="text-lg ml-6" to="/">About</router-link>
    </nav>
  </header>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>