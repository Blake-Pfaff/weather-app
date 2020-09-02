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
import EventBus from "@/events/bus";

export default {
  name: "WeatherButton",
  components: {
    AppIcon
  },
  methods: {
    handleClick() {
      EventBus.$emit("fetchWeather");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";
</style>
