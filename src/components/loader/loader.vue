<template>
  <transition name="fast-fade">
    <div v-if="isShow" :class="{'vc-loader-darkmask':dark,'vc-loader-wrapper':directiveStyle}">
      <div class="vc-loader" :class="vcClass"></div>
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

@keyframes loadingAnimation {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-2816px, 0, 0);
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
  position relative
  width 64px
  height 64px
  overflow hidden
  &:after
    content ""
    position absolute
    top 0
    left 0
    display block
    width 2880px
    height 100%
    background url(./assets/loading.png) no-repeat 0 0
    background-size 2880px 128px
    animation loadingAnimation 1200ms steps(44) infinite
.vc-loader-small
  transform scale3d(0.6, 0.6, 1)
.vc-loader-white
  background-position 0 -64px
</style>
