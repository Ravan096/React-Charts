
import "../styles/processtimecore.css"
import { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import { Options } from "highcharts";

const LiveChart = () => {

    const [rawData, setRawData] = useState<any[]>([]);
    const chartRef = useRef<Highcharts.Chart | null>(null);
    const chartContainer = useRef<HTMLDivElement | null>(null);



    const maxLength = 15;

    const initialData = [
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
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 22.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 61.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 4.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 14.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 19.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 111.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 10.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 15.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 8.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 18.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 88.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 7.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 11.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 5.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 56.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 4.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 9.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 12.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 12.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 89.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 5.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 11.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 18.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 26.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 78.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 7.0\r\n  }\r\n]"
        },
        {
            "DateTime": "2024-05-24T04:41:44",
            "WinServer": "CTS02",
            "PercentProcessorTimeCore": "[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": 10.31\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": 19.31\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": 19.23\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": 18.08\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": 102.93\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": 4.0\r\n  }\r\n]"
        },
    ];



    const processRawData = (data: any[]) => {
        const parsedData = data.map(entry => ({
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

        parsedData.forEach(entry => {
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

        return {
            series: Object.values(coreSeries).concat(sqlServerCPU),
            timestamps
        };
    };


    const initializeChart = () => {
        if (chartRef.current) {
            return;
        }

        const { series, timestamps } = processRawData(initialData);

        if (chartContainer.current) {
            chartRef.current = Highcharts.chart(chartContainer.current, {
                chart: {
                    type: "areaspline"
                },
                title: {
                    text: "Processor Time Core Usage",
                },
                xAxis: {
                    categories: timestamps,
                    crosshair: true,
                    labels: {
                        rotation: -45,
                        format: "{value:%Y-%m-%d %H:%M:%S}",
                    },
                },
                yAxis: [
                    {
                        labels: {
                            format: "{value} %",
                        },
                        title: {
                            text: "Core Usage",
                        },
                        stackLabels: {
                            enabled: false,
                            formatter: function () {
                                return Highcharts.numberFormat(this.total, 2) + " %";
                            },
                        },
                    },
                    {
                        title: {
                            text: "SqlServerCPU",
                        },
                        labels: {
                            format: "{value} %",
                        },
                        opposite: true,
                    },
                ],
                tooltip: {
                    shared: true,
                    formatter: function () {
                        let s: any = `<b>${this.x}</b>`;
                        this.points?.forEach((point) => {
                            s += `<br/>${point.series.name}: ${point.y} %`;
                        });
                        return s;
                    },
                },
                plotOptions: {
                    column: {
                        stacking: "normal",
                        dataLabels: {
                            enabled: false,
                            format: "{y} %",
                        },
                    },
                },
                series: series as Highcharts.SeriesOptionsType[],
            });
        }
    };

    useEffect(() => {
        initializeChart();

        if (rawData.length > 0) {
            const { series, timestamps } = processRawData(rawData);

            if (chartRef.current) {
                chartRef.current.update({
                    xAxis: {
                        categories: timestamps
                    },
                    series: series.map(d => ({
                        type: "line",
                        data: d.data,
                        name: d.name,
                        stack: d.stack
                    }))
                });
            }
        }
    }, [rawData]);

    useEffect(() => {
        setRawData(initialData);
        const interval = setInterval(() => {
            var demodata = {
                "DateTime": "2024-05-24T04:41:44",
                "WinServer": "CTS02",
                "PercentProcessorTimeCore": `[\r\n  {\r\n    \"Core\": \"0\",\r\n    \"Value\": ${Math.ceil(Math.random() * 21)}\r\n  },\r\n  {\r\n    \"Core\": \"1\",\r\n    \"Value\": ${Math.ceil(Math.random() * 21)}\r\n  },\r\n  {\r\n    \"Core\": \"2\",\r\n    \"Value\": ${Math.ceil(Math.random() * 30)}\r\n  },\r\n  {\r\n    \"Core\": \"3\",\r\n    \"Value\": ${Math.ceil(Math.random() * 22)}\r\n  },\r\n  {\r\n    \"Core\": \"_total\",\r\n    \"Value\": ${Math.ceil(Math.random() * 500)}\r\n  },\r\n  {\r\n    \"Core\": \"SqlServerCPU\",\r\n    \"Value\": ${Math.ceil(Math.random() * 11)}\r\n  }\r\n]`
            };

            setRawData(prevData => {
                const newData = [...prevData, demodata];
                if (newData.length > maxLength) {
                    newData.shift();
                }
                return newData;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div ref={chartContainer}></div>
        </>
    )
}

export default LiveChart