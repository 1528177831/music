<template>
  <div>
    <MusicList />
  </div>
</template>

<script>
import MusicList from '../musiclist/MusicList'
// import MusicTab from '../musictab/MusicTab'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {
    MusicList
    // MusicTab
  },
  methods: {
    ...mapMutations('NavBarModule', ['showNavBar'])
  },
  mounted () {
    this.showNavBar()
  }
}
</script>

<style>

</style>
