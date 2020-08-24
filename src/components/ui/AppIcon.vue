<template>
  <i :class="classNames"></i>
</template>

<script>
export default {
  name: "AppIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false
    },
    spin: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    classNames() {
      const classes = ["fa", `fa-${this.icon}`];
      if (this.fixed) {
        classes.push("fa-fw");
      }
      if (this.spin) {
        classes.push("fa-spin");
      }
      return classes;
    }
  }
};
</script>
