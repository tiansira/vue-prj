import { createApp } from 'vue'
// import App from './App.vue'
import index from './index.vue'
import router from './router'
// createApp(App).use(router).mount('#app')


createApp(index).use(router).mount('#app')

// 引入jQuery、bootstrap
// import $ from 'jquery'
// import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
