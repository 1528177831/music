<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{title}}</h3>
        <a href="#">更多</a>
      </div>
      <div class="list clearfix" v-if="songlist.length > 0">
        <router-link :to="`/`" tag="a" v-for="(item,index) in songlist" :key="index" class="item" :class="{'clear-padding' : index % 3 !==1}">
          <div class="img-wrapper">
            <img :src="item.coverImgUrl" alt="">
            <div class="main">{{cutTitle(item.name)}}</div>
            <div class="gray">{{cutTitle(item.description)}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    songlist: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      dafault: '榜单'
    }
  },
  methods: {
    cutTitle (title) {
      if (title.length > 8) {
        return title.substring(0, 8)
      } else {
        return title
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .collection-block{
    background-color: #f8f8f8;
    padding: 5px 0;
  }
  .block-padding{
    padding: 10px 17px;
  }
  .title{
    display: flex;
    margin: 14px 0 18px;
  }
  .title h3{
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
  }
  .list{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      width: 31.33%;
      margin-bottom: 10px;
    }
  }
  .clear-padding{
    padding:0 !important
  }
  .main{
    margin-top: 4px;
    font-size: 12px;
  }
  .gray{
    font-size: 12px;
    color: #999;
  }
  .btn-more{
    font-size: 12px;
    text-align: center;
    color: #333;
  }
  img{
    width: 100%;
  }
</style>
