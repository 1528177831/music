<template>
  <div>
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" @input="onInput"/>
    </div>
    <div class="song-list-wrap" v-if="searchlist.length>0">
      <ul class="list">
        <router-link :to="`/player/${item.id}`" tag="li" v-for="(item,index) in searchlist" :key="index" class="item">
          <div class="poter">
            <img :src="item.al.picUrl" :alt="item.al.name">
          </div>
          <div class="info">
            <div class="name">
              {{item.al.name}}
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant'
import BetterScroll from 'better-scroll'
import { mapActions, mapMutations, mapState } from 'vuex'

Vue.use(Search)
export default {
  data () {
    return {
      value: '',
      height: 0,
      scroll: null,
      isShow: false
    }
  },
  computed: {
    ...mapState('NavBarModule', ['isNavBarShow']),
    ...mapState('Search', ['searchlist'])
  },
  methods: {
    ...mapMutations('NavBarModule', ['hideNavBar', 'showNavBar']),
    ...mapMutations('Search', ['clearSearchList']),
    ...mapActions('Search', ['getSearchList']),
    onInput (val) {
      if (val == '') {
        this.clearSearchList()
      } else {
        this.getSearchList(val)
      }
    }
  },
  mounted () {
    if (this.value == '') {
      this.clearSearchList()
    }
    this.hideNavBar()
  },
  beforeDestroy () {
    this.showNavBar()
  }
}
</script>

<style lang="scss" scoped>
  .song-list-wrap{
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
    .list{
      padding-top: 0;
      li{
        height: 60px;
        border-bottom: 1px solid #eee;
        padding-left:0;
        display: flex;
        padding-top: 10px;
        .poter{
          position: relative;
          width: 45px;
          margin-right: 8px;
          img{
            width: 100%;
            border: 1px solid #eee;
          }
        }
        .info{
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .name{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: #333;
          }
          .author{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #999;
            margin-top: 2px;
          }
        }
      }
    }
  }
</style>
