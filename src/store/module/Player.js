import $api from '@/api'
const module = {
  namespaced: true, // 命名空间
  state: {
    song: [],
    songdetail: [],
    lyric: ''
  },

  mutations: {
    setMusic (state, song) {
      state.song = song
    },
    setMusicDetail (state, songdetail) {
      state.songdetail = songdetail
    },
    setLyric (state, lrc) {
      state.lyric = lrc
    }
  },

  actions: {
    getMusic (state, id) {
      return $api.getSong({
        id: id
      }).then(res => {
        state.commit('setMusic', res.data.data[0])
      })
    },
    getMusicDetail (state, ids) {
      return $api.getSongDetail({
        ids: ids
      }).then(res => {
        state.commit('setMusicDetail', res.data.songs[0])
      })
    },
    getLyric (state, id) {
      return $api.getLyric({
        id: id
      }).then(res => {
        state.commit('setLyric', res.data.lrc.lyric)
      })
    }
  }
}

export default module
