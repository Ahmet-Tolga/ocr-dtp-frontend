import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const CustomerReviewChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 260,
        type: 'pie',
      },
      series: [66, 50, 40, 30],
      labels: ["Very Poor", "Satisfied", "Very Satisfied", "Poor"],
      legend: {
        show: true,
        offsetY: 50,
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#04a9f5',
        }
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            height: 320,
          },
          legend: {
            position: 'bottom',
            offsetY: 0,
          }
        }
      }]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="satisfaction-chart" ref={chartRef}></div>;
};

export default CustomerReviewChart;
