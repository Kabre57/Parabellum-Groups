import React, {useState} from 'react'
import { Avatar, Card, Button, Icon, Progress } from '../../../componenets'
import { toInitials } from '../../../utilities'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const ActionDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [8, -8] : [-8, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="sm" className="-me-2">
                        <Icon className="text-xl rtl:-scale-x-100" name="chevron-right" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[120px]">
                    <ul>
                        <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-200 dark:border-gray-800">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>View</span>
                            </Menu.Item>
                        </li>
                        <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-200 dark:border-gray-800">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>Invoice</span>
                            </Menu.Item>
                        </li>
                        <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-200 dark:border-gray-800">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>Print</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}
const RecentInvestmentCard = ({ className }) => {
    const data = [
        {
            plan:{
                code: "P1",
                name: "Silver",
                details: "Daily 4.76% for 21 Days"
            },
            user:{
                name:"Janice Carroll",
                theme:"pink-pale"
            },
            date: "18/10/2019",
            amount: "1.094780",
            progress: "75%",
        },
        {
            plan:{
                code: "P2",
                name: "Dimond",
                details: "Daily 8.52% for 14 Days"
            },
            user:{
                name:"Victoria Aguilar",
                theme:"indigo-pale"
            },
            date: "18/10/2019",
            amount: "1.094780",
            progress: "100%",
        },
        {
            plan:{
                code: "P3",
                name: "Platinam",
                details: "Daily 14.82% for 7 Days"
            },
            user:{
                name:"Emma Henry",
                theme:"purple-pale"
            },
            date: "18/10/2019",
            amount: "1.094780",
            progress: "100%",
        },
        {
            plan:{
                code: "P1",
                name: "Silver",
                details: "Daily 4.76% for 21 Days"
            },
            user:{
                name:"Alice Ford",
                theme:"green-pale"
            },
            date: "18/10/2019",
            amount: "1.094780",
            progress: "100%",
        },
        {
            plan:{
                code: "P3",
                name: "Platinam",
                details: "Daily 14.82% for 7 Days"
            },
            user:{
                name:"Harold Walker",
                theme:"orange-pale"
            },
            date: "18/10/2019",
            amount: "1.094780",
            progress: "100%",
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="border-b border-gray-300 dark:border-gray-900">
            <div className="relative flex items-center justify-between -my-1">
                <h6 className="font-heading text-base -tracking-snug leading-6.5 font-bold text-slate-700 dark:text-white">Recent Investment</h6>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600">View All</a>
            </div>
        </Card.Body>
        <div className="table w-full text-sm text-slate-400">
            <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Plan</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Who</span></div>
                <div className="relative hidden lg:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Date</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Amount</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>&nbsp;</span></div>
                <div className="relative table-cell align-middle py-2 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>&nbsp;</span></div>
            </div>
            {data.map((item,index) => {
                return(                                 
                    <div key={index} className="table-row transition-all duration-300 [&>*]:border-b [&>*]:last:border-b-0 hover:bg-gray-50 hover:dark:bg-gray-1000">
                        <div className="relative table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="flex items-center">
                                <div className="relative flex-shrink-0 flex items-center justify-center text-sm text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 h-10 w-10 rounded-full font-medium">
                                    <span>{item.plan.code}</span>
                                </div>
                                <div className="text-slate-400 text-xs inline-block ms-3">{item.plan.name} <span className="hidden md:inline">- {item.plan.details}</span></div>
                            </div>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="flex items-center">
                                {item.user.image ? <Avatar size="rg" rounded img={item.user.image}/> : <Avatar size="rg" variant={item.user.theme} rounded text={toInitials(item.user.name)}/>}
                                <div className="text-slate-600 text-xs font-bold flex items-center ms-3">{item.user.name}</div>
                            </div>
                        </div>
                        <div className="relative hidden lg:table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <span className="text-xs">{item.date}</span>
                        </div>
                        <div className="relative table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <span className="text-xs font-medium text-slate-700 dark:text-white">1.094780 <span className="font-normal text-slate-500">BTC</span></span>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            {item.progress !== "100%" ? <Progress><Progress.Bar progress={item.progress} /></Progress> : <span className="text-xs text-green-600">Completed</span>}
                        </div>
                        <div className="relative table-cell align-middle py-4 px-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end">
                            <ActionDropdown />
                        </div>
                    </div>
                )
            })}
        </div>
    </Card>
  )
}

export default RecentInvestmentCard