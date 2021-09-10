<template>
  <div class="cart-bottom-bar">
    <div class="select" @click="handleCartBarSelect">
      <check-button class="check-button" :is-show="isShow" />
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计：¥{{ price }}</span>
    </div>
    <div class="computed" @click="handleProductTotal">去计算({{ productCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["getProduct"]),
    price() {
      return this.getProduct
        .filter((item) => item.checked)
        .reduce((pre, value) => {
          return (pre += Number(value.price.split("¥")[1]) * value.count);
        }, 0)
        .toFixed(2);
    },
    isShow() {
      if (this.getProduct.length !== 0) {
        return this.getProduct.every((item) => {
          return item.checked;
        });
      }
    },
    productCount() {
      return this.getProduct
        .filter((item) => item.checked)
        .reduce((pre, value) => {
          return (pre += value.count);
        }, 0);
    },
  },
  methods: {
    handleCartBarSelect() {
      if (this.isShow) {
        this.getProduct.map((item) => {
          item.checked = false;
        });
      } else {
        this.getProduct.map((item) => {
          item.checked = true;
        });
      }
    },
    handleProductTotal() {
      if(!this.productCount) {
        this.$toast.controlToast('请选择商品')
      }
    }
  }
};
</script>
<style lang="less" scoped>
.cart-bottom-bar {
  position: fixed;
  display: flex;
  align-items: center;
  height: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eeeeee;
  font-size: 15px;
  .select {
    flex: 0.2;
    margin: 0 10px;
    .check-button {
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
  .total {
    flex: 0.5;
    font-size: 17px;
  }
  .computed {
    flex: 0.3;
    height: 100%;
    line-height: 44px;
    text-align: center;
    background-color: #f4511e;
    color: #ffffff;
  }
}
</style>