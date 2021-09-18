import { mapGetters } from 'vuex';
import Common from '../../common';
import ChartComponent from '../../components/chartComponent';

const _graphStore = "graphStore/";

export default {
  name: 'graph-view',  
  components:{
    'chart-component': ChartComponent
  },
  computed:{
    ...mapGetters({
      graphData: _graphStore + 'GRAPH_DATA'
    }),
  },created(){
    this.init(this.graphData);
  },
  data()
  {
    return{
      chartData: []
    };
  }, 
  methods:{
    init(graphDataPayload){

      const graphDataStorageKey = 'graphData';
      let tempGraphData =  JSON.parse(Common.storageCommon.getItem(graphDataStorageKey));

      if(Common.arrayCommon.isValid(graphDataPayload.data))
      {
        Common.storageCommon.removeItem(graphDataStorageKey);
        Common.storageCommon.setItem(graphDataStorageKey,  JSON.stringify(graphDataPayload));
        tempGraphData = graphDataPayload;
      }

      this.chartData = ( Common.arrayCommon.isValid(tempGraphData.data) ) ? tempGraphData: [];
    }
  },
  watch:{
    graphData:{
      handler(updatedValuePayload)
      {
        this.init(updatedValuePayload);
      },
    },
    deep: true
  }
};


