import Home from './components/Home.vue';
import Marrinxa from './components/Marrinxa.vue';
import Agenda from './components/Agenda.vue';
import Botiga from './components/Botiga.vue';
import Santes from './components/Santes.vue';
import Acte from './components/Acte.vue';
import Grup from './components/Grup.vue';
import Grups from './components/Grups.vue';

export const routes = [
    {
    	path: '', 
    	component: Home, 
    	name: 'home', 
    	meta: {title:'Inicio'}
    },
    {
    	path: '/marrinxa', 
    	component: Marrinxa, 
    	name: 'marrinxa', 
    	meta: {title:'Marrinxa'}
    },
    {
    	path: '/agenda', 
    	component: Agenda, 
    	name: 'agenda', 
    	meta: {title:'Agenda'}
    },
    {
        path: '/botiga', 
        component: Botiga, 
        name: 'botiga', 
        meta: {title:'Botiga'}
    },
    {
        path: '/santes', 
        component: Santes, 
        name: 'santes', 
        meta: {title:'Santes'}
    },
    {
        path: '/acte/:id', 
        component: Acte, 
        name: 'acte', 
        meta: {title:'Acte'}
    },
    {
        path: '/grup/:id', 
        component: Grup, 
        name: 'grup', 
        meta: {title:'Grup'}
    },
    {
        path: '/grups/', 
        component: Grups, 
        name: 'grups', 
        meta: {title:'Grups'}
    }
]