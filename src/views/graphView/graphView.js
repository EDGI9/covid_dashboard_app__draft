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
      this.chartData = ( Common.arrayCommon.isValid(graphDataPayload.data) ) ? graphDataPayload: {};
    },
    captilizeTitle(titlePayload)
    {
      return (titlePayload && titlePayload === 'summary')? Common.stringCommon.capitalizeFirstLetter(titlePayload) : titlePayload;
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


