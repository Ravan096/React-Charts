import Highcharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";
import "../styles/brushchart.css"

const BrushChart = () => {
    const ref = useRef<HighchartsReact.RefObject>(null);
    const [data, setData] = useState<number[]>(Array.from({ length: 15 }, () => Math.ceil(Math.random() * 100)));
    const [rangeSelectorSelected, setRangeSelectorSelected] = useState<number>(0);

    const updateChartRange = (selected: number) => {
        console.log(selected )
        // setRangeSelectorSelected(selected);
        switch (selected) {
            case 0:
                setData(
                    // [
                    // 30, 40, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125
                    // ]
                    Array.from({length:15},()=>Math.ceil(Math.random()*200))
            );
                break;
            case 1:
                setData(
                //     [
                //     70, 100, 50, 150, 200, 120, 70, 90, 110, 180, 110, 20
                // ]
                Array.from({length:25},()=>Math.ceil(Math.random()*200))
            );
                break;
            case 2:
                setData(
                //     [
                //     30, 45, 60, 25, 35, 50, 40, 55, 65, 75, 70, 85, 80, 95, 100
                // ]
                Array.from({length:40},()=>Math.ceil(Math.random()*200))
            );
                break;
            default:
                break;
        }
    };
console.log(data)
    const options: Highcharts.Options = {
        chart: {
            type: 'areaspline',
            // marginBottom: 50
        },
        title:{
            text:"Chart"
        },
        rangeSelector: {
            selected: rangeSelectorSelected,
            buttons: [
                {
                    type: 'all',
                    text: 'Live'
                },
                {
                    type: 'day',
                    count: 1,
                    text: '1d'
                },
                {
                    type: 'day',
                    count: 5,
                    text: '5d'
                },
                {
                    type: 'all',
                    text: 'All'
                }
            ],
            inputEnabled: false,
        },
        scrollbar: {
            enabled: true
        },
        navigator: {
            enabled: true,
            height: 35,
            series: {
                type: 'column', 
                color: '#32CD32',
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
        legend:{
            margin:0
        },
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
                    // newData.splice(0, newData.length - 20);
                    newData.shift();
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
        <div>
            <div className="button-container">
                <button className="range-button" onClick={() => updateChartRange(0)}>Live</button>
                <button className="range-button" onClick={() => updateChartRange(1)}>1 Day</button>
                <button className="range-button" onClick={() => updateChartRange(2)}>5 Days</button>
            </div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={ref}
            />
        </div>
    )
}

export default BrushChart;
