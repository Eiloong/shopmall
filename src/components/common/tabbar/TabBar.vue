<template>
  <div class="tab-bar">
    <slot />
  </div>
</template>

<script>
export default {
  components: {
    
  }
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;
  background-color: #e7e3e3;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.3);
  font-size: 15px;
}
</style>