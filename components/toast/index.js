import Vue from 'vue'
import Toast from './toast.vue'

// const iconTypes = {
//   'info': 'info',
//   'success': 'done',
//   'warning': 'warning',
//   'error': 'close'
// }

function createToast (type, msg = '', duration = 3) {
  var div = document.createElement('div')
  div.innerHTML = '<transition name="slide-in-down" v-on:after-leave="afterLeave"><Toast v-if="show" type="' + type + '" msg="' + msg + '" :duration="duration" @close="close"></Toast></transition>'
  div.className = 'vc-toast'
  document.body.appendChild(div)

  var toast = new Vue({
    el: div,
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
        document.body.removeChild(toast.$el)
      }
    },
    mounted: function () {
      this.show = true
    }
  })
  return toast
}

export default data => {
  data.type = data.type || 'done'
  return createToast(data.type, data.msg, data.duration)
}
