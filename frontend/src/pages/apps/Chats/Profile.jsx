import React, {useState} from 'react'
import SimpleBar from 'simplebar-react'
import { Button, Icon, Avatar, Switch } from '../../../componenets'
import { toInitials } from '../../../utilities'
import {
    Accordion,
    AccordionItem,
} from "@szhsin/react-accordion";

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
        <SimpleBar className={`conversation-profile peer !absolute top-0 end-0 translate-x-full rtl:-translate-x-full max-w-[calc(100%-2.5rem)] w-[325px] 2xl:w-[365px] h-full max-h-full bg-white dark:bg-gray-950 z-[100] transition-transform duration-300 ease-in-out 2xl:border-s border-gray-200 dark:border-gray-800 [&.visible]:translate-x-0 ${show ? 'visible' : ''}`}>
            <div className="relative flex flex-col items-center text-center p-5 sm:px-6 sm:py-8 border-b border-gray-200 dark:border-gray-800">
                <div className="absolute top-4 end-4">
                    <Menu as="div" className="inline-flex relative ">
                        {({ open }) => (
                            <>
                                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                    <Button.Zoom size="md">
                                        <Icon className="text-lg text-slate-600 dark:text-slate-300" name="more-h" />
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
                                                <span>Block Messsages</span>
                                            </Menu.Item>
                                        </li>
                                    </ul>
                                </Menu.Items>
                            </>
                        )}
                    </Menu>
                </div>
                {data.user?.length > 1 ? 
                    <Avatar.GroupS2 size="xl">
                        {data.user.slice(0,2).map((uItem,uIndex)=> {
                            return(
                                <React.Fragment key={uIndex}>
                                    {uItem.image ? <Avatar  rounded img={uItem.image}/> : <Avatar  variant={uItem.theme} rounded text={toInitials(uItem.name)}/>}
                                </React.Fragment>
                            )
                        })}
                    </Avatar.GroupS2> 
                        : 
                        (data.image ? <Avatar size="xl" rounded img={data.image}/> : <Avatar size="xl" variant={data.theme} rounded text={toInitials(data.name)}/>)
                }
                <div className="mt-4">
                    <h6 className="text-xl text-slate-700 dark:text-white font-bold font-heading leading-tighter mb-2">{data.name}</h6>
                    <span className="text-sm text-slate-400">Active 35m ago</span>
                </div>
            </div>

            <Accordion allowMultiple transition transitionTimeout={250} className="accordion">
                <AccordionItem
                    initialEntered
                    className="accordion-item border-t border-gray-200 dark:border-gray-800 first:border-t-0 group"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className="text-xxs/4 pt-0.5 tracking-relaxed text-slate-400 uppercase font-bold">Options</h6>
                            <Icon className={`absolute end-6 top-1/2 -translate-y-1/2 text-sm/5 text-center text-primary-500 h-5 w-5 transition-all duration-300 group-[.active]:rotate-180 ${isEnter ? 'rotate-180' : ''}`} name="chevron-down"></Icon>
                        </>
                    )}
                    contentProps={{
                        className: "transition-height duration-200 ease-in-out",
                    }}
                    buttonProps={{
                        className: "accordion-toggle relative block text-start px-6 py-5 lg:px-7 w-full"
                    }}
                    panelProps={{ className: "accordion-body px-6 pb-6 lg:px-7" }}
                >
                    <ul className="-m-1">
                        <li className="p-1">
                            <a className="flex items-center group/chatoption" href="#link" onClick={(e)=> e.preventDefault()}>
                                <div className="relative flex-shrink-0 flex items-center justify-center text-xs text-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900 h-8 w-8 rounded-full font-medium">
                                    <Icon className="text-base/none" name="edit-alt"></Icon>
                                </div>
                                <div className="group-hover/chatoption:text-slate-800 group-hover/chatoption:dark:text-white text-sm font-bold transition-all duration-300 text-slate-600 dark:text-slate-300 ms-3">Nickname</div>
                            </a>
                        </li>
                        <li className="p-1">
                            <a className="flex items-center group/chatoption chat-search-toggle" href="#link" onClick={(e)=> e.preventDefault()}>
                                <div className="relative flex-shrink-0 flex items-center justify-center text-xs text-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900 h-8 w-8 rounded-full font-medium">
                                    <Icon className="text-base/none" name="search"></Icon>
                                </div>
                                <div className="group-hover/chatoption:text-slate-800 group-hover/chatoption:dark:text-white text-sm font-bold transition-all duration-300 text-slate-600 dark:text-slate-300 ms-3">Search In Conversation</div>
                            </a>
                        </li>
                        <li className="p-1">
                            <a className="flex items-center group/chatoption" href="#link" onClick={(e)=> e.preventDefault()}>
                                <div className="relative flex-shrink-0 flex items-center justify-center text-xs text-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900 h-8 w-8 rounded-full font-medium">
                                    <Icon className="text-base/none" name="circle-fill"></Icon>
                                </div>
                                <div className="group-hover/chatoption:text-slate-800 group-hover/chatoption:dark:text-white text-sm font-bold transition-all duration-300 text-slate-600 dark:text-slate-300 ms-3">Change Theme</div>
                            </a>
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    initialEntered
                    className="accordion-item border-t border-gray-200 dark:border-gray-800 first:border-t-0 group"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className="text-xxs/4 pt-0.5 tracking-relaxed text-slate-400 uppercase font-bold">Settings</h6>
                            <Icon className={`absolute end-6 top-1/2 -translate-y-1/2 text-sm/5 text-center text-primary-500 h-5 w-5 transition-all duration-300 group-[.active]:rotate-180 ${isEnter ? 'rotate-180' : ''}`} name="chevron-down"></Icon>
                        </>
                    )}
                    contentProps={{
                        className: "transition-height duration-200 ease-in-out",
                    }}
                    buttonProps={{
                        className: "accordion-toggle relative block text-start px-6 py-5 lg:px-7 w-full"
                    }}
                    panelProps={{ className: "accordion-body px-6 pb-6 lg:px-7" }}
                >
                    <ul className="-m-2">
                        <li className="p-2 inline-flex">
                            <Switch type="checkbox" size="sm" id="notifications" labelClass="text-slate-600 dark:text-slate-400 peer-disabled:text-slate-400 peer-disabled:dark:text-slate-700 !text-sm/4 font-bold ps-3 cursor-pointer inline-block">Notifications</Switch>
                        </li>
                        <li className="p-2">
                            <a className="flex items-center group/chatoption" href="#link" onClick={(e)=> e.preventDefault()}>
                                <div className="relative flex-shrink-0 flex items-center justify-center text-xs text-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900 h-8 w-8 rounded-full font-medium">
                                    <Icon className="text-base/none" name="bell-off-fill"></Icon>
                                </div>
                                <div className="ms-3">
                                    <div className="group-hover/chatoption:text-slate-800 group-hover/chatoption:dark:text-white text-sm font-bold transition-all duration-300 text-slate-600 dark:text-slate-200 mb-0.5">Ignore Messages</div>
                                    <div className="text-xs text-slate-400">You won’t be notified when message you.</div>
                                </div>
                            </a>
                        </li>
                        <li className="p-2">
                            <a className="flex items-center group/chatoption" href="#link" onClick={(e)=> e.preventDefault()}>
                                <div className="relative flex-shrink-0 flex items-center justify-center text-xs text-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900 h-8 w-8 rounded-full font-medium">
                                    <Icon className="text-base/none" name="alert-fill"></Icon>
                                </div>
                                <div className="ms-3">
                                    <div className="group-hover/chatoption:text-slate-800 group-hover/chatoption:dark:text-white text-sm font-bold transition-all duration-300 text-slate-600 dark:text-slate-200 mb-0.5">Something Wrong</div>
                                    <div className="text-xs text-slate-400">Give feedback and report conversion.</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    initialEntered
                    className="accordion-item border-t border-gray-200 dark:border-gray-800 first:border-t-0 group"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className="text-xxs/4 pt-0.5 tracking-relaxed text-slate-400 uppercase font-bold">Shared Photos</h6>
                            <Icon className={`absolute end-6 top-1/2 -translate-y-1/2 text-sm/5 text-center text-primary-500 h-5 w-5 transition-all duration-300 group-[.active]:rotate-180 ${isEnter ? 'rotate-180' : ''}`} name="chevron-down"></Icon>
                        </>
                    )}
                    contentProps={{
                        className: "transition-height duration-200 ease-in-out",
                    }}
                    buttonProps={{
                        className: "accordion-toggle relative block text-start px-6 py-5 lg:px-7 w-full"
                    }}
                    panelProps={{ className: "accordion-body px-6 pb-6 lg:px-7" }}
                >
                    <ul className="flex flex-wrap -m-1">
                        <li className="inline-flex p-1 w-1/3"><a className="inline-block" href="#link" onClick={(e)=> e.preventDefault()}>
                            <img className="rounded" src="/images/slides/slide-a.jpg" alt="" />
                        </a></li>
                        <li className="inline-flex p-1 w-1/3"><a className="inline-block" href="#link" onClick={(e)=> e.preventDefault()}>
                            <img className="rounded" src="/images/slides/slide-b.jpg" alt="" />
                        </a></li>
                        <li className="inline-flex p-1 w-1/3"><a className="inline-block" href="#link" onClick={(e)=> e.preventDefault()}>
                            <img className="rounded" src="/images/slides/slide-c.jpg" alt="" />
                        </a></li>
                    </ul>
                </AccordionItem>
            </Accordion>
        </SimpleBar>
        <div onClick={()=> {
            setShow(false)
        }} className="profile-toggle absolute inset-0 bg-slate-950 bg-opacity-20 z-[99] opacity-0 invisible peer-[.visible]:opacity-100 peer-[.visible]:visible 2xl:!opacity-0 2xl:!invisible"></div>
    </>
  )
}

export default Profile