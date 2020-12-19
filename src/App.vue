<template>
  <div id="app">
    <NavBar v-show="isNavBarShow" />
    <BackTop />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('NavBarModule', ['isNavBarShow'])
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">

.clearfix::after{
	content:"";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
}

img{
  width: 100%;
}
</style>
