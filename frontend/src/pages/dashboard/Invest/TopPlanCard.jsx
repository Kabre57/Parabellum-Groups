import React, {useState} from 'react'
import { Card, Button, Icon, Progress } from '../../../componenets'
import { Bar } from "react-chartjs-2";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Legend, } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Legend,);


const TopPlanCard = ({ className }) => {
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
          "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan",
        ],
        dataUnit: "USD",
        stacked: true,
        datasets: [
          {
            label: "Top plans",
            backgroundColor: "rgba(9, 113, 254, 0.2)",
            borderWidth:2,
            borderColor: 'transparent',
            hoverBorderColor : 'transparent',
            borderSkipped : 'bottom',
            barPercentage : .85,
            categoryPercentage : .9,
            data: [
                6000,8200, 7800, 9500, 5500, 9200, 9690, 6000,8200, 7800, 9500, 5500, 9200, 9690, 6000,8200, 7800, 9500, 5500, 9200, 9690
            ],
          },
        ],
      };
    const data = [
        {
            name: "Strater Plan",
            progress: "58%",
            theme: "primary"
        },
        {
            name: "Silver Plan",
            progress: "18.49%",
            theme: "yellow"
        },
        {
            name: "Dimond Plan",
            progress: "16%",
            theme: "green"
        },
        {
            name: "Platinam Plan",
            progress: "29%",
            theme: "pink"
        },
        {
            name: "Vibranium Plan",
            progress: "33%",
            theme: "indigo"
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="h-full flex flex-col">
            <div className="flex justify-between items-start gap-2 mb-4">
                <div>
                    <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Top Invested Plan</h6>
                    <p className="text-xs leading-5 text-slate-400">In last 30 days top invested schemes.</p>
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
            <div className="-my-2.5">
                {data.map((item,index) => {
                  return(    
                    <div key={index} className="py-2.5">
                        <div className="flex items-center justify-between text-slate-400 mb-1.5">
                            <div className="text-sm">{item.name}</div>
                            <div className="text-xs">{item.progress}</div>
                        </div>
                        <Progress><Progress.Bar variant={item.theme} progress={item.progress}/></Progress>
                    </div>
                  )
                })}
            </div>
            <div className="h-[70px] pt-5 mt-auto">
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
                                    title: function() {
                                        return false;
                                    },
                                    label: function (context) {
                                        return `${context.parsed.y} ${chart.dataUnit}`;
                                    },
                                },
                                displayColors: false,
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
                        maintainAspectRatio: false,
                        scales: {
                            y:{
                                display: false,
                                ticks: {
                                beginAtZero: true,
                                },
                            },
                            x:{
                                display: false,
                            },
                        },
                    }}
                ></Bar>
            </div>
        </Card.Body>
    </Card>
  )
}

export default TopPlanCard