import { Bar } from 'vue-chartjs';
import Utils from '../../utils';

export default {
  name: 'chart-component',
  props: {
    chartData: {
      type: Object,
      required: false,
      default(){ return {}; }
    },
  },
  extends: Bar,
  data(){
    return{
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
  },
  mounted() {
    const tempChartData = Utils.graphUtils.generateChartDataObject(this.chartData);
    this.renderChart(tempChartData, this.options);
  }
};
