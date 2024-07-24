import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const InvitesGoalChart = () => {
    useEffect(() => {
        const invitesGoalChartOptions = {
            series: [76],
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            colors: ['#04a9f5'],
            plotOptions: {
                radialBar: {
                    startAngle: -95,
                    endAngle: 95,
                    hollow: {
                        margin: 15,
                        size: '50%',
                    },
                    track: {
                        background: '#eaeaea',
                        strokeWidth: '97%',
                        margin: 20
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: 0,
                            fontSize: '20px'
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: 10
                }
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['Average Results']
        };

        const chart = new ApexCharts(document.querySelector('#invites-goal-chart'), invitesGoalChartOptions);
        chart.render();

        // Cleanup function
        return () => {
            chart.destroy();
        };
    }, []); // Empty dependency array means this effect runs once, like componentDidMount

    return <div id="invites-goal-chart" />;
};

export default InvitesGoalChart;
