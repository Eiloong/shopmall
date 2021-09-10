<template>
  <div id="profile">
    <profile-nav-bar />
    <profile-personal-detail />
    <div class="account">
      <div class="balance">
        <span class="number">0.00</span>元
        <div class="text">我的余额</div>
      </div>
      <div class="discount">
        <span class="number">0</span>个
        <div class="text">我的优惠</div>
      </div>
      <div class="integral">
        <span class="number">0</span>分
        <div class="text">我的积分</div>
      </div>
    </div>
    <profile-order-list />
    <profile-service-list />
  </div>
</template>

<script>
import ProfileNavBar from "./childsComps/ProfileNavBar";
import ProfilePersonalDetail from "./childsComps/ProfilePersonalDetail";
import ProfileOrderList from './childsComps/ProfileOrderList'
import ProfileServiceList from './childsComps/ProfileServiceList'
export default {
  components: {
    ProfileNavBar,
    ProfilePersonalDetail,
    ProfileOrderList,
    ProfileServiceList
  },
};
</script>

<style lang="less" scoped>
#profile {
  .account {
    display: flex;
    justify-content: space-around;
    border-bottom: 10px solid #eaeaea;
    text-align: center;
    font-size: 13px;
    .balance,.discount,.integral {
    padding: 20px 30px;
    }
    .discount {
      border-left: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
    }
    .number {
      font-size: 20px;
      font-weight: bold;
      color: #ffa13e;
    }
    .text {
      margin-top: 5px;
    }
  }
  
}
</style>