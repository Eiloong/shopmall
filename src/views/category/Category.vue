<template>
  <div id="category">
    <category-nav-bar />
    <div class="main">
      <category-title-list
        :title-list="titleList"
        @handleCategoryTitle="handleCategoryTitle"
      />
      <Scroll class="content" ref="scroll">
        <category-commodity-list :commodity-list="commodityList" />
        <tab-control :titles="titles" @handleTabControl="handleTabControl" />
        <goods-list :goods="tabControlList" class="goods-list" />
      </Scroll>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/betterScroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";

import CategoryNavBar from "./childComps/CategoryNavBar";
import CategoryTitleList from "./childComps/CategoryTitleList";
import CategoryCommodityList from "./childComps/CategoryCommodityList";

import {
  getCategoryTitles,
  getCategoryMaitKey,
  getCategoryMiniWallkey,
} from "network/category";

import { debounce } from "common/utils";
export default {
  data() {
    return {
      titleList: [],
      commodityList: [],
      refresh: null,
      titles: ["综合", "新品", "销量"],
      tabControlList: [],
      type: "sell",
      miniWallkey: 0
    };
  },
  components: {
    Scroll,
    TabControl,
    GoodsList,
    CategoryNavBar,
    CategoryTitleList,
    CategoryCommodityList,
  },
  created() {
    this.getCategoryTitles();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("handleCommodityImg", () => {
      refresh();
    });
    this.$bus.$on("handleGoodsListImg", () => {
      refresh();
    });
  },
  methods: {
    getCategoryTitles() {
      getCategoryTitles().then((res) => {
        this.titleList = res.data.category.list;
        this.getCategoryMaitKey(this.titleList[0].maitKey);
        this.miniWallkey = this.titleList[0].miniWallkey
        this.getCategoryMiniWallkey(this.miniWallkey, this.type);
      });
    },
    getCategoryMaitKey(maitKey) {
      getCategoryMaitKey(maitKey).then((res) => {
        this.commodityList = res.data.list;
      });
    },
    getCategoryMiniWallkey(miniWallkey, type) {
      getCategoryMiniWallkey(miniWallkey, type).then((res) => {
        this.tabControlList = res;
      });
    },
    handleCategoryTitle(maitKey, miniWallkey) {
      this.getCategoryMaitKey(maitKey);
      this.miniWallkey = miniWallkey
      this.getCategoryMiniWallkey(this.miniWallkey, this.type);
    },
    handleTabControl(index) {
      switch (index) {
        case 0:
          this.type = "sell";
          break;
        case 1:
          this.type = "new";
          break;
        default:
          this.type = "pop";
          break;
      }
      this.getCategoryMiniWallkey(this.miniWallkey, this.type);
    },
  },
};
</script>

<style lang="less" scoped>
#category {
  position: relative;
  .main {
    display: flex;
    height: calc(100vh - 93px);
    overflow: hidden;
    .content {
      width: calc(100vw - 100px);
      height: 100%;
    }
  }
}
</style>