import {debounce} from './utils'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200)

    // 对监听事件进行保存
    this.itemImgListener = () => refresh()

    // 监听item中图片加载完成
    this.$bus.$on('itemInageLoad', this.itemImgListener)
  },
}