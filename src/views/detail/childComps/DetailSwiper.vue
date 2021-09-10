<template>
  <swiper class="detail-swiper" v-if="Object.keys(swiperImages).length !== 0">
    <swiper-item v-for="(item, index) in swiperImages" :key="index">
      <img :src="item" alt="" @load="handleDetailSwiper" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  data() {
    return {
      record: true,
    };
  },
  props: {
    swiperImages: {
      type: Array,
      dfault: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  mounted() {},
  methods: {
    handleDetailSwiper() {
      if (this.record) {
        this.$emit("handleDetailSwiper");
        this.record = false;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.detail-swiper {
  height: 300px;
  img {
    height: 100%;
  }
}
</style>