<script>
export default {
  name: 'Tab',
  data () {
    return {

    }
  },
  props: {
    label: {
      type: [String, Number],
      default: 'tab'
    },
    index: {
      type: [String, Number],
      default: 1
    }
  },
  computed: {
    /*
      高亮对比
    */
    active () {
      return this.index == this.$parent.currentIndex
    }
  },
  methods: {
    changeTabsHandler () {
      // this.$emit("onChangeIndex",this.index)
      this.$parent.onChangeIndex(this.index)
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  render () {
    const currentClass = {
      tab: true,
      active: this.active
    }
    return (
      <li class={ currentClass } onClick={ this.changeTabsHandler }>{this.label}</li>
    )
  }
}
</script>

<style lang="scss" scoped>
.tab{
  flex:1;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  text-align: center;
}
.tab.active{
  border-bottom: 2px solid blue;
}
</style>
