import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
    const app = createApp(Dashboard);
    app.use(PrimeVue);
    app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
