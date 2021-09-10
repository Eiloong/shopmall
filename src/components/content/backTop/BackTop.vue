<template>
  <div class="back-top" @click="handleBackTop" v-show="isShow">
    <img src="~assets/img/common/top.png" alt="">
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
    handleBackTop() {
      this.$emit('handleBackTop')
    }
  }
};
</script>
<style lang="less" scoped>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 15px;
  img {
    width: 50px;
  }
}
</style>