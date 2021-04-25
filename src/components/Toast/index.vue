<template>
  <div class="toast">{{message}}</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Toast',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ''
  })
  const changeToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.showToast = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { showToast, toastMessage } = toRefs(toastData)
  return { showToast, toastMessage, changeToast }
}

</script>
<style lang="scss" scoped>
// @import "../style/viribles.scss";
.toast {
  position: fixed;
  left: 50%;
  top: 35%;
  padding: 0.1rem;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #ffffff;
}
</style>
