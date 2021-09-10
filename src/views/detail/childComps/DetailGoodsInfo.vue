<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="introduce">
      <div class="point-above"></div>
      <div class="desc">
        {{ goodsInfo.desc }}
      </div>
      <div class="point-below"></div>
    </div>
    <div class="wearing-effect" v-if="goodsInfo.detailImage">
      <div class="text">
        {{ goodsInfo.detailImage[0].key }}
      </div>
      <div
        class="img"
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
      >
        <img :src="item" alt="" @load="handleGoodsImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsImgLength: 0,
      listLength: 0
    };
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  mounted() {
    
  },
  methods: {
    handleGoodsImg() {
      this.goodsImgLength++;
      if (this.goodsImgLength === this.goodsInfo.detailImage[0].list.length) {
        this.$emit("handleGoodsImg");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.detail-goods-info {
  border-bottom: 5px solid #eaeaea;
  .introduce {
    padding: 20px 10px;
    .point-above,
    .point-below {
      position: relative;
      width: 6px;
      height: 6px;
      background-color: #222222;
    }
    .point-above::after,
    .point-below::after {
      content: "";
      position: absolute;
      top: 100%;
      width: 100px;
      height: 2px;
      background-color: #c3c4c4;
      transform: translateY(-100%);
    }
    .point-above {
      &::after {
        left: 100%;
      }
    }
    .point-below {
      float: right;
      &::after {
        right: 100%;
      }
    }
    .desc {
      margin: 20px 0;
    }
  }
  .wearing-effect {
    .text {
      padding: 10px;
      color: #333333;
    }
    .img img {
      width: 100%;
    }
  }
}
</style>