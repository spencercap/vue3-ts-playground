import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// declare module 'vue/types/vue' {
//     interface Vue {

//     }
// };

// App.extends

createApp(App).use(router).mount('#app');
