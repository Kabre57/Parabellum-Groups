import React, {useState} from 'react'
import SimpleBar from 'simplebar-react'
import ComposeModal from './ComposeModal'
import { inboxNav, inboxLabels, inboxContacts } from '../../../store/inbox'
import { Avatar, Badge, Icon, Progress } from '../../../componenets'
import classNames from 'classnames'
import { toInitials } from '../../../utilities'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const LabelDropdown = ({className}) => {
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
                    <button className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 h-9 w-9 text-slate-600">
                        <Icon className="text-sm/4.5" name="more-h" />
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Edit Label</span></Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Remove Label</span></Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Label Color</span></Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>Show if unread</span>
                                <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick" />
                            </Menu.Item>
                        </li>
                        <li className="group active">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>Show</span>
                                <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick" />
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>Hide</span>
                                <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick" />
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}
const ContactDropdown = ({className}) => {
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
                    <button className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 h-9 w-9 text-slate-600">
                        <Icon className="text-sm/4.5" name="more-h" />
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>View Profile</span></Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Send Email</span></Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Start Chat</span></Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const Aside = ({show,setShow}) => {
  return (
    <>
        <div id="ibxAside" className={`peer max-w-[calc(100%-2.5rem)] w-[260px] xl:w-[300px] h-full lg:h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)] max-h-full bg-white dark:bg-gray-950 lg:bg-transparent border-e border-gray-300 dark:border-gray-900 flex-shrink-0 absolute lg:static top-0 start-0 z-[999] transition-transform duration-500 lg:transition-none -translate-x-full rtl:translate-x-full [&.active]:transform-none lg:transform-none lg:rtl:transform-none flex flex-col items-stretch overflow-hidden ${show ? 'active' : ''}`}>
            <div className="relative flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-3 px-5 sm:px-9 lg:px-7 min-h-[61px]">
                <h5 className="font-heading font-bold text-xl text-slate-700 dark:text-white leading-tighter -tracking-snug">NioMail</h5>
                <ComposeModal />
            </div>
            <SimpleBar className="flex-grow h-full max-w-full overflow-auto [&_.simplebar-content]:flex  [&_.simplebar-content]:flex-col [&_.simplebar-content]:h-full  [&_.simplebar-content]:box-border" >
                <ul className="px-3 pt-3 lg:px-4 lg:pt-4">
                    {inboxNav.map((item,index) => {
                        return(
                            <li key={index} className={`group my-0.5 rounded [&.active]:bg-primary-100 [&.active]:dark:bg-primary-950 hover:bg-gray-50 hover:dark:bg-gray-1000 ${item.active ? 'active' : ''}`}>
                                <a className="relative flex items-center px-3 py-2" href="#link" onClick={(e)=> {e.preventDefault()}}>
                                    <Icon className="text-xl leading-6 w-8 text-slate-400 group-[.active]:text-primary-600" name={item.icon}></Icon>
                                    <span className="text-sm font-medium leading-6 text-slate-600 dark:text-slate-300 ms-1 group-[.active]:text-primary-600 group-[.active]:dark:text-primary-600">{item.name}</span>
                                    {item.badge && <Badge pill size="sm" variant={item.badge.theme} className="justify-center min-w-[2.25rem] ms-auto">{item.badge.text}</Badge>}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center justify-between pt-8 px-6 pb-3 lg:px-7">
                    <h6 className="text-base font-heading font-bold -tracking-snug leading-tighter text-slate-700 dark:text-white">Label</h6>
                    <a className="inline-flex text-slate-400 hover:text-slate-700 dark:text-white" href="#link" onClick={(e)=> e.preventDefault()}><em className="text-lg/none ni ni-plus-c"></em></a>
                </div>
                <ul className="px-3 lg:px-4">
                    {inboxLabels.map((item,index) => {
                        const dotClass = classNames({
                            "h-4 w-4 rounded-full bg-white dark:bg-gray-950 border-3":true,
                            "border-primary-600": item.color === "primary",
                            "border-red-600": item.color === "red",
                            "border-green-600": item.color === "green",
                        });
                        return(
                            <li key={index} className="group relative flex items-center rounded my-0.5 transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000">
                                <a className="flex flex-grow px-3 py-2" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span className={dotClass}></span>
                                    <span className="text-sm/none text-slate-600 dark:text-white font-medium ms-4">{item.text}</span>
                                </a>
                                <LabelDropdown className="opacity-0 group-hover:opacity-100" />
                            </li>
                        )
                    })}
                </ul>
                <div className="flex items-center justify-between pt-8 px-6 pb-3 lg:px-7">
                    <h6 className="text-base font-heading font-bold -tracking-snug leading-tighter text-slate-700 dark:text-white">Contact</h6>
                    <a className="inline-flex text-slate-400 hover:text-slate-700 dark:text-white" href="#link" onClick={(e)=> e.preventDefault()}><em className="text-lg/none ni ni-plus-c"></em></a>
                </div>
                <ul className="px-3 lg:px-4 pb-3 lg:pb-4">
                    {inboxContacts.map((item,index) => {
                        return(
                            <li key={index} className="group relative flex items-center rounded my-0.5 transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000">
                                <div className="flex flex-grow px-3 py-2">
                                    <div className="flex items-center">
                                        {item.image ? <Avatar size="rg" rounded img={item.image}/> : <Avatar size="rg" variant={item.theme} rounded text={toInitials(item.name)}/>}
                                        <div className="ms-4">
                                            <span className="block text-sm font-medium leading-6 text-slate-700 dark:text-white">{item.name}</span>
                                            <span className="block text-xs leading-4 text-slate-400">{item.designation}</span>
                                        </div>
                                    </div>
                                </div>
                                <ContactDropdown className="opacity-0 group-hover:opacity-100" />
                            </li>
                        )
                    })}
                </ul>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 mt-auto">
                    <div className="mb-2">
                        <em className="text-xl/none ni ni-hard-drive"></em>
                        <span className="ms-1 text-sm text-slate-600 dark:text-slate-300"><strong>6 GB</strong> (5%) of 100GB used</span>
                    </div>
                    <Progress className="!bg-slate-100 dark:!bg-gray-700">
                        <Progress.Bar progress="5%"></Progress.Bar>
                    </Progress>
                </div>
            </SimpleBar>
        </div>
        <div onClick={()=> setShow(false)} className="absolute inset-0 bg-slate-950 bg-opacity-20 z-[900] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible lg:!opacity-0 lg:!invisible"></div>
    </>
  )
}

export default Aside