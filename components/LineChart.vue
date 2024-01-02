<template>
  <div>
    <canvas ref="chart" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { onMounted, ref, watchEffect } from 'vue';

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const chartRef = ref(null);
    let chartInstance = null;

    onMounted(() => {
      Chart.register(...registerables);
      chartInstance = new Chart(chartRef.value, {
        type: 'line',
        data: props.chartData,
        options: props.options
      });
    });

    watchEffect(() => {
      if (chartInstance) {
        chartInstance.data = props.chartData;
        chartInstance.options = props.options;
        chartInstance.update();
      }
    });

    return {
      chartRef,
    };
  },
};
</script>
