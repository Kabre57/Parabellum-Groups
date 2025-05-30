import React, {useState} from 'react'
import { Card, Icon } from '../../../componenets'
import { Line } from "react-chartjs-2";
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, LineElement, Tooltip, Filler} from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler);

const TodayOrdersCard = () => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: [0,4]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
    const chart = {
        labels: [
          "01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan","13 Jan","14 Jan","15 Jan","16 Jan","17 Jan","18 Jan","19 Jan","20 Jan","21 Jan","22 Jan","23 Jan","24 Jan","25 Jan","26 Jan","27 Jan","28 Jan","29 Jan","30 Jan",
        ],
        dataUnit: "USD",
        datasets: [
          {
            label: "Total orders",
            color: "#9d72ff",
            borderWidth: 2,
            borderColor: "#9d72ff",
            fill: true,
            dash: 0,
            pointRadius: 0,
            lineTension: 0.4,
            backgroundColor: "rgba(157, 114, 255, 0.15)",
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#9d72ff",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 2,
            pointHitRadius: 4,
            data: [
              3710, 4820, 4810, 5480, 5300, 5670, 6660, 4830, 5590, 5730, 4790, 4950, 5100, 5800, 5950, 5850, 5950, 4450,
              4900, 8000, 7200, 7250, 7900, 8950, 6300, 7200, 7250, 7650, 6950, 4750,
            ],
          },
          {
            label: "Canceled orders",
            color: "#eb6459",
            borderWidth: 2,
            borderColor: "#eb6459",
            borderDash: [5],
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#eb6459",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 2,
            pointHitRadius: 4,
            backgroundColor: "transparent",
            data: [
              110, 220, 810, 480, 600, 670, 660, 830, 590, 730, 790, 950, 100, 800, 950, 850, 950, 450, 900, 0, 200, 250, 900,
              950, 300, 200, 250, 650, 950, 750,
            ],
          },
        ],
    };
      
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex items-center justify-between gap-x-3 mb-3">
                <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Today Orders</h6>
                <Menu as="div" className="inline-flex relative">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <button className="relative inline-flex items-center text-xs font-bold tracking-wide text-slate-400 hover:text-slate-600 [.active_&]:text-slate-600 transition-all duration-300">
                                    <span>Weekly</span>
                                    <Icon className="text-base leading-4.5" name="chevron-down" />
                                </button>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                <ul className="py-2">
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Daily</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                        </Menu.Item>
                                    </li>
                                    <li className="group active">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Weekly</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Monthly</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </div>
            <ul className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-3">
                <li>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span className="h-3 w-3 inline-block rounded-sm me-2 bg-[#6576ff]"></span>
                        <span>Total Order</span>
                    </div>
                </li>
                <li>
                    <div className="flex items-center text-slate-400 text-sm">
                        <span className="h-3 w-3 inline-block rounded-sm me-2 bg-[#eb6459]"></span>
                        <span>Cancelled Order</span>
                    </div>
                </li>
            </ul>
            <div className="h-52">
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
                            return `${context.parsed.y} ${chart.dataUnit}`;
                        },
                        },
                    },
                },
                maintainAspectRatio: false,
                scales: {
                    y:{
                        display: true,
                        position: theme.direction === 'rtl' ? 'right' : 'left',
                        ticks: {
                            beginAtZero: true,
                            color:"#9eaecf", 
                            font: {
                                size: '11px',
                            },
                            padding: 10,
                            callback: function (value, index, values) {
                                return "$ " + value;
                            },
                            min: 0,
                            stepSize: 3000,
                        },
                        grid: {
                        color: "rgba(82, 100, 132, 0.2)",
                        tickMarkLength: 0,
                        zeroLineColor: "rgba(82, 100, 132, 0.2)",
                        },
                    },
                    x:{
                        display: false,
                        reverse: theme.direction === 'rtl' ? true : false,
                        ticks: {
                        color:"#9eaecf", 
                        font: {
                            size: '9px',
                        },
                        source: "auto",
                        padding: 10,
                        },
                        grid: {
                            color: "transparent",
                            tickMarkLength: 0,
                            zeroLineColor: "transparent",
                        },
                    },
                },
                }}
                />
            </div>
            <div className="flex justify-between mt-2 ms-11">
                <div className="text-xs text-slate-400">01 Jan, 2020</div>
                <div className="text-xs text-slate-400">30 Jan, 2020</div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default TodayOrdersCard