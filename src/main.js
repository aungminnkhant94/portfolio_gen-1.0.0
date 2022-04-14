import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import './assets/styles/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faPhone, faMoon, faDownload, faCircleCheck, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faInstagram,faLinkedin, faFacebookMessenger, faBootstrap, faLaravel, faSass, faJs, faVuejs, faPhp, faFacebook } from '@fortawesome/free-brands-svg-icons';


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPhone, faGithub, faMoon, faInstagram, faLinkedin, faDownload, faFacebookMessenger, faCircleCheck, faBootstrap, faLaravel, faGlobe, faSass, faJs, faVuejs, faPhp, faEnvelope, faFacebook)
// library.add(faGithub)

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
