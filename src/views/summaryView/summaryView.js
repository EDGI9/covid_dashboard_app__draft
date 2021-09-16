import { mapGetters } from 'vuex';
import FilterComponent from '../../components/filterComponent';
import TableComponent from '../../components/tableComponent';

const _summaryStore = "summaryStore/";
const _countryStore = "countryStore/";

export default {
  name: 'summary-view',
  created(){
    this.init();
  },
  computed:{
    ...mapGetters({
      totalSummary: _summaryStore + 'TOTAL_SUMMARY',
      countries: _countryStore + 'COUNTRIES',
    })
  },
  components:{
    'filter-component': FilterComponent,
    'table-component': TableComponent
  },
  methods:{
    init(){
      this.$store.dispatch( _summaryStore + 'GET_TOTAL_SUMMARY');
      this.$store.dispatch( _countryStore + 'GET_ALL_COUNTRIES' );
    }
  }
  
};


