// components
import vcButton from './components/button'
import vcIcon from './components/icon'
import vcLineThrough from './components/line-through'
import vcMask from './components/mask'
import { Row } from './components/grid'
import { Col } from './components/grid'
import vcPopup from './components/popup'
import vcLoader from './components/loader'

// components add to to prototype
import alert from './components/alert'
import toast from './components/toast'

// directive
import vcTooltip from './components/tooltip'
import loader from './components/loader/direc'
import { dom } from './utils/dom'

const vcAddToComponents = {
  vcButton,
  vcIcon,
  vcLineThrough,
  vcMask,
  vcPopup,
  vcRow: Row,
  vcCol: Col,
  vcLoader
}

const vcAddToPrototype = {
  toast,
  alert
}

const vcAddToDirective = {
  vcTooltip,
  vcLoader: loader
}

const install = Vue =>{
  Vue.prototype.vc = {}
  Object.keys(vcAddToComponents).forEach(key => {
    Vue.component(key, vcAddToComponents[key])
  })
  Object.keys(vcAddToPrototype).forEach(key => {
    Vue.prototype.vc[key] = vcAddToPrototype[key]
  })
  Object.keys(vcAddToDirective).forEach(d => {
    Vue.directive(d, vcAddToDirective[d])
  })
  window.vc = {}
  window.vc.dom = dom
}
const output = Object.assign(vcAddToComponents, {install})
window.vCourt = output
export default output
