<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GridRow",
  props: {
    noGutters: {
      type: Boolean,
      required: false,
      default: false
    },
    alignItems: {
      type: String,
      required: false,
      default: null
    },
    justifyContent: {
      type: String,
      required: false,
      default: null,
      validator(value) {
        return ["start", "center", "end"].includes(value);
      }
    }
  },
  computed: {
    classNames() {
      const classes = ["row"];
      if (this.noGutters) {
        classes.push("no-gutters");
      }
      if (this.alignItems) {
        classes.push(`align-items-${this.alignItems}`);
      }
      if (this.justifyContent) {
        classes.push(`justify-content-${this.justifyContent}`);
      }
      return classes;
    }
  }
};
</script>
