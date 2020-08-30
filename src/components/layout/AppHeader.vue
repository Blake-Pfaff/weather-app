<template>
  <div class="AppHeader">
    <GridContainer>
      <GridRow align-items="center">
        <GridColumn xs="md-4">
          <RouterLink to="/" class="AppHeader__logo">
            <AppLogo />
          </RouterLink>
        </GridColumn>
        <GridColumn xs="md-4">
          <SearchBar @on-search="handleSearch" />
        </GridColumn>
        <GridColumn>
          <WeatherButton xs="md-4" />
        </GridColumn>
      </GridRow>
    </GridContainer>
  </div>
</template>

<script>
import {
  GridRow,
  GridColumn,
  GridContainer,
  AppLogo,
  SearchBar,
  WeatherButton,
} from "@/components";

export default {
  name: "AppHeader",
  components: {
    GridRow,
    GridColumn,
    GridContainer,
    AppLogo,
    SearchBar,
    WeatherButton,
  },
  methods: {
    handleSearch(searchTerm) {
      if (searchTerm !== this.$route.query.search) {
        this.$router.push({
          name: "DashBoard",
          query: { ...this.$route.query, search: searchTerm || undefined },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.AppHeader {
  &__logo {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
