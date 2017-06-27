import './tooltip.styl'
import { on, off, addClass, removeClass, setStyle } from '../../utils/dom'

export default {
  bind (el, binding, vnode) {
    let tooltip = document.createElement('div')
    let disappearTimeout
    tooltip.className = 'vc-tooltip-c'
    el.appendChild(tooltip)
    addClass(el, 'vc-tooltip')
    let onMouseOver = function () {
      if (disappearTimeout) {
        clearTimeout(disappearTimeout)
      }
      tooltip.innerText = binding.value || binding.expression
      let size = el.getBoundingClientRect()
      setStyle(tooltip, 'left', size.left + 'px')
      setStyle(tooltip, 'top', (size.top - 29) + 'px')
      addClass(el, 'vc-tooltip-cal')
      setTimeout(function () {
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
  unbind: function (el) {
    off(el, 'mouseover', el._mouseOverHandler)
    off(el, 'mouseout', el._mouseOutHandler)
    off(el, 'mouseleave', el._mouseOutHandler)
  }
}

