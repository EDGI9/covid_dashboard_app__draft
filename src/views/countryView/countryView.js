import { mapGetters } from 'vuex';
import FilterComponent from '../../components/filterComponent';
import TableComponent from '../../components/tableComponent';
import Utils from '../../utils';

const _countryStore = "countryStore/";
const _graphStore = "graphStore/";
const _statusesStore = "statusesStore/";

export default {
  name: 'country-view',
  components:{
    'filter-component': FilterComponent,
    'table-component': TableComponent
  },
  computed:{
    ...mapGetters({
      countryTotals: _countryStore + 'COUNTRY_TOTALS',
      countries: _countryStore + 'COUNTRIES',
      statusses: _statusesStore + 'STATUSSES_DATA',
    }),
  },
  created(){
    this.init();
  },
  data(){
    return {
      results: []
    };
  },
  methods:{
    init(){
      this.$store.dispatch( _countryStore + 'GET_ALL_COUNTRIES' );
      this.$store.dispatch( _statusesStore + 'GET_STATUSSES_DATA' );
    },
    filterTableData(filterRequestPayload)
    {        
      const tempPayload = {
        countryName: filterRequestPayload.searchedCountry,
        status: filterRequestPayload.selectedStatus
      };

      this.$store.dispatch( _countryStore + 'GET_COUNTRY_TOTALS', tempPayload );
    },
    updateResults(resultsPayload)
    {
      this.results = resultsPayload.statuses;
    },
    updateGraphData(dataPayload)
    {
      if(dataPayload)
      {
        const graphRequestPayload = {
          type: 'country',
          data: dataPayload
        };

        this.$store.dispatch( _graphStore + 'SET_GRAPH_DATA', graphRequestPayload);
      }
    }
  },
  watch:{
    countryTotals:{
      handler(updatedValuePayload)
      {
        this.updateResults(updatedValuePayload);
        this.updateGraphData(Utils.filterUtils.filterObjectByNameProperty(this.countryTotals, updatedValuePayload.statuses));
      },
      deep: true
    }
  }  
};


