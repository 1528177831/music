module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://autumnfish.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
