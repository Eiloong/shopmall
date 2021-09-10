<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="top">
      <img :src="shopInfo.img" alt="" />
      <span>{{ shopInfo.title }}</span>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="center-left-cSells">
          {{ shopInfo.cSells | rounding }}万
          <span>总销量</span>
        </div>
        <div class="center-left-cGoods">
          {{ shopInfo.cGoods }}
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="center-right">
        <div v-for="(item, index) in shopInfo.score" class="score">
          <span>{{ item.name }}</span>
          <span
            :style="{ color: item.isBetter ? '#f13e3a' : '#5ea732' }"
            class="grade"
          >
            {{ item.score }}
          </span>
          <div class="grade-text" :class="{ bgc: item.isBetter }">
            <span v-if="item.isBetter">高</span>
            <span v-else>低</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span> 进店逛逛 </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    rounding(cSells) {
      return (cSells / 10000).toFixed(1);
    },
  },
};
</script>
<style lang="less" scoped>
.detail-shop-info {
  padding: 20px 0 10px 0;
  border-bottom: 5px solid #eaeaea;
  .top,
  .center,
  .bottom {
    padding: 0 10px;
  }
  .top {
    img {
      width: 60px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .center {
    display: flex;
    align-items: center;
    margin: 10px 0;
    text-align: center;
    color: #222222;
    font-size: 13px;
    font-weight: bold;
    .center-left,
    .center-right {
      width: 50%;
    }
    .center-left {
      display: flex;
      border-right: 2px solid #eaeaea;
      justify-content: space-evenly;
      span {
        display: block;
        margin-top: 10px;
      }
    }
    .center-right {
      text-align: left;
      padding-left: 30px;
      .score {
        margin-top: 10px;
        .grade {
          display: inline-block;
          width: 25px;
          margin: 0 15px;
        }
        .grade-text {
          display: inline;
          background-color: #5ea732;
          color: #ffffff;
          font-weight: normal;
        }
        .bgc {
          background-color: #f13e3a;
        }
      }
    }
  }
  .bottom {
    text-align: center;
    margin: 30px 0;
    font-size: 15px;
    span {
      padding: 10px 35px;
      border-radius: 10px;
      background-color: #eeeeee;
    }
  }
}
</style>