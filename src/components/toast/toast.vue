<template>
  <transition name="slide-in-down" v-on:after-leave="afterLeave">
    <div ref="toast" class="vc-toast" :class="type" v-if="show">
      <Icon :type="iconType" class="type"></Icon>
      <p class="ctn">{{msg}}</p>
      <a class="closebtn" @click="closeToast"><Icon type="close" class="close"></Icon></a>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'
import { dom } from '../../utils/dom'
export default {
  name: 'toast',
  props: {
    msg: String,
    type: String,
    show: Boolean,
    duration: {
      type: Number,
      default: 3
    }
  },
  components: {
    Icon
  },
  data () {
    return {
      iconType: ''
    }
  },
  methods: {
    closeToast: function () {
      if (this._timeout) {
        clearTimeout(this._timeout)
        delete this._timeout
      }
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('afterLeave')
    }
  },
  mounted () {
    var that = this
    console.log(this.$el)
    that._timeout = setTimeout(function () {
      that.$emit('close')
    }, that.duration * 1000)
    const _iconMap = {
      'danger': 'warning',
      'info': 'done'
    }
    this.iconType = _iconMap[this.type]
  },
  updated () {
    let t = this.$refs.toast
    if (!t) return
    let _width = dom.getStyle(t, 'width')
    console.log('_width', _width)
    if (_width) {
      dom.setStyle(t, 'margin-left', '-' + Number(_width.split('px')[0]) / 2 + 'px')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../stylus/constant.styl"
@import "../../stylus/customize.styl"

toastHeight = 48px

.vc-toast
  position fixed
  top 90px
  left 50%
  border-radius 24px
  height toastHeight
  z-index toastZ
  background lightBaseColor
  color #fff
  line-height toastHeight
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.2)
  .closebtn
    color #fff
  .type
    font-size 20px
    margin-left 20px
    position relative
    top 4px
  .close
    font-size 14px
    margin-right 20px
    position relative
    top 2px
    cursor pointer
  .ctn
    display: inline-block
    padding 0 10px
    height 50px
    font-size 14px
  &.danger
    background errorColor
</style>
