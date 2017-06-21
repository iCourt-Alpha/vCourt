import { on } from './dom'

const nodeList = []
const ctx = '$$clickoutsideContext'

on(document, 'click', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e))
})

export default {
  bind (el, binding, vnode) {
    const id = nodeList.push(el) - 1
    const documentHandler = e => {
      if (el.contains(e.target)) return
      if (binding.expression) binding.value(e)
    }
    el[ctx] = {
      id,
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
  },
  update (el, binding) {
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.bindingFn
  },
  unbind (el) {
    let len = nodeList.length
    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(len, 1)
        break
      }
    }
  }
}
