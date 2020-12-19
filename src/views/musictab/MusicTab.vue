<template>
  <div class="tabs" v-if="total_song_list.length>0">
    <tabs :currentIndex="currentIndex" @changeIndex="getChangeIndex">
      <tab v-for="(item,index) in total_song_list" :key="index" :label="item.billboard.name" :index="index+1">
        <div class="panel hotsongs on">
          <ul class="list">
            <router-link :to="`/player/${childItem.song_id}`" tag="li" v-for="(childItem,index) in item.song_list" :key="index" class="item">
              <div class="poter">
                <img :src="childItem.pic_big" :alt="childItem.title">
              </div>
              <div class="info">
                <div class="name">
                  {{childItem.title}}
                </div>
                <div class="author">{{childItem.artist_name}}</div>
              </div>
            </router-link>
          </ul>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 1,
      total_song_list: [],
      hot_song_list: [],
      new_song_list: [],
      rock_song_list: []
    }
  },
  mounted () {
    this.$api.getMusicList({
      method: 'baidu.ting.billboard.billList',
      type: 1,
      size: 5,
      offset: 0
    }).then(res => {
      this.hot_song_list = res.data
      this.total_song_list.push(this.hot_song_list)
    })
    this.$api.getMusicList({
      method: 'baidu.ting.billboard.billList',
      type: 2,
      size: 5,
      offset: 0
    }).then(res => {
      this.new_song_list = res.data
      this.total_song_list.push(this.new_song_list)
    })

    this.$api.getMusicList({
      method: 'baidu.ting.billboard.billList',
      type: 11,
      size: 5,
      offset: 0
    }).then(res => {
      this.rock_song_list = res.data
      this.total_song_list.push(this.rock_song_list)
    })
  },
  methods: {
    getChangeIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs{
    padding:10px;
    background: #fff;
  }
  .musictop{
    background: #fff;
    padding: 10px;
  }
  .panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
    .list{
      padding-top: 0;
      height: 375px;
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
  .more-songs{
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
</style>
