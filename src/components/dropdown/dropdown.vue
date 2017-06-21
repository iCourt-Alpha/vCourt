<template>
<Popup>
  <a slot="trigger"><span>{{this.tle}}</span><Icon type="trig-down"></Icon></a>
  <template slot="content">
    <SearchSelector :list="projList" @selected="projSelected"></SearchSelector>
  </template>
</Popup>
</template>

<script>
import clickoutside from '../../utils/clickoutside'
import Popup from '../popup'
import Icon from '../icon'

export default {
  components: {
    Popup, Icon
  },
  props: {
    tle: {
      type: String,
      default: '按钮'
    },
    type: {
      type: String,
      default: 'justItems'
    }
  },
  methods: {

  },
  mounted: function () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.vc-popup-w
  display inline-block
.vc-popup-trigger
  display inline-block
.vc-popup
  position absolute
  border-radius 8px
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.3)
  z-index 10
  &:after
    position absolute
    display block
    content ""
    pointer-events none
.vc-popup-c
  width 100%
  height 100%
  overflow auto
.vc-popup-white
  background #fff
  &:after
    border solid 10px #fff
.vc-popup-black
  background #3d3d3d
  &:after
    border solid 10px #3d3d3d
.vc-popup-bottom
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.3)
  &:after
    top -20px
    left 50%
    margin-left -10px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-top
  &:after
    top 100%
    left 50%
    margin-left -10px
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-top-right
  &:after
    top 100%
    right 46px
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-top-left
  &:after
    top 100%
    left 46px
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-bottom-right
  &:after
    top -20px
    right 12px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
</style>
