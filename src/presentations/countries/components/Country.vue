<template>
  <div>
      <header>
          <img :src="`https://restcountries.eu/data/${alpha3Code.toLowerCase()}.svg`" :alt="`this is a image of the country : ${name}`">
      <h2>{{name}}</h2>
      </header>
      <div>
          <div>
              <h3>Capital</h3>
              <p>{{capital}}</p>

              <h3>Regio</h3>
              <p>{{region}}</p>
              
              <h3>Rating</h3>
              <!-- <p>{{capital}}</p> -->
          </div>
          <img :src="getFlag(alpha2Code)" alt="">
      </div>
    <!-- <p>name</p>
    <p>capital</p>
    <p>region</p>
    <p>region</p>
    <p>alpha2Code</p>
    <p>alpha3Code</p> -->
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    capital: String,
    region: String,
    region: String,
    alpha2Code: String,
    alpha3Code: String,
  },
  setup() {
      const getFlag = (alpha2Code: string ): string => {
          return require(`@/assets/country-flags/${alpha2Code}.png`);

      };
    return {
        getFlag
    };
  },
});
</script>