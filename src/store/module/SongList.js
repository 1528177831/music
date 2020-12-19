import $api from '@/api'
const module = {
  namespaced: true, // 命名空间
  state: {
    cn_songlist: [],
    pop_songlist: [],
    eu_songlist: []
  },

  mutations: {
    setCnSongList (state, cnSongList) {
      state.cn_songlist = cnSongList
    },
    setPopSongList (state, popSongList) {
      state.pop_songlist = popSongList
    },
    setEuSongList (state, euSongList) {
      state.eu_songlist = euSongList
    }
  },

  actions: {
    getCnSongList (state) {
      return $api.getMusicList({
        cat: '华语',
        limit: 6,
        order: 'hot'
      }).then(res => {
        state.commit('setCnSongList', res.data.playlists)
      })
    },
    getPopSongList (state) {
      return $api.getMusicList({
        cat: '流行',
        limit: 6,
        order: 'hot'
      }).then(res => {
        state.commit('setPopSongList', res.data.playlists)
      })
    },
    getEuSongList (state) {
      return $api.getMusicList({
        cat: '欧美',
        limit: 6,
        order: 'hot'
      }).then(res => {
        state.commit('setEuSongList', res.data.playlists)
      })
    }
  }
}

export default module
