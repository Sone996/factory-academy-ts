import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/scss/tailwind.css'
import 'vue-select/dist/vue-select.css';
import globaComponents from './plugins/GlobalComponents';
import './assets/scss/main.scss'

Vue.config.productionTip = false

// vue select and scroll
Object.keys(globaComponents.components).forEach((key: string) => {
	// Vue.component(key, globaComponents.components[key]);
	Vue.component(key, globaComponents.components.vSelect);
});

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
