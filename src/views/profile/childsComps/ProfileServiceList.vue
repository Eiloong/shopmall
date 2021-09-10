<template>
  <div class="profile-service-list">
    <div class="cart icon">
      <span>我的购物车</span>
    </div>
    <div class="app icon">
      <span>下载APP</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.profile-service-list {
  .icon {
    position: relative;
    padding: 12px 0;
    border-bottom: 1px solid #eaeaea;
    margin-left: 50px;
    font-size: 15px;
    color: #222222;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -30px;
      bottom: 0;
      margin: auto;
      width: 23px;
      height: 23px;
      background-size: 100% 100%;
    }
  }
  .cart::before {
    background-image: url("~assets/img/profile/cart.svg");
  }
  .app::before {
    background-image: url("~assets/img/profile/pointer.svg");
  }
}
</style>