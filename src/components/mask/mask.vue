<template>
  <transition name="fast-fade" @after-enter="afterEnter">
    <div class="vc-mask" :class="'vc-mask-'+bkg" @click="maskClick" v-if="maskShow">
      <slot></slot>
    </div>
  </transition>
</template>

<script type='text/ecmascript-6'>
  import { dom } from '../../utils/dom'
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
        this.$emit('afterEnter')
      }
    },
    watch: {
      maskShow (n, o) {
        if (typeof n === 'boolean' && typeof o === 'boolean' && n === false) {
          dom.setStyle(document.body, 'overflow', this._curOverflowStyle)
          this._curOverflowStyle = null
        }
      }
    },
    mounted () {
      this._curOverflowStyle = dom.getStyle(document.body, 'overflow')
      dom.setStyle(document.body, 'overflow', 'hidden')
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
  .vc-mask-transparent
    background rgba(0,0,0,0)
</style>
