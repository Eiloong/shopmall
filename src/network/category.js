import {request152} from './request'

export function getCategoryTitles() {
  return request152({
    url: '/category'
  })
}

export function getCategoryMaitKey(maitKey) {
  return request152({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryMiniWallkey(miniWallkey, type) {
  return request152({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}