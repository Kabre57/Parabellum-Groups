import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const ActionCenterCard = ({className}) => {
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
  return (
    <Card className="h-full">
        <Card.Body className="sm:py-4 border-b border-gray-300 dark:border-gray-900">
            <div className="relative flex items-center justify-between -my-1">
                <h6 className="font-heading text-base -tracking-snug leading-6.5 font-bold text-slate-700 dark:text-white">Action Center</h6>
                <Menu as="div" className="inline-flex relative ms-auto">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button.Zoom className="-me-2">
                                    <Icon className="text-xl" name="more-h" />
                                </Button.Zoom>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                <ul className="py-2">
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                            <Icon className="text-lg leading-none w-7 text-start opacity-80" name="setting"/>
                                            <span>Action Settings</span>
                                        </Menu.Item>
                                    </li>
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                            <Icon className="text-lg leading-none w-7 text-start opacity-80" name="notify"/>
                                            <span>Push Notification</span>
                                        </Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </div>
        </Card.Body>
        <ul>
            <li className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                <div className="flex">
                    <em className="text-2xl text-slate-400 w-8 -mt-1 flex-shrink-0 ni ni-cc-alt-fill"></em>
                    <div>
                        <div className="text-sm leading-6 font-medium pb-1 text-slate-600 dark:text-white">Pending Buy/Sell Orders</div>
                        <p className="text-sm leading-5 text-slate-400">We have still <strong className="font-medium text-primary-600">40 buy orders</strong> and <strong className="font-medium text-primary-600">12 sell orders</strong>, thats need to review &amp; take necessary action.</p>
                    </div>
                </div>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex items-center justify-center isolate relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 [&.show]:before:h-10 [&.show]:before:w-10 before:rounded-full before:opacity-0 hover:before:opacity-100 [&.show]:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 dark:before:bg-gray-900 -me-3"><em className="text-xl text-slate-600 dark:text-slate-300 rtl:-scale-x-100 ni ni-forward-ios"></em></a>
            </li>
            <li className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                <div className="flex">
                    <em className="text-2xl text-slate-400 w-8 -mt-1 flex-shrink-0 ni ni-help-fill"></em>
                    <div>
                        <div className="text-sm leading-6 font-medium pb-1 text-slate-600 dark:text-white">Support Messages</div>
                        <p className="text-sm leading-5 text-slate-400">Here is <strong className="font-medium text-primary-600">18 new</strong> support message. </p>
                    </div>
                </div>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex items-center justify-center isolate relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 [&.show]:before:h-10 [&.show]:before:w-10 before:rounded-full before:opacity-0 hover:before:opacity-100 [&.show]:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 dark:before:bg-gray-900 -me-3"><em className="text-xl text-slate-600 dark:text-slate-300 rtl:-scale-x-100 ni ni-forward-ios"></em></a>
            </li>
            <li className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                <div className="flex">
                    <em className="text-2xl text-slate-400 w-8 -mt-1 flex-shrink-0 ni ni-wallet-fill"></em>
                    <div>
                        <div className="text-sm leading-6 font-medium pb-1 text-slate-600 dark:text-white">Upcoming Deposit</div>
                        <p className="text-sm leading-5 text-slate-400">Here is <strong className="font-medium text-primary-600">7 upcoming</strong> deposit need to review.</p>
                    </div>
                </div>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex items-center justify-center isolate relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 [&.show]:before:h-10 [&.show]:before:w-10 before:rounded-full before:opacity-0 hover:before:opacity-100 [&.show]:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 dark:before:bg-gray-900 -me-3"><em className="text-xl text-slate-600 dark:text-slate-300 rtl:-scale-x-100 ni ni-forward-ios"></em></a>
            </li>
        </ul>
    </Card>
  )
}

export default ActionCenterCard