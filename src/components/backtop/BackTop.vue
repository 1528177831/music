<template>
  <div>
    <div class="th-back-top" v-show="show" @click="backTopHandler">
      <span class="bg-back2top2"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
      show: false
    }
  },
  methods: {
    backTopHandler () {
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      // 获取滚动高度
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 400) {
        this.show = true
      } else {
        this.show = false
      }
    })
  }
}
</script>

<style scoped>
  .th-back-top{
    position: fixed;
    right: 15px;
    bottom: 104px;
    width: 80px;
    z-index: 10;
    opacity: 0.8;
    text-align: center;
  }
  .bg-back2top2{
    display: inline-block;
    background: url(http://static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png);
    background-size: 39px 39px;
    width: 39px;
    height: 39px;
  }
</style>
