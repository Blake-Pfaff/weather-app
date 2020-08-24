<template>
  <div class="AppHeader">
    <GridContainer>
      <GridRow align-items="center">
        <GridColumn xs="3">
          <RouterLink to="/" class="AppHeader__logo">
            <AppLogo />
          </RouterLInk>
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
  SearchBar
} from "@/components";

export default {
  name: "AppHeader",
  components: {
    GridRow,
    GridColumn,
    GridContainer,
    AppLogo,
    SearchBar
  },
  methods: {
    handleSearch(searchTerm) {
      if (searchTerm !== this.$route.query.search) {
        this.$router.push({
          name: "dashboard",
          query: { ...this.$route.query, search: searchTerm || undefined }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
