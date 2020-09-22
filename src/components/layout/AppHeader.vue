<template>
  <div class="AppHeader">
    <slot />
  </div>
</template>

<style>
.AppHeader {
  overflow: hidden;
}
</style>

<script>
export default {
  name: "AppHeader"
};
</script>