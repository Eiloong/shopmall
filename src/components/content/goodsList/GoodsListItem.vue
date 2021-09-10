<template>
  <div class="goods-list-item" @click="handleSkipDetail(item.iid)">
    <img v-lazy="imgPath" alt="" @load="handleGoodsListImg" />
    <div class="goods-list-item-info">
      <p class="info-title">{{ item.title }}</p>
      <span class="info-price">¥{{ item.price }}</span>
      <span class="info-collect">{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imgPath() {
      return this.item.img || this.item.image || this.item.show.img
    }
  },
  methods: {
    handleGoodsListImg() {
      this.$bus.$emit('handleGoodsListImg')
    },
    handleSkipDetail(iid) {
      this.$router.push('/detail/' + iid)
    }
  }
};
</script>
<style lang="less" scoped>
.goods-list-item {
  width: 47%;
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 5px;
  }
  .goods-list-item-info {
    .info-title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 3px;
      font-weight: 700;
    }
    .info-price {
      margin-right: 20px;
      color: var(--color-high-text);
    }
    .info-collect {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: -15px;
        height: 15px;
        width: 15px;
        margin: auto 0;
        background-image: url("~assets/img/common/collect.svg");
        background-size: 100% 100%;
      }
    }
  }
}
</style>