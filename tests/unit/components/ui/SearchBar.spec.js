import SearchBar from "@/components/ui/SearchBar";
import { shallowMount } from "@vue/test-utils";

describe("SearchBar.vue", () => {
  it("clears the input when the button is clicked", async () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        searchTerm: "TEST",
      },
    });
    const btn = wrapper.find(".SearchBar__reset");
    btn.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.handleClear).toBeTruthy();
  });
});
