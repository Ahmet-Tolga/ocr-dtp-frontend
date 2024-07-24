import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const StudentStatesChart = () => {
  useEffect(() => {
    const studentStatesChartOptions = {
      chart: {
        height: 250,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['Total Signups', 'Active Student'],
      series: [76.7,  30],
      legend: {
        show: true,
        position: 'bottom',
      },
      fill: {
         opacity: [1, 0.5],
      },
      colors: ['#04a9f5', '#04a9f5']
    };

    const chart = new ApexCharts(document.querySelector("#student-states-chart"), studentStatesChartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return <div id="student-states-chart" />;
};

export default StudentStatesChart;
