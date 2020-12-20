import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import './main.sass'
import './assets/breakpoints.sass'
import jquery from "jquery";
import mitt from 'mitt';
import Instructions from './components/Instructions.vue';
import ConsoleLog from "./components/ConsoleLog.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



window.$ = window.jQuery = jquery;
const emitter = mitt();
let app = createApp(App)

app.config.productionTip = false
app.config.globalProperties.emitter = emitter
app.mount('#app')

library.add(faUserSecret)
library.add(faArrowUp)

app.component('icon', FontAwesomeIcon)
app.component('instructions', Instructions)
app.component('console-log', ConsoleLog)

