<template>
  <div class="cart-product-list">
    <scroll class="scroll" ref="scroll">
    <cart-product-list-item
      v-for="(item, index) in $store.state.product"
      :item="item"
      :key="index"
    />
    </scroll>
  </div>
</template>

<script>
import Scroll from'components/common/betterScroll/Scroll'
import CartProductListItem from "./CartProductListItem";
export default {
  components: {
    Scroll,
    CartProductListItem,
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>
<style lang="less" scoped>
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 93px;
  overflow: hidden;
}
</style>