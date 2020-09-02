<template>
  <form class="SearchBar" @submit.prevent="handleSearch">
    <div class="SearchBar__searchIcon" @click="handleInputFocus">
      <AppIcon icon="search" />
    </div>
    <input
      v-model="searchTerm"
      ref="input"
      :required="true"
      :class="`SearchBar__input`"
      :type="`text`"
      :placeholder="`Enter your Zip Code`"
    />
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
@import "@/styles/_mixins";

.SearchBar {
  @include flexbox;
  position: relative;
  width: 100%;
  input {
    padding: 5px 40px 5px 30px;
    background: transparent;
    border: 1px solid #777777;
    border-right: 0px;
    &:focus {
      outline: none;
    }
  }
  &__searchIcon {
    position: absolute;
    top: 10px;
    left: 5px;
  }
  &__resetButton {
    background: transparent;
    border: 1px solid #777777;
    border-left: 0px;
    padding: 10px;
    &:focus {
      outline: none;
    }
  }
  &__searchButton {
    button {
      background: transparent;
      border: 1px solid #777777;
      margin-left: 10px;
      padding: 10px;
      transition: 0.3s;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: map-get($colors, "dark-gb-green");
        color: map-get($colors, "light-gray");
      }
    }
  }
  @media (max-width: $breakpoint-tablet) {
    margin-bottom: 30px;
    justify-content: center;
    &__searchIcon {
      display: none;
    }
  }
}
</style>
