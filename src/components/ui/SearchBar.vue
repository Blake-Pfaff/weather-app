<template>
  <div class="SearchBar">
    <div class="SearchBar__searchIcon" @click="handleIconClick">
      <AppIcon icon="search" />
    </div>
    <input
      :value="searchTerm"
      ref="input"
      :class="`SearchBar__input`"
      :type="`text`"
      :placeholder="`Enter your Zip Code`"
      @input="handleInput"
      @keyup.enter="handleSearch"
    />
    <button class="SearchBar__clear" type="button" @click="handleClear">
      &times;
    </button>
  </div>
</template>

<script>
import AppIcon from "@/components/ui/AppIcon.vue";

export default {
  name: "SearchBar",
  props: {
    searchTerm: {
      type: String,
      required: false,
      default: "",
    },
  },
  components: {
    AppIcon,
  },
  methods: {
    handleIconClick() {
      this.$refs.input.focus();
    },
    handleSearch() {
      this.$emit("on-search");
    },
    handleInput(event) {
      this.$emit("on-change", event.target.value);
    },
    handleClear() {
      this.$emit("on-change", "");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables";

.SearchBar {
  position: relative;

  ::placeholder {
    color: map-get($colors, "dark-gb-green");
  }

  &__searchIcon {
    position: absolute;
    top: 8px;
    left: 10px;
    cursor: pointer;
  }

  &__input {
    width: 100%;
    background: transparent;
    border: 1px solid gray;
    height: 40px;
    padding: 0 10px 0 33px;
    outline: 0;

    &:focus {
      outline: 0;
      border: 1px solid #d4d4d4;
      border-radius: 3px;
      background: map-get($colors, "light-gb-green");
    }
  }
  @media (max-width: $breakpoint-tablet) {
    margin: 10px auto;
    text-align: center;
    &__input {
      width: 75%;
    }
    &__searchIcon {
      display: none;
    }
  }
}
</style>
