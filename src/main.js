import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

// import elementUi from 'element-ui'

createApp(App)
    .use(vueAxios,axios)
    // .use(elementUi)
    .mount('#app')

