import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'
import { Bar } from "react-chartjs-2";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend);

const OrdersOverviewCard = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [14, -8] : [-14, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
    const chart = {
        labels: [
          "19 Dec", "20 Dec", "21 Dec", "22 Dec", "23 Dec", "24 Dec", "25 Dec", "26 Dec", "27 Dec", "28 Dec", "29 Dec", "30 Dec", "31 Dec", "01 Jan",
        ],
        dataUnit: "USD",
        datasets: [
          {
            label: "Buy Orders",
            color: "#8feac5",
            backgroundColor: "#8feac5",
            borderWidth:2,
            borderColor: 'transparent',
            hoverBorderColor : 'transparent',
            barPercentage: window.innerWidth < 768 ? 1 : 0.7,
            categoryPercentage: window.innerWidth < 768 ? 1 : 0.7,
            data: [1740, 2500, 1820, 1200, 1600, 2500, 1820, 1200, 1700, 1820, 1400, 1600, 1930, 2100],
          },
          {
            label: "Sell Orders",
            color: "#9cabff",
            backgroundColor: "#9cabff",
            borderWidth:2,
            borderColor: 'transparent',
            hoverBorderColor : 'transparent',
            barPercentage: window.innerWidth < 768 ? 1 : 0.7,
            categoryPercentage: window.innerWidth < 768 ? 1 : 0.7,
            data: [2420, 1820, 3000, 5000, 2450, 1820, 2700, 5000, 2400, 2600, 4000, 2380, 2120, 1700],
          },
        ],
      }
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-start gap-2 mb-4">
                <div>
                    <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Orders Overview</h6>
                    <p className="text-xs leading-5 text-slate-400">In last 15 days buy and sells overview. <a className="text-primary-500 hover:text-primary-600" href="#link" onClick={(e)=> e.preventDefault()}>Detailed Stats</a></p>
                </div>
                <Menu as="div" className="inline-flex relative ms-auto">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button.Zoom className="-me-2">
                                    <Icon className="text-xl" name="more-h" />
                                </Button.Zoom>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                                <ul className="py-2">
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>15 Days</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                        </Menu.Item>
                                    </li>
                                    <li className="group active">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>30 Days</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                    <li className="group">
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>3 Months</span><em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em></Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </div>
            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                <div className="col-span-12 2xl:col-span-8 2xl:row-span-2">
                    <div className="h-[180px] 2xl:h-[260px]">
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
                                    callbacks: {
                                        label: function (context) {
                                            return `${context.parsed.y} ${chart.dataUnit}`;
                                        },
                                    },
                                    displayColors: false,
                                    backgroundColor: "#eff6ff",
                                    titleFont: {
                                        size: '13px',
                                    },
                                    titleColor: "#6783b8",
                                    titleMarginBottom: 6,
                                    bodyColor: "#9eaecf",
                                    bodyFont: {
                                        size: '12px',
                                    },
                                    bodySpacing: 4,
                                    padding: 10,
                                    footerMarginTop: 0,
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
                                        min: 100,
                                        max: 5000,
                                        stepSize: 1200,
                                    },
                                    grid: {
                                        color: "rgba(82, 100, 132, .2)",
                                        zeroLineColor: "rgba(82, 100, 132, .2)",
                                        tickMarkLength: 0,
                                        drawTicks:false,
                                    },
                                },
                                x:{
                                    display: true,
                                    reverse: theme.direction === 'rtl' ? true : false,
                                    ticks: {
                                        color:"#9eaecf", 
                                        font: {
                                        size: '9px',
                                        },
                                        source: "auto",
                                        padding: 10,
                                        stepSize: 2400,
                                    },
                                    grid: {
                                        color: "transparent",
                                        tickMarkLength: 0,
                                        zeroLineColor: "transparent",
                                        drawTicks:false,
                                    },
                                },
                                },
                            }}
                            />
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <div className="rounded border-2 border-green-300 dark:border-green-900 pt-3 pb-5 px-5 buy">
                        <div className="text-2xl leading-10 font-bold text-green-600">12,954.63 <small className="font-normal text-xl">USD</small></div>
                        <div className="text-xs mb-1 text-slate-400">Last month <strong className="text-slate-700 dark:text-white font-medium">39,485 USD</strong></div>
                        <div className="text-sm leading-tight text-slate-400 font-medium"><em className="text-base h-7 w-7 rounded-full bg-slate-50 dark:bg-slate-900 inline-flex items-center justify-center me-2 text-green-600 ni ni-arrow-down-left"></em> Buy Orders</div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                    <div className="rounded border-2 border-primary-300 dark:border-primary-900 pt-3 pb-5 px-5 sell">
                        <div className="text-2xl leading-10 font-bold text-primary-600">12,954.63 <small className="font-normal text-xl">USD</small></div>
                        <div className="text-xs mb-1 text-slate-400">Last month <strong className="text-slate-700 dark:text-white font-medium">39,485 USD</strong></div>
                        <div className="text-sm leading-tight text-slate-400 font-medium"><em className="text-base h-7 w-7 rounded-full bg-slate-50 dark:bg-slate-900 inline-flex items-center justify-center me-2 text-primary-600 ni ni-arrow-up-left"></em> Sell Orders</div>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default OrdersOverviewCard