<template>
  <div id="detail">
    <detail-nav-bar
      :titles="titles"
      ref="navbar"
      @handleCenterBtn="handleCenterBtn"
    />
    <scroll class="content" ref="scroll" @scrollEvent="scrollEvent">
      <detail-swiper
        :swiper-images="swiperImages"
        @handleDetailSwiper="handleDetailSwiper"
      />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-goods-info
        :goods-info="goodsInfo"
        @handleGoodsImg="handleGoodsImg"
      />
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <detail-recommend-info :recommend-info="recommendInfo" ref="recommend" />
    </scroll>
    <back-top :is-show="isShow" @handleBackTop="handleBackTop" />
    <detail-bottom-bar @handleAddCart="handleAddCart" />
    <toast />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DeatilBottomBar";

import Scroll from "components/common/betterScroll/Scroll";
import Toast from "components/common/toast/Toast";

import { backTopMixin } from "common/mixin";
import {
  getDetail,
  GoodsInfo,
  ShopInfo,
  ParamsInfo,
  getRecommend,
} from "network/detail";

import { debounce } from "common/utils";
export default {
  name: "Detail",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      swiperImages: [],
      goods: {},
      shopInfo: {},
      goodsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      scrollPosition: [],
      scrollPositionI: -1,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    Toast,
  },
  created() {
    this.getRecommend();
  },
  mixins: [backTopMixin],
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("handleGoodsListImg", () => {
      refresh();
    });
    this.getDetail(this.$route.params.iid);
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        console.log(res);
        let result = res.result;
        // console.log(result);
        this.swiperImages = result.itemInfo.topImages;
        this.goods = new GoodsInfo(
          result.itemInfo,
          result.columns,
          result.shopInfo
        );
        this.shopInfo = new ShopInfo(result.shopInfo);
        this.goodsInfo = result.detailInfo;
        this.paramsInfo = new ParamsInfo(
          result.itemParams.info,
          result.itemParams.rule
        );
        this.commentInfo = result.rate.list[0];
        // console.log(this.commentInfo);
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendInfo = res.data.list;
      });
    },

    handleDetailSwiper() {
      this.$refs.scroll.refresh();
    },
    handleGoodsImg() {
      this.$refs.scroll.refresh();
      this.scrollPosition[0] = 0;
      this.scrollPosition[1] = this.$refs.params.$el.offsetTop;
      this.scrollPosition[2] = this.$refs.comment.$el.offsetTop;
      this.scrollPosition[3] = this.$refs.recommend.$el.offsetTop;
      this.scrollPosition[4] = Number.MAX_VALUE;
    },
    scrollEvent(position) {
      this.isShow = position.y < -1000 ? true : false;
      for (let i = 0; i < this.scrollPosition.length - 1; i++) {
        if (
          this.scrollPositionI != i &&
          -position.y >= this.scrollPosition[i] &&
          -position.y <= this.scrollPosition[i + 1]
        ) {
          this.scrollPositionI = i;
          this.$refs.navbar.currentIndex = i;
        }
      }
    },
    handleCenterBtn(index) {
      this.$refs.scroll.scrollTo(0, -this.scrollPosition[index]);
    },
    handleAddCart() {
      let commodityData = {};
      commodityData.iid = this.$route.params.iid;
      commodityData.title = this.goods.title;
      commodityData.img = this.swiperImages[0];
      commodityData.desc = this.goodsInfo.desc;
      commodityData.price = this.goods.oldPrice;
      this.$store.dispatch("increaseProductTransition", commodityData).then(res =>{
        this.$toast.controlToast(res)
      })
    },
  },
};
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  z-index: 1;
  .content {
    position: absolute;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 58px;
  }
}
</style>