import './tooltip.vue'
import { on, off, addClass, removeClass } from '../../utils/dom'
import Vue from 'vue'

Vue.directive('tooltip', {
  bind (el, binding, vnode) {
    let div = document.createElement('div')
    div.innerHTML = binding.value
    div.className = 'vc-tooltip-c'
    el.appendChild(div)
    addClass(el, 'vc-tooltip')
    el.__div = div
    var disappearTimeout

    let onMouseOver = function () {
      if (disappearTimeout) {
        clearTimeout(disappearTimeout)
      }
      let size = el.getBoundingClientRect()
      div.style.top = (size.top - 29) + 'px'
      addClass(el, 'vc-tooltip-cal')
      setTimeout(function () {
        var toolSize = div.getBoundingClientRect()
        div.style.marginLeft = (0 - toolSize.width + size.width) / 2 + 'px'
        addClass(el, 'vc-tooltip-show')
      }, 10)
    }

    let onMouseOut = function (e) {
      if (e.target === el || !el.contains(e.target)) {
        removeClass(el, 'vc-tooltip-show')
        disappearTimeout = setTimeout(function () {
          removeClass(el, 'vc-tooltip-cal')
        }, 150)
      }
    }
    el._mouseOverHandler = onMouseOver
    el._mouseOutHandler = onMouseOut
    on(el, 'mouseover', onMouseOver)
    on(el, 'mouseout', onMouseOut)
    on(el, 'mouseleave', onMouseOut)
  },
  update: function (el, binding) {
    el.__div.innerHTML = binding.value
    let size = el.getBoundingClientRect()
    let toolSize = el.__div.getBoundingClientRect()
    el.__div.style.marginLeft = (0 - toolSize.width + size.width) / 2 + 'px'
  },
  unbind: function (el) {
    off(el, 'mouseover', el._mouseOverHandler)
    off(el, 'mouseout', el._mouseOutHandler)
    off(el, 'mouseleave', el._mouseOutHandler)
  }
})
