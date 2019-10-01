// css
import './style.css';
import './all.js';

import Vue from 'vue'
import router from './routes'
import App from './components/App.vue'


router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

const app = new Vue({
	el: "#app",
	router,
	components: {
		App
	}
});