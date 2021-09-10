import Toast from './Toast'
const toast = {
  install(Vue) {
    const constructorToast = Vue.extend(Toast)
    const toast = new constructorToast()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }
}

export default toast