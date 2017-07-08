import './direc.styl'
import { setStyle, getStyle } from '../../utils/dom'
import Loader from './loader.vue'
import Vue from 'vue'
export default {
  bind (el) {
    el._isLoading = false
  },
  update (el, binding, vnode) {
    if (el._isLoading) return
    let p = binding.value
    if (p instanceof Promise) {
      let elPos = getStyle(el, 'position')
      if (elPos === 'static') {
        el._originPos = 'static'
        setStyle(el, 'position', 'relative')
      }
      let _size = binding.modifiers.small ? 'small' : 'big'
      el._isLoading = true
      let loader = createLoader(_size, binding.modifiers.dark)
      p.then(data => {
        el._isLoading = false
        loader.handleShow(false)
      }).catch(data => {
        loader.handleShow(false)
      })
    }
    function createLoader (size = 'big',dark) {
      const Instance = new Vue({
        components: {
          Loader
        },
        data: {
          show: false
        },
        methods: {
          handleShow: function (status) {
            this.show = status
          }
        },
        mounted: function () {
          this.show = true
        },
        render (c) {
          return c(Loader, {
            props: {
              size: size,
              isShow: this.show,
              directiveStyle: true,
              dark: dark
            }
          })
        }
      })
      const component = Instance.$mount()
      el.appendChild(component.$el)
      return Instance
    }
  },
  unbind (el) {
    setStyle(el, 'position', el._originPos)
    delete el._originPos
    delete el._isLoading
  }
}
