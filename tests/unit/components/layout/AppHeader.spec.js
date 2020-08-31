import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import AppHeader from "@/components/layout/AppHeader.vue";

describe("AppHeader", () => {
  test("should render content correctly", () => {
    const wrapper = shallowMount(AppHeader, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
