import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TotalRevenueLine2Chart = () => {
  useEffect(() => {
    const totalRevenueLine2ChartOptions = {
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
      colors: ['#f44236'],
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width: 3
      },
      series: [
        {
          name: 'series1',
          data: [20, 10, 25, 18, 18, 10, 12]
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

    const chart = new ApexCharts(document.querySelector("#total-revenue-line-2-chart"), totalRevenueLine2ChartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return <div id="total-revenue-line-2-chart" />;
};

export default TotalRevenueLine2Chart;
