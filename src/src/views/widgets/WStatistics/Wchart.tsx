import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ProjectRatingChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options_project_rating = {
      chart: { type: 'bar', height: 50, sparkline: { enabled: true } },
      colors: ['#1DE9B6'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
      series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
      xaxis: { crosshairs: { width: 1 } },
      tooltip: {
        fixed: { enabled: false },
        x: { show: false },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
        marker: { show: false },
      },
    };

    const chart_project_rating = new ApexCharts(chartRef.current, options_project_rating);
    chart_project_rating.render();

    return () => {
      chart_project_rating.destroy();
    };
  }, []);

  return <div id="project-rating-chart" ref={chartRef}></div>;
};

const CanceledOrderChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const options_canceled_order = {
        chart: {
          type: 'line',
          height: 60,
          stacked: true,
          sparkline: { enabled: true }
        },
        colors: ['#F44236'],
        stroke: { curve: 'smooth', width: 2 },
        series: [{ data: [0, 50, 4, 10, 3, 25, 5] }],
        tooltip: {
          x: { show: false },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: { show: false }
        }
      };
  
      const chart_canceled_order = new ApexCharts(chartRef.current, options_canceled_order);
      chart_canceled_order.render();
  
      return () => {
        chart_canceled_order.destroy();
      };
    }, []);
  
    return <div id="canceled-order-chart" ref={chartRef}></div>;
  };

  const TransactionsChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const options_transactions = {
        chart: { type: 'bar', height: 60, sparkline: { enabled: true } },
        colors: ['#04A9F5'],
        plotOptions: { bar: { borderRadius: 2, columnWidth: '80%' } },
        series: [{ data: [10, 30, 40, 20, 60, 50, 20, 15, 20, 25, 30, 25] }],
        xaxis: { crosshairs: { width: 1 } },
        tooltip: {
          fixed: { enabled: false },
          x: { show: false },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: { show: false }
        }
      };
  
      const chart_transactions = new ApexCharts(chartRef.current, options_transactions);
      chart_transactions.render();
  
      return () => {
        chart_transactions.destroy();
      };
    }, []);
  
    return <div id="transactions-chart" ref={chartRef}></div>;
  };

  const TotalOrderChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const options_total_order = {
        chart: {
          type: 'area',
          height: 100,
          stacked: true,
          sparkline: { enabled: true }
        },
        colors: ['#1DE9B6'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            type: 'vertical',
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0
          }
        },
        stroke: { curve: 'smooth', width: 2 },
        series: [{ data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65, 40, 70, 50, 90, 50] }]
      };
  
      const chart_total_order = new ApexCharts(chartRef.current, options_total_order);
      chart_total_order.render();
  
      return () => {
        chart_total_order.destroy();
      };
    }, []);
  
    return <div id="total-order-chart" ref={chartRef}></div>;
  };

export  {ProjectRatingChart1,CanceledOrderChart,TransactionsChart,TotalOrderChart};
