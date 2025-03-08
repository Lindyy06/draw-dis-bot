import {createApp} from 'vue'
import {createPinia} from 'pinia'

export default () => {
    console.log('vue init')
    const vue = createApp({})
    const pinia = createApp()

    vue.use(pinia)

}