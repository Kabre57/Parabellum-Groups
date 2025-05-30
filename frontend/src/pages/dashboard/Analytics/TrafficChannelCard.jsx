import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'
import { Doughnut } from "react-chartjs-2";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement} from "chart.js";
Chart.register(CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement);

const TrafficChannelCard = ({ className }) => {
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
    const chart = {
        labels: ["Organic Search", "Social Media", "Referrals", "Others"],
        dataUnit: "People",
        legend: false,
        datasets: [
          {
            borderColor: "#fff",
            backgroundColor: ["#798bff", "#b8acff", "#ffa9ce", "#f9db7b"],
            data: [4305, 859, 482, 138],
          },
        ],
    };
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-center gap-2 mb-4">
                <div>
                    <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Traffic Channel</h6>
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
            <div className="h-[160px]">
                <Doughnut
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
                        rotation: -1.5,
                        cutoutPercentage: 70,
                        maintainAspectRatio: false,
                    }}
                ></Doughnut>
            </div>
            <div className="flex flex-wrap pt-7 mx-auto w-80 max-w-full -m-1.5">
                <div className="w-1/2 p-1.5">
                    <div className="flex items-center">
                        <span className="inline-block h-3 w-3 rounded-sm me-2 bg-[#9cabff]"></span>
                        <span className="text-xs text-slate-400">Organic Search</span>
                    </div>
                    <div className="text-lg text-slate-700 dark:text-white ms-5">4,305 <small className="text-xs text-slate-400">58.63%</small></div>
                </div>
                <div className="w-1/2 p-1.5">
                    <div className="flex items-center">
                        <span className="inline-block h-3 w-3 rounded-sm me-2 bg-[#b8acff]"></span>
                        <span className="text-xs text-slate-400">Social Media</span>
                    </div>
                    <div className="text-lg text-slate-700 dark:text-white ms-5">859 <small className="text-xs text-slate-400">23.94%</small></div>
                </div>
                <div className="w-1/2 p-1.5">
                    <div className="flex items-center">
                        <span className="inline-block h-3 w-3 rounded-sm me-2 bg-[#ffa9ce]"></span>
                        <span className="text-xs text-slate-400">Referrals</span>
                    </div>
                    <div className="text-lg text-slate-700 dark:text-white ms-5">482 <small className="text-xs text-slate-400">12.94%</small></div>
                </div>
                <div className="w-1/2 p-1.5">
                    <div className="flex items-center">
                        <span className="inline-block h-3 w-3 rounded-sm me-2 bg-[#f9db7b]"></span>
                        <span className="text-xs text-slate-400">Others</span>
                    </div>
                    <div className="text-lg text-slate-700 dark:text-white ms-5">138 <small className="text-xs text-slate-400">4.49%</small></div>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default TrafficChannelCard