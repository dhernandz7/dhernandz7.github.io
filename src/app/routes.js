import Vue from 'vue'
import Router from 'vue-router'
import Cv from './components/Cv.vue';
import Index from './components/Index.vue';
import Servicios from './components/Servicios.vue';
import NoEncontrado from './components/404.vue';

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'inicio',
		component: Cv,
		meta: {title: 'Página de inicio'}
	},
	{
		path: '/hoja-de-vida',
		name: 'hoja-de-vida',
		component: Cv,
		meta: {title: 'Hoja de vida'}
	},
	{
		path: '/index',
		name: 'index',
		component: Index,
		meta: {title: 'Página de inicio'}
	},
	{
		path: '/servicios',
		name: 'servicios',
		component: Servicios,
		meta: {title: 'Mis servicios'}
	},
	{
		path: '*',
		component: NoEncontrado,
		title: 'Página no encontrada'
	}
	],
	mode: 'history',
	scrollBehavior() {
		return {x:0, y:0}
	}
});