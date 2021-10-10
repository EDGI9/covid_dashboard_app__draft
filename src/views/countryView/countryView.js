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
    filterData(filterRequestPayload)
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
      const filterResult = Utils.filterUtils.filterObjectByNameProperty(this.countryTotals, resultsPayload.statuses);
      Utils.graphUtils.updateGraphData(this, _graphStore + 'SET_GRAPH_DATA', 'country', filterResult);
    },
  },
  watch:{
    countryTotals:{
      handler(updatedValuePayload)
      {
        this.updateResults(updatedValuePayload);       
      },
      deep: true
    }
  }  
};