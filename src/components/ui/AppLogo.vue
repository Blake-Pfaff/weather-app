<template>
  <div class="headerLogo">
    <img src="@/assets/images/logo.png" alt="logo" />
    <h3 class="headerLogo__title">HAPPY CLOUD</h3>
  </div>
</template>

<script>
export default {
  name: "AppLogo",
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";
.headerLogo {
  text-align: center;
  img {
    max-height: 100px;
  }
  &__title {
    color: map-get($colors, "dark-gb-green");
  }
}
</style>
