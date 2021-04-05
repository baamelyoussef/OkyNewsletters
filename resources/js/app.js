
require('./bootstrap');
require('alpinejs');
window.Vue = require('vue').default;
import Vue from 'vue'


Vue.component('buzzevent-template', require('./components/Buzzeventtemplate.vue').default);
Vue.component('itskills-template', require('./components/Itskillstemplate.vue').default);
Vue.component('editor-template', require('./components/Templateeditor.vue').default);
Vue.component('new-template', require('./components/Newtemplate.vue').default);

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    props: {
        show: {
          type: Boolean,
          required: true,
          twoWay: true
        }
      },
});

