<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :item="item" :key="index" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>
<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>