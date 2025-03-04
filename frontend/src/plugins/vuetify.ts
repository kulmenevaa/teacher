import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { ru } from 'vuetify/locale'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    theme: {
        defaultTheme: 'light'
    },
    display: {
        mobileBreakpoint: 'md',
        thresholds: {
            xs: 576,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        },
    },
    locale: {
        locale: 'ru',
        messages: { ru },
    }
})