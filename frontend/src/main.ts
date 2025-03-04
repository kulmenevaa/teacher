import { createApp } from 'vue'

import App from '@/App.vue'

import router from '@/routers'
import store from '@/stores'

import { vuetify } from '@/plugins/vuetify'
// import { vuetifyProTipTap } from './plugins/tiptap'
// import Maska from 'maska'

import '@/styles.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(vuetify)
// app.use(vuetifyProTipTap)
// app.use(Maska)
app.mount('#app')
