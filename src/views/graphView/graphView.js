import { mapGetters } from 'vuex';
import Common from '../../common';
import ChartComponent from '../../components/chartComponent';

const _graphStore = "graphStore/";

export default {
  name: 'graph-view',
  created(){
    this.init(this.graphData.data);
  },
  components:{
    'chart-component': ChartComponent
  },
  computed:{
    ...mapGetters({
      graphData: _graphStore + 'GRAPH_DATA'
    }),
  },
  data()
  {
    return{
      chartData: []
    };
  }, 
  methods:{
    init(chartDataPayload){

      let tempChartData =  JSON.parse(Common.storageCommon.getItem('chartData'));

      if(chartDataPayload.length > 0)
      {
        Common.storageCommon.removeItem('chartData');
        Common.storageCommon.setItem('chartData',  JSON.stringify(chartDataPayload));
        tempChartData = chartDataPayload;
      }

      this.chartData = ( Common.arrayCommon.isValid(tempChartData) ) ? tempChartData: [];
    }
  },
  watch:{
    graphData:{
      handler(updatedValuePayload)
      {
        this.init(updatedValuePayload.data);
      },
    },
    deep: true
  }
};


