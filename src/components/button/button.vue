<template>
<button :class="classes" @click="handleClick" :disabled="disabled">
  <Icon :type="icon" v-if="icon"></Icon>
  <span>
    <slot></slot>
  </span>
</button>
</template>

<script>
import Icon from '../icon'
import { oneOf } from '../../utils/assist'

const _prefix = 'vc-button'
export default {
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'danger', 'text', 'primary'])
      }
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large'])
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    long: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Icon
  },
  computed: {
    classes: function () {
      return [
        `${_prefix}`,
        {
          [`${_prefix}-${this.type}`]: !!this.type,
          [`${_prefix}-${this.size}`]: !!this.size,
          [this.type ? '' :  `${_prefix}-default`]: true,
          [this.long ? `${_prefix}-long` :  '']: true
        }
      ]
    }
  },
  methods: {
    handleClick: function (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../stylus/customize.styl"
@import "../../stylus/animation.styl"
@import "../../stylus/constant.styl"
.vc-button
  color #fff
  font-size 13px
  text-align center
  line-height 30px
  border none
  outline none
  cursor pointer
  border-radius 20px
  background transparent
  transition all 0.15s ease
  box-sizing border-box
  a
    color #fff
  &:hover
    box-shadow 0 2px 6px rgba(0, 0, 0, 0.3)
  .vc-icon
    position relative
    top 1px
  &:active
    transform translate3d(0, 2px, 0)
  &[disabled]
    background #ebebee
    color lightGrayText
    border 1px solid transparent
    cursor not-allowed
    color lightBkg
    &:hover
      box-shadow none
    &:active
      transform none
.vc-button-default, .vc-button-danger
  background baseColor
  padding 0 16px
  border 1px solid baseColor
  &[disabled]
    background #ebebee
    color lightGrayText
.vc-button-danger
  background: errorColor
.vc-button-primary
  border 1px solid darkBorder
  color blackText
  background #fff
  padding 0 16px
  &[disabled]
    background #ebebee
    color lightGrayText
.vc-button-text
  color blackText
  &:hover
    color baseColor
    box-shadow: none
  &:active
    color darkBaseColor
  &[disabled]
    background none
    color lightGrayText
.vc-button-long
  width 100%
  line-height 36px
.vc-button-large
  padding: 6px 15px 7px
  font-size: 14px
.vc-button-small
  padding: 0px 6px
  font-size: 6px
  line-height: 23px
</style>
