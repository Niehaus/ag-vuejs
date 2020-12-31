import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import './main.sass'
import './assets/breakpoints.sass'
import jquery from "jquery";
import mitt from 'mitt';
import Instructions from './components/Instructions.vue';
import ConsoleLog from "./components/ConsoleLog.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Draggable } from 'gsap/Draggable';
import { gsap } from "gsap";
import Tournament from "./components/Tournament.vue";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

gsap.registerPlugin(Draggable);
gsap.install(window)
window.$ = window.jQuery = jquery;
const emitter = mitt();

let app = createApp(App)

app.config.productionTip = false
app.config.globalProperties.emitter = emitter

const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};

app.use(VueSweetalert2, options);
app.mount('#app')

library.add(faUserSecret)
library.add(faArrowUp)

app.component('icon', FontAwesomeIcon)
app.component('instructions', Instructions)
app.component('console-log', ConsoleLog)
app.component('tournament', Tournament)
