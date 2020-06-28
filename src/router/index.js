import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  
	]

const router = new VueRouter({
  routes:[
	  {
		  path:'/home/:id',
		  name:'home',
		  
		  component:()=>import('../views/Home.vue'),
		  children:[{
				  path:'/child',
				  component: ()=> import('../views/Child.vue')
			  
		  }]
	  }
  ]
})

export default router
