<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      @handleTabControl="handleTabControl"
      ref="tabControl1"
      class="tab-control-1"
      v-show="isActive"
      :titles="titles"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollEvent="scrollEvent"
      @pullingUp="pullingUp"
    >
      <home-swiper
        :banner="banner"
        @handleHomeSwiperImg="handleHomeSwiperImg"
      />
      <home-recommend :recommend="recommend" />
      <home-feature-view />
      <tab-control @handleTabControl="handleTabControl" ref="tabControl"  :titles="titles" />
      <goods-list :goods="goods[activeTitle].list" />
    </scroll>
    <back-top :is-show="isShow" @handleBackTop="handleBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/betterScroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";

import { getHomeBanner, getHomeData } from "network/home";

import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      activeTitle: "pop",
      refresh: null,
      tabControlOffsetTop: 0,
      isActive: false,
      positionY: 0,
      scrollY: 0,
      titles: ["流行", "新款", "精选"]
    };
  },
  components: {
    NavBar,
    Scroll,
    GoodsList,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
  },
  created() {
    this.getHomeBanner();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.positionY;
  },
  mixins: [backTopMixin],
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("handleGoodsListImg", () => {
      this.refresh();
    });
  },
  methods: {
    getHomeBanner() {
      getHomeBanner().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeData(type) {
      let page = this.goods[type].page;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
      });
    },
    handleTabControl(index) {
      switch (index) {
        case 0:
          this.activeTitle = "pop";
          break;
        case 1:
          this.activeTitle = "new";
          break;
        default:
          this.activeTitle = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    handleHomeSwiperImg() {
      this.refresh();
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    scrollEvent(position) {
      this.isShow = position.y < -1000 ? true : false;
      this.positionY = position.y;
      if (position.y <= -this.tabControlOffsetTop)
        return (this.isActive = true);
      this.isActive = false;
    },
    pullingUp() {
      this.getHomeData(this.activeTitle);
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
  overflow: hidden;
  .nav-bar {
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 1;
  }
  .tab-control-1 {
    position: absolute;
    width: 100%;
    background-color: #fff;
    z-index: 9;
  }
  .content {
    position: relative;
    height: calc(100% - 49px - 44px);
    overflow: hidden;
  }
}
</style>