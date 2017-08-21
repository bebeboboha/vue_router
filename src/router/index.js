import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/Main.vue'
import slider from '@/components/Slider'
import booklist from '@/components/Booklist'
import announcement from '@/components/Announcement'


Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	mode : 'history',
  	routes: [
    {
      path: '/',
      name: '',
      component: Main,
      children:[
		{
	      path: 'slider',
	      name: 'slider',
	      component: slider
	    },
	    {
	      path: 'booklist',
	      name: 'booklist',
	      component: booklist
	    },
	    {
	      path: 'announcement',
	      name: 'announcement',
	      component: announcement
	    },
      ]
    }
  ]
})
