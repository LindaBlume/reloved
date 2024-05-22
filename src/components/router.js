import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from './Mainpage.vue';
import warenkorb from './warenkorb.vue';


    const routes = [
        { path: '/', component: Mainpage },
        { path: '/warenkorb', component: warenkorb }
    ];
    const router = createRouter({
        history: createWebHistory(),
        routes,
});
export default router;