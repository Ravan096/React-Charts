
import "../styles/processtimecore.css"
import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const processTimeCore = () => {
    const chartContainer = useRef<HTMLDivElement | null>(null);

    const rawData = [
        {
            "DateTime": "2024-05-24T05:34:24",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 7.81\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 12.11\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 12.5\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 12.5\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 44.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:29:38",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 14.39\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 9.47\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 14.77\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.94\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 57.58\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 1.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:24:51",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 25.0\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 25.0\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 25.0\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 24.24\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 99.24\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 7.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:20:07",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 8.2\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 7.03\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 12.11\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 10.94\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 38.28\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:15:21",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 2.36\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 3.92\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 8.21\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 12.51\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 27.0\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 1.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:10:29",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 17.28\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 15.81\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 17.28\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 20.59\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 70.97\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 1.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:05:43",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 16.8\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 14.46\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 18.75\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 22.27\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 72.28\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T05:00:55",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 8.85\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 9.23\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 17.69\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 20.77\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 56.54\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:56:06",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 19.24\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 18.47\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 20.77\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 23.46\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 81.94\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 1.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:51:20",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 3.47\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 4.24\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 9.24\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 10.0\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 26.95\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:46:31",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 20.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 23.44\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 22.66\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 24.61\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 91.02\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 0.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 19.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 61.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 4.0\r\n  }\r\n]"
        }
    ];


    const data = rawData.map(entry => ({
        ...entry,
        PercentProcessorTimeCore: JSON.parse(entry.PercentProcessorTimeCore)
    }));

    const timestamps = data.map(item => item.DateTime);;

    const coreSeries: { [key: string]: { name: string, data: number[], stack: string } } = {};
    const sqlServerCPU: { name: string, data: number[], stack: string, type: string, yAxis: number } = {
        name: 'SqlServerCPU',
        data: [],
        stack: 'cpu',
        type: 'line',
        yAxis: 1
    };

    data.forEach(entry => {
        entry.PercentProcessorTimeCore.forEach((coreEntry: { Core: string, Value: number }) => {
            if (coreEntry.Core === "SqlServerCPU") {
                sqlServerCPU.data.push(coreEntry.Value);
            } else {
                if (!coreSeries[coreEntry.Core]) {
                    coreSeries[coreEntry.Core] = {
                        name: `Core ${coreEntry.Core}`,
                        data: [],
                        stack: 'cores'
                    };
                }
                coreSeries[coreEntry.Core].data.push(coreEntry.Value);
            }
        });
    });

    const series = Object.values(coreSeries).concat(sqlServerCPU);

    useEffect(() => {
        if (chartContainer.current) {
            Highcharts.chart(chartContainer.current, {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Processor Time Core Usage'
                },
                xAxis: {
                    categories: timestamps,
                    crosshair: true,
                    labels: {
                        rotation: -45,
                        format: '{value:%Y-%m-%d %H:%M:%S}'
                    }
                },
                yAxis: [
                    {
                        labels: {
                            format: '{value} %',
                        },
                        title: {
                            text: 'Core Usage',
                        },
                        stackLabels: {
                            enabled: false,
                            formatter: function () {
                                return Highcharts.numberFormat(this.total,2) + ' %';
                            }
                        }
                    },
                    {
                        title: {
                            text: 'SqlServerCPU',
                        },
                        labels: {
                            format: '{value} %',
                        },
                        opposite: true
                    }
                ],
                tooltip: {
                    shared: true,
                    formatter: function () {
                        let s = `<b>${this.x}</b>`;
                        this.points?.forEach(point => {
                            s += `<br/>${point.series.name}: ${point.y} %`;
                        });
                        return s;
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        dataLabels: {
                            enabled: false,
                            format: '{y} %'
                        }
                    }
                },
                series: series as Highcharts.SeriesOptionsType[]
            });
        }
    }, [series, timestamps]);






    return (
        <div>
            <div ref={chartContainer}></div>
        </div>
    )
}

export default processTimeCore