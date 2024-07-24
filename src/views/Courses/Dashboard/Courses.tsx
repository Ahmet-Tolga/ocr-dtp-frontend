import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const CourseReportBarChart = () => {
  useEffect(() => {
    const courseReportBarChartOptions = {
      chart: {
        type: 'bar',
        height: 210,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
          borderRadius: 3
        }
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['transparent']
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        show: true,
        fontFamily: `'Public Sans', sans-serif`,
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: false
        },
        markers: {
          width: 10,
          height: 10,
          radius: '50%',
          offsexX: 2,
          offsexY: 2
        },
        itemMargin: {
          horizontal: 15,
          vertical: 5
        }
      },
      colors: ['#04a9f5', '#ffa21d'],
      series: [{
        name: 'Net Profit',
        data: [180, 90, 135, 114, 120, 145, 180, 90, 135, 114, 120, 145]
      }, {
        name: 'Revenue',
        data: [120, 45, 78, 150, 168, 99, 120, 45, 78, 150, 168, 99]
      }],
      grid:{
        borderColor: '#00000010',
      },
      yaxis: {
        show:false
      }
    };

    const chart = new ApexCharts(document.querySelector("#course-report-bar-chart"), courseReportBarChartOptions);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array means this effect runs once, like componentDidMount

  return  <div id="course-report-bar-chart" /> ;
};

export default CourseReportBarChart;
