import Vue from 'vue'
import Alert from './alert.vue'

function createAlert (title, ctn) {
  let promise = new Promise((resolve, reject) => {
    let alertEle = document.createElement('div')
    alertEle.innerHTML = `<Alert title="${title}" :mask-show="maskShow" ctn="${ctn}" @alert-disappear="confirmDisappear"></Alert>`
    document.body.appendChild(alertEle)
    return new Vue({
      el: alertEle,
      components: {
        Alert
      },
      data: {
        maskShow: false
      },
      methods: {
        confirmDisappear: function () {
          console.log('alertDisappear')
          this.maskShow = false
          resolve()
        }
      },
      mounted: function () {
        this.maskShow = true
      }
    })
  })
  return promise
}

export default data => createAlert(data.title, data.msg)
