<template>
  <div class="profile-personal-detail">
    <img src="~assets/img/profile/avatar.svg" alt="" />
    <div class="text">
      <div>登录/注册</div>
      <div class="phone">暂时绑定手机号</div>
    </div>
    <div class="arrow-right"></div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.profile-personal-detail {
  display: flex;
  position: relative;
  align-items: center;
  top: -1px;
  padding: 10px;
  background-color: var(--color-tint);
  color: #fff;
  img {
    width: 70px;
    margin-right: 10px;
  }
  .text {
    flex: 1;
    .phone {
      margin-top: 10px;
      color: #dfdfdf;
      font-size: 12px;
      &::before {
        content: "";
        display: inline-block;
        width: 18px;
        height: 18px;
        background-image: url("~assets/img/profile/phone.svg");
        background-size: 100% 100%;
        vertical-align: middle;
      }
    }
  }
  .arrow-right {
    width: 8px;
    height: 8px;
    border-left: 2px solid #dfdfdf;
    border-top: 2px solid #dfdfdf;
    transform: rotate(135deg);
  }
}
</style>