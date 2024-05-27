import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";

const Live = () => {
    const ref = useRef<HighchartsReact.RefObject>(null);

    const [data, setData] = useState<number[]>([5, 4, 13, 44, 16, 74, 32, 55, 50, 12, 11, 41, 30, 101, 1]);



    const options: Highcharts.Options = {
        chart: {
            type: 'areaspline',
            animation: {
                duration: 500,
                easing: "linear"
            }
        },
        series: [
            {
                type: "areaspline",
                name: "live data",
                data: [...data],
                animation: {
                    duration: 500,
                    easing: 'linear'
                }
            }
        ],
        xAxis: {
            type: 'linear',
            tickPixelInterval: 150,
            labels: {
                rotation: -45,
            }
        },
        yAxis: {
            title: {
                text: 'Value'
            }
        },
        tooltip: {
            shared: true,

        },
        plotOptions: {
            areaspline: {
                color: '#32CD32',
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#32CD32'],
                        [1, '#32CD3200']
                    ]
                }
            },
            series: {
                marker: {
                    enabled: false
                }
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const demodata = Math.ceil(Math.random() * 100);
            setData(prevData => {
                const newData = [...prevData, demodata];
                if (newData.length > 15) {
                    newData.splice(0, newData.length - 15);
                    console.log(newData);
                }

                if (ref.current) {
                    const chart = ref.current.chart;
                    const series = chart.series[0];
                    series.addPoint(demodata, true, true);
                }

                return newData;
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <HighchartsReact options={options} highcharts={Highcharts} ref={ref} />
        </>
    );
};

export default Live;
