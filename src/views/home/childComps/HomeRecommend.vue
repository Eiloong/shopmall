<template>
  <div class="home-recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.home-recommend {
  display: flex;
  padding: 20px 0;
  text-align: center;
  border-bottom: 10px solid #eeeeee;
  font-size: 15px;
  
  .recommend-item {
    flex: 1;
    img {
      width: 60px;
    }
    span {
      display: block;
    }
  }
}
</style>
