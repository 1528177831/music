import $api from '@/api'
const module = {
  namespaced: true, // 命名空间
  state: {
    searchlist: []
  },

  mutations: {
    setSearchMusic (state, searchList) {
      state.searchlist = searchList
    },

    clearSearchList (state) {
      state.searchlist = []
    }
  },

  actions: {
    getSearchList (state, keywords) {
      return $api.getSearchMusic({
        keywords: keywords
      }).then(res => {
        state.commit('setSearchMusic', res.data.result.songs)
      })
    }
  }
}

export default module
