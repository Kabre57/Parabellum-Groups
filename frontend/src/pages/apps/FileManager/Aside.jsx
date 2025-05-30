import React, {useState} from 'react'
import { Icon, Progress } from '../../../componenets'
import SimpleBar from 'simplebar-react'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const Aside = ({show,setShow}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "top-start" : "top-end",
        modifiers: [
            {name: 'offset', options: { offset: [0, -4]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
    const menu = [
        {
            icon:"home-alt",
            text: "Home",
            active: true,
        },
        {
            icon:"file-docs",
            text: "Files",
            sub: [
                {text: "New Files"},
                {text: "This Months"},
                {text: "Older Files"},
            ]
        },
        {
            icon:"star",
            text: "Starred",
        },
        {
            icon:"share-alt",
            text: "Shared",
        },
        {
            icon:"trash-alt",
            text: "Recovery",
        },
        {
            icon:"setting-alt",
            text: "Settings",
        },
    ]
    
  return (
    <>
        <div id="pageAside" className={`peer max-w-[calc(100%-2.5rem)] w-[220px] min-h-screen bg-white dark:bg-gray-950 border-e border-gray-300 dark:border-gray-900 flex-shrink-0 fixed lg:static top-0 start-0 z-[999] transition-transform duration-500 lg:transition-none -translate-x-full rtl:translate-x-full [&.active]:transform-none lg:transform-none lg:rtl:transform-none ${show ? 'active' : ''}`}>
            <SimpleBar className="max-lg:mt-16 max-lg:max-h-[calc(100vh-theme(spacing.16))]">
                <ul className="p-4">
                    {menu.map((item,index) => {
                        return(
                            <li key={index} className={`group/fmgmenu py-0.5 ${item.active ? 'active' : ''}`}>
                                <a className="relative flex items-center py-2 px-3 rounded hover:bg-gray-50 hover:dark:bg-gray-900 transition-all duration-300 group-[.active]/fmgmenu:bg-primary-100 group-[.active]/fmgmenu:dark:bg-primary-950" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <Icon className="text-xl/5 -mt-0.5 w-8 text-slate-400 group-[.active]/fmgmenu:text-primary-600" name={item.icon} />
                                    <span className="text-sm/6 font-medium text-slate-600 dark:text-slate-400 ms-1 group-[.active]/fmgmenu:text-primary-600 group-[.active]/fmgmenu:dark:text-primary-600">{item.text}</span>
                                </a>
                                {item.sub && <ul className="ps-12 mb-2 -mt-0.5">
                                    {item.sub.map((item,index)=>{
                                        return(
                                            <li key={index} className="py-0.5">
                                                <a href="#link" onClick={(e)=> e.preventDefault()} className="relative flex items-center py-0.5 rounded text-slate-600 hover:text-primary-600"><span className="text-xs/5 font-medium">{item.text}</span></a>
                                            </li>
                                        )
                                    })}
                                </ul>}
                            </li>
                        )
                    })}
                </ul>

                <div className="mt-24">
                    <div className="p-7">
                        <h6 className="font-heading text-sm/tighter font-bold -tracking-snug text-slate-600 mb-4 flex items-center">
                            <Icon className="text-xl/none me-4" name="hard-drive" /><span>Storage</span>
                        </h6>
                        <Progress>
                            <Progress.Bar variant="primary" progress="5%" />
                        </Progress>
                        <div className="text-xs font-medium text-slate-400 mt-4">12.47 GB of 50 GB used</div>
                        <div className="mt-1">
                            <a href="#link" onClick={(e)=> e.preventDefault()} className="text-xs/none font-medium whitespace-nowrap text-primary-600 hover:text-primary-700 transition-all duration-300">Upgrade Storage</a>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 dark:border-gray-900 p-2">
                        <Menu as="div" className="inline-flex relative w-full">
                            {({ open }) => (
                                <>
                                    <Menu.Button as='div' className={`inline-flex w-full ${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                        <button className="flex items-center justify-between py-3 px-5 w-full">
                                            <div className="text-start">
                                                <div className="text-sm/5 font-bold text-slate-700 dark:text-white mb-1">Personal</div>
                                                <div className="text-xs/4 text-slate-400">Only you</div>
                                            </div>
                                            <em className="text-base/none -me-1 text-slate-600 ni ni-unfold-more"></em>
                                        </button>
                                    </Menu.Button>
                                    <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[160px]">
                                        <ul className="py-2">
                                            <li className="group">
                                                <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                    <span>Team Plan</span>
                                                    <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                                </Menu.Item>
                                            </li>
                                            <li className="group active">
                                                <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                    <span>Personal</span>
                                                    <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                                </Menu.Item>
                                            </li>
                                            <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                                            <li className="group">
                                                <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                    <span>Upgrade Plan</span>
                                                    <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                                                </Menu.Item>
                                            </li>
                                        </ul>
                                    </Menu.Items>
                                </>
                            )}
                        </Menu>
                        
                    </div>
                </div>
            </SimpleBar>
        </div>
        <div onClick={()=> setShow(false)} className="class-toggle fixed inset-0 bg-slate-950 bg-opacity-20 z-[900] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible lg:!opacity-0 lg:!invisible"></div>
    </>
  )
}

export default Aside