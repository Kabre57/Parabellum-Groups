import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'
import { Doughnut } from "react-chartjs-2";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement} from "chart.js";
Chart.register(CategoryScale, LinearScale, RadialLinearScale, Tooltip, Filler, Legend, ArcElement);

const SessionsCard = ({ className }) => {
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
        labels: ["Desktop", "Mobile", "Tablet"],
        dataUnit: "People",
        legend: false,
        datasets: [
          {
            borderColor: "#fff",
            backgroundColor: ["#9cabff", "#b8acff", "#7de1f8"],
            data: [84.5, 14.2, 1.3],
          },
        ],
    };
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-center gap-2 mb-4">
                <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Sessions by Device</h6>
                
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
            <div className="h-[200px]">
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
            <div className="flex flex-wrap justify-between pt-7 mx-auto w-[280px] max-w-full -m-1.5 my-auto">
                <div className="p-1.5">
                    <em className="text-2xl leading-none text-[#798bff] ni ni-monitor"></em>
                    <div className="text-xs leading-5 mb-2 text-slate-400">Desktop</div>
                    <div className="text-lg font-medium text-slate-700 dark:text-white">84.5%</div>
                    <div className="text-green-600 -ms-0.5 leading-none"><em className="icon ni ni-arrow-long-up"></em>4.5%</div>
                </div>
                <div className="p-1.5">
                    <em className="text-2xl leading-none text-[#baaeff] ni ni-mobile"></em>
                    <div className="text-xs leading-5 mb-2 text-slate-400">Mobile</div>
                    <div className="text-lg font-medium text-slate-700 dark:text-white">14.2%</div>
                    <div className="text-green-600 -ms-0.5 leading-none"><em className="icon ni ni-arrow-long-up"></em>133.2%</div>
                </div>
                <div className="p-1.5">
                    <em className="text-2xl leading-none text-[#7de1f8] ni ni-tablet"></em>
                    <div className="text-xs leading-5 mb-2 text-slate-400">Tablet</div>
                    <div className="text-lg font-medium text-slate-700 dark:text-white">1.3%</div>
                    <div className="text-green-600 -ms-0.5 leading-none"><em className="icon ni ni-arrow-long-up"></em>25.3%</div>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}

export default SessionsCard