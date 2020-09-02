import WeatherInfo from "@/components/ui/WeatherInfo";
import { shallowMount } from "@vue/test-utils";

const mockData = {
  coord: { lon: -88.32, lat: 42.04 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
  base: "stations",
  main: {
    temp: 301.82,
    feels_like: 297.97,
    temp_min: 300.93,
    temp_max: 302.59,
    pressure: 1010,
    humidity: 32,
  },
  visibility: 10000,
  wind: { speed: 5.7, deg: 280, gust: 11.3 },
  clouds: { all: 1 },
  dt: 1599084679,
  sys: {
    type: 1,
    id: 3851,
    country: "US",
    sunrise: 1599045635,
    sunset: 1599092725,
  },
  timezone: -18000,
  id: 0,
  name: "Elgin",
  cod: 200,
};

describe("WeatherInfo.vue", () => {
  it("renders when weather exists", () => {
    const wrapper = shallowMount(WeatherInfo, {
      propsData: {
        weather: mockData,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
