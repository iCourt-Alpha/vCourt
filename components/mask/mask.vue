<template>
  <transition name="fast-fade" @after-enter="afterEnter">
    <div class="vc-mask" :class="'vc-mask-'+bkg" v-if="maskShow" @click="maskClick">
      <slot></slot>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    maskShow: {
      type: Boolean,
      default: false
    },
    bkg: {
      type: String,
      default: 'dark'
    }
  },
  methods: {
    maskClick (e) {
      if (e.target === this.$el) {
        this.$emit('maskClicked')
      }
    },
    afterEnter () {
      console.log('emit after~')
      this.$emit('afterEnter')
    }
  },
  mounted () {
    document.body.style.overflow = 'hidden'
  },
  destroyed () {
    document.body.style.overflow = 'auto'
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../stylus/customize.styl"
@import "../../stylus/animation.styl"
@import "../../stylus/constant.styl"

.vc-mask
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index: maskZ
.vc-mask-dark
  background maskBkgColor
.iui-mask-transparent
  background rgba(0,0,0,0)
</style>
