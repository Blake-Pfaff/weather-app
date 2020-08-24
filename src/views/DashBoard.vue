<template>
  <div>
    <GridContainer fluid>
      <GridRow>
        <GridColumn xs="auto">test</GridColumn>

        <GridColumn xs="auto">test</GridColumn>

        <GridColumn xs="auto">test</GridColumn>
      </GridRow>
    </GridContainer>
  </div>
</template>

<script>
import { GridRow, GridColumn, GridContainer } from "@/components";

export default {
  name: "DashBaord",
  components: {
    GridRow,
    GridColumn,
    GridContainer
  }
};
</script>

<style></style>
