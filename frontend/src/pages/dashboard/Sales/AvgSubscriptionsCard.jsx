import React from 'react'
import { Card, Icon, Tooltip as TooltipComponent } from '../../../componenets'
import { Bar } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend);

const AvgSubscriptionsCard = ({className}) => {
  const chart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    dataUnit: "USD",
    stacked: true,
    datasets: [
      {
        label: "Active User",
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
          "rgba(101,118,255,1)",
        ],
        data: [8200, 7800, 9500, 5500, 9200, 9690],
      },
    ],
  };
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-start gap-2 mb-3">
                <div>
                    <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Avg Subscriptions</h6>
                </div>
                <TooltipComponent content="Daily Avg. subscription" placement="left" rtlPlacement="right" >
                    <Icon className="text-slate-300" name="help-fill" />
                </TooltipComponent>
            </div>
            <div className="flex items-end sm:flex-wrap gap-3 md:flex-nowrap">
                <div className="flex-shrink-0 box-border">
                    <span className="block text-3xl text-slate-700 dark:text-white">346.2</span>
                    <span className="text-xs text-slate-400">
                        <span className="change down text-green-600 me-1"><Icon name="arrow-long-up"></Icon>2.45%</span>
                        since last week
                    </span>
                </div>
                <div className="h-[56px] flex-grow box-border">
                    <Bar
                      data={chart}
                      className="max-w-full"
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

export default AvgSubscriptionsCard