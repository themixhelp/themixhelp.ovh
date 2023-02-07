import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import AboutMe from '@/views/AboutMe.vue'
import Contact from '@/views/Contact.vue'

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/about-me',
		component: AboutMe,
	},
	{
		path: '/contact',
		component: Contact,
	},
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
