import React, {useState} from 'react'
import { Card, Button, Icon, Tooltip as TooltipElement } from '../../../componenets'
import { Bar } from "react-chartjs-2";
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Filler, Legend);

const UserActivitiesCard = ({className}) => {
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
          "01 Nov", "02 Nov", "03 Nov", "04 Nov", "05 Nov", "06 Nov", "07 Nov", "08 Nov", "09 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov",
        ],
        dataUnit: "USD",
        datasets: [
          {
            label: "Direct Join",
            color: "#9cabff",
            backgroundColor: "#9cabff",
            data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90],
            borderWidth:2,
            borderColor: 'transparent',
            hoverBorderColor : 'transparent',
            borderSkipped : 'bottom',
            barPercentage : .8,
            categoryPercentage : .9
          },
          {
            label: "Referral Join",
            color: "#9cabff",
            backgroundColor: "rgba(156, 171, 255, 0.4)",
            data: [125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 75, 90],
            borderWidth:2,
            borderColor: 'transparent',
            hoverBorderColor : 'transparent',
            borderSkipped : 'bottom',
            barPercentage : .8,
            categoryPercentage : .9
          },
        ],
      };
  return (
    <Card className="h-full">
        <Card.Body>
          <div className="flex justify-between items-start gap-2 mb-4">
                <div>
                    <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">User Activities</h6>
                    <p className="text-xs leading-5 text-slate-400">
                        <span className="me-1">In last 30 days </span>    
                        <TooltipElement placement="right" rtlPlacement="left" content="Referral Informations">
                            <Icon className="text-slate-300 leading-5 align-middle" name="info" />
                        </TooltipElement>
                    </p>
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
          <div className="flex flex-wrap gap-6">
              <div className="flex">
                  <em className="text-xl w-9 text-slate-400 ni ni-users"></em>
                  <div className="me-4">
                      <span className="text-lg font-medium leading-tight text-slate-600 dark:text-white">345</span>
                      <span className="block text-xs text-slate-400">Direct Join</span>
                  </div>
                  <div className="w-[50px] h-[24px] self-end text-[#9cabff]">
                      <svg enableBackground="new 0 0 48 17.5" version="1.1" viewBox="0 0 48 17.5" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" d="m1.2 17.4h-0.3c-0.5-0.1-0.8-0.7-0.7-1.2 2-7.2 5-12.2 8.8-14.7 1.5-1 3-1.5 4.5-1.4 4.9 0.3 7.2 4.9 9 8.5 0.3 0.4 0.5 0.8 0.7 1.2 1 1.8 2.7 3.9 4.5 4.3 0.9 0.2 1.7-0.1 2.6-0.8 1.8-1.4 3-3.7 4.1-5.9 0.5-1 1-1.9 1.5-2.9 1-1.5 2.8-3.5 4.9-3.8 1.1-0.1 2.2 0.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1 0.4 1 0.7 1.9 1.2 2.6 0.3 0.4 0.2 1.1-0.2 1.4s-1.1 0.2-1.4-0.2c-0.7-0.9-1.1-2-1.5-3-0.5-1.3-1-2.5-1.9-3.3-0.5-0.4-1-0.6-1.5-0.5-1.3 0.2-2.7 1.6-3.5 2.8-0.5 0.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-0.6-5.1-3.9-5.9-5.3-0.2-0.4-0.4-0.8-0.6-1.3-1.7-3.4-3.5-7.2-7.3-7.4-1.1-0.1-2.1 0.3-3.3 1-3.5 2.4-6.2 7-8 13.7-0.2 0.4-0.6 0.7-1 0.7z"/>
                      </svg>
                  </div>
              </div>
              <div className="flex">
                  <em className="text-xl w-9 text-slate-400 ni ni-users"></em>
                  <div className="me-4">
                      <span className="text-lg font-medium leading-tight text-slate-600 dark:text-white">49</span>
                      <span className="block text-xs text-slate-400">Referral Join</span>
                  </div>
                  <div className="w-[50px] h-[24px] self-end text-[#ccd4ff]">
                      <svg enableBackground="new 0 0 48 17.5" version="1.1" viewBox="0 0 48 17.5" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                          <path fill="currentColor" d="m1.2 17.4h-0.3c-0.5-0.1-0.8-0.7-0.7-1.2 2-7.2 5-12.2 8.8-14.7 1.5-1 3-1.5 4.5-1.4 4.9 0.3 7.2 4.9 9 8.5 0.3 0.4 0.5 0.8 0.7 1.2 1 1.8 2.7 3.9 4.5 4.3 0.9 0.2 1.7-0.1 2.6-0.8 1.8-1.4 3-3.7 4.1-5.9 0.5-1 1-1.9 1.5-2.9 1-1.5 2.8-3.5 4.9-3.8 1.1-0.1 2.2 0.3 3.1 1 1.3 1.1 1.9 2.6 2.4 4.1 0.4 1 0.7 1.9 1.2 2.6 0.3 0.4 0.2 1.1-0.2 1.4s-1.1 0.2-1.4-0.2c-0.7-0.9-1.1-2-1.5-3-0.5-1.3-1-2.5-1.9-3.3-0.5-0.4-1-0.6-1.5-0.5-1.3 0.2-2.7 1.6-3.5 2.8-0.5 0.8-1 1.8-1.4 2.7-1.2 2.4-2.4 4.9-4.6 6.5-1.3 1.1-2.8 1.5-4.2 1.2-3.1-0.6-5.1-3.9-5.9-5.3-0.2-0.4-0.4-0.8-0.6-1.3-1.7-3.4-3.5-7.2-7.3-7.4-1.1-0.1-2.1 0.3-3.3 1-3.5 2.4-6.2 7-8 13.7-0.2 0.4-0.6 0.7-1 0.7z"/>
                      </svg>
                  </div>
              </div>
          </div>
        </Card.Body>
        <div className="h-[102px] px-2">
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
                y: {
                    display: false,
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                },
                x: {
                    display: false,
                    stacked: true,
                    reverse: theme.direction === 'rtl' ? true : false,
                },
                },
            }}
            />
        </div>
    </Card>
  )
}

export default UserActivitiesCard