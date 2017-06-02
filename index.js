import alert from './components/alert'
import Button from './components/button'
import Icon from './components/icon'
import LineThrough from './components/line-through'
import VCMask from './components/mask'
import Popup from './components/popup'
import toast from './components/toast'
import './components/tooltip'

const vcComponents = {
  Button,
  Icon,
  LineThrough,
  VCMask,
  Popup
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
}

export default Object.assign(vcComponents, {install})
