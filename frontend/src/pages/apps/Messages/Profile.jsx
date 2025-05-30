import React, {useState} from 'react'
import SimpleBar from 'simplebar-react'
import { Button, Icon, Avatar } from '../../../componenets'
import { toInitials } from '../../../utilities'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const Profile = ({show,setShow, data}) => {
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
    <>
        <SimpleBar className={`conversation-profile peer !absolute top-0 end-0 translate-x-full rtl:-translate-x-full w-[280px] h-full max-h-full bg-white dark:bg-gray-950 z-[100] transition-transform duration-300 ease-in-out border-s border-gray-200 dark:border-gray-800 [&.visible]:translate-x-0 ${show ? 'visible' : ''}`}>
            <div className="relative flex flex-col items-center text-center p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                <div className="absolute top-4 end-4">
                    <Menu as="div" className="inline-flex relative">
                        {({ open }) => (
                            <>
                                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                    <Button.Zoom size="sm">
                                        <Icon className="text-lg" name="more-h" />
                                    </Button.Zoom>
                                </Menu.Button>
                                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                    <ul className="py-2">
                                        <li>
                                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center text-xs leading-5 font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="eye" />
                                                <span>View Profile</span>
                                            </Menu.Item>
                                        </li>
                                        <li>
                                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center text-xs leading-5 font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="na" />
                                                <span>Ban From System</span>
                                            </Menu.Item>
                                        </li>
                                        <li>
                                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center text-xs leading-5 font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="repeat" />
                                                <span>View Orders</span>
                                            </Menu.Item>
                                        </li>
                                    </ul>
                                </Menu.Items>
                            </>
                        )}
                    </Menu>
                </div>
                {data.image ? <Avatar size="xl" rounded img={data.image}/> : <Avatar size="xl" variant={data.theme} rounded text={toInitials(data.name)}/>}
                <div className="mt-4">
                    <h6 className="text-xl text-slate-700 dark:text-white font-bold font-heading leading-tighter mb-2">{data.name}</h6>
                    <span className="text-sm text-slate-400">info@softnio.com</span>
                </div>
                <div className="grid grid-flow-dense grid-cols-12 mt-5 w-full">
                    <div className="col-span-4">
                        <div className="text-center">
                            <span className="block text-lg text-slate-600 dark:text-white font-bold">23</span>
                            <span className="block text-xs leading-5 text-slate-400">Total Order</span>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-center">
                            <span className="block text-lg text-slate-600 dark:text-white font-bold">20</span>
                            <span className="block text-xs leading-5 text-slate-400">Complete</span>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-center">
                            <span className="block text-lg text-slate-600 dark:text-white font-bold">3</span>
                            <span className="block text-xs leading-5 text-slate-400">Progress</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 sm:p-6">
                <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-3 mt-6 first:mt-0">Additional </h6>
                <ul className="user-contacts">
                    <li className="flex text-slate-600 dark:text-slate-300 text-sm/6 py-1">
                        <Icon className="text-base/6 inline-block text-slate-400 w-7" name="mail" />
                        <span>info@softnio.com</span>
                    </li>
                    <li className="flex text-slate-600 dark:text-slate-300 text-sm/6 py-1">
                        <Icon className="text-base/6 inline-block text-slate-400 w-7" name="call" />
                        <span>+938392939</span>
                    </li>
                    <li className="flex text-slate-600 dark:text-slate-300 text-sm/6 py-1">
                        <Icon className="text-base/6 inline-block text-slate-400 w-7" name="map-pin" />
                        <span>1134 Ridder Park Road <br />San Fransisco, CA 94851</span>
                    </li>
                </ul>
                <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-3 mt-6 first:mt-0">Additional </h6>
                <div className="grid grid-flow-dense grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <span className="block text-xs text-slate-400">Ref ID:</span>
                        <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">TID-049583</span>
                    </div>
                    <div className="col-span-6">
                        <span className="block text-xs text-slate-400">Requested:</span>
                        <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">Abu Bin Ishtiak</span>
                    </div>
                    <div className="col-span-6">
                        <span className="block text-xs text-slate-400">Status:</span>
                        <span className="block text-sm font-bold mt-1 text-green-600">Open</span>
                    </div>
                    <div className="col-span-6">
                        <span className="block text-xs text-slate-400">Last Reply:</span>
                        <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">Abu Bin Ishtiak</span>
                    </div>
                </div>
                <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-3 mt-6 first:mt-0">Assigned Account </h6>
                <ul className="flex flex-wrap gap-3">
                    <li>
                        <Avatar size="rg" variant="purple" text="IH" rounded />
                    </li>
                    <li>
                        <Avatar size="rg" variant="pink" text="ST" rounded />
                    </li>
                    <li>
                        <Avatar size="rg" variant="slate" text="SI" rounded />
                    </li>
                </ul>
            </div>
        </SimpleBar>
        <div 
            onClick={()=> {
                setShow(false)
            }} className="profile-toggle absolute inset-0 bg-slate-950 bg-opacity-20 dark:bg-opacity-50 z-[99] opacity-0 invisible peer-[.visible]:opacity-100 peer-[.visible]:visible 2xl:!opacity-0 2xl:!invisible"></div>
    </>
  )
}

export default Profile