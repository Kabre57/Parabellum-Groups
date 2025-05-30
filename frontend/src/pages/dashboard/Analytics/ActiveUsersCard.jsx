import React from 'react'
import { Card, Icon, Tooltip as TooltipComponent } from '../../../componenets'
import { Bar } from "react-chartjs-2";
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend);

const ActiveUsersCard = ({ className }) => {
    const theme = useTheme();
    const chart = {
        labels: [
          "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan", "16 Jan", "17 Jan", "18 Jan", "19 Jan", "20 Jan", "21 Jan", "22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan",
        ],
        dataUnit: "People",
        datasets: [
          {
            label: "Active Users Analytics",
            fill:true,
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            backgroundColor: "#9cabff",
            data: [
              1110, 1220, 1310, 980, 900, 770, 1060, 830, 690, 730, 790, 950, 1100, 800, 1250, 850, 950, 450, 900, 1000, 1200,
              1250, 900, 950, 1300, 1200, 1250, 650, 950, 750,
            ],
          },
        ],
      };
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-start gap-2 mb-5">
                <div>
                    <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Active Users</h6>
                    <p className="text-xs leading-5 text-slate-400">How do your users visited in the time.</p>
                </div>
                <TooltipComponent placement="left" rtlPlacement="right" content="Users of this month">
                    <Icon className="text-slate-300" name="help"></Icon>
                </TooltipComponent>
            </div>
            <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-1/3 px-2">
                    <div className="text-xs leading-5 font-medium text-slate-400 mb-1.5">Monthly</div>
                    <span className="block text-2xl leading-7 text-slate-700 dark:text-white">9.28K</span>
                    <span className="text-sm leading-none text-green-600"><em className="icon ni ni-arrow-long-up"></em>4.63%</span>
                </div>
                <div className="w-1/3 px-2">
                    <div className="text-xs leading-5 font-medium text-slate-400 mb-1.5">Weekly</div>
                    <span className="block text-2xl leading-7 text-slate-700 dark:text-white">2.69K</span>
                    <span className="text-sm leading-none text-red-600"><em className="icon ni ni-arrow-long-down"></em>1.92%</span>
                </div>
                <div className="w-1/3 px-2">
                    <div className="text-xs leading-5 font-medium text-slate-400 mb-1.5">Daily (Avg)</div>
                    <span className="block text-2xl leading-7 text-slate-700 dark:text-white">0.94K</span>
                    <span className="text-sm leading-none text-green-600"><em className="icon ni ni-arrow-long-up"></em>3.45%</span>
                </div>
            </div>
            <div className="h-[170px]">
                <Bar
                    data={chart}
                    options={{
                        plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
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
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y;
                                },
                            },
                        },
                        },
                        maintainAspectRatio: false,
                        scales: {
                        y:{
                            display: true,
                            ticks: {
                                beginAtZero: false,
                                color:"#9eaecf", 
                                font: {
                                size: '12px',
                                },
                                padding: 0,
                                display: false,
                                stepSize: 300,
                            },
                            grid: {
                                color: "rgba(82, 100, 132, 0.2)",
                                tickMarkLength: 0,
                                zeroLineColor: "rgba(82, 100, 132, 0.2)",
                                drawTicks:false,
                            },
                            },
                        x:{
                            display: false,
                            reverse: theme.direction === 'rtl' ? true : false,
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
                                zeroLineColor: "transparent",
                                offsetGridLines: true,
                                drawTicks:false,
                            },
                            },
                        },
                    }}
                    ></Bar>
            </div>
            <div className="flex justify-between mt-2">
                <div className="text-xs text-slate-400">01 Jan, 2020</div>
                <div className="text-xs text-slate-400">30 Jan, 2020</div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default ActiveUsersCard