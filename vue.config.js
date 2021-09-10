module.exports =  {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'stroe': '@/store',
        'views': '@/views'
      }
    }
  }
}