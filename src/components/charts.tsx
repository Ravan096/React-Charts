import { useEffect, useRef } from 'react';
// import Highcharts,{ ChartOptions } from 'highcharts';
import Highcharts from 'highcharts/highstock';
import "../styles/chart.css"
import ProcessTimeCore from './ProcessTimeCore';
import LiveChart from './LiveChart';
import Live from './Live';


const Chart = () => {
  return (
    <div className='demochart'>
        <Live/>
        <LiveChart/>
        <DiskUsageChart/>
        <ProcessTimeCore/>

    </div>
  )
}

export default Chart





const DiskUsageChart = () => {
    const chartContainer = useRef<HTMLDivElement | null>(null);

    const rawData = [
        {
            "DateTime": "2024-05-23T08:59:57",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.86,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:55:08",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.88,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:50:19",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.87,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:45:31",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.87,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:40:42",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.89,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:35:54",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.88,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:31:08",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.88,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:26:21",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.88,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:21:30",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.88,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:16:39",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.87,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:11:50",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.87,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        },
        {
            "DateTime": "2024-05-23T08:07:03",
            "WinServer": "CTS02",
            "DiskDetails": "[{\"Id\":\"C:\",\"Name\":\"Windows\",\"FreeGB\":42.86,\"TotalGB\":255.45},{\"Id\":\"E:\",\"Name\":\"Disk\",\"FreeGB\":135.39,\"TotalGB\":255.98},{\"Id\":\"F:\",\"Name\":\"Data\",\"FreeGB\":50.5,\"TotalGB\":100}]"
        }
    ];

    const data = rawData.map(entry => ({
        ...entry,
        DiskDetails: JSON.parse(entry.DiskDetails)
    }));

    const timestamps = data.map(item => item.DateTime);


    // const drives = ['C:', 'E:', 'F:'];
    const drives = Array.from(new Set(data.flatMap(entry => entry.DiskDetails.map((d:any) => d.Id))));


    const series = drives.flatMap(drive => [
        {
            name: `${drive} Used`,
            data: data.map(entry => {
                const diskData = entry.DiskDetails.find((d:any) => d.Id === drive);
                return diskData.TotalGB - diskData.FreeGB;
            }),
            stack:drive
        },
        {
            name: `${drive} Free`,
            data: data.map(entry => {
                const diskData = entry.DiskDetails.find((d:any) => d.Id === drive);
                return diskData.FreeGB;
            }),
            stack:drive
        }
    ]);
   

    useEffect(() => {
        if (chartContainer.current) {
            Highcharts.chart(chartContainer.current, {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Disk Usage by Server'
                },
                rangeSelector:{
                    selected:1
                },
                scrollbar:{
                    enabled:true
                },
                navigator:{
                    enabled:true
                },
                xAxis: {
                    categories: timestamps,
                    // title: {
                    //     text: 'timestamps of disk'
                    // },
                    type:'datetime',
                    labels:{
                        rotation: -45,
                        format: '{value:%Y-%m-%d %H:%M:%S}'
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Disk Usage (GB)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify',
                    }
                },
                tooltip: {
                    valueSuffix: ' GB'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: false
                        },
                        stacking: 'normal'
                    }
                },
                legend: {
                    reversed: true
                },
                credits: {
                    enabled: false
                },
                series: series as Highcharts.SeriesOptionsType[]
            });
        }
    }, [series, timestamps]);

    return (
        <div>
            <h1>Highcharts Disk Usage</h1>
            <div ref={chartContainer}></div>
        </div>
    );
};
