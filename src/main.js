import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
})

app.mount('#app')