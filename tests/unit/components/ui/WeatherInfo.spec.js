import WeatherInfo from "@/components/ui/WeatherInfo";
import { shallowMount } from "@vue/test-utils";
describe("WeatherInfo.vue", () => {
  it("renders when weatherObjectReceived is true", () => {
    const wrapper = shallowMount(WeatherInfo, {
      propsData: {
        weatherObjectReceived: true,
        weather: {
          weather: "rainy",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.weather.weather).toBe("rainy");
  });
});
