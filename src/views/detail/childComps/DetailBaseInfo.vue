<template>
  <div class="detail-goods-info" v-if="Object.keys(goods).length !== 0">
    <p class="title">
      {{ goods.title }}
    </p>
    <div class="price">
      <span class="new-price">{{ goods.price }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span
        :style="{ backgroundColor: goods.discountBgColor }"
        class="discount-desc"
        >{{ goods.discountDesc }}</span
      >
    </div>
    <div class="columns" v-if="goods.columns">
      <span v-for="index in goods.columns.length - 1">
        {{ goods.columns[index] }}
      </span>
      <span>{{ goods.services[0].name }}</span>
    </div>
    <div class="services" v-if="goods.services">
      <div v-for="index in goods.services.length - 2">
        <img :src="goods.services[index + 1].icon" alt="" />
        <span>{{ goods.services[index + 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="less" scoped>
.detail-goods-info {
  padding: 20px 0 10px 0;
  border-bottom: 5px solid #eaeaea;
  font-size: 13px;
  .title,
  .price,
  .columns,
  .services {
    padding: 0 10px;
  }
  .title {
    font-size: 16px;
    color: #222222;
  }
  .price {
    margin: 15px 0;
    .new-price {
      font-size: 24px;
      font-weight: bold;
      color: var(--color-high-text);
    }
    .old-price {
      margin: 0 8px;
      text-decoration: line-through;
    }
    .discount-desc {
      position: relative;
      top: -5px;
      padding: 3px;
      border-radius: 6px;
      font-size: 14px;
      color: #ffffff;
    }
  }
  .columns,
  .services {
    display: flex;
    justify-content: space-between;
  }
  .columns {
    padding: 10px;
    border-bottom: 2px solid #eaeaea;
  }
  .services {
    padding: 15px 10px;
    color: #222222;
    div {
      img {
        width: 15px;
        vertical-align: middle;
      }
    }
  }
}
</style>