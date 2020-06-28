import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'

Vue.config.productionTip = false

router.beforeEach( (to,from,next) => 
	{
		console.log(to.path)
		next();
	}
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
