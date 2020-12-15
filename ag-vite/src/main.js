import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import './variables.sass'
import './assets/breakpoints.sass'
import jquery from "jquery";
import mitt from 'mitt';
import Instructions from './components/Instructions.vue';
import ConsoleLog from "./components/ConsoleLog.vue";

window.$ = window.jQuery = jquery;
const emitter = mitt();
let app = createApp(App)

app.config.globalProperties.emitter = emitter
app.mount('#app')

app.component('instructions', Instructions)
app.component('console-log', ConsoleLog)

