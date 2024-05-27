
import Highcharts from 'highcharts';

import { useEffect, useRef } from 'react';
import "../styles/home.css";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

const Home = () => {

    const chartContainer1 = useRef<HTMLDivElement | null>(null);
    const chartContainer2 = useRef<HTMLDivElement | null>(null);
    const chartContainer3 = useRef<HTMLDivElement | null>(null);
    const chartContainer4 = useRef<HTMLDivElement | null>(null);
    const chartContainer5 = useRef<HTMLDivElement | null>(null);
    const chartContainer6 = useRef<HTMLDivElement | null>(null);
    const chartContainer7 = useRef<HTMLDivElement | null>(null);



    const synchronizeCharts = (charts: Highcharts.Chart[]) => {
        charts.forEach(chart => {
            chart.container.onmousemove = function (e: any) {
                charts.forEach(syncChart => {
                    const event = syncChart.pointer.normalize(e);
                    const point = syncChart.series[0].searchPoint(event, true);
                    if (point) {
                        point.onMouseOver();
                        syncChart.tooltip.refresh(point);
                        syncChart.xAxis[0].drawCrosshair(event, point);
                    }
                });
            };
            chart.container.onmouseleave = function () {
                charts.forEach(syncChart => {
                    syncChart.tooltip.hide();
                    syncChart.xAxis[0].hideCrosshair();
                });
            };
        });
    };




    const chartOptions: Highcharts.Options = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 
                135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 
                105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 
                59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 
                57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }] as Highcharts.SeriesOptionsType[]
    };

    const timeSeriesOptions: Highcharts.Options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Time Series Chart'
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        series: [{
            name: 'Random Data',
            data: [
                [Date.UTC(2023, 0, 1), 29.9],
                [Date.UTC(2023, 1, 1), 71.5],
                [Date.UTC(2023, 2, 1), 106.4],
                [Date.UTC(2023, 3, 1), 129.2],
                [Date.UTC(2023, 4, 1), 144.0],
                [Date.UTC(2023, 5, 1), 176.0]
            ]
        }] as Highcharts.SeriesOptionsType[]
    };

    const areaSplineOptions: Highcharts.Options = {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Area Spline Chart'
        },
        xAxis: {
            categories: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
            ]
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }] as Highcharts.SeriesOptionsType[]
    };

    const areaRangeOptions: Highcharts.Options = {
        chart: {
            type: 'arearange'
        },
        title: {
            text: 'Area Range Chart'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        series: [{
            name: 'Temperatures',
            data: [
                [Date.UTC(2023, 0, 1), -9.7, 9.4],
                [Date.UTC(2023, 0, 2), -8.7, 6.5],
                [Date.UTC(2023, 0, 3), -3.5, 9.4],
                [Date.UTC(2023, 0, 4), -1.4, 19.9],
                [Date.UTC(2023, 0, 5), 0.0, 22.6],
                [Date.UTC(2023, 0, 6), 2.9, 29.5]
            ]
        }] as Highcharts.SeriesOptionsType[]
    };

    const basicAreaOptions: Highcharts.Options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Basic Area Chart'
        },
        xAxis: {
            categories: [
                'Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'
            ]
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }] as Highcharts.SeriesOptionsType[]
    };

    const lineChartOptions: Highcharts.Options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Line Chart'
        },
        xAxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5,
                25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2,
                17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }] as Highcharts.SeriesOptionsType[]
    };


    
    useEffect(() => {
        const charts: Highcharts.Chart[] = [];

        if (chartContainer2.current) {
            charts.push(Highcharts.chart(chartContainer2.current, chartOptions));
        }
        if (chartContainer3.current) {
            charts.push(Highcharts.chart(chartContainer3.current, timeSeriesOptions));
        }
        if (chartContainer4.current) {
            charts.push(Highcharts.chart(chartContainer4.current, areaSplineOptions));
        }
        if (chartContainer5.current) {
            charts.push(Highcharts.chart(chartContainer5.current, areaRangeOptions));
        }
        if (chartContainer6.current) {
            charts.push(Highcharts.chart(chartContainer6.current, basicAreaOptions));
        }
        if (chartContainer7.current) {
            charts.push(Highcharts.chart(chartContainer7.current, lineChartOptions));
        }

        if (charts.length > 0) {
            synchronizeCharts(charts);
        }
    }, []);


    return (
        <div className='home'>
         <div>
            <h1>Highcharts Example</h1>
            <div ref={chartContainer1}></div>
            <div ref={chartContainer2}></div>
            <div ref={chartContainer3}></div>
            <div ref={chartContainer4}></div>
            <div ref={chartContainer5}></div>
            <div ref={chartContainer6}></div>
            <div ref={chartContainer7}></div>
        </div>
        </div>
    )
}

export default Home