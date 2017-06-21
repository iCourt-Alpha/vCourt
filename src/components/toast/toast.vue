<template>
  <transition name="slide-in-down" v-on:after-leave="afterLeave">
    <div class="vc-toast-c" :class="type" v-if="show">
      <Icon :type="iconType" class="type"></Icon>
      <p>{{msg}}</p>
      <a @click="closeToast"><Icon type="close" class="close"></Icon></a>
    </div>
  </transition>
</template>

<script>
import Icon from '../icon'
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
  mounted: function () {
    var that = this
    that._timeout = setTimeout(function () {
      that.$emit('close')
    }, that.duration * 1000)
    const _iconMap = {
      'danger': 'warning',
      'info': 'done'
    }
    this.iconType = _iconMap[this.type]
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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../stylus/constant.styl"
@import "../../stylus/customize.styl"

toastHeight = 48px
toastWidth = 260px

.vc-toast-c
  position fixed
  top 90px
  left 50%
  margin-left -(toastWidth/2)
  border-radius 24px
  height toastHeight
  z-index toastZ
  background lightBaseColor
  width toastWidth
  color #fff
  display flex
  line-height toastHeight
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.2)
  a
    color #fff
  .type
    font-size 20px
    margin-left 20px
    position relative
    top 3px
  .close
    font-size 14px
    margin-right 20px
    position relative
    top 2px
    cursor pointer
  p
    padding 0 10px
    flex 1
    height 50px
    overflow hidden
    font-size 14px
  &.danger
    background errorColor
</style>
