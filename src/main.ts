import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify' // Vuetify plugin
import './main.css'
import '@mdi/font/css/materialdesignicons.css' // importa íconos mdi
import 'vuetify/styles'


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
