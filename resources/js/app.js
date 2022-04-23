require('./bootstrap');

require('alpinejs');

import { createApp } from "vue";
import router from './router'
import ExemplosIndex from './components/exemplos/ExemplosIndex'

createApp({
    components: {
        ExemplosIndex
    }
}).use(router).mount('#app')