<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GridColumn",
  props: {
    xs: {
      type: [String, Number],
      required: false,
      default: null
    },
    sm: {
      type: [String, Number],
      required: false,
      default: null
    },
    md: {
      type: [String, Number],
      required: false,
      default: null
    },
    lg: {
      type: [String, Number],
      required: false,
      default: null
    },
    xl: {
      type: [String, Number],
      required: false,
      default: null
    },
    alignSelf: {
      type: String,
      required: false,
      default: null,
      validator(value) {
        return ["start", "center", "end"].includes(value);
      }
    }
  },
  data() {
    return {
      sizes: ["xs", "sm", "md", "lg", "xl"]
    };
  },
  computed: {
    classNames() {
      const classes = [];
      this.sizes.forEach(size => {
        const targetSize = this[size];
        if (targetSize) {
          if (size === "xs") {
            classes.push(`col-${targetSize}`);
          } else {
            classes.push(`col-${size}-${targetSize}`);
          }
        }
      });
      if (classes.length === 0) {
        classes.push("col");
      }
      if (this.alignSelf) {
        classes.push(`align-self-${this.alignSelf}`);
      }
      return classes;
    }
  }
};
</script>
