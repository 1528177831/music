import Vue from 'vue'
import Vuex from 'vuex'
import NavBarModule from './module/NavBarModule'
import SongList from './module/SongList'
import Search from './module/Search'
import Player from './module/Player'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    NavBarModule,
    SongList,
    Search,
    Player
  }
})
