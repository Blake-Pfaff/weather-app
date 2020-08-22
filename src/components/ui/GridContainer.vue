<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GridContainer",
  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classNames() {
      return this.fluid ? "container-fluid" : "container";
    }
  }
};
</script>
