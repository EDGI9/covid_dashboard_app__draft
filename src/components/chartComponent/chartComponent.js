import { Bar } from 'vue-chartjs';
import Utils from '../../utils';

export default {
  name: 'chart-component',
  props: {
    chartData: {
      type: [],
      require: false,
      default(){ return []; }
    }
  },
  extends: Bar,
  data(){
    return{
      chartdata: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          },
          {
            label: 'Data Two',
            backgroundColor: '#f87960',
            data: [100, 10]
          }
        ]
      },
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
    const tempChartData = Utils.chartUtils.generateChartDataObject(this.chartData);
    console.log(tempChartData);
    this.renderChart(tempChartData, this.options);
  }
};
