import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

//Router
import {routes} from './routes';

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	base: process.env.BASE_URL,
	mode: 'history'
});


//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//CSS
import './assets/css/main.css';

//import './custom.scss'

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
