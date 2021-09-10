<template>
  <div class="toast" v-show="isDisplay">
    {{ content }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      isDisplay: false,
      timer: null,
    };
  },
  methods: {
    controlToast(content, delay=2000) {
      this.content = content;
      this.isDisplay = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isDisplay = false;
      }, delay);
    },
  },
};
</script>
<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 6px 12px;
  transform: translate(-50%, -50%);
  background-color: #222222;
  color: #fff;
  opacity: 0.75;
  z-index: 1;
}
</style>