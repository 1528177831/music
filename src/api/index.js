import axios from '../untils/http'
import base from './base'

const api = {
  getMusicList (params) {
    return axios.get(base.baseUrl + 'top/playlist', {
      params
    })
  },
  getSearchMusic (params) {
    return axios.get(base.baseUrl + 'cloudsearch', {
      params
    })
  },
  getSong (params) {
    return axios.get(base.baseUrl + 'song/url', {
      params
    })
  },
  getSongDetail (params) {
    return axios.get(base.baseUrl + 'song/detail', {
      params
    })
  },
  getLyric (params) {
    return axios.get(base.baseUrl + 'lyric', {
      params
    })
  }
}

export default api
