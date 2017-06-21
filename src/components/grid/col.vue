<template>
  <div ref="col" class="vc-col" :style="{order:order}">
    <slot> i am  a col</slot>
  </div>
</template>

<script type='text/ecmascript-6'>
  const prefixCls = 'vc-col'
  export default {
    props: {
      span: [Number, String],
      order: [Number, String]
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
[class*=vc-col]
  float: left
  min-height: 1px
  padding: 12px
.vc-col-span-12
  width: 100%
.vc-col-span-11
  width: 91.66666667%
.vc-col-span-10
  width: 83.33333333%
.vc-col-span-9
  width: 75%
.vc-col-span-8
  width: 66.66666667%
.vc-col-span-7
  width: 58.33333333%
.vc-col-span-6
  width: 50%
.vc-col-span-5
  width: 41.66666667%
.vc-col-span-4
  width: 33.33333333%
.vc-col-span-3
  width: 25%
.vc-col-span-2
  width: 16.66666667%
.vc-col-span-1
  width: 8.33333333%


</style>
