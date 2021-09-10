<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <img :src="item.image" alt="" @load="handleHomeSwiperImg" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    handleHomeSwiperImg() {
      this.$emit('handleHomeSwiperImg')
    }
  }
};
</script>

<style lang="less" scoped>
  
</style>