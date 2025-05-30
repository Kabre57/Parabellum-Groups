import React,{useState, useEffect, Fragment} from 'react'
import SimpleBar from 'simplebar-react'
import { Button, CheckBox, Icon, Tooltip, Avatar, Badge, Head } from '../../../componenets'
import { toInitials } from '../../../utilities'
import { inboxMessages } from "../../../store/inbox"
import Aside from './Aside'
import ReplyForm from './ReplyForm'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const BulkActionDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-end" : "bottom-start",
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [-14, -8] : [14, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="rg">
                        <Icon className="text-xl/4.5 text-slate-600" name="more-v" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[140px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="eye" />
                                <span>Move To</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="trash" />
                                <span>Delete</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="archived" />
                                <span>Archive</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ItemActionDropdown = ({className}) => {
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
    <Menu as="div" className={`dropdown relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as={Fragment} className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="sm" className="z-[1]">
                        <Icon className="text-base/4.5" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="eye" />
                                <span>View</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="trash" />
                                <span>Delete</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="archived" />
                                <span>Archive</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const PreviewActionDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-end" : "bottom-start",
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [-14, -8] : [14, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="rg">
                        <Icon className="text-xl/4.5 text-slate-600" name="more-v" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Mark as unread</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Mark as not important</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Archive this message</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ReplyActionDropdown = ({className}) => {
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
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="rg">
                        <Icon className="text-xl/4.5 text-slate-400 dark:text-slate-300" name="more-v" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="reply-fill" />
                                <span>Reply to</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="forward-arrow-fill" />
                                <span>Forward</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="trash-fill" />
                                <span>Delete this</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="report-fill" />
                                <span>Report Spam</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ReplyMetaDropdown = ({className}) => {
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
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <button className="dropdown-toggle [&>*]:pointer-events-none peer inline-flex items-center relative z-[1]">
                        <span>to Mildred</span>
                        <Icon className="text-sm leading-none ms-1" name="chevron-down" />
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[240px] sm:min-w-[280px]">
                    <ul className="p-3">
                        <li className="flex leading-4.5 py-0.75">
                            <span className="w-17 sm:w-19 text-xs/4.5 text-end me-3 text-slate-400">from:</span> 
                            <span className="text-sm/4.5"><a className="text-slate-700 dark:text-white hover:text-primary-600 transition-all" href="#link" onClick={(e)=> e.preventDefault()}>info@softnio.com</a></span>
                        </li>
                        <li className="flex leading-4.5 py-0.75">
                            <span className="w-17 sm:w-19 text-xs/4.5 text-end me-3 text-slate-400">to:</span> 
                            <span className="text-sm/4.5"><a className="text-slate-700 dark:text-white hover:text-primary-600 transition-all" href="#link" onClick={(e)=> e.preventDefault()}>team@softnio.com</a></span>
                        </li>
                        <li className="flex leading-4.5 py-0.75">
                            <span className="w-17 sm:w-19 text-xs/4.5 text-end me-3 text-slate-400">bcc:</span> 
                            <span className="text-sm/4.5"><a className="text-slate-700 dark:text-white hover:text-primary-600 transition-all" href="#link" onClick={(e)=> e.preventDefault()}>team@softnio.com</a></span>
                        </li>
                        <li className="flex leading-4.5 py-0.75">
                            <span className="w-17 sm:w-19 text-xs/4.5 text-end me-3 text-slate-400">mailed-by:</span> 
                            <span className="text-sm/4.5"><a className="text-slate-700 dark:text-white hover:text-primary-600 transition-all" href="#link" onClick={(e)=> e.preventDefault()}>softnio.com</a></span>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const InboxPage = () => {
    const [pageAside, setPageAside] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMessage, setShowMessage] = useState(null);

    const message = inboxMessages.filter((message) => message.id === showMessage)[0];

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
        <Head title="Inbox / Mails" />
        <div className="relative flex overflow-hidden rounded border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)] max-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)]">
            <Aside show={pageAside} setShow={setPageAside} />
            <div className="flex-grow relative flex flex-col overflow-hidden flex-shrink bg-white dark:bg-gray-950">
                <div className="relative flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-3 px-5 sm:px-9 lg:px-7 min-h-[61px]">
                    <ul className="flex items-center gap-0.75">
                        <li className="w-8 text-start">
                            <div className="flex">
                                <CheckBox size="sm" id="mid-all" />
                            </div>
                        </li>
                        <li className="hidden sm:block">
                            <Button.Zoom size="rg">
                                <Icon className="text-xl text-slate-600" name="undo" />
                            </Button.Zoom>
                        </li>
                        <li className="hidden sm:block">
                            <Button.Zoom size="rg">
                                <Icon className="text-xl text-slate-600" name="archived" />
                            </Button.Zoom>
                        </li>
                        <li>
                            <Button.Zoom size="rg">
                                <Icon className="text-xl text-slate-600" name="trash" />
                            </Button.Zoom>
                        </li>
                        <li>
                            <BulkActionDropdown />
                        </li>
                    </ul>
                    <ul className="flex items-center gap-0.75">
                        <li>
                            <Tooltip placement="top" content="Prev Page">
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600 rtl:-scale-x-100" name="arrow-left" />
                                </Button.Zoom>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip placement="top" content="Next Page">
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600 rtl:-scale-x-100" name="arrow-right" />
                                </Button.Zoom>
                            </Tooltip>
                        </li>
                        <li className="lg:-me-1.5">
                            <Button.Zoom onClick={()=> setShowSearch(!showSearch)} size="rg">
                                <Icon className="text-xl text-slate-600" name="search" />
                            </Button.Zoom>
                        </li>
                        <li className="lg:hidden -me-1.5">
                            <Button.Zoom onClick={()=> setPageAside(!pageAside)} size="rg">
                                <Icon className="text-xl text-slate-600" name="menu-alt-r" />
                            </Button.Zoom>
                        </li>
                    </ul>
                    <div className={`absolute inset-0 -bottom-px border-b border-gray-200 dark:border-gray-800 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-[800] transition-all duration-300 bg-white dark:bg-gray-950 sm:rounded-t flex items-center ${showSearch ? 'active' : ''}`} id="searchForm">
                        <div className="px-4 sm:px-7 lg:px-6 flex items-center w-full">
                            <button onClick={()=> setShowSearch(false)} className="class-toggle relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 transition-all duration-300 -ms-px">
                                <em className="text-xl leading-6 rtl:-scale-x-100 ni ni-arrow-left"></em>
                            </button>
                            <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search by user or message" autoComplete="off" />
                            <button type="submit" className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 hover:text-primary-600 transition-all duration-300">
                                <em className="text-xl leading-6 ni ni-search"></em>
                            </button>
                        </div>
                    </div>
                </div>
                <SimpleBar className="flex flex-col max-h-full h-full overflow-auto" >
                    {inboxMessages.map((item,index) => {
                        return(
                            <div key={index} className={`group/ibxitem relative flex max-md:flex-wrap items-center bg-white dark:bg-gray-950 py-4 px-5 sm:px-9 lg:px-7 cursor-pointer transition-all hover:bg-gray-50 hover:dark:bg-gray-1000 border-b last:border-b-0 border-gray-200 dark:border-gray-800 [&.is-unread]:bg-gray-50 [&.is-unread]:dark:bg-gray-1000 [&.is-unread]:bg-opacity-60 [&.is-unread]:hover:bg-opacity-100 ${item.unread ? 'is-unread' : ''}`}>
                                <button  onClick={()=> setShowMessage(item.id)} className="class-toggle absolute inset-x-0 inset-y-0 z-[1]"></button>
                                <div className="pe-1 md:pe-2 flex-shrink-0 relative z-[2] inline-flex w-7">
                                    <div className="flex">
                                        <CheckBox size="sm" id={item.id} />
                                    </div>
                                </div>
                                <div className="px-1 md:px-2 flex-shrink-0 relative z-[2] max-md:absolute max-md:top-13 max-md:start-7.5 max-sm:start-3.5">
                                    <div className={`inline-flex relative group/asterisk cursor-pointer ${item.favourite ? 'active' :""}` }>
                                        <Icon className="text-lg/none text-slate-400" name="star" />
                                        <Icon className="text-lg/none text-yellow-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill" name="star-fill" />
                                    </div>
                                </div>
                                <div className="px-1 md:px-2 flex-shrink-0 max-md:flex-grow max-md:pe-20 md:w-[180px] xl:w-[200px]">
                                    <div className="flex items-center">
                                        {item.user.image ? <Avatar size="rg" rounded img={item.user.image}/> : <Avatar size="rg" variant={item.user.theme} rounded text={toInitials(item.user.name)}/>}
                                        <div className="ms-4">
                                            <span className="group-[.is-unread]/ibxitem:font-medium block text-sm font-normal leading-6 text-slate-700 dark:text-white">{item.user.name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-1 md:px-2 flex-shrink flex-grow max-md:mt-1.5 max-md:ps-8 max-md:pe-12 w-full max-w-full overflow-hidden">
                                    <div className="flex items-center">
                                        {item.badge && <div className="me-3 max-md:hidden"><Badge size="rg" variant={item.badge.theme}>{item.badge.text}</Badge></div>}
                                        <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                                            <span className="inline text-slate-400">
                                                <span className="text-slate-600 dark:text-slate-400 max-md:block group-[.is-unread]/ibxitem:font-medium me-0.5">{item.message.subject}</span> {item.message.excerpt}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-1 md:px-2 flex-shrink-0 w-9 text-center max-md:hidden">
                                    {item.attachment && <a className="text-slate-500"> <Icon className="text-lg/none" name="clip-h" /></a>}
                                </div>
                                <div className="px-1 md:px-2 flex-shrink-0 text-end w-20 xl:me-8 max-md:absolute max-md:top-5 max-md:end-7.5 max-sm:end-3.5">
                                    <div className="text-sm text-slate-400">{item.time}</div>
                                </div>
                                <div className="ps-1 md:ps-2 flex-shrink-0 relative flex-grow-0 w-8 ms-auto max-md:absolute max-md:bottom-5 max-md:end-6.5 max-sm:end-3">
                                    <ul className="relative flex items-center justify-end md:-me-2">
                                        <li className="opacity-0 transition-all duration-300 bg-gray-50 dark:bg-gray-1000 px-0.5 group-hover/ibxitem:opacity-100">
                                            <Tooltip placement="top" content="Archive">
                                                <Button.Zoom size="sm">
                                                    <Icon className="text-base/4.5" name="archived" />
                                                </Button.Zoom>
                                            </Tooltip>
                                        </li>
                                        <li className="opacity-0 transition-all duration-300 bg-gray-50 dark:bg-gray-1000 px-0.5 group-hover/ibxitem:opacity-100">
                                            <Tooltip placement="top" content="Delete">
                                                <Button.Zoom size="sm">
                                                    <Icon className="text-base/4.5" name="trash" />
                                                </Button.Zoom>
                                            </Tooltip>
                                        </li>
                                        <li>
                                            <ItemActionDropdown />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </SimpleBar>
                <div id="ibxDetails" className={`absolute inset-0 bg-white dark:bg-gray-950 z-[2] opacity-0 pointer-events-none invisible [&.active]:opacity-100 [&.active]:pointer-events-auto [&.active]:visible overflow-hidden flex flex-col ${showMessage !== null ? 'active' : '' }`}>
                    <div className="relative flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-3 px-5 sm:px-9 lg:px-7 min-h-[61px]">
                        <ul className="flex items-center gap-0.75">
                            <li className="-ms-1.5">
                                <Button.Zoom size="rg" onClick={()=> setShowMessage(null)}>
                                    <Icon className="text-xl text-slate-600 rtl:-scale-x-100" name="arrow-left" />
                                </Button.Zoom>
                            </li>
                            <li>
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600" name="archived" />
                                </Button.Zoom>
                            </li>
                            <li className="hidden sm:block">
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600" name="report" />
                                </Button.Zoom>
                            </li>
                            <li>
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600" name="trash" />
                                </Button.Zoom>
                            </li>
                            <li>
                                <Button.Zoom size="rg">
                                    <Icon className="text-xl text-slate-600" name="label" />
                                </Button.Zoom>
                            </li>
                            <li>
                                <PreviewActionDropdown />
                            </li>
                        </ul>
                        <ul className="flex items-center gap-0.75">
                            <li>
                                <Tooltip placement="top" content="Prev Page">
                                    <Button.Zoom size="rg">
                                        <Icon className="text-xl text-slate-600" name="chevron-left" />
                                    </Button.Zoom>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip placement="top" content="Next Page">
                                    <Button.Zoom size="rg">
                                        <Icon className="text-xl text-slate-600 rtl:-scale-x-100" name="chevron-right" />
                                    </Button.Zoom>
                                </Tooltip>
                            </li>
                            <li className="-me-1.5">
                                <Button.Zoom onClick={()=> setShowSearch(!showSearch)} size="rg">
                                    <Icon className="text-xl text-slate-600" name="search" />
                                </Button.Zoom>
                            </li>
                        </ul>
                        <div className={`absolute inset-0 -bottom-px border-b border-gray-200 dark:border-gray-800 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-100 transition-all duration-300 bg-white dark:bg-gray-950 sm:rounded-t flex items-center ${showSearch ? 'active' : ''}`} id="searchFormMessage">
                            <div className="px-4 sm:px-7 lg:px-6 flex items-center w-full">
                                <button  onClick={()=> setShowSearch(false)} className="class-toggle relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 transition-all duration-300 -ms-px">
                                    <em className="text-xl leading-6 rtl:-scale-x-100 ni ni-arrow-left"></em>
                                </button>
                                <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search by user or message" autoComplete="off" />
                                <button type="submit" className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 hover:text-primary-600 transition-all duration-300">
                                    <em className="text-xl leading-6 ni ni-search"></em>
                                </button>
                            </div>
                        </div>
                    </div>
                    <SimpleBar className="h-full max-h-full overflow-auto" >
                        <div className="flex items-start justify-between pt-6 sm:pt-7 pb-8 px-5 sm:px-9 lg:px-7">
                            <div>
                                <h4 className="font-heading font-bold text-xl lg:text-2xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-3">{message?.message.subject}</h4>
                                <ul className="flex flex-wrap gap-2">
                                    <li className="inline-flex">
                                        <Button.Group>
                                            <Button variant="primary-pale" size="xs">Business</Button>
                                            <Button variant="primary-pale" size="xs" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                        </Button.Group>
                                    </li>
                                    <li className="inline-flex">
                                        <Button.Group>
                                            <Button variant="red-pale" size="xs">Management</Button>
                                            <Button variant="red-pale" size="xs" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                        </Button.Group>
                                    </li>
                                    <li className="inline-flex">
                                        <Button.Group>
                                            <Button variant="cyan-pale" size="xs">Team</Button>
                                            <Button variant="cyan-pale" size="xs" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                        </Button.Group>
                                    </li>
                                </ul>
                            </div>
                            <ul className="flex items-center gap-1.5">
                                <li className="hidden sm:block">
                                    <Button.Zoom size="rg">
                                        <Icon className="text-xl text-slate-600" name="printer" />
                                    </Button.Zoom>
                                </li>
                                <li>
                                    <Button.Zoom size="rg" className="group/asterisk-button">
                                        <div className={`inline-flex relative cursor-pointer group/asterisk ${message?.favourite ? 'active' :""}`}>
                                            <Icon className="text-lg/none text-slate-400" name="star" />
                                            <Icon className="text-lg/none text-yellow-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100  group-hover/asterisk-button:opacity-100 group-[.active]/asterisk-button:opacity-100" name="star-fill" />
                                        </div>
                                    </Button.Zoom>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {message?.message.reply.map((item,index)=> {
                                return(
                                    <div key={index} className="relative px-5 sm:px-9 lg:px-7 pb-8 sm:pb-11 after:absolute after:bg-gray-200 after:dark:bg-gray-900 after:h-px after:bottom-4 sm:after:bottom-5.5 after:inset-x-5 sm:after:inset-x-9 last:after:hidden">
                                        <div className="peer group/replyheader cursor-pointer flex items-center justify-between mb-2 gap-x-4" id="reply-01">
                                            <div className="flex items-center flex-grow group-[.is-collapsed]/replyheader:overflow-hidden">
                                                {item.user.image ? <Avatar size="rg" rounded img={item.user.image}/> : <Avatar size="rg" variant={item.user.theme} rounded text={toInitials(item.user.name)}/>}
                                                <div className="ms-4 max-w-[calc(100%-theme(spacing.14))]">
                                                    <div className="text-sm/6 font-bold text-slate-700 dark:text-white">{item.user.name} <span className="text-xxs/5 ms-1.5 font-normal text-slate-400 sm:hidden">14 Jan, 2020</span></div>
                                                    <ReplyMetaDropdown className="dropdown group-[.is-collapsed]/replyheader:hidden" />
                                                    <div className="text-xs sm:text-sm leading-6 hidden group-[.is-collapsed]/replyheader:block text-slate-600 whitespace-nowrap overflow-hidden text-ellipsis max-sm:mt-0.5">I am facing problem as i can not select currency on buy order page. Can you guys let me know what i am doing doing wrong? Please check attached files.</div>
                                                </div>
                                            </div>
                                            <ul className="flex items-center flex-shrink-0 cursor-default gap-1.5 -me-2">
                                                {item.attachment && <li className="max-sm:hidden me-1.5"><Icon className="text-xl/none" name="clip-h" /></li>}
                                                <li className="max-sm:hidden"><span className="me-4 text-slate-600">{item.date}</span></li>
                                                <li className="group-[.is-collapsed]/replyheader:hidden relative">
                                                    <Tooltip placement="top" content="Reply">
                                                        <Button.Zoom size="rg">
                                                            <Icon className="text-xl text-slate-600" name="curve-up-left" />
                                                        </Button.Zoom>
                                                    </Tooltip>
                                                </li>
                                                <li className="group-[.is-collapsed]/replyheader:hidden dropdown relative">
                                                    <ReplyActionDropdown />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ms-12 sm:ms-14 mt-5 mb-3 peer-[.is-collapsed]:hidden">
                                            <div className="entry">
                                                {item.message.map((item,index)=> {
                                                    return(
                                                        <p key={index}>{item}</p>
                                                    )
                                                })}
                                            </div>
                                            {item.attachment && <div className="rounded border border-gray-200 dark:border-gray-800 mt-7">
                                                <ul className="flex flex-wrap px-5 py-4 gap-x-8 gap-y-2">
                                                    {item.attachment.map((aItem,aIndex) => {
                                                        return(
                                                            <li key={aIndex} className="w-[180px]">
                                                                <a className="flex items-center w-full text-slate-600 dark:text-slate-300" href="#link" onClick={(e)=> e.preventDefault()}><em className="text-2xl/none text-primary-600 me-4 ni ni-img"></em><span className="line-clamp-1">{aItem.name}</span></a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-5 py-3 flex flex-wrap justify-between rounded-b">
                                                    <span className="font-medium text-slate-700 dark:text-white text-sm">{item.attachment.length} files attached</span>
                                                    <a className="inline-flex items-center text-sm/none font-medium whitespace-nowrap gap-3.5 group/link" href="#link" onClick={(e)=> e.preventDefault()}>
                                                        <em className="text-lg/none text-primary-500 group-hover/link:text-primary-600 transition-all duration-300 ni ni-download"></em>
                                                        <span className="text-slate-400 group-hover/link:text-primary-600 transition-all duration-300">Download All</span>
                                                    </a>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <ReplyForm />
                    </SimpleBar>
                </div>
            </div>
        </div>
    </>
  )
}

export default InboxPage