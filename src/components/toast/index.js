import Vue from 'vue'
import Toast from './toast.vue'

// const iconTypes = {
//   'info': 'info',
//   'success': 'done',
//   'warning': 'warning',
//   'error': 'close'
// }

function createToast (type, msg = '', duration = 2) {
  const Instance = new Vue({
    components: {
      Toast
    },
    data: {
      duration,
      show: false
    },
    methods: {
      close: function () {
        this.show = false
      },
      afterLeave: function () {
        this.$destroy()
      }
    },
    mounted: function () {
      this.show = true
    },
    render (c) {
      return c(Toast, {
        props: {
          type,
          msg,
          duration,
          show: this.show
        },
        on: {
          'afterLeave': this.afterLeave,
          'close': this.close
        }
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  return Instance
}

export default data => {
  if (typeof data === 'string') return createToast('info', data)
  data.type = data.type || 'info'
  return createToast(data.type, data.msg, data.duration)
}
