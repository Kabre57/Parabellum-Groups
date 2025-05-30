import React from 'react'
import { Card, Icon, Tooltip as TooltipComponent } from '../../../componenets'
import { Line } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, LineElement, Tooltip, Filler} from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler);

const WebsitePerformanceCard = ({ className }) => {
    const data = [
        {
            title: "Bounce Rate",
            amount: "23.59%",
            change:4.5,
            chart: {
                labels: [
                  "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                ],
                dataUnit: "People",
                datasets: [
                  {
                    label: "Bounce Rate",
                    lineTension: 0,
                    borderWidth: 2,
                    fill:true,
                    color: "#798bff",
                    backgroundColor: "rgba(121, 139, 255, 0.25)",
                    borderColor: "#798bff",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#798bff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95],
                  },
                ],
            }
        },
        {
            title: "Pageviews",
            amount: "5.48",
            change:-1.48,
            chart: {
                labels: [
                  "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                ],
                dataUnit: "People",
                datasets: [
                  {
                    label: "Pageviews",
                    lineTension: 0,
                    borderWidth: 2,
                    fill:true,
                    color: "#9a89ff",
                    backgroundColor: "rgba(154, 137, 255, 0.25)",
                    borderColor: "#9a89ff",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#9a89ff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95],
                  },
                ],
            }
        },
        {
            title: "New Users",
            amount: "549",
            change:6.8,
            chart: {
                labels: [
                  "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                ],
                dataUnit: "People",
                datasets: [
                  {
                    label: "New Users",
                    lineTension: 0,
                    borderWidth: 2,
                    fill:true,
                    color: "#798bff",
                    backgroundColor: "rgba(121, 139, 255, 0.25)",
                    borderColor: "#798bff",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#798bff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95],
                  },
                ],
            }
        },
        {
            title: "Time on Site",
            amount: "3m 35s",
            change:1.4,
            chart: {
                labels: [
                  "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                ],
                dataUnit: "People",
                datasets: [
                  {
                    label: "Time on Site",
                    lineTension: 0,
                    borderWidth: 2,
                    fill:true,
                    color: "#9a89ff",
                    backgroundColor: "rgba(154, 137, 255, 0.25)",
                    borderColor: "#9a89ff",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#9a89ff",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 2,
                    pointRadius: 4,
                    pointHitRadius: 4,
                    data: [110, 80, 125, 65, 95, 75, 90, 110, 80, 125, 70, 95],
                  },
                ],
            }
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-start gap-2 mb-3">
                <div>
                    <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Website Performance</h6>
                    <p className="text-xs leading-5 text-slate-400">How has performend this month.</p>
                </div>
                <TooltipComponent placement="left"  rtlPlacement="right" content="Performance of this month">
                    <Icon className="text-slate-300" name="help"></Icon>
                </TooltipComponent>
            </div>
            <div className="flex flex-col gap-4">
                {data.map((item,index) => {
                  return(
                    <div key={index} className="flex justify-between items-end">
                        <div className="w-[150px] xs:w-[350px] md:w-[150px] my-0.5">
                            <div className="text-xs font-medium text-slate-400">{item.title} <span className="font-normal">(avg)</span></div>
                            <div className="h-[36px]">
                                <Line
                                    className="max-w-full"
                                    data={item.chart}
                                    options={{
                                        plugins: {
                                        legend: {
                                            display: false,
                                        },
                                        tooltip: {
                                            enabled: true,
                                            callbacks: {
                                                title: function() {
                                                    return false;
                                                },
                                                label: function (context) {
                                                    return `${context.parsed.y} ${item.chart.dataUnit}`;
                                                },
                                            },
                                            displayColors: false,
                                            backgroundColor: "#eff6ff",
                                            titleFont: {
                                                size: '9px',
                                            },
                                            titleColor: "#6783b8",
                                            titleMarginBottom: 6,
                                            bodyColor: "#9eaecf",
                                            bodyFont: {
                                                size: '9px',
                                            },
                                            bodySpacing: 4,
                                            padding: 6,
                                            footerMarginTop: 0,
                                        },
                                        },
                                        maintainAspectRatio: false,
                                        scales: {
                                        y: {
                                            display: false,
                                            ticks: {
                                                beginAtZero: false,
                                                color:"#9eaecf", 
                                                font: {
                                                size: '12px',
                                                },
                                                padding: 0,
                                                stepSize: 300,
                                            },
                                            grid: {
                                                color: "rgba(82, 100, 132, 0.2)",
                                                tickMarkLength: 0,
                                                zeroLineColor: "rgba(82, 100, 132, 0.2)",
                                            },
                                            },
                                        x: {
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
                                                zeroLineColor: "rgba(82, 100, 132,0.2)",
                                                offsetGridLines: true,
                                            },
                                            },
                                        },
                                    }}
                                    ></Line>
                            </div>
                        </div>
                        <div className="text-end ms-2">
                            <div className="text-lg leading-tight mb-1 text-slate-700 dark:text-white">{item.amount}</div>
                            {Math.sign(item.change) === -1 ? <span className="text-sm leading-none text-red-600"><em className="icon ni ni-arrow-long-down"></em>{item.change}%</span> : <span className="text-sm leading-none text-green-600"><em className="icon ni ni-arrow-long-up"></em>{item.change}%</span>}
                            <div className="text-xs text-slate-400">vs. last month</div>
                        </div>
                    </div>
                  )
                })}
            </div>
        </Card.Body>
    </Card>
  )
}

export default WebsitePerformanceCard