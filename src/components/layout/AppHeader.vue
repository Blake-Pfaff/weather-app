<template>
  <div class="AppHeader">
    <GridContainer>
      <GridRow align-items="center">
        <GridColumn xs="md-3">
          <RouterLink to="/" class="AppHeader__logo">
            <AppLogo />
          </RouterLink>
        </GridColumn>
        <GridColumn>
          <SearchBar @on-search="handleSearch" />
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
  RouterLink,
} from "@/components";

export default {
  name: "AppHeader",
  components: {
    GridRow,
    GridColumn,
    GridContainer,
    AppLogo,
    SearchBar,
    RouterLink,
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
