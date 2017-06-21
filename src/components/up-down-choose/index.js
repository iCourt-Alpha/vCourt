/*
 * directive 列表上下切换执行特定函数
 * @modify1 用于标识选中项的class
 * @modify2 document 是否绑定在document上
 * @expression 切换后执行的函数
 **/
import { on, off } from '../../utils/dom'

export default {
  inserted (el, binding, vnode) {
    let list = []
    let _activeClass = binding.arg
    let _curIndex = 0
    let _totalIndex = 0
    let callback = binding.value

    _curIndex = _curIndex || 0
    function _keyDownHhandler (e) {
      if (e.keyCode === 38) {
        e.stopPropagation()
        up()
      }
      if (e.keyCode === 40) {
        e.stopPropagation()
        down()
      }
    }
    el._keyDownHhandler = _keyDownHhandler
    if (binding.modifiers.document) {
      on(document, 'keydown', _keyDownHhandler)
    } else {
      on(el, 'keydown', _keyDownHhandler)
    }
    function up () {
      getData()
      _curIndex -= 1
      if (_curIndex < 0) {
        _curIndex = _totalIndex
      }
      callback(_curIndex)
    }
    function down () {
      getData()
      _curIndex += 1
      if (_curIndex > _totalIndex) {
        _curIndex = 0
      }
      callback(_curIndex)
    }
    function getData () {
      list = el.querySelectorAll('li')
      list.forEach(function (item, index) {
        if (item.className.includes(_activeClass)) {
          _curIndex = index
        }
      })
      _totalIndex = list.length - 1
    }
  },
  unbind (el) {
    off(document, 'keydown', el._keyDownHhandler)
    delete el._keyDownHhandler
  }
}
