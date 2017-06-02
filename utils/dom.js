export let on = (function () {
  if (document.addEventListener) {
    return function (ele, event, handler) {
      if (ele && event && handler) {
        ele.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (ele, event, handler) {
      if (ele && event && handler) {
        ele.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (function() {
  if (document.removeEventListener) {
    return function(ele, event, handler) {
      if (ele && event) {
        ele.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function(ele, event, handler) {
      if (ele && event) {
        ele.detachEvent('on' + event, handler);
      }
    };
  }
})();

export function addClass(el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue
    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue
    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
