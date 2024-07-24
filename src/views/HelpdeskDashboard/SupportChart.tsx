import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const SupportChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options1 = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ["#3ebfea"],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options1);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="support-chart" ref={chartRef}></div>;
};



const SupportChart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options1 = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ["#04a9f5"],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options1);
    chart.render();

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="support-chart1" ref={chartRef}></div>;
};



const SupportChart3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options1 = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      colors: ["#1de9b6"],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options1);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="support-chart2" ref={chartRef}></div>;
};

export default SupportChart2;



export  {SupportChart1 ,SupportChart2,SupportChart3};
