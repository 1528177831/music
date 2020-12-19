<template>
  <div class="play" v-if="song!=null && songdetail.ar!=null && songdetail.al!=null">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <van-icon name="wap-home-o" class="left" />
        </router-link>
        <div class="music-info">
          <p>{{songdetail.name}}</p>
          <p class="author">{{songdetail.ar[0].name}}</p>
        </div>
        <a href="#">
          <van-icon name="search" class="right"/>
        </a>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="songdetail.al.picUrl">
        <div class="lrcContainer">
          <div class="lrc" v-for="(item,key,index) in lrcdata" :key="index">
            <p class="lrc-p" :class="{active:currentTime > allKeys[index] && currentTime < allKeys[index+1]}" v-if="currentTime > allKeys[index] && currentTime < allKeys[index+1]">{{item}}</p>
          </div>

        </div>
      </div>
      <div class="iconbox">
        <van-icon name="like-o" class="left"/>
        <i class="box"></i>
        <van-icon name="down" class="right"/>
      </div>
    </div>
    <div class="song">
      <!--
        当前正在播放的时间
        当前歌曲的总时间
       -->
      <audio ref="player" :src="song.url" controls></audio>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
import { mapState, mapActions, mapMutations } from 'vuex'
import { AudioPlayer } from '@liripeng/vue-audio-player'
import '@liripeng/vue-audio-player/lib/vue-audio-player.css'
Vue.use(Icon)
export default {
  data () {
    return {
      lrcdata: {},
      currentTime: 0,
      duration: 0,
      allKeys: []
    }
  },
  methods: {
    ...mapMutations('NavBarModule', ['hideNavBar', 'showNavBar']),
    ...mapActions('Player', ['getMusic', 'getMusicDetail', 'getLyric']),
    addEventListenerHandler () {
      // 当前实时播放的时间
      this.$refs.player.addEventListener('timeupdate', (time) => {
        this.currentTime = this.$refs.player.currentTime
      })
      // 获取播放总时间
      this.$refs.player.addEventListener('canplay', (time) => {
        this.duration = this.$refs.player.duration
      })
    },
    removeEventListenerHandler () {
      // 当前实时播放的时间
      this.$refs.player.removeEventListener('timeupdate', (time) => {
        this.currentTime = this.$refs.player.currentTime
      })
      // 获取播放总时间
      this.$refs.player.removeEventListener('canplay', (time) => {
        this.duration = this.$refs.player.duration
      })
    },
    getAllKey (lrcdata) {
      for (var key in lrcdata) {
        this.allKeys.push(key)
      }
    }
  },
  components: {
    AudioPlayer
  },
  computed: {
    ...mapState('Player', ['song', 'songdetail', 'lyric'])
  },
  mounted () {
    this.hideNavBar()
    this.getMusic(this.$route.params.songid).then(res => {
      this.$nextTick(() => {
        this.addEventListenerHandler()
      })
    })
    this.getMusicDetail(this.$route.params.songid)
    this.getLyric(this.$route.params.songid).then(res => {
      var lrcObj = {}
      var lyrics = this.lyric.split('\n')
      var reg = /\[\d*:\d*((\.|\:)\d*)*\]/g
      for (var i = 0; i < lyrics.length; i++) {
        var timeRegExpArr = lyrics[i].match(reg)
        if (!timeRegExpArr) {
          continue
        }
        var t = timeRegExpArr[0]
        // 取出分钟
        var min = Number(t.match(/\[\d*/i).toString().slice(1))
        var second = Number(t.match(/\:\d*/i).toString().slice(1))
        // 歌词文本
        var content = lyrics[i].replace(timeRegExpArr, '')
        var time = min * 60 + second
        lrcObj[time] = content
      }
      this.lrcdata = lrcObj
      this.getAllKey(lrcObj)
    })
  },
  beforeDestroy () {
    this.showNavBar()
    this.$refs.player.stop()
    this.removeEventListenerHandler()
  }
}
</script>

<style scoped>
.header{
  padding: 15px;
}
.music-info{
  flex: 1;
  font-size: 20px;
}
.title{
  display: flex;
  text-align: center;
}
.left{
  font-size: 30px;
}
.ca{
  color: red;
}
.right{
  font-size: 30px;
}
.song-info{
  padding: 15px;
}
.song-info-img{
  text-align: center;
}
.song-info-img img{
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}
.lrcContainer{
  margin-top: 300px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
}
.lrc{
 width: 100%;
  position: absolute;
  top: 0;
}
.active{
  color: #278BF4 !important;
}
.lrc-p{
  height: 30px;
 line-height: 30px;
}

.up30{
 margin-top: -30px;
}
.song-lrc{
  margin-top: 10px;
  min-height: 50px;
}
.iconbox{
  display: flex;
  margin-top: 30px;
}
.iconbox .box{
  flex: 1;
}
.song{
  width: 100%;
  text-align: center;
}
.song audio{
  width: 80%;
}
.active{
  color: #222;
}
.author{
  font-size: 12px;
  color: #0e0e0e;
}
</style>
