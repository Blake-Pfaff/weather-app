import { shallowMount } from "@vue/test-utils";
import DashBoard from "@/views/DashBoard.vue";

describe("DashBoard", () => {
  test("should render content correctly", () => {
    const wrapper = shallowMount(DashBoard, {
      stubs: ["RouterLink", "RouterView"],
    });
    expect(wrapper.exists()).toBe(true);
  });
});
