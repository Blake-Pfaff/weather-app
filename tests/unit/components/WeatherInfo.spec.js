import WeatherInfo from "@/components/ui/WeatherInfo";
import { shallowMount } from "@vue/test-utils";
describe("WeatherInfo.vue", () => {
  it("renders when weatherObjectReceived is true", () => {
    const wrapper = shallowMount(WeatherInfo, {
      propsData: {
        weatherObjectReceived: true,
        weatherObject: {
          weather: "rainy",
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.weatherObject.weather).toBe("rainy");
  });
});
