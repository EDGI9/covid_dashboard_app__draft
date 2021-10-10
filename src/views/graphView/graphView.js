import { mapGetters } from 'vuex';
import FilterComponent from '../../components/filterComponent';
import Common from '../../common';
import Utils from '../../utils';
import ChartComponent from '../../components/chartComponent';

const _countryStore = "countryStore/";
const _graphStore = "graphStore/";
const _summaryStore = "summaryStore/";

export default {
  name: 'graph-view',  
  components:{
    'chart-component': ChartComponent,
    'filter-component': FilterComponent
  },
  computed:{
    ...mapGetters({
      graphData: _graphStore + 'GRAPH_DATA',
      totalSummary: _summaryStore + 'TOTAL_SUMMARY',
      countries: _countryStore + 'COUNTRIES',
    }),
  },
  created(){
    this.setChartData(this.graphData);
  },
  data()
  {
    return{
      chartData: [],
    };
  }, 
  methods:{
    setChartData(chartDataPayload){
      this.chartData = ( Common.arrayCommon.isValid(chartDataPayload.data) ) ? chartDataPayload: {};
    },
    //TODO: Create a Mixin for the capitalize
    captilizeTitle(titlePayload)
    {
      return (titlePayload && titlePayload === 'summary')? Common.stringCommon.capitalizeFirstLetter(titlePayload) : titlePayload;
    },
    //TODO: Move these data filtering and chart update methods to a common/utils file
    filterData(filterRequestPayload)
    { 
      const results = Utils.filterUtils.filterObjectByNameProperty(this.totalSummary, filterRequestPayload.searchedCountry);
      this.updateChartData(results);
    },
    updateChartData(dataPayload)
    {
      Utils.graphUtils.updateGraphData(this, _graphStore + 'SET_GRAPH_DATA', 'summary', dataPayload);
    }
  },
  watch:{
    graphData:{
      handler(updatedValuePayload)
      {
        this.setChartData(updatedValuePayload);
      },
    },
    deep: true
  }
};


