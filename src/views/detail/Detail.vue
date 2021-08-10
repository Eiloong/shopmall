<template>
  <div id='detail'>
    <DetailNavBar class="detail-nav" />
    <scroll class="content" :pull-up-load="true" :probe-type="3" ref="scroll">
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goodsInfo="goodsInfo" />
      <DetailShopInfo :shopInfo="shopInfo" />
      <!-- <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" /> -->
      <DetailParamInfo :paramInfo="paramInfo" />
      <DetailCommentInfo :commentInfo="commentInfo" />
      <GoodsList :goods='recommend' />
    </scroll>
    <DetailBottomBar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar"
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'
import GoodsList from '@/components/content/goods/GoodsList'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail";
import {itemListenerMixin} from '@/common/mixin'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList
    },
    mixins: [itemListenerMixin],
    data () {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: []
      };
    },
    created() {
      // 保存传入的iid
      this.iid = this.$route.params.iid
      // 根据iid请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result
        // 1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 创建店铺信息的对象
        this.shopInfo = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 5.取出参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6.取出商品评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      // 请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommend = res.data.list
      })
    },
    methods: {
      imgLoad() {
        this.refresh()
      },
      // 添加购物车
      addToCart() {
        
      }
    },
    mounted() {
    },
    destroyed() {
      this.$bus.$off('itemInageLoad', this.itemImgListener)
    },
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 50px;
    overflow: hidden;
    /* height: calc(100vh - 44px) */
  }
</style>