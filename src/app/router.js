import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue';
import Servicios from './components/Servicios.vue';

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'index',
		component: Index,
		meta: {title: 'Página de inicio'}
	},
	{
		path: '/servicios',
		name: 'servicios',
		component: Servicios,
		meta: {title: 'Página de inicio'}
	}
	],
	mode: 'history',
	scrollBehavior() {
		return {x:0, y:0}
	}
});