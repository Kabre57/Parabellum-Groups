import React, {useState} from 'react'
import classNames from 'classnames'
import { Card, Button, Icon } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const BrowserUsedCard = ({ className }) => {
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
            name: "Google Chrome",
            theme: "primary",
            amount: "1,641",
            change: 72.84,
            bounce: 22.62
        },
        {
            name: "Mozilla Firefox",
            theme: "red",
            amount: "497",
            change: 7.93,
            bounce: 20.49
        },
        {
            name: "Safari Browser",
            theme: "cyan",
            amount: "187",
            change: 4.87,
            bounce: 21.34
        },
        {
            name: "Edge / IE",
            theme: "indigo",
            amount: "28",
            change: 1.14,
            bounce: 21.34
        },
        {
            name: "Other Browser",
            theme: "purple",
            amount: "683",
            change: 10.76,
            bounce: 20.49
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="pb-2 sm:pb-3">
            <div className="flex justify-between items-center gap-2">
                <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Browser Used</h6>
                
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
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Browser</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end"><span>Users</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>% Users</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end"><span>Bounce Rate</span></div>
            </div>
            {data.map((item,index) => {
                const iconStyle = classNames({
                    "text-xl w-7": true,
                    "text-primary-600": item.theme === "primary",
                    "text-red-600": item.theme === "red",
                    "text-yellow-600": item.theme === "yellow",
                    "text-cyan-600": item.theme === "cyan",
                    "text-indigo-600": item.theme === "indigo",
                    "text-purple-600": item.theme === "purple",
                })
                return(        
                    <div key={index} className="table-row transition-all duration-300 [&>*]:border-b [&>*]:last:border-b-0 hover:bg-gray-50 hover:dark:bg-gray-1000">
                        <div className="relative table-cell align-middle py-4.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="flex items-center">
                                <Icon className={iconStyle} name="globe"/>
                                <div className="text-slate-700 dark:text-white font-medium">{item.name}</div>
                            </div>
                        </div>
                        <div className="relative table-cell align-middle py-4.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end">
                            <span className="text-xs text-slate-600">{item.amount}</span>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle py-4.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="flex items-center bg-transparent">
                                <div className="text-white rounded-sm h-1.5 bg-primary-600" style={{width:`${item.change}%`}}></div>
                                <div className="text-xs text-slate-400 ps-2">{item.change}%</div>
                            </div>
                        </div>
                        <div className="relative table-cell align-middle py-4.5 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end">
                            <span className="text-xs text-slate-400">{item.bounce}%</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </Card>
  )
}

export default BrowserUsedCard