<template>
  <div id="app">
    <navigation-component
      v-bind:routes = "processRoutesData(this.$router.options.routes)"
    />
    <router-view />
  </div>
</template>

<script>
import Utils from './utils';
import NavigationComponent from './components/navigationComponent';

export default {
  created(){
    this.init();    
  },
  components:{
    'navigation-component': NavigationComponent
  },
  methods:{
    init(){
      Utils.routeUtils.gotoRoute(this,'summary');
    },
    processRoutesData(routesPayload)
    {
      return Utils.routeUtils.extractNameAndPath(routesPayload);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
