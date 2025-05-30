import React from 'react'
import { Card } from '../../../componenets'
import { Doughnut } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement} from "chart.js";
Chart.register(CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement);

const StatisticsCard = () => {
    const chart = {
        labels: ["Completed", "Processing", "Canclled"],
        dataUnit: "Orders",
        legend: false,
        datasets: [
          {
            borderColor: "#fff",
            backgroundColor: ["#816bff", "#13c9f2", "#ff82b7"],
            data: [4305, 859, 482],
          },
        ],
    };
  return (
    <Card className="h-full">
        <Card.Body>
            <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-6">Order Statistics</h6>
            <div className="h-44">
            <Doughnut
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
                            size: '13px',
                        },
                        titleColor: "#fff",
                        titleMarginBottom: 6,
                        bodyColor: "#fff",
                        bodyFont: {
                            size: '12px',
                        },
                        bodySpacing: 4,
                        padding: 10,
                        footerMarginTop: 0,
                        callbacks: {
                            label: function (context) {
                                return `${context.parsed} ${chart.dataUnit}`;
                            },
                        },
                    },
                    },
                    rotation: -1.5,
                    cutoutPercentage: 70,
                    maintainAspectRatio: false,
                }}
                />
            </div>
            <ul className="flex justify-center flex-wrap gap-x-8 gap-y-2 mt-5">
                <li>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span className="h-3 w-3 inline-block rounded-sm me-2 bg-[#816bff]"></span>
                        <span>Completed</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span className="h-3 w-3 inline-block rounded-sm me-2 bg-[#13c9f2]"></span>
                        <span>Processing</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span className="h-3 w-3 inline-block rounded-sm me-2 bg-[#ff82b7]"></span>
                        <span>Cancelled</span>
                    </div>
                </li>
            </ul>
        </Card.Body>
    </Card>
  )
}

export default StatisticsCard