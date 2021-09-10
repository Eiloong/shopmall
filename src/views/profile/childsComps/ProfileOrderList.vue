<template>
  <div class="profile-order-list">
    <div class="info icon">
      <span>我的消息</span>
    </div>
    <div class="shop icon">
      <span>积分商城</span>
    </div>
    <div class="member icon">
      <span>会员卡</span>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.profile-order-list {
  
  border-bottom: 10px solid #eaeaea;
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
      bottom: 0;
      margin: auto;
      left: -30px;
      width: 23px;
      height: 23px;
      background-size: 100% 100%;
    }
  }
    .info::before {
    background-image: url("~assets/img/profile/message.svg");
  }
  .shop::before {
    background-image: url("~assets/img/profile/shopping.svg");
  }
   .member::before {
    background-image: url("~assets/img/profile/vip.svg");
  }
}
</style>