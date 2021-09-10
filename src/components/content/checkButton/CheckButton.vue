<template>
  <div
    class="check-button"
    @click="handleCheckButton"
  >
    <img src="~assets/img/cart/tick.svg" alt=""  :class="{ show: !isShow }" />
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCheckButton() {
      this.$emit("handleCheckButton");
    },
  },
};
</script>
<style lang="less" scoped>
.check-button {
  img {
    border-radius: 50%;
    border: 2px solid var(--color-tint);
    background-color: var(--color-tint);
  }
  .show {
    background-color: #fff;
  }
}
</style>