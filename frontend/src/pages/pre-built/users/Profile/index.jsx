import React, {useEffect, useState} from 'react'
import { Avatar, Button, Icon, Dropdown, Head } from '../../../../componenets';
import SimpleBar from 'simplebar-react';
import { Tab } from '@headlessui/react';
import Social from './Social';
import Security from './Security';
import Activity from './Activity';
import Notification from './Notification';
import Personal from './Personal';
import { useSearchParams } from "react-router-dom";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../../layout/context";

const UserProfilePage = () => {
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

    const [pageAside, setPageAside] = useState(false);
    let [searchParams] = useSearchParams();
    const selectedTab = Number(searchParams.get('tab'))
    
    const [selectedIndex, setSelectedIndex] = useState()

    useEffect(() => {
        setSelectedIndex(selectedTab);
    }, [selectedTab]);

    useEffect(() => {
        const handleAside = () => {
            if (window.innerWidth > 1023) {
              setPageAside(false);
            }
        }
    
        handleAside();
        window.addEventListener('resize', handleAside);
        return () => {
         window.removeEventListener('resize', handleAside);
        };
    }, []);

  return (
    <>
        <Head title="Profile" />
        <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full">
            <Tab.Group as="div" className="relative flex" selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div id="pageAside" className={`peer min-w-[260px] max-w-[calc(100%-2.5rem)] w-[300px] 2xl:w-[380px] min-h-screen bg-white dark:bg-gray-950 lg:bg-transparent border-e border-gray-300 dark:border-gray-900 flex-shrink-0 fixed lg:static top-0 start-0 z-[999] transition-transform duration-500 lg:transition-none -translate-x-full rtl:translate-x-full [&.active]:transform-none lg:transform-none lg:rtl:transform-none  ${pageAside ? "active" : ''}`}>
                    <SimpleBar className="max-lg:mt-16 max-lg:max-h-[calc(100vh-theme(spacing.16))]" >
                        <div className="p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                            <div className="flex items-center">
                                <Avatar size="rg" variant="primary" rounded text="AB" />
                                <div className="ms-4 flex flex-col">
                                    <span className="text-sm font-bold text-slate-700 dark:text-white">Abu Bin Ishtiyak</span>
                                    <span className="text-xs text-slate-400 mt-1">info@softnio.com</span>
                                </div>
                                <Menu as="div" className="inline-flex relative ms-auto -me-2">
                                    {({ open }) => (
                                        <>
                                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                                <Button.Zoom size="sm">
                                                    <Icon className="text-xl/4.5" name="more-v" />
                                                </Button.Zoom>
                                            </Menu.Button>
                                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                                <ul className="py-2">
                                                    <li>
                                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                            <Icon className="text-lg text-start leading-none w-7 opacity-80" name="camera-fill" />
                                                            <span>Change Photo</span>
                                                        </Menu.Item>
                                                    </li>
                                                    <li>
                                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                            <Icon className="text-lg text-start leading-none w-7 opacity-80" name="edit-fill" />
                                                            <span>Update Profile</span>
                                                        </Menu.Item>
                                                    </li>
                                                </ul>
                                            </Menu.Items>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                        <div className="p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                            <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-widest leading-tight mb-3">Nio Wallet Account </h6>
                            <div className="text-2xl leading-none pb-2 text-primary-600">12.395769 <small className="font-normal text-base">BTC</small></div>
                            <div className="text-xs text-slate-400">Locked <span className="text-slate-600 dark:text-slate-400">0.344939 <span>BTC</span></span></div>
                        </div>
                        <div className="relative">
                            <Tab.List as="ul" className="py-3 text-start">
                                <li>
                                    <Tab onClick={()=>{ setPageAside(false) }} className="group px-5 sm:px-6 py-3 sm:py-4 flex items-center text-sm font-medium leading-5 text-slate-600 hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300 w-full outline-none">
                                        <Icon className="text-lg w-8 text-start leading-5 opacity-80 text-slate-400 group-hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300" name="user-fill-c" />
                                        <span>Personal Infomation</span>
                                        <em className="text-base font-medium ms-auto leading-none rtl:-scale-x-100 -me-1 ni ni-chevron-right"></em>
                                    </Tab>
                                </li>
                                <li>
                                    <Tab onClick={()=>{ setPageAside(false) }} className="group px-5 sm:px-6 py-3 sm:py-4 flex items-center text-sm font-medium leading-5 text-slate-600 hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300 w-full outline-none">
                                        <Icon className="text-lg w-8 text-start leading-5 opacity-80 text-slate-400 group-hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300" name="bell-fill" />
                                        <span>Notifications</span>
                                        <em className="text-base font-medium ms-auto leading-none rtl:-scale-x-100 -me-1 ni ni-chevron-right"></em>
                                    </Tab>
                                </li>
                                <li>
                                    <Tab onClick={()=>{ setPageAside(false) }} className="group px-5 sm:px-6 py-3 sm:py-4 flex items-center text-sm font-medium leading-5 text-slate-600 hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300 w-full outline-none">
                                        <Icon className="text-lg w-8 text-start leading-5 opacity-80 text-slate-400 group-hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300" name="activity-round-fill" />
                                        <span>Account Activity</span>
                                        <em className="text-base font-medium ms-auto leading-none rtl:-scale-x-100 -me-1 ni ni-chevron-right"></em>
                                    </Tab>
                                </li>
                                <li>
                                    <Tab onClick={()=>{ setPageAside(false) }} className="group px-5 sm:px-6 py-3 sm:py-4 flex items-center text-sm font-medium leading-5 text-slate-600 hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300 w-full outline-none">
                                        <Icon className="text-lg w-8 text-start leading-5 opacity-80 text-slate-400 group-hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300" name="lock-alt-fill" />
                                        <span>Security Settings</span>
                                        <em className="text-base font-medium ms-auto leading-none rtl:-scale-x-100 -me-1 ni ni-chevron-right"></em>
                                    </Tab>
                                </li>
                                <li>
                                    <Tab onClick={()=>{ setPageAside(false) }} className="group px-5 sm:px-6 py-3 sm:py-4 flex items-center text-sm font-medium leading-5 text-slate-600 hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300 w-full outline-none">
                                        <Icon className="text-lg w-8 text-start leading-5 opacity-80 text-slate-400 group-hover:text-primary-600 ui-selected:text-primary-600 transition-all duration-300" name="grid-add-fill-c" />
                                        <span>Connected with Social</span>
                                        <em className="text-base font-medium ms-auto leading-none rtl:-scale-x-100 -me-1 ni ni-chevron-right"></em>
                                    </Tab>
                                </li>
                            </Tab.List>
                        </div>
                    </SimpleBar>
                </div>
                <div onClick={()=>{ setPageAside(false) }} className="class-toggle fixed inset-0 bg-slate-950 bg-opacity-20 z-[900] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible 2xl:!opacity-0 2xl:!invisible"></div>
                <div className="flex-grow">
                    <Tab.Panels className="tab-content p-5 sm:p-10">
                        <Tab.Panel>
                            <Personal pageAside={setPageAside} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Notification pageAside={setPageAside} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Activity pageAside={setPageAside} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Security pageAside={setPageAside} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Social pageAside={setPageAside} />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    </>
  )
}

export default UserProfilePage