import { mapGetters } from 'vuex';
import ChartComponent from '../../components/chartComponent';

const _graphStore = "graphStore/";

export default {
  name: 'graph-view',
  created(){
    this.init();
  },
  components:{
    'chart-component': ChartComponent
  },
  computed:{
    ...mapGetters({
      graphData: _graphStore + 'GRAPH_DATA'
    }),
  },  
  methods:{
    init(){
      console.log( this.graphData );
    }
  }
};


