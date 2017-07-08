<template>
<transition name="fast-fade">
  <div v-if="isShow" :class="{'vc-loader-darkmask':dark,'vc-loader-wrapper':directiveStyle}">
    <div class="vc-loader" :class="vcClass">
      <Icon type="alpha"></Icon>
      <svg viewBox="25 25 50 50" class="vc-loader-circle">
        <circle cx="50" cy="50" r="20" fill="none" stroke="#ED6C00" stroke-width="0.5" class="vc-loader-path"></circle>
      </svg>
    </div>
  </div>
</transition>
</template>

<script>
import Icon from '../icon'
export default {
  name: 'loader',
  components: {
    Icon
  },
  props: {
    size: {
      type: String,
      default: 'large'
    },
    isShow: {
      type: Boolean,
      default: true
    },
    directiveStyle: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    vcClass () {
      return 'vc-loader-' + this.size + (this.directiveStyle ? ' vc-loader-directive' : '')
    }
  }
}
</script>

<style lang="styl" rel="stylesheet/stylus">
@import "../../stylus/constant.styl"
@import "../../stylus/customize.styl"
@import "../../stylus/animation.styl"

@keyframes loader-dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
  }
}
@keyframes loader-color {
  0% {
    stroke: #ed6c00;
  }
  40% {
    stroke: rgba(237, 108, 0, 0.5);
  }
  90% {
    stroke: #ed6c00;
  }
}
.vc-loader-wrapper
  width: 100%
  height: 100%
  position: absolute
  top: 0
  left: 0
.vc-loader-darkmask
  background: rgba(0, 0, 0, 0.1)
.vc-loader-directive
  position: absolute
  left: 50%
  top: 50%
  transform:translate(-50%, -50%)
.vc-loader
  font-size 40px
  color lightBaseColor
  position relative
  width 100px
  height 100px
  .vc-icon
    position absolute
    width 100%
    height 100%
    text-align center
    line-height 110px
.vc-loader-small
  width 40px
  height 40px
  font-size 20px
  .vc-icon
    line-height 46px
.vc-loader-circle
  animation rotate 2s linear infinite
  transform-origin center center
.vc-loader-path
  stroke-dasharray: 150,200;
  stroke-dashoffset: -10;
  stroke-linecap: round;
  animation: loader-dash 1.5s ease-in-out infinite, loader-color 3s ease-in-out infinite;
</style>
