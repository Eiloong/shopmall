export function debounce(func, delay=200) {
  let timer = null
  return function () {
  if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay);
  }
}