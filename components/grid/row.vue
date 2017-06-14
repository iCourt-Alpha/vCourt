<template>
  <div class="vc-row" :style="{display: type,justifyContent: justify,alignItems: align}">
    <slot></slot>
  </div>
</template>

<script type='text/ecmascript-6'>
  import { dom } from '../../utils/dom'
  const prefixCls = 'vc-row'
  export default {
    props: {
      type: {
        type: String,
        default: 'block'
      },
      gutter: {
        type: [Number, String],
        default: 0
      },
      justify: {
        type: String,
        default: ''
      },
      align: {
        type: String,
        default: 'stretch'
      }
    },
    data () {
      return {
        ratioArr: []
      }
    },
    methods: {
      calculRatio (arr = [], type) {
        let resultRatio = 0
        let num = 0
        let result = []
        let emptyNum = 0
        let needAverage = 0
        arr.forEach((ratio, index) => {
          num ++
          if (!isNaN(ratio)) {
            resultRatio += ratio
            result.push(ratio)
          } else {
            result.push('')
            emptyNum ++
            needAverage ++
          }
        })
        // 不支持一行多于12列
        if (num > 12) return
        // 超宽 平均分配
        if (resultRatio > 12 || needAverage === num) {
          let averageRatio = 12/(num)
          let resultClass = `vc-col-${type}-${this.mostCloseTo(averageRatio,this.ratioArr)}`
          result.map((item, index) => {
            result[index] = resultClass
          })
          this.addClassForCol(result)
        } else {
        // 未超宽 按需分配
          result.map((item, index) => {
            if (item !== '') {
              let resultClass = `vc-col-${type}-${this.mostCloseTo(item, this.ratioArr)}`
              result[index] = resultClass
            } else {
              let resultClass = `vc-col-${type}-${this.mostCloseTo((12 - resultRatio)/emptyNum, this.ratioArr)}`
              result[index] = resultClass
            }
          })
          this.addClassForCol(result)
        }
      },
      addStyleForCol (data) {
        if (!data) return
        this.cols.forEach((el, index) => {
          Object.keys(data).forEach(key => dom.setStyle(el, key, data[key]))
        })
      },
      addClassForCol (arr) {
        this.cols.forEach((el, index) => {
          dom.addClass(el, arr[index])
        })
      },
      mostCloseTo (num, arr) {
        return arr.sort((a, b) => {
          return Math.abs(a-num)-Math.abs(b-num)
        })[0]
      },
      updateGutter () {
        let style = {}
        if (this.gutter !== 0) {
          let bkg = dom.getStyle(this.$el, 'backgroundColor')
          style = {
            borderLeft: `${this.gutter/ 2}px solid ${bkg}`,
            borderRight: `${this.gutter/ 2}px solid ${bkg}`
          }
        }
        return this.addStyleForCol(style)
      }
    },
    watch: {
      gutter (n) {
        this.updateGutter()
      }
    },
    mounted () {
      for(let i=1; i<=12; i++) {
        this.ratioArr.push(i)
      }

      // 计算栅格占宽
      let type = [{
        name: 'span',
        ratio: []
      },{
        name: 'xs',
        ratio: []
      },{
        name: 'sm',
        ratio: []
      },{
        name: 'md',
        ratio: []
      },{
        name: 'lg',
        ratio: []
      }]
      this.cols = []
      Object.keys(this.$children).forEach(item => {
        let cur = this.$children[item]
        let curCol = cur.$refs.col
        if (curCol) {
          this.cols.push(curCol)
          let props = cur.$options.propsData
          type.map(item => {
            item.ratio.push(props[item.name] - 0)
          })
        }
      })
      type.map(item => {
        if (/\d/.test(item.ratio.join()) || item.name === 'span') {
          this.calculRatio(item.ratio, item.name)
        }
      })

      // gutter设置
      this.updateGutter()
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.vc-row
  *
    box-sizing: border-box
  &:before, &:after
    content: ''
    display: table
    clear: both

</style>
