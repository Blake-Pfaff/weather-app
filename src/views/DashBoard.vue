<template>
  <div class="DashBoard">
    <AppHeader>
      <GridContainer>
        <GridRow align-items="center">
          <GridColumn xs="md-4">
            <RouterLink to="/" class="AppHeader__logo">
              <AppLogo />
            </RouterLink>
          </GridColumn>
          <GridColumn xs="md-5">
            <SearchBar @on-search="fetchWeatherByZip" />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </AppHeader>
    <div class="DashBoard__weather">
      <div v-if="noSelection" class="waiting">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <p v-if="loading">Loading ...</p>
      <WeatherInfo
        WeatherInfo
        v-if="weatherIsLoaded && !loading && !noSelection"
        :weather="weatherData"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import {
  GridContainer,
  GridColumn,
  GridRow,
  AppLogo,
  SearchBar,
  WeatherInfo
} from "@/components";
import { API } from "@/services";

export default {
  name: "DashBaord",
  data() {
    return {
      loading: false,
      weatherData: {},
      noSelection: true
    };
  },
  components: {
    AppHeader,
    SearchBar,
    GridContainer,
    GridColumn,
    GridRow,
    AppLogo,
    WeatherInfo
  },
  methods: {
    async fetchWeatherByZip(zip) {
      try {
        this.loading = true;
        const data = await API.fetchWeatherByZip(zip);
        this.weatherData = data;
      } catch (error) {
        alert(error.message);
      } finally {
        this.noSelection = false;
        this.loading = false;
      }
    }
  },
  computed: {
    weatherIsLoaded() {
      return Object.keys(this.weatherData).length > 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";
.DashBoard {
  &__weather {
    .waiting {
      text-align: center;
      img {
        max-height: 500px;
        max-width: 500px;
      }
    }
  }
}
.AppHeader {
  background-color: map-get($colors, "gb-green");
  &__logo {
    &:hover {
      text-decoration: none;
    }
  }
  .headerLogo {
    text-align: center;
    img {
      max-height: 100px;
    }
    &__title {
      color: map-get($colors, "dark-gb-green");
    }
  }
  .WeatherButtonContainer {
    .WeatherButton {
      border: 1px solid map-get($colors, "dark-gb-green");
      background-color: transparent;

      border-radius: 5px;
      transition: 0.3s;
      p {
        font-size: 11px;
        padding: 0px;
        margin: 0px;
      }
      i {
      }
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: map-get($colors, "light-gb-green");
      }
    }
    @media (max-width: $breakpoint-tablet) {
      text-align: center;
      .WeatherButton {
        width: 75%;
      }
    }
  }
}
</style>
