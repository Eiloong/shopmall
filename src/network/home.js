import { request123, request152 } from "network/request";

export function getHomeBanner() {
 return request123({
    url: '/home/multidata',
    method: 'get'
  })
}

export function getHomeData(type, page) {
  return request152({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
