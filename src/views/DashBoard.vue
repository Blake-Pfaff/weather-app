<template>
  <div class="DashBoard">
    <GridContainer>
      <AppHeader />
    </GridContainer>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import { GridContainer } from "@/components";

export default {
  name: "DashBaord",
  components: {
    AppHeader,
    GridContainer
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables";
.DashBoard {
  background-color: map-get($colors, "gb-green");
}
</style>
