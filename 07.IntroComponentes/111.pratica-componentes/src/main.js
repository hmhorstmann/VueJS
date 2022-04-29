import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Menu from "@/components/template/SideMenu.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Footer from './components/template/Footer'

Vue.config.productionTip = false
Vue.component("app-footer", Footer)
Vue.component("app-menu", Menu)
Vue.component("app-toolbar", Toolbar)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
