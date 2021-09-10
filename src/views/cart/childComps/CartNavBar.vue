<template>
  <div class="cart-nav-bar">
    <nav-bar >
      <div slot="center">购物车({{$store.state.product.length}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="less" scoped>
.cart-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}

</style>