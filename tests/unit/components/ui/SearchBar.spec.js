import SearchBar from "@/components/ui/SearchBar";
import { shallowMount } from "@vue/test-utils";

describe("SearchBar.vue", () => {
  it("it emits an on-change event when the input changes", async () => {
    const wrapper = shallowMount(SearchBar);
    const input = wrapper.find(".SearchBar__input");
    input.element.value = "123";
    input.trigger("input");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()["on-change"]).toBeTruthy();
  });

  it("it emits an on-search event when the input is searched on", async () => {
    const wrapper = shallowMount(SearchBar, {
      mocks: {
        $route: {
          path: "/",
          query: {
            search: "TEST",
          },
        },
      },
    });
    await wrapper.vm.$nextTick();
    const input = wrapper.find(".SearchBar__input");
    input.trigger("keyup.enter");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()["on-search"]).toBeTruthy();
  });

  it("clears the input when the button is clicked", async () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        searchTerm: "TEST",
      },
    });
    const btn = wrapper.find(".SearchBar__clear");
    btn.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()["on-change"]).toBeTruthy();
  });
});
