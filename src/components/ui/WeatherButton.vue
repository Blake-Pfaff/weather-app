<template>
  <div class="WeatherButtonContainer">
    <button class="WeatherButton" @click="handleClick">
      <p>Click for Weather</p>
      <AppIcon icon="spinner" class="fa-spin fa-fw" />
    </button>
  </div>
</template>

<script>
import { AppIcon } from "@/components/ui";
export default {
  name: "WeatherButton",
  components: {
    AppIcon,
  },
  methods: {
    handleClick() {
      this.$emit("fetchWeather");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";
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
</style>
