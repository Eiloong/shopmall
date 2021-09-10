import { INCREASE_PRODUCT, INCREASEP_RODUCT_NUM } from './mutations.type'

export default {

  increaseProductTransition(context, payload) {
   return new Promise(function (resolve, reject) {
      const element = context.state.product.find(item => {
        return item.iid === payload.iid
      })
      if (element) {
        context.commit(INCREASEP_RODUCT_NUM, payload)
        resolve('商品数量加一')
      } else {
        payload.count = 1
        payload.checked = true
        context.commit(INCREASE_PRODUCT, payload)
        resolve('加入购物车成功')
      }
    })


  }
}
