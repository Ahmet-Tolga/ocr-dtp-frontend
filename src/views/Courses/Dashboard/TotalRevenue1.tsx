import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TotalRevenueLine1Chart = () => {
  useEffect(() => {
    const totalRevenueLine1ChartOptions = {
      chart: {
        type: 'line',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1de9b6'],
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 18, 12, 25, 10, 20]
        }
      ],
      yaxis: {
        min: 0,
        max: 30
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#total-revenue-line-1-chart"), totalRevenueLine1ChartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return <div id="total-revenue-line-1-chart" />;
};

export default TotalRevenueLine1Chart;
