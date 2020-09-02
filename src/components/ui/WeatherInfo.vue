<template>
  <div v-if="weather" class="WeatherInfo">
    <h1>
      Looking like {{ currentConditions }} {{ currentTimeOfDay }} in
      {{ city }}
    </h1>
    <h2>{{ currentTemp }} degrees currently</h2>
    <p>(But it feels more like {{ feelsLike }} {{ weatherExcitment }})</p>
    <h3>current humidity {{ weather.main.humidity }}%</h3>
    <h4>Sun rise: {{ sunRise }}</h4>
    <h4>Sun Set: {{ sunSet }}</h4>
    <div>
      <span>Sky be looking like:</span>
      <img :src="imgUrl" />
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "WeatherInfo",

  props: {
    weather: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  methods: {
    convertTime(time) {
      return moment(time * 1000).format("LT");
    },
    toFahrenheit(kelvinTemp) {
      // Prompting the user to enter today's Kelvin temperature
      const kelvin = kelvinTemp;
      // Celsius is 273 degrees less than Kelvin
      const celsius = kelvin - 273;
      // Calculating Fahrenheit temperature to the nearest integer
      let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
      return fahrenheit;
    }
  },
  computed: {
    sunRise() {
      return this.convertTime(this.weather.sys.sunrise);
    },
    sunSet() {
      return this.convertTime(this.weather.sys.sunset);
    },
    imgUrl() {
      return `/images/${this.weather.weather[0].icon}.png`;
    },
    currentWeatherIcon() {
      return this.weather.weather[0].icon;
    },
    city() {
      return this.weather.name;
    },
    currentConditions() {
      return this.weather.weather[0].description;
    },
    currentTemp() {
      return this.toFahrenheit(this.weather.main.temp);
    },
    feelsLike() {
      return this.toFahrenheit(this.weather.main.feels_like);
    },
    weatherExcitment() {
      if (this.feelsLike <= 32) {
        return "better bundle up";
      } else if (this.feelsLike >= 33 && this.feelsLike < 102) {
        return "not to bad";
      } else {
        return "Welp.... should probably brace for the worst";
      }
    },
    currentTimeOfDay() {
      const hr = new Date().getHours(); //get hours of the day in 24Hr format (0-23)
      const halfOfTheDay = hr > 12 ? "This evening" : "this morning";
      return halfOfTheDay;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables";
.WeatherInfo {
  text-align: center;
}
</style>
