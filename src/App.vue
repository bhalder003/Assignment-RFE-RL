<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Index msg="I should look " :options=options :selected=selected />
  </div>
</template>

<script>
import Vue from 'vue'
import Index from './components/Index.vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css'

export default {
  name: 'App',
  components: {
     Index
  },
  data () {
    return {
      options:['black', 'red', 'blue', 'green', 'purple', 'orange'],
      selected : ''
    }
  },
  created() {
    setTimeout(() => {
      this.selected = 'black';
    }, 100);
  }
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
