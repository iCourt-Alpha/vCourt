<template>
<div class="vc-popup-w" v-clickoutside="handleClose">
  <span class="vc-popup-trigger" @click="togglePopup" ref="trigger"><slot name="trigger"></slot></span>
  <transition name="slide-in-down">
    <div class="vc-popup" :class="classes" :style="sizeStyle" v-if="visibile">
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
    position: {
      type: String,
      default: 'bottom'
    },
    size: {
      type: Object,
      default () {
        return {
          height: 100,
          width: 100
        }
      }
    },
    transformX: {
      type: Number,
      default: 0
    },
    visibile: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      triggerSize: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    sizeStyle: function () {
      var rect = {
        height: this.size.height + 'px',
        width: this.size.width + 'px'
      }
      if (this.position === 'bottom') {
        rect.marginTop = '10px'
        rect.marginLeft = (this.triggerSize.width - this.size.width) / 2 + 'px'
      } else if (this.position === 'top') {
        rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
        rect.marginLeft = (this.triggerSize.width - this.size.width) / 2 + 'px'
      } else if (this.position === 'top-right') {
        rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
        rect.marginLeft = (this.triggerSize.width - this.size.width + this.transformX) + 'px'
      } else if (this.position === 'top-left') {
        rect.marginTop = -(this.size.height + 12 + this.triggerSize.height) + 'px'
        rect.marginLeft = (-this.transformX) + 'px'
      } else if (this.position === 'bottom-right') {
        rect.marginTop = '10px'
        rect.marginLeft = (this.triggerSize.width - this.size.width) + 'px'
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
    handleClose: function (e) {
      this.$emit('changed', false)
    },
    togglePopup: function () {
      this.$emit('changed', !this.visibile)
    }
  },
  mounted: function () {
    var that = this
    var triggerNode = that.$refs.trigger
    var triggerSize = triggerNode.getBoundingClientRect()
    that.triggerSize.width = triggerSize.width
    that.triggerSize.height = triggerSize.height
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
