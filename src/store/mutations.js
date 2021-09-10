import { INCREASE_PRODUCT, INCREASEP_RODUCT_NUM } from './mutations.type'

export default {
  [INCREASE_PRODUCT](state, payload) {
    state.product.push(payload)
  },
  [INCREASEP_RODUCT_NUM](state, payload) {
    state.product.find(item => {
      return item.iid === payload.iid
    }).count++
  },
  productChecked(state, payload) {
    const element = state.product.find(item => {
      return item.iid === payload.iid
    })
    element.checked = payload.checked
  },
  productCountReduce(state, payload) {
    const element =  state.product.find(item => {
      return item.iid === payload
    })
    element.count--
  },
  productCountIncrease(state, payload) {
    const element =  state.product.find(item => {
      return item.iid === payload
    })
    element.count++
  }
}