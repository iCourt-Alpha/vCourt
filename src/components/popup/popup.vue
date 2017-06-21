<template>
<div class="vc-popup-w" v-clickoutside="handleClose">
  <span class="vc-popup-trigger" @click="handleClose('useVisible')" ref="trigger"><slot name="trigger"></slot></span>
  <transition name="slide-in-down">
    <div class="vc-popup" :class="classes" :style="sizeStyle" v-if="visibile" ref="ctn">
      <div class="vc-popup-c">
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import clickoutside from '../../utils/clickoutside'
export default {
  name: 'popup',
  props: {
    type: {
      type: String,
      default: 'white'
    },
    // 浮窗相对trigger位置
    position: {
      type: String,
      default: 'bottom'
    },
    // 自定义X位移
    transformX: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      triggerSize: {
        width: 0,
        height: 0
      },
      visibile: false,
      size: {}
    }
  },
  computed: {
    sizeStyle: function () {
      let rect = {
        height: this.size.height,
        width: this.size.width
      }
      switch (this.position) {
        case 'bottom':
          rect.marginTop = '10px'
          rect.marginLeft = (this.triggerSize.width - this.size.width) / 2 + 'px'
          break
        case 'top':
          rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
          rect.marginLeft = (this.triggerSize.width - this.size.width) / 2 + 'px'
          break
        case 'top-right':
          rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
          rect.marginLeft = (this.triggerSize.width - this.size.width + this.transformX) + 'px'
          break
        case 'top-left':
          rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
          rect.marginLeft = (-this.transformX) + 'px'
          break
        case 'bottom-right':
          rect.marginTop = '10px'
          rect.marginLeft = (this.triggerSize.width - this.size.width) + 'px'
          break
        case 'bottom-left':
          rect.marginTop = '10px'
          rect.marginLeft = (this.triggerSize.width - this.size.width) + 'px'
          break
      }
      return rect
    },
    classes: function () {
      return `vc-popup-${this.type} vc-popup-${this.position}`
    }
  },
  directives: {
    clickoutside
  },
  methods: {
    handleClose: function (handle) {
      if (handle === 'useVisible') {
        this.visibile = !this.visibile
      } else {
        this.visibile = false
      }
    }
  },
  mounted () {
    let that = this
    let triggerNode = that.$refs.trigger
    let triggerSize = triggerNode.getBoundingClientRect()
    that.triggerSize.width = triggerSize.width
    that.triggerSize.height = triggerSize.height
  },
  updated () {
    let ctn = this.$refs.ctn
    if (!ctn) return
    let ctnBox = this.$refs.ctn.getBoundingClientRect()
    let width = ctnBox.width
    let height = ctnBox.height
    if (width && height) {
      this.size.width = width
      this.size.height = height
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../stylus/animation.styl"
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
    right 9%
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-top-left
  &:after
    top 100%
    left 9%
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-bottom-right
  &:after
    top -20px
    right 5%
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-bottom-left
  &:after
    top -20px
    left 9%
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
</style>
