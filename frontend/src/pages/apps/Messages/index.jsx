import React, { useState, useEffect } from 'react'
import SimpleBar from 'simplebar-react'
import { Button, Icon, Avatar, Head } from '../../../componenets'
import Profile from './Profile'
import ReplyForm from './ReplyForm'
import ReplyMessages from './ReplyMessages'

import { messageData } from '../../../store/messages'
import { toInitials } from '../../../utilities'
import { Tab } from '@headlessui/react'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const MessagesPage = () => {

    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: [0, 4]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })


    const [showProfile, setShowProfile] = useState(true);
    const [showSearch, setShowSearch] = useState(false);
    const [showMessage, setShowMessage] = useState(1);

    const message = messageData.filter((message) => message.id === showMessage)[0];

    useEffect(() => {
        const handleAside = () => {
            if (window.innerWidth < 1536) {
                setShowProfile(false);
            }else{
                setShowProfile(true);
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
        <Head title="Messages - Support Ticket" />
        <div className="relative flex overflow-hidden rounded border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)] max-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)]">
            <div className="w-full lg:w-[320px] 2xl:w-[380px] lg:border-e lg:border-gray-200 dark:border-gray-800 overflow-hidden max-h-full relative flex flex-col flex-shrink-0 rounded-s bg-slate-50 dark:bg-gray-900 bg-opacity-70">
                <Tab.Group>
                    <div className="relative border-b border-gray-200 dark:border-gray-800 px-5 sm:px-8 lg:px-7 bg-slate-50 dark:bg-slate-900 z-[2] rounded-ss">
                        <Tab.List as="ul" className="flex -mx-3">
                            <li className="px-3 group/navitem">
                                <Tab className="inline-flex relative text-slate-400 hover:text-primary-600 ui-selected:text-primary-600 font-medium text-sm/6 py-4 transition-all duration-300 after:absolute after:h-0.5 after:bg-primary-600 after:start-0 after:end-0 after:-bottom-px after:opacity-0 after:transition-all after:duration-300 ui-selected:after:opacity-100 outline-none" href="#link" onClick={(e)=> e.preventDefault()}>Active</Tab>
                            </li>
                            <li className="px-3 group/navitem">
                                <Tab className="inline-flex relative text-slate-400 hover:text-primary-600 ui-selected:text-primary-600 font-medium text-sm/6 py-4 transition-all duration-300 after:absolute after:h-0.5 after:bg-primary-600 after:start-0 after:end-0 after:-bottom-px after:opacity-0 after:transition-all after:duration-300 ui-selected:after:opacity-100 outline-none" href="#link" onClick={(e)=> e.preventDefault()}>Closed</Tab>
                            </li>
                            <li className="px-3 group/navitem">
                                <Tab className="inline-flex relative text-slate-400 hover:text-primary-600 ui-selected:text-primary-600 font-medium text-sm/6 py-4 transition-all duration-300 after:absolute after:h-0.5 after:bg-primary-600 after:start-0 after:end-0 after:-bottom-px after:opacity-0 after:transition-all after:duration-300 ui-selected:after:opacity-100 outline-none" href="#link" onClick={(e)=> e.preventDefault()}>Stared</Tab>
                            </li>
                            <li className="px-3 group/navitem">
                                <Tab className="inline-flex relative text-slate-400 hover:text-primary-600 ui-selected:text-primary-600 font-medium text-sm/6 py-4 transition-all duration-300 after:absolute after:h-0.5 after:bg-primary-600 after:start-0 after:end-0 after:-bottom-px after:opacity-0 after:transition-all after:duration-300 ui-selected:after:opacity-100 outline-none" href="#link" onClick={(e)=> e.preventDefault()}>All</Tab>
                            </li>
                            <li className="px-3 group/navitem ms-auto">
                                <button
                                    onClick={()=> {
                                        setShowSearch(true)
                                    }}
                                    className="inline-flex relative text-slate-400 hover:text-primary-600 group-[.active]/navitem:text-primary-600 font-medium text-sm/6 py-4 transition-all duration-300 after:absolute after:h-0.5 after:bg-primary-600 after:start-0 after:end-0 after:-bottom-px after:opacity-0 after:transition-all after:duration-300 group-[.active]/navitem:after:opacity-100">
                                    <Icon className="text-lg leading-6" name="search" />
                                </button>
                            </li>
                        </Tab.List>
                        <div className={`absolute inset-0 -bottom-px border-b border-gray-200 dark:border-gray-800 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-[800] transition-all duration-300 bg-white dark:bg-gray-950 sm:rounded-t flex items-center ${showSearch ? 'active' : ''}`} id="searchForm">
                            <div className="px-4 sm:px-7 lg:px-6 flex items-center w-full">
                                <button 
                                    onClick={()=> {
                                        setShowSearch(false)
                                    }}
                                    className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 transition-all duration-300 -ms-px">
                                    <Icon className="text-lg/6 rtl:-scale-x-100" name="arrow-left" />
                                </button>
                                <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search by user or message" autoComplete="off" />
                                <button type="submit" className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 hover:text-primary-600 transition-all duration-300 -me-px">
                                    <Icon className="text-lg/6" name="search" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="h-full max-h-full overflow-auto">
                        {messageData.map((item,index) => {
                            return(
                                <div onClick={()=> {setShowMessage(item.id); }} key={index} className={`group/messageitem conversation-item flex py-5 px-5 sm:px-8 lg:px-7 border-b last:border-b-0 border-gray-200 dark:border-gray-800 cursor-pointer [&.current]:bg-white [&.current]:dark:bg-gray-950 [&.current]:cursor-default ${item.unread ? 'is-unread' : ''} ${showMessage === item.id ? 'current' : ''}`} >
                                    {item.image ? <Avatar size="rg" rounded img={item.image}/> : <Avatar size="rg" variant={item.theme} rounded text={toInitials(item.name)}/>}
                                    <div className="flex-grow ms-3 max-w-(calc(100%-theme(spacing.15)))">
                                        <div className="flex justify-between items-center">
                                            <div className="inline-flex items-center text-xs/5 text-slate-400  group-[.is-unread]/messageitem:font-medium  group-[.is-unread]/messageitem:text-slate-700 group-[.is-unread]/messageitem:dark:text-white">
                                                <span>{item.name}</span>
                                                {item.closed && <div className="h-1.5 w-1.5 inline-block rounded-full bg-pink-400 ms-1"></div>}
                                            </div>
                                            <div className="inline-flex items-center text-xs text-slate-400">
                                                {item.attactchment &&<div className="inline-flex"><em className="text-lg/none ni ni-clip-h"></em></div> }
                                                <div className="ms-3">{item.date}</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <div className="flex-grow-0 pe-2 max-w-[calc(100%-theme(spacing.7))]">
                                                <h6 className="font-heading text-sm font-bold leading-tighter text-slate-700 dark:text-white mb-1 line-clamp-1">{item.title}</h6>
                                                <p className="text-[13px] text-slate-400 line-clamp-2 group-[.is-unread]/messageitem:font-medium group-[.is-unread]/messageitem:text-slate-600">{item.excerpt}</p>
                                            </div>
                                            <div className="inline-flex flex-col text-center py-0.5">
                                                {item.unread && 
                                                    <div className="unread">
                                                        <span className="relative inline-flex rounded-sm px-1 border border-primary-600 bg-primary-600 text-white text-xxs text-center font-medium leading-3.5 tracking-snug whitespace-nowrap align-middle">{item.unread}</span>
                                                    </div>
                                                }
                                                <div className={`inline-flex relative group/asterisk cursor-pointer mt-auto ${item.marked ? 'active' : ''}`}>
                                                    <em className="text-lg/none text-slate-400 ni ni-star"></em>
                                                    <em className="text-lg/none text-yellow-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill"></em>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </SimpleBar>
                </Tab.Group>
            </div>
            {message ? <div className={`conversation-body group/messagebody flex flex-col overflow-hidden flex-grow z-[5] transition-all duration-300 ease-in-out absolute inset-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto [&.conversation-shown]:opacity-100 [&.conversation-shown]:pointer-events-auto lg:static bg-white dark:bg-gray-950 [&.profile-shown]:2xl:pe-[280px] ${showMessage ? 'conversation-shown' : ''} ${showProfile ? 'profile-shown' : ''}`}>
                <div className="relative border-b border-gray-200 dark:border-gray-800 py-3 px-5 sm:py-4 sm:px-9 lg:py-8">
                    <h4 className="font-heading font-bold leading-tighter tracking-tight text-slate-700 dark:text-white text-2xl hidden lg:block mb-2 sm:mb-4 line-clamp-1">{message.title}</h4>
                    <div className="flex items-center justify-between">
                        <div className="hidden lg:block">
                            <ul className="flex flex-wrap gap-6">
                                <li>
                                    <span className="inline-flex items-center text-slate-400 gap-2">
                                        <Icon className="text-sm/none text-primary-600" name="flag-fill"></Icon> 
                                        <span>Technical Problem</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden -ms-2">
                            <Button.Zoom onClick={()=> {setShowMessage(null)}}>
                                <Icon className="text-xl rtl:-scale-x-100" name="arrow-left" />
                            </Button.Zoom>
                        </div>
                        <ul className="flex gap-2">
                            <li>
                                <Button size="sm" variant="light-pale-outline">
                                    <Icon className="text-base leading-4.5" name="check" />
                                    <span className="ms-3">Mark as Closed</span>
                                </Button>
                            </li>
                            <li className="lg:hidden">
                                <Button onClick={()=> { setShowProfile(!showProfile) }} size="sm" variant="light" className="bg-white" icon>
                                    <Icon className="text-base" name="info-i" />
                                </Button>
                            </li>
                            <li>
                                <Menu as="div" className="inline-flex relative">
                                    {({ open }) => (
                                        <>
                                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                                <Button size="sm" variant="light" className="bg-white" icon>
                                                    <Icon className="text-lg" name="more-h" />
                                                </Button>
                                            </Menu.Button>
                                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                                <ul className="p-1">
                                                    <li className="rounded">
                                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                            <Icon className="text-start text-lg leading-none w-7 opacity-80" name="user-add" />
                                                            <span>Assign To Member</span>
                                                        </Menu.Item>
                                                    </li>
                                                    <li className="rounded">
                                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                            <Icon className="text-start text-lg leading-none w-7 opacity-80" name="archive" />
                                                            <span>Move to Archive</span>
                                                        </Menu.Item>
                                                    </li>
                                                    <li className="rounded">
                                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                                            <Icon className="text-start text-lg leading-none w-7 opacity-80" name="done" />
                                                            <span>Mark as Close</span>
                                                        </Menu.Item>
                                                    </li>
                                                </ul>
                                            </Menu.Items>
                                        </>
                                    )}
                                </Menu>
                            </li>
                        </ul>
                    </div>
                    <button 
                        onClick={()=> {
                            setShowProfile(!showProfile)
                        }}
                        className="hidden lg:flex me-13 group-[.profile-shown]/messagebody:me-0 group-[.profile-shown]/messagebody:-rotate-180 h-9 w-9 items-center justify-center border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-full z-[2] 2xl:z-[200] text-slate-400 absolute -bottom-4.5 -end-4.5 transition-all duration-300 ease-in-out">
                        <Icon className="text-lg/none rtl:-scale-x-100" name="arrow-left" />
                    </button>
                </div>
                <SimpleBar className="h-full max-h-full overflow-auto">
                    <ReplyMessages data={message} />
                    <ReplyForm />
                </SimpleBar>
                <Profile show={showProfile} setShow={setShowProfile} data={message} />
            </div>: <div className='flex flex-col justify-center items-center flex-grow bg-white dark:bg-gray-950'>
                <div className='h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-1000 text-slate-700 dark:text-white flex items-center justify-center mb-3'><Icon className="text-2xl" name="chat"/></div>
                <div className='text-slate-600 dark:text-slate-200 text-lg'>Select a Message</div>
            </div>}
        </div>
    </>
  )
}

export default MessagesPage