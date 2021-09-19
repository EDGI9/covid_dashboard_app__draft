import { mapGetters } from 'vuex';
import FilterComponent from '../../components/filterComponent';
import TableComponent from '../../components/tableComponent';
import Utils from '../../utils';
import Common from '../../common';

const _summaryStore = "summaryStore/";
const _countryStore = "countryStore/";
const _graphStore = "graphStore/";

export default {
  name: 'summary-view',
  components:{
    'filter-component': FilterComponent,
    'table-component': TableComponent
  },
  computed:{
    ...mapGetters({
      totalSummary: _summaryStore + 'TOTAL_SUMMARY',
      countries: _countryStore + 'COUNTRIES',
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
      this.$store.dispatch( _summaryStore + 'GET_TOTAL_SUMMARY');
      this.$store.dispatch( _countryStore + 'GET_ALL_COUNTRIES' );

      const selectedKey = Common.storageCommon.getItem(Common.storageCommon.keys.selectedCountry);

      if(selectedKey)
      {
       Common.storageCommon.removeItem(Common.storageCommon.keys.selectedCountry);
      }
    },
    filterTableData(filterRequestPayload)
    {     
      this.results = Utils.filterUtils.filterObjectByNameProperty(this.totalSummary, filterRequestPayload.searchedCountry);
      this.updateGraphData(this.results);      
    },
    updateResults(resultsPayload)
    {
      this.results = resultsPayload;
    },
    updateGraphData(dataPayload)
    {
      Utils.graphUtils.updateGraphData(this, _graphStore + 'SET_GRAPH_DATA', 'summary', dataPayload);
    }
  },
  watch:{
    totalSummary:{
      handler(updatedValuePayload)
      {
        this.updateResults(updatedValuePayload);
        this.updateGraphData(updatedValuePayload);
      },
      deep: true
    }
  }  
};