<template>
  <div class="detail-bottom-bar">
    <div class="left">
      <div class="customer-service">
        <span></span>
        <div>客服</div>
      </div>
      <div class="shop">
        <span></span>
        <div>店铺</div>
      </div>
      <div class="collection">
        <span></span>
        <div>收藏</div>
      </div>
    </div>
    <div class="right">
      <div @click="handleAddCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleAddCart() {
      this.$emit("handleAddCart");
    },
  },
};
</script>
<style lang="less" scoped>
.detail-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #ffffff;
  box-shadow: 0 -1px 5px #ccc;
  .left,
  .right {
    height: 49px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .left {
    width: 40%;
    justify-content: space-around;
    font-size: 12px;
    .customer-service,
    .shop,
    .collection {
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-bottom: 2px;
        background-image: url("~assets/img/detail/detail_bottom.png");
        background-size: 100%;
      }
    }
    .customer-service {
      span {
        background-position: 0 -53px;
      }
    }
    .shop {
      span {
        background-position: 0 -98px;
      }
    }
    .collection {
      span {
        background-position: 0 0;
      }
    }
  }
  .right {
    width: 60%;
    div {
      flex: 1;
      height: 40px;
      line-height: 40px;
      padding: 0 auto;
    }
    & div:nth-child(1) {
      background: linear-gradient(
        to right,
        rgba(255, 207, 30),
        rgba(255, 137, 23)
      );
      border-radius: 30px 0 0 30px;
      color: #ffffff;
    }
    & div:nth-child(2) {
      background: linear-gradient(
        to right,
        rgba(255, 95, 52),
        rgba(239, 30, 54)
      );
      border-radius: 0 30px 30px 0;
      color: #ffffff;
    }
  }
}
</style>