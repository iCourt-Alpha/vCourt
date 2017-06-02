<template>
  <vcMask :maskShow="maskShow" @afterEnter="showCtn" @maskClicked="maskClicked" :bkg="'transparent'">
    <transition name="bounceIn" @after-leave="alertDisappear">
      <div class="vc-alert-box" v-if="showAlert">
        <div class="vc-alert-h">
          <LineThrough height="30">
            <h2>{{title}}</h2>
          </LineThrough>
        </div>
        <div class="vc-alert-c">
          <p>{{ctn}}</p>
        </div>
        <div class="vc-alert-f">
        <span class="vc-alert-btn">
          <vcButton large @click="ok">确定</vcButton>
        </span>
        </div>
      </div>
    </transition>
  </vcMask>
</template>

<script type='text/ecmascript-6'>
import vcMask from '../mask'
import LineThrough from '../line-through'
import vcButton from '../button'
// const prefixCls = 'vc-mask'
export default {
  components: {
    vcMask, LineThrough, vcButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    ctn: {
      type: String,
      default: ''
    },
    maskShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showAlert: false
    }
  },
  methods: {
    showCtn () {
      this.showAlert = true
    },
    maskClicked () {
      console.log('maskClicked~~')
    },
    alertDisappear () {
      this.$emit('alertDisappear')
    },
    ok () {
      this.showAlert = false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../stylus/customize.styl"
@import "../../stylus/animation.styl"
@import "../../stylus/constant.styl"
w = 494px
h = 250px
.vc-alert-box
  width w
  height h
  box-shadow 0 4px 9px 0 rgba(0, 0, 0, 0.1)
  border-radius boxBorderRadius
  background #fff
  position fixed
  top 50%
  left 50%
  margin-top -(h/2)
  margin-left -(w/2)
.vc-alert-h
  text-align center
  margin 30px 40px
  h2
    font-size 16px
    color blackText
    line-height 30px
    display inline-block
    padding 0 10px
    background #fff
.vc-alert-c
  margin 0 40px
  height 90px
  text-align center
  p
    line-height 24px
    font-size 14px
    color blackText
.vc-alert-f
  text-align center
.vc-alert-btn
  display inline-block
  width 107px
  margin 0 5px
</style>
