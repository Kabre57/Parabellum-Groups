import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'
import { Line } from "react-chartjs-2";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, LineElement, Tooltip, Filler} from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler);


const TrafficChannelListCard = ({ className }) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset:  [0, 4] }},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
    const data = [
        {
            title: "Organic Search",
            amount: "4,305",
            prevAmount: "4,129",
            change:4.29,
            chart: {
                labels: [
                  "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan",
                ],
                dataUnit: "People",
                datasets: [
                  {
                    label: "Organic Search",
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
            title: "Social Media",
            amount: "859",
            prevAmount: "936",
            change:-15.8,
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
                    backgroundColor: "rgba(184, 172, 255, 0.25)",
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
            title: "Referrals",
            amount: "482",
            prevAmount: "793",
            change:-41.3,
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
                    color: "#ffa9ce",
                    backgroundColor: "rgba(255, 169, 206, 0.25)",
                    borderColor: "#ffa9ce",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#ffa9ce",
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
            title: "Others",
            amount: "138",
            prevAmount: "97",
            change:12.6,
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
                    color: "#f9db7b",
                    backgroundColor: "rgba(249, 219, 123, 0.25)",
                    borderColor: "#f9db7b",
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "transparent",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f9db7b",
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
        <Card.Body className="pb-2 sm:pb-3">
            <div className="flex justify-between items-center gap-2">
                <div>
                    <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Traffic Channel</h6>
                    <p className="text-xs leading-5 text-slate-400">Top traffic channels metrics.</p>
                </div>
                <Menu as="div" className="inline-flex relative ms-auto">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button size="sm" variant="white-outline">
                                    <span>30 Days</span>
                                    <Icon className="text-sm leading-none font-bold -me-0.5 ms-1" name="chevron-down" />
                                </Button>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                                <ul className="py-2">
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>7 Days</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                        </Menu.Item>
                                    </li>
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>15 Days</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                    <li className="group active">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>30 Days</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </div>
        </Card.Body>
        <div className="table w-full text-sm text-slate-400">
            <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Channel</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Sessions</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Prev Sessions</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Change</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end"><span>Trend</span></div>
            </div>
            {data.map((item,index) => {
                return(
                    <div key={index} className="table-row transition-all duration-300 [&>*]:border-b [&>*]:last:border-b-0 hover:bg-gray-50 hover:dark:bg-gray-1000">
                        <div className="relative table-cell align-middle py-3.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="text-slate-700 dark:text-white text-sm font-medium flex items-center">{item.title}</div>
                        </div>
                        <div className="relative table-cell align-middle py-3.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <span className="text-xs text-slate-500">{item.amount}</span>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle py-3.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <span className="text-xs text-slate-500">{item.prevAmount}</span>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle py-3.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <span className="text-xs">{Math.abs(item.change)}%
                                {Math.sign(item.change) === -1 ? <span className="text-sm leading-none text-red-600"><em className="icon ni ni-arrow-long-down"></em></span> : <span className="text-sm leading-none text-green-600"><em className="icon ni ni-arrow-long-up"></em></span>}
                            </span>
                        </div>
                        <div className="relative table-cell align-middle py-3.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end">
                            <div className="h-[44px] w-[90px] sm:w-[130px] ms-auto">
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
                    </div>
                )
            })}
        </div>
    </Card>
  )
}

export default TrafficChannelListCard