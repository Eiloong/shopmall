import { request152 } from './request'

export function getDetail(iid) {
  return request152({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request152({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    // 优惠价
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.discountBgColor = itemInfo.discountBgColor
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.img = shopInfo.shopLogo
    this.title = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
export class ParamsInfo {
  constructor(info, rule) {
    this.img = info.images ? info.images[0] : ''
    this.set = info.set
    this.tables = rule.tables
  }
}