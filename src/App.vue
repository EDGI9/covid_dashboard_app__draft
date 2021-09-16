<template>
  <div id="app">
    <navigation-component
      v-bind:routes = "processRoutesData(this.$router.options.routes)"
    />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Utils from './utils';
import NavigationComponent from './components/navigationComponent';

const _summaryStore = "summaryStore/";
const _countryStore = "countryStore/";

export default {
  created(){
    this.init();    
  },
  mounted()
  {
    
    //this.$store.dispatch( _summaryStore + 'GET_TOTAL_SUMMARY');

    /*const tempPayload = {
      countryName: 'portugal',
      status: 'confirmed'
    };

    this.$store.dispatch( _countryStore + 'GET_COUNTRY_TOTALS', tempPayload ); */

    //this.$store.dispatch( _countryStore + 'GET_ALL_COUNTRIES' );

  },
  components:{
    'navigation-component': NavigationComponent
  },
  computed: {
    ...mapGetters({
      totalSummary: _summaryStore + 'TOTAL_SUMMARY',
      countries: _countryStore + 'COUNTRIES',
      countryTotals: _countryStore + 'COUNTRY_TOTALS'
    })
  },
  methods:{
    init(){
      if(!this.$router.currentRoute.name)
      {
        Utils.routeUtils.gotoRoute(this,'summary');
      }
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
