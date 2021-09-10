<template>
<div id="cart">
  <cart-nav-bar />
  <cart-product-list />
  <cart-bottom-bar />
  </div>  
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import CartProductList from './childComps/CartProductList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
  components: {
    CartNavBar,
    CartProductList,
    CartBottomBar
  }
}
</script>

<style lang="less" scoped>

</style>