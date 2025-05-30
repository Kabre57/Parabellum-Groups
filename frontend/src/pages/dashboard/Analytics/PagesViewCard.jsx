import React, {useState} from 'react'
import { Card, Button, Icon } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const PagesViewCard = ({ className }) => {
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
        {url: "/", amount:"2,879"},
        {url: "/subscription/index.html", amount:"2,094"},
        {url: "/general/index.html", amount:"1,634"},
        {url: "/crypto/index.html", amount:"1,497"},
        {url: "/invest/index.html", amount:"1,349"},
        {url: "/subscription/profile.html", amount:"984"},
        {url: "/general/index-crypto.html", amount:"879"},
        {url: "/apps/messages/index.html", amount:"598"},
        {url: "/general/index-crypto.html", amount:"436"},
    ]
  return (
    <Card className="h-full">
        <Card.Body className="pb-2 sm:pb-3">
            <div className="flex justify-between items-center gap-2">
                <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Pages View by Users</h6>
                
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
        <div>
            <div className="flex items-center justify-between gap-4 px-5 py-2 sm:px-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                <span className="text-xs text-slate-400">Page</span>
                <span className="text-xs text-slate-400">Page Views</span>
            </div>
            {data.map((item,index) => {
                return(
                    <div key={index} className="flex items-center justify-between gap-4 px-5 py-2 sm:px-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                        <span className="text-xs text-slate-400">{item.url}</span>
                        <span className="text-xs text-slate-600">{item.amount}</span>
                    </div>
                )
            })}
        </div>
    </Card>
  )
}

export default PagesViewCard