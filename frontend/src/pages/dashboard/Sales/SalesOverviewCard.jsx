import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'
import { Line } from "react-chartjs-2";
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Filler, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Filler, Legend);

const SalesOverviewCard = ({className}) => {
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
      "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    ],
    dataUnit: "BTC",
    datasets: [
      {
        label: "Sales Overview",
        color: "#798bff",
        fill: true,
        backgroundColor: "rgba(101,118,255,0.25)",
        borderColor: "#798bff",
        barPercentage: 0.1,
        categoryPercentage: 0.1,
        borderWidth: 2,
        lineTension: 0.1,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        pointHoverBorderColor: "#798bff",
        pointHoverBackgroundColor: "#fff",
        data: [
          8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690,
          8200, 7800, 9500, 5500, 9200, 9690, 8200, 7800, 9500, 5500, 9200, 9690,
        ],
      },
    ],
  };
  return (
    <Card className="h-full">
        <Card.Body>
          <div className="flex justify-between items-start gap-2 mb-4">
              <div>
                  <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Sales Overview</h6>
                  <p className="text-xs leading-5 text-slate-400">In 30 days sales of product subscription. <a className="text-primary-500 hover:text-primary-600" href="#link" onClick={(e)=> e.preventDefault()}>See Details</a></p>
              </div>
              <Menu as="div" className="inline-flex relative">
                  {({ open }) => (
                      <>
                          <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                            <>
                              <Button size="rg" variant="primary-pale" className="hidden sm:inline-flex">
                                <Icon className="text-xl leading-4.5" name="download-cloud" />
                                <span className="ms-3"><span className="hidden md:inline">Download</span> Report</span>
                              </Button>
                              <Button size="rg" variant="primary-pale" icon className="sm:hidden">
                                <Icon className="text-xl leading-4.5" name="download-cloud" />
                              </Button>
                            </>
                          </Menu.Button>
                          <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                              <ul className="py-2">
                                  <li>
                                      <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                          <span>Download Mini Version</span>
                                      </Menu.Item>
                                  </li>
                                  <li>
                                      <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                          <span>Download Full Version</span>
                                      </Menu.Item>
                                  </li>
                                  <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                                  <li>
                                      <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                          <Icon className="text-lg leading-none w-7 opacity-80" name="opt-alt" />
                                          <span>More Options</span>
                                      </Menu.Item>
                                  </li>
                              </ul>
                          </Menu.Items>
                      </>
                  )}
              </Menu>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
              <div className="block text-3xl text-slate-700 dark:text-white">
                  $82,944.60
              </div>
              <div className="block text-lg text-slate-400">
                  1,937 <small>Subscribers</small>
              </div>
          </div>
          <div className="h-[200px] pt-6">
          <Line
            data={chart}
            options={{
              plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    rtl: theme.direction === 'rtl' ? true : false,
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
                    callbacks: {
                      label: function (context) {
                          return context.parsed.y;
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
                      callback: function (value, index, values) {
                        return "$ " + value;
                      },
                      padding: 10,
                      min: 100,
                      stepSize: 3000,
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
        </Card.Body>
    </Card>
  )
}

export default SalesOverviewCard