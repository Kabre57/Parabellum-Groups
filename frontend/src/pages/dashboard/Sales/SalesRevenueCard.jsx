import React from 'react'
import { Card, Icon, Tooltip as TooltipComponent } from '../../../componenets'
import { Bar } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend);

const SalesRevenueCard = ({className}) => {
  const chart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dataUnit: "USD",
    datasets: [
      {
        label: "Sales Revenue",
        borderWidth:2,
        borderColor: 'transparent',
        hoverBorderColor : 'transparent',
        borderSkipped : 'bottom',
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        backgroundColor: [
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,0.2)",
          "rgba(101,118,255,1)",
        ],
        data: [11000, 8000, 12500, 5500, 9500, 14299, 11000, 8000, 12500, 5500, 9500, 14299],
      },
    ],
  };
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-start gap-2 mb-3">
                <div>
                    <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Sales Revenue</h6>
                    <p className="text-xs leading-5 text-slate-400">In last 30 days revenue from subscription.</p>
                </div>
                <TooltipComponent content="Revenue from subscription" placement="left" rtlPlacement="right" >
                    <Icon className="text-slate-300" name="help-fill" />
                </TooltipComponent>
            </div>
            <div className="flex items-end gap-y-2 gap-x-5 flex-wrap md:flex-nowrap lg:flex-wrap 2xl:flex-nowrap">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                    <div className="flex-shrink-0">
                        <span className="block text-3xl text-slate-700 dark:text-white">14,299.59 
                            <span className="text-sm leading-none text-red-600 ps-1"> <Icon name="arrow-long-down"></Icon>16.93%</span>
                        </span>
                        <span className="text-xs text-slate-400">This Month</span>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="block text-3xl text-slate-700 dark:text-white">7,299.59 
                            <span className="text-sm leading-none text-green-600 ps-1"> <Icon name="arrow-long-up"></Icon>4.26%</span>
                        </span>
                        <span className="text-xs text-slate-400">This Week</span>
                    </div>
                </div>
                <div className="h-[64px] lg:h-[148px] 2xl:h-[64px] flex-grow">
                    <Bar
                      className="max-w-full"
                      data={chart}
                      options={{
                        plugins: {
                          legend: {
                              display: false,
                          },
                          tooltip: {
                              enabled: true,
                              displayColors: false,
                              callbacks: {
                                title: function() {
                                    return false;
                                },
                                label: function (context) {
                                    return `${context.parsed.y} ${chart.dataUnit}`;
                                },
                              },
                              backgroundColor: "#eff6ff",
                              titleFont: {
                                size: '11px',
                              },
                              titleColor: "#6783b8",
                              titleMarginBottom: 4,
                              bodyColor: "#9eaecf",
                              bodyFont: {
                                size: '10px',
                              },
                              bodySpacing: 3,
                              padding: 8,
                              footerMarginTop: 0,
                          },
                        },
                        scales: {
                          y:{
                              display: false,
                              ticks: {
                                  beginAtZero:true
                              }
                          },
                          x:{
                              display: false,
                          },
                        },
                        maintainAspectRatio: false,
                      }}
                    />
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default SalesRevenueCard