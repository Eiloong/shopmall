<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  align-items: center;
  height: 44px;
  line-height: 44px;
  text-align: center;
  .left,
  .right {
    flex: 0.16;
  }
  .center {
    flex: 0.84;
  }
}
</style>
