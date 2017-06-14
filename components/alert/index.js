import Vue from 'vue'
import Alert from './alert.vue'

function createAlert (title, ctn) {
  let promise = new Promise((resolve, reject) => {
    let alertEle = document.createElement('div')
    alertEle.innerHTML = `<Alert title="${title}" :confirm="confirmDisappear" :cancel="cancelDisappear" ctn="${ctn}" @alert-disappear="confirmDisappear"></Alert>`
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
          resolve()
        },
        cancelDisappear: function () {
          reject()
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
