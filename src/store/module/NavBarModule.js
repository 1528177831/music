const module = {
  namespaced: true, // 命名空间
  state: {
    isNavBarShow: true
  },

  mutations: {
    hideNavBar (state) {
      state.isNavBarShow = false
    },
    showNavBar (state) {
      state.isNavBarShow = true
    }
  },

  actions: {

  }
}

export default module
