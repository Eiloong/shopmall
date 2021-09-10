import Vuex from 'vuex'
import Vue from 'vue'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    product: []
  },
  getters,
  mutations,
  actions,
  modules: {}
})

export default store