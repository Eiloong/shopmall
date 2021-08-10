<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" 
           :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>

  <!-- <div class="dressInfo" v-if="detailInfo">
    <div class="desc">
      <div class="desc_before"></div>
      {{detailInfo.desc}}
      <div class="desc_after"></div>
    </div>
    <div v-for="item in detailInfo.detailImage">
      <p>{{item.key}}</p>
      <div v-for="item1 in item.list" class="desc_img" >
        <img :src="item1" alt="" @load="imgLoad">
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      ImagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.ImagesLength) {
        this.$emit('imageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.ImagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
  /* .dressInfo{
    padding: 10px;
    .desc{
      color: #666666;
      font-size: 14px;
      position: relative;
      .desc_before{
        width: 90px;
        height: 1px;
        position: relative;
        background-color: #666666;
        margin-bottom:15px;
        margin-top: 10px;
        &::before{
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          width: 5px;
          height: 5px;
          background-color: black;
        }
      }
      .desc_after{
        position: relative;
        left: 75%;
        width: 90px;
        height: 1px;
        background-color: #666666;
        margin-bottom:15px;
        margin-top: 10px;
        &::after{
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 5px;
          height: 5px;
          background-color: black;
        }
      }

    }
    .desc_img{
      padding-top: 10px;
      img {
        width: 100%;
      }
    }
  } */
</style>