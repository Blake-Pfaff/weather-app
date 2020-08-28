import { shallowMount } from "@vue/test-utils";
import AppHeader from "@/components/layout/AppHeader.vue";

describe("AppHeader", () => {
  test("should render content correctly", () => {
    const wrapper = shallowMount(AppHeader);
    expect(wrapper.is(AppHeader)).toBe(true);
  });
});
