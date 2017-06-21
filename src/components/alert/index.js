import Vue from 'vue'
import Alert from './alert.vue'

function createAlert (title, ctn) {
  let promise = new Promise((resolve, reject) => {
    const Instance = new Vue({
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
      },
      render (c) {
        return c(Alert, {
          props: {
            confirm: this.confirmDisappear,
            cancel: this.cancelDisappear,
            ctn,
            title
          },
          on: {
            'alert-disappear': this.confirmDisappear
          }
        })
      }
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    return Instance
  })
  return promise
}

export default data => createAlert(data.title, data.msg)
