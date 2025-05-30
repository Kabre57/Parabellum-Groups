import React from 'react'
import { Card } from '../../../componenets'
import { Line } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, LineElement, Tooltip, Filler,  } from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler, );
const StatusCard = ({title, count, up, down, chart}) => {
  return (
    <Card className="h-full">
        <Card.Body>
            <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">{title}</h6>
            <div className="flex items-center justify-between my-2">
                <div className="text-3xl font-medium text-slate-700 dark:text-white">{count}</div>
                <div className="h-10 w-24">
                    <Line
                        data={chart}
                        options={{
                            plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: true,
                                displayColors: false,
                                backgroundColor: "#1c2b46",
                                titleFont: {
                                    size: '8px',
                                },
                                titleColor: "#fff",
                                titleMarginBottom: 4,
                                bodyColor: "#fff",
                                bodyFont: {
                                    size: '8px',
                                },
                                bodySpacing: 4,
                                padding: 6,
                                footerMarginTop: 0,
                                callbacks: {
                                    title: function () {
                                    return false; 
                                    },
                                    label: function (context) {
                                        return `${context.parsed.y} ${chart.dataUnit}`;
                                    },
                                },
                            },
                            },
                            maintainAspectRatio: false,
                            scales: {
                            y:{
                                display: false,
                                ticks: {
                                    beginAtZero: false,
                                    color:"#9eaecf", 
                                    font: {
                                    size: '12px',
                                    },
                                    padding: 0,
                                },
                                grid: {
                                    color: "rgba(82, 100, 132, 0.2)",
                                    tickMarkLength: 0,
                                    zeroLineColor: "rgba(82, 100, 132, 0.2)",
                                },
                                },
                            x:{
                                display: false,
                                ticks: {
                                    color:"#9eaecf", 
                                    font: {
                                    size: '12px',
                                    },
                                    source: "auto",
                                    padding: 0,
                                },
                                grid: {
                                    color: "transparent",
                                    tickMarkLength: 0,
                                    zeroLineColor: "rgba(82, 100, 132, 0.2)",
                                    offsetGridLines: true,
                                },
                                },
                            },
                        }}
                        />
                </div>
            </div>
            <div className="text-sm">
                {up && <span className="text-green-600"><em className="icon ni ni-arrow-long-up"></em>{up}</span>}
                {down && <span className="text-red-600"><em className="icon ni ni-arrow-long-down"></em>{down}</span>}
                <span> vs. last week</span>
            </div>
        </Card.Body>
    </Card>
  )
}

export default StatusCard