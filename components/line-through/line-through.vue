<template>
<div class="vc-line-through">
  <div class="vc-line-through-line" :style="{top: height/2 + 'px'}"></div>
  <div class="vc-line-through-c"><slot></slot></div>
</div>
</template>

<script>
export default {
  props: ['height']
}
</script>

<style lang="styl" rel="stylesheet/stylus">
.vc-line-through-line
  height 1px
  background #f1f1f1
  position relative
.vc-line-through-c
  position relative
</style>
