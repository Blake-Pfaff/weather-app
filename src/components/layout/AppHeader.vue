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
          <SearchBar
            :search-term="searchTerm"
            @on-change="handleSearchTermChange"
            @on-search="fetchWeatherByZip"
          />
        </GridColumn>
        <GridColumn>
          <WeatherButton xs="md-4" @fetchWeather="fetchWeatherByZip" />
        </GridColumn>
      </GridRow>
    </GridContainer>
    <pre v-text="weatherData" />
  </div>
</template>

<script>
import {
  GridRow,
  GridColumn,
  GridContainer,
  AppLogo,
  SearchBar,
  WeatherButton,
} from "@/components";

import { API } from "@/services";

export default {
  name: "AppHeader",
  data() {
    return {
      weatherData: {},
      searchTerm: "",
    };
  },
  components: {
    GridRow,
    GridColumn,
    GridContainer,
    AppLogo,
    SearchBar,
    WeatherButton,
  },
  methods: {
    async fetchWeatherByZip() {
      try {
        const data = await API.fetchWeatherByZip(this.searchTerm);
        this.weatherData = data;
      } catch (error) {
        alert(error.message);
      }
    },
    handleSearchTermChange(value) {
      this.searchTerm = value;
    },
  },
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
