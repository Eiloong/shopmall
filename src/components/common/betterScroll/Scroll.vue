<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollEvent", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    scrollTo(x=0, y=0, time = 600) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style lang="less" scoped>
</style>