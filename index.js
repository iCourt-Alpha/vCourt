import alert from './components/alert'
import vcButton from './components/button'
import vcIcon from './components/icon'
import vcLineThrough from './components/line-through'
import vcMask from './components/mask'
import vcPopup from './components/popup'
import { Row } from './components/grid'
import { Col } from './components/grid'
import vcPopup from './components/popup'
import toast from './components/toast'
// directive
import './components/tooltip'
import { dom } from './utils/dom'

const vcComponents = {
  vcButton,
  vcIcon,
  vcLineThrough,
  vcMask,
  vcPopup,
  vcRow: Row,
  vcCol: Col
}

const vcAddToPrototype = {
  toast,
  alert
}

const install = Vue =>{
  Vue.prototype.vc = {}
  Object.keys(vcComponents).forEach(key => {
    Vue.component(key, vcComponents[key])
  })
  Object.keys(vcAddToPrototype).forEach(key => {
    Vue.prototype.vc[key] = vcAddToPrototype[key]
  })
  window.vc = {}
  window.vc.dom = dom
}

export default Object.assign(vcComponents, {install})
