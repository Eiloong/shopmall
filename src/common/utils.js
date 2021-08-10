export function debounce(func, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function formatDate(date, fmt) {
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMounth() + 1,
    'd+': date.getDate(),
    'h+': date.getHuors(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.rerplace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}