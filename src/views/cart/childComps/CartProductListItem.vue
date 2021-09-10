<template>
  <div class="product-product-list-item">
    <check-button
      class="check-button"
      :is-show="isShow"
      @handleCheckButton="handleCheckButton"
    />
    <img :src="item.img" alt="" @load="handleCartImg" />
    <div class="info">
      <h4 class="title">{{ item.title }}</h4>
      <p class="desc">{{ item.desc }}</p>
      <div class="computational-correlation">
        <span class="price">{{ item.price }}</span>
        <div class="quantity-box">
          <div class="left" @click="handleCountReduce">-</div>
          <div class="center">{{ item.count }}</div>
          <div class="right"  @click="handleCountIncrease">+</div>
        </div>
        <!-- <span class="count">x{{ item.count }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.item.checked;
    },
  },
  components: {
    CheckButton,
  },
  activated() {
    // 这样做是为了解决在页面中无法拿到正确的count的bug
  },
  methods: {
    handleCartImg() {
      this.$emit("handleCartImg");
    },
    handleCheckButton() {
      const payload = {
        iid: this.item.iid,
        checked: !this.isShow,
      };
      this.$store.commit("productChecked", payload);
    },
    handleCountReduce() {
      if(this.item.count === 1) {
        return false
      }
      this.$store.commit('productCountReduce', this.item.iid)
    },
    handleCountIncrease() {
      this.$store.commit('productCountIncrease', this.item.iid)
    }
  },
};
</script>
<style lang="less" scoped>
.product-product-list-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid #eeeeee;
  overflow: hidden;
  .check-button {
    margin: 10px;
  }
  img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
  }
  .info {
    overflow: hidden;
    margin: 0 20px;
    .title,
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      margin: 20px 0;
    }
    .computational-correlation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price {
        color: #ff5722;
      }
      .quantity-box {
        display: flex;
        width: 100px;
        height: 24px;
        border: 2px solid #eee;
        text-align: center;
        .left, .right {
          height: 100%;
          flex: .3;
        }
        .center {
          border-right: 2px solid #eee;
          border-left: 2px solid #eee;
          flex: .4;
        }
      }
    }
  }
}
</style>