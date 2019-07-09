<template>
  <div id="app">
  <router-view></router-view>
  <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  async mounted () {
    // 通过this.$store.dispatch 方法触发调用Action
    this.$store.dispatch('getAddress')

   // this.getAddress()
    this.getUserInfo()
  },
  components:{
    FooterGuide
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>