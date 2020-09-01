<template>
  <form class="SearchBar" @submit.prevent="handleSearch">
    <div class="SearchBar__searchIcon" @click="handleInputFocus">
      <AppIcon icon="search" />
    </div>
    <div class="SearchBar__input">
      <input
        v-model="searchTerm"
        ref="input"
        :required="true"
        :class="`SearchBar__input`"
        :type="`text`"
        :placeholder="`Enter your Zip Code`"
      />
    </div>
    <div class="SearchBar__reset">
      <button class="SearchBar__resetButton" type="button" @click="handleClear">&times;</button>
    </div>
    <div class="SearchBar__searchButton">
      <button type="submit">Search</button>
    </div>
  </form>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon.vue";

export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: ""
    };
  },
  components: {
    AppIcon
  },
  methods: {
    handleInputFocus() {
      this.$refs.input.focus();
    },
    handleSearch() {
      this.$emit("on-search", this.searchTerm);
    },
    handleClear() {
      this.searchTerm = "";
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variables";

.SearchBar {
}
</style>
