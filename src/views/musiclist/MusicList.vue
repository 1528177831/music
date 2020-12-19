<template>
  <div>
    <MusicListView :songlist="cn_songlist" title="华语"/>
    <MusicListView :songlist="pop_songlist" title="流行"/>
    <MusicListView :songlist="eu_songlist" title="欧美"/>
  </div>
</template>

<script>
import MusicListView from '../musiclistview/MusicListView'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
    MusicListView
  },
  computed: {
    ...mapState('SongList', ['cn_songlist', 'pop_songlist', 'eu_songlist'])
  },
  methods: {
    ...mapActions('SongList', ['getCnSongList', 'getPopSongList', 'getEuSongList'])
  },
  mounted () {
    this.getCnSongList()
    this.getPopSongList()
    this.getEuSongList()
  }
}
</script>

<style>

</style>
