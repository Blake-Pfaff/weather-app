<template>
  <div class="SearchBar">
    <div class="SearchBar__searchIcon" @click="handleIconClick">
      <AppIcon icon="search" />
    </div>
    <input
      v-model="searchTerm"
      ref="input"
      :class="`SearchBar__input`"
      :type="`search`"
      :placeholder="`Enter your Zip Code`"
      @search="handleSearch"
    />
  </div>
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
    handleIconClick() {
      this.$refs.input.focus();
    },
    handleSearch() {
      this.$emit("on-search", this.searchTerm);
    },
    setup() {
      this.searchTerm = this.$route.query.search || "";
    }
  },
  mounted() {
    this.setup();
  }
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
