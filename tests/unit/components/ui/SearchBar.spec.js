import SearchBar from "@/components/ui/SearchBar";
import { shallowMount } from "@vue/test-utils";
describe("SearchBar.vue", () => {
  it("it keeps track of the user text in a reactive variable", async () => {
    const wrapper = shallowMount(SearchBar, {
      mocks: {
        $route: {
          path: "/",
          query: {
            search: "test text",
          },
        },
      },
    });
    const userInput = "Some Search Text";
    const input = wrapper.find(".SearchBar__input");
    await input.setValue(userInput);
    expect(wrapper.vm.searchTerm).toBe(userInput);
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
    input.trigger("search");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()["on-search"]).toBeTruthy();
    expect(wrapper.emitted()["on-search"][0][0]).toEqual("TEST");
  });
});
