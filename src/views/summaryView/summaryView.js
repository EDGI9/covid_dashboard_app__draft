import { mapGetters } from 'vuex';
import FilterComponent from '../../components/filterComponent';
import TableComponent from '../../components/tableComponent';
import Utils from '../../utils';

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
    },
    filterTableData(filterPayload)
    {     
      this.results = Utils.filterUtils.filterObjectByNameProperty(this.totalSummary, filterPayload);
      this.updateGraphData(this.results);      
    },
    updateGraphData(dataPayload)
    {
      if(dataPayload)
      {
        const graphRequestPayload = {
          type: 'summary',
          data: dataPayload
        };

        this.$store.dispatch( _graphStore + 'SET_GRAPH_DATA', graphRequestPayload);
      }
    }
  },
  watch:{
    totalSummary:{
      handler(updatedValuePayload)
      {
        this.results = updatedValuePayload;
        this.updateGraphData(updatedValuePayload);
      },
      deep: true
    }
  }
  
};


