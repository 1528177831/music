<template>
  <div>
    <ul class="top-nav">
      <li v-for="(item,index) in datalist" :key="index">
        <router-link :to="item.path" active-class="active">{{item.name}}</router-link>
      </li>
    </ul>
    <!-- <van-tabs v-model="active">
      <van-tab title="首页" to="/"></van-tab>
      <van-tab title="歌单" to="/playlist"></van-tab>
      <van-tab title="歌手" to="/singer"></van-tab>
      <van-tab title="榜单" to="/list"></van-tab>
      <van-tab title="我的" to="/mine"></van-tab>
      <van-tab title="搜索" to="/search"></van-tab>
    </van-tabs> -->
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      datalist: [
        {
          path: '/home',
          name: '首页'
        },
        {
          path: '/playlist',
          name: '歌单'
        },
        {
          path: '/singer',
          name: '歌手'
        },
        {
          path: '/list',
          name: '榜单'
        },
        {
          path: '/mine',
          name: '我的'
        },
        {
          path: '/search',
          name: '搜索'
        }
      ]
    }
  },
  methods: {
    handleClick (index) {
      this.isShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .top-nav{
    display: flex;
    background: #fff;
    li{
      flex: 1;
      text-align: center;
      padding-top: 10px;
      a{
        display: block;
        padding-bottom: 8px;
        color: #000;
        text-decoration: none;
      }
    }
  }
  .active{
    border-bottom: 2px solid #ff0000;
  }
</style>
