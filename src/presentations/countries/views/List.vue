<template>
  <main class="w-full max-w-6xl mx-auto">
    <div class="flex flex-wrap -mx-4 overflow-hidden">
      <div
        v-for="country of state.countries"
        :key="country.alpha2Code"
        class="my-4 px-4 w-full overflow-hidden md:w-1/2 lg:w-1/2"
      >
        <Country
          :alpha2Code="country.alpha2Code"
          :alpha3Code="country.alpha3Code"
          :name="country.name"
          :capital="country.capital"
          :region="country.region"
        />
      </div>
    </div>
  </main>
  <h1>List</h1>
</template>
<script>
import { defineComponent, reactive } from "vue";
import { get } from "@/utils/api";

export default defineComponent({
  setup() {
    const state = reactive({
      countries: [],
    });

    const getCountries = async () => {
      state.countries = await get(
        "alpha?codes=aus;be;bra;ca;chn;cz;es;fra;de;hu;ind;ita;jpn;me;nl;pl;ro;ru;sg;se;ch;ua;gb;usa"
      );
      console.log(state.countries);
    };
    getCountries();
    return {
      state,
    };
  },
});
</script>