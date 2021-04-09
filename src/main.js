import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import Echarts from 'echarts'
import './style/index.scss'

// Vue.prototype.$echarts = Echarts
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
