<template>
  <div class="vc-popup-w" v-clickoutside="handleClose">
    <div class="vc-popup-trigger" @click="handleClose('trigger')" ref="trigger"><slot name="trigger"></slot></div>
    <transition name="slide-in-down">
      <div class="vc-popup" :class="classes" :style="boxSize" v-if="visible" ref="ctn">
        <div class="vc-popup-c">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  /*
   * @handler popupClick 当前popup什么位置被点击了，用户可以自定点击后的行为
   **/
  import clickoutside from '../../utils/clickoutside'
  export default {
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
      },
      // 浮窗是否可见
      visible: false
    },
    data: function () {
      return {
        triggerSize: {
          width: 0,
          height: 0
        },
        visibile: false,
        size: {},
        boxSize: {}
      }
    },
    computed: {
      classes: function () {
        return `vc-popup-${this.type} vc-popup-${this.position}`
      }
    },
    directives: {
      clickoutside
    },
    methods: {
      handleClose (where) {
        this.$emit('popupClick',where)
      },
      updateBoxSize () {
        let rect = {
          height: this.size.height,
          width: this.size.width
        }
        switch (this.position) {
          case 'bottom':
            rect.marginTop = '4px'
            rect.marginLeft = (this.triggerSize.width - rect.width) / 2 + 'px'
            break
          case 'top':
            rect.marginTop = -(rect.height + 12 + this.triggerSize.height) + 'px'
            rect.marginLeft = (this.triggerSize.width - rect.width) / 2 + 'px'
            break
          case 'top-right':
            rect.marginTop = -(rect.height + 12 + this.triggerSize.height) + 'px'
            rect.marginLeft = (this.triggerSize.width - rect.width + this.transformX) + 'px'
            break
          case 'top-left':
            rect.marginTop = -(rect.height + 12 + this.triggerSize.height) + 'px'
            rect.marginLeft = (-this.transformX) + 'px'
            break
          case 'bottom-right':
            rect.marginTop = '4px'
            rect.marginLeft = (this.triggerSize.width - rect.width) + 'px'
            break
          case 'bottom-left':
            rect.marginTop = '4px'
            rect.marginLeft = (this.triggerSize.width - rect.width) + 'px'
            break
        }
        this.boxSize = rect
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
      if (width && height && (this.size.width !== width || this.size.height !== height)) {
        this.size.width = width
        this.size.height = height
        this.updateBoxSize()
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
.iui-popup-white
  background #fff
  &:after
    border solid 10px #fff
  &:before
    border solid 11px #f0f0f0
.iui-popup-black
  background #3d3d3d
  &:after
    border solid 10px #3d3d3d
  &:before
    border solid 12px #3d3d3d
.iui-popup-bottom
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.3)
  &:after
    top -20px
    left 50%
    margin-left -10px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
  &:before
    top -22px
    left 50%
    margin-left -11px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
.iui-popup-top
  &:after
    top 100%
    left 50%
    margin-left -10px
    border-bottom-color transparent
    border-right-color transparent
    border-left-color transparent
  &:before
    top 100%
    left 50%
    margin-left -11px
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
  &:before
    top 100%
    right 45px
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
  &:before
    top 100%
    left 45px
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
  &:before
    top -22px
    right 11px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
.vc-popup-bottom-left
  &:after
    top -20px
    left 12px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
  &:before
    top -22px
    left 11px
    border-top-color transparent
    border-right-color transparent
    border-left-color transparent
</style>
