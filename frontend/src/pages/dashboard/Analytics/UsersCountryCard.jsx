import React, {useState} from 'react'
import { Card, Button, Icon, WorldMap } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const UsersCountryCard = ({ className }) => {
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
  return (
    <Card className="h-full">
        <Card.Body>
            <div className="flex justify-between items-center gap-2 mb-3">
                <h6 className="font-heading text-sm -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Users by Country</h6>
                
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
            <div className="flex justify-center">
                <WorldMap className="h-[160px] w-max my-4 [&_svg]:!w-full [&_svg]:!h-full " id="worldMap"></WorldMap>
            </div>
            <table className="w-full -mb-1">
              <tbody>
                <tr className="text-sm">
                    <td className="py-2 text-slate-400">United States</td>
                    <td className="py-2 text-slate-700 dark:text-white">12,094</td>
                    <td className="py-2 text-slate-400 text-end">23.54%</td>
                </tr>
                <tr className="text-sm">
                    <td className="py-2 text-slate-400">India</td>
                    <td className="py-2 text-slate-700 dark:text-white">7,984</td>
                    <td className="py-2 text-slate-400 text-end">7.16%</td>
                </tr>
                <tr className="text-sm">
                    <td className="py-2 text-slate-400">Turkey</td>
                    <td className="py-2 text-slate-700 dark:text-white">6,338</td>
                    <td className="py-2 text-slate-400 text-end">6.54%</td>
                </tr>
                <tr className="text-sm">
                    <td className="py-2 text-slate-400">Bangladesh</td>
                    <td className="py-2 text-slate-700 dark:text-white">4,749</td>
                    <td className="py-2 text-slate-400 text-end">5.29%</td>
                </tr>
              </tbody>
            </table>
        </Card.Body>
    </Card>
  )
}

export default UsersCountryCard