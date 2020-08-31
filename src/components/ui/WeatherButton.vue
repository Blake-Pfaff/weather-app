<template>
  <div>
    <button @click="handleClick">
      <AppIcon icon="sun-o" />
    </button>
  </div>
</template>

<script>
import { AppIcon } from "@/components/ui";
export default {
  name: "WeatherButton",
  components: {
    AppIcon
  },
  methods: {
    handleClick() {
      this.$emit("fetchWeather");
    }
  }
};
</script>

<style></style>
