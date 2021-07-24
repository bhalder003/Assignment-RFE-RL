<template>
  <div id="app">
    <Index/>
  </div>  
</template>

<script>
import Vue from 'vue'
import Index from './components/Index.vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    { path: '', component: Index }
]

const router = new VueRouter({
    routes
});


export default {
  name: 'App',
  router,
  components: {
     Index
  },
  data () {
    return {
      options:['black', 'red', 'blue', 'green', 'purple', 'orange'],
      selected : '',
      componentKey:0
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;  
    }
  }
  // created() {
  //   setTimeout(() => {
  //     this.selected = 'black';
  //   }, 1000);
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
