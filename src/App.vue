<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    {{countryTotals}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const _summaryStore = "summaryStore/";
const _countryStore = "countryStore/";

export default {
  mounted()
  {
    //this.$store.dispatch( _summaryStore + 'GET_TOTAL_SUMMARY');

    const tempPayload = {
      countryName: 'portugal',
      status: 'confirmed'
    };

    this.$store.dispatch( _countryStore + 'GET_COUNTRY_TOTALS', tempPayload );
  },
  computed: {
    ...mapGetters({
      totalSummary: _summaryStore + 'TOTAL_SUMMARY',
      countryTotals: _countryStore + 'COUNTRY_TOTALS'
    })
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
