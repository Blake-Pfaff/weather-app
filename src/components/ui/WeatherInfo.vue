<template>
  <div v-if="weather" class="WeatherInfo">
    <h1>Seeing {{ currentConditions }} {{ currentTimeOfDay }}</h1>
    <h2>{{ toFahrenheit }} degrees currently</h2>
    <pre v-text="weather" />
  </div>
</template>

<script>
export default {
  name: "WeatherInfo",

  props: {
    weather: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  computed: {
    currentConditions() {
      return this.weather.weather[0].main;
    },
    toFahrenheit() {
      // Prompting the user to enter today's Kelvin temperature
      const kelvin = this.weather.main.temp;

      // Celsius is 273 degrees less than Kelvin
      const celsius = kelvin - 273;

      // Calculating Fahrenheit temperature to the nearest integer
      let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
      return fahrenheit;
    },
    currentTimeOfDay() {
      const hr = new Date().getHours(); //get hours of the day in 24Hr format (0-23)

      const halfOfTheDay = hr > 12 ? "This evening" : "this morning";

      return halfOfTheDay;
    },
  },
};
</script>

<style></style>
