<template>
  <div class="AppHeader">
    <GridContainer>
      <GridRow align-items="center">
        <GridColumn xs="md-4">
          <RouterLink to="/" class="AppHeader__logo">
            <AppLogo />
          </RouterLink>
        </GridColumn>
        <GridColumn xs="md-4">
          <SearchBar @on-search="handleSearch" />
        </GridColumn>
        <GridColumn>
          <WeatherButton xs="md-4" @fetchWeather="fetchWeatherByZip(searchTerm)" />
        </GridColumn>
      </GridRow>
    </GridContainer>
  </div>
</template>

<script>
import {
  GridRow,
  GridColumn,
  GridContainer,
  AppLogo,
  SearchBar,
  WeatherButton
} from "@/components";

import { API } from "@/services";

export default {
  name: "AppHeader",
  data() {
    return {
      searchTerm: 60156
    };
  },
  components: {
    GridRow,
    GridColumn,
    GridContainer,
    AppLogo,
    SearchBar,
    WeatherButton
  },
  methods: {
    async handleSearch(searchTerm) {
      if (searchTerm !== this.$route.query.search) {
        this.$router.push({
          name: "DashBoard",
          query: { ...this.$route.query, search: searchTerm || undefined }
        });
        alert();

        const zip = this.searchTerm;

        console.log(zip);
        await API.fetchWeatherByZip(zip);
      }
    },
    fetchWeatherByZip() {
      console.log(this.searchTerm);
      if (this.searchTerm === isNaN()) {
        console.log("nope");
      } else {
        console.log("yup");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.AppHeader {
  &__logo {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
