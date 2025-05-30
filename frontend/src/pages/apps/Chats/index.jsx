import React, {useState,useEffect,useLayoutEffect} from 'react'
import Profile from './Profile'
import { Avatar, Button, Head, Icon } from '../../../componenets';
import { chatData, chatFav } from '../../../store/chats';
import SimpleBar from 'simplebar-react';
import { toInitials } from '../../../utilities';

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const ProfileDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-end" : "bottom-start",
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
                    <button className="dropdown-toggle [&>*]:pointer-events-none peer flex items-center">
                        <Avatar size="rg" rounded img="/images/avatar/b-sm.jpg" />
                        <div className="text-xl ms-4 text-slate-700 dark:text-white">Chats</div>
                        <Icon className="text-lg/none ms-4" name="chevron-down" />
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Contacts</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Channels</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Help</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}
const SettingsDropdown = ({className}) => {
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
                    <Button icon pill size="rg" variant="light">
                        <Icon className="text-xl/none" name="setting-alt-fill" />
                    </Button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Settings</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Message Requests</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Archives Chats</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Unread Chats</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Group Chats</span>
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
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="rg">
                        <Icon className="text-lg text-slate-600 dark:text-slate-300" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Mute</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Hide</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Delete</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Mark as Unread</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Ignore Messages</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Block Messages</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ItemOptionsDropdown = ({className}) => {
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
                        <Icon className="text-xl/none text-primary-600" name="setting-fill"></Icon>
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="archive"></Icon>
                                <span>Make as Archive</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="cross-c"></Icon>
                                <span>Remove Conversion</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="setting"></Icon>
                                <span>More Options</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const MessageOptionsDropdown = ({className, placement, rtlPlacement, offset, rtlOffset}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? rtlPlacement : placement,
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? rtlOffset : offset}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="sm">
                        <Icon className="text-base/none" name="more-h"></Icon>
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[120px]">
                    <ul className="py-2">
                        <li className="sm:hidden">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="reply-fill"></Icon><span>Reply</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="pen-alt-fill"></Icon> <span>Edit</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg/none w-7 opacity-80" name="trash-fill"></Icon> <span>Remove</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ChatsPage = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showChat, setShowChat] = useState(null);
  const [showUploadOption, setShowUploadOption] = useState(false);

  const chat = chatData.filter((chat) => chat.id === showChat)[0];

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

  useLayoutEffect(() => {
      const handlePreview = () => {
          if (window.innerWidth > 1023) {
            setShowChat(1)
          }
      }

      handlePreview();
  }, []);

  return (
    <>
        <Head title="Chats" />
        <div className="relative flex overflow-hidden rounded border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)] max-h-[calc(100vh-theme(spacing.16)-theme(spacing.16)-theme(spacing.17)-1px)]">
            <div className="w-full lg:w-[320px] 2xl:w-[380px] lg:border-e lg:border-gray-200 dark:border-gray-800 overflow-hidden max-h-full relative flex flex-col flex-shrink-0 rounded-s">
                <div className="flex items-center justify-between pt-4.5 pb-4 px-5 md:px-7">
                    <ProfileDropdown />
                    <ul className="flex items-center gap-3">
                        <li>
                            <SettingsDropdown />
                        </li>
                        <li>
                            <Button icon pill size="rg" variant="light">
                                <Icon className="text-xl/none" name="edit-alt-fill" />
                            </Button>
                        </li>
                    </ul>
                </div>
                <SimpleBar className="h-full max-h-full overflow-auto">
                    <div className="px-5 md:px-7 pt-1 pb-7">
                        <div className="relative">
                            <div className="absolute h-9 w-9 top-0 start-0 flex items-center justify-center">
                                <Icon className="text-slate-400 text-base/none" name="search" />
                            </div>
                            <input type="text" className="block w-full text-xs/4.5 ps-10 pe-4 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-900 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed placeholder:text-slate-400 rounded-full transition-all" id="default-03" placeholder="Search by name" />
                        </div>
                    </div>
                    <div className="px-5 pb-7 lg:px-7">
                        <h6 className="font-bold text-xxs/tight tracking-widest text-slate-400 uppercase mb-3">Favorites</h6>
                        <ul className="flex overflow-x-auto gap-2.5 md:flex-wrap">
                            <li>
                                <a href="#link"  onClick={(e)=> e.preventDefault()} className="relative inline-flex items-center justify-center text-center align-middle text-base font-bold leading-4.5 rounded-full h-11 w-11 tracking-wide border border-gray-200 dark:border-gray-800 text-slate-600 dark:text-white bg-white dark:bg-gray-950 hover:bg-gray-700 hover:dark:bg-gray-700 hover:text-white hover:dark:text-white active:bg-gray-800 active:dark:bg-gray-800 active:text-white active:active:text-white transition-all duration-300">
                                    <Icon className="text-2xl/4.5" name="plus" />
                                </a>
                            </li>
                            {chatFav.map((item,index) =>{
                            return(    
                                <li key={index}>
                                    <a href="#link" onClick={(e)=> e.preventDefault()}>
                                    {item.image ? <Avatar size="rg" rounded img={item.image}/> : <Avatar size="rg" variant={item.theme} rounded text={toInitials(item.name)}/>}
                                    </a>
                                </li>
                            )
                            })}
                        </ul>
                    </div>
                    <div className="px-2 lg:px-4">
                        <h6 className="font-bold text-xxs/tight tracking-widest text-slate-400 uppercase ms-3 mb-3">Messages</h6>
                        <ul>
                            {chatData.map((item,index)=> {
                            return(
                                <li key={index} className={`group/chatitem conversation-item relative rounded transition-all hover:bg-gray-100 hover:dark:bg-gray-900  [&.current]:bg-gray-50 [&.current]:dark:bg-gray-1000 hover:[&.current]:bg-gray-100 hover:[&.current]:dark:bg-gray-900 ${item.lastStatus === "unread" ? 'is-unread' : ''} ${showChat === item.id ? 'current' : ''}`}>
                                    <a className="flex items-center w-full p-3 cursor-pointer" onClick={()=> setShowChat(item.id) } href="#link">
                                        {item.user?.length > 1 ? 
                                            <Avatar.GroupS2 size="rg">
                                                {item.user.slice(0,2).map((uItem,uIndex)=> {
                                                    return(
                                                        <React.Fragment key={uIndex}>
                                                            {uItem.image ? <Avatar  rounded img={uItem.image}/> : <Avatar  variant={uItem.theme} rounded text={toInitials(uItem.name)}/>}
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Avatar.GroupS2> 
                                            : 
                                            (item.image ? <Avatar status={item.online !== 'invisible' && item.online} size="rg" rounded img={item.image}/> : <Avatar status={item.online !== 'invisible' && item.online} size="rg" variant={item.theme} rounded text={toInitials(item.name)}/>)
                                        }
                                        <div className="ms-4 w-[calc(100%-theme(spacing.15))]">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-medium text-slate-600 dark:text-white mb-1 group-[.is-unread]/chatitem:font-bold group-[.is-unread]/chatitem:text-slate-700 group-[.is-unread]/chatitem:dark:text-white">{item.name}</div>
                                                <span className="text-xs text-slate-400">{item.date}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="line-clamp-1 text-xs group-[.is-unread]/chatitem:font-medium group-[.is-unread]/chatitem:text-slate-600 text-slate-400 w-[calc(100%-theme(spacing.10))]"><p>{item.messages[item.messages.length - 1].chat[item.messages[item.messages.length - 1].chat.length-1]}</p></div>
                                                {item.lastStatus === "delivered" && <div className="flex text-slate-400">
                                                    <Icon className="text-sm/none" name="check-circle-fill"></Icon>
                                                </div>}
                                                {item.lastStatus === "sent" && <div className="flex text-slate-400">
                                                    <Icon className="text-sm/none" name="check-circle"></Icon>
                                                </div>}
                                                {item.lastStatus === "unread" && <div className="flex text-primary-600">
                                                    <Icon className="text-sm/none" name="bullet-fill"></Icon>
                                                </div>}
                                            </div>
                                        </div>
                                    </a>
                                    <div className="absolute inset-y-0 end-3 opacity-0 group-hover/chatitem:opacity-100 pointer-events-none group-hover/chatitem:pointer-events-auto transition-all z-[2] flex items-center justify-end w-12 bg-gray-100  dark:bg-gray-900">
                                        <ItemActionDropdown />
                                    </div>
                                </li>
                            )
                            })}
                        </ul>
                    </div>
                </SimpleBar>
            </div>
            {chat ? <div className={`conversation-body group/messagebody flex flex-col overflow-hidden flex-grow z-[5] transition-all duration-300 ease-in-out absolute inset-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto [&.conversation-shown]:opacity-100 [&.conversation-shown]:pointer-events-auto lg:static bg-white dark:bg-gray-950 [&.profile-shown]:2xl:pe-[365px] ${showProfile ? 'profile-shown' : ''} ${showChat !== null ? 'conversation-shown' : ''}`}>
                <div className="relative flex items-center justify-between py-4 px-7 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
                    <ul className="flex items-center -m-0.5 sm:-m-1.5">
                        <li className="p-0.5 sm:p-1.5 lg:hidden -ms-3">
                            <Button.Zoom size="rg" onClick={()=> setShowChat(null)}>
                                <Icon className="text-xl/none rtl:-scale-x-100" name="arrow-left"></Icon>
                            </Button.Zoom>
                        </li>
                        <li className="p-0.5 sm:p-1.5">
                            <div className="flex items-center">
                                {chat.user?.length > 1 ? 
                                    <Avatar.GroupS2 size="rg">
                                        {chat.user.slice(0,2).map((uItem,uIndex)=> {
                                            return(
                                                <React.Fragment key={uIndex}>
                                                    {uItem.image ? <Avatar  rounded img={uItem.image}/> : <Avatar  variant={uItem.theme} rounded text={toInitials(uItem.name)}/>}
                                                </React.Fragment>
                                            )
                                        })}
                                    </Avatar.GroupS2> 
                                        : 
                                        (chat.image ? <Avatar size="rg" rounded img={chat.image}/> : <Avatar size="rg" variant={chat.theme} rounded text={toInitials(chat.name)}/>)
                                }
                                <div className="ms-4">
                                    <div className="font-bold text-sm text-slate-700 dark:text-white mb-1 line-clamp-1">{chat.name}</div>
                                    <div className="text-xs text-slate-400"><span className="hidden sm:inline-block me-0.5">Active </span> 35m ago</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="flex items-center -m-0.5 sm:-m-1.5">
                        <li className="p-0.5 sm:p-1.5">
                            <Button.Zoom size="rg">
                                <Icon className="text-xl/none text-primary-600" name="call-fill"></Icon>
                            </Button.Zoom>
                        </li>
                        <li className="p-0.5 sm:p-1.5">
                            <Button.Zoom size="rg">
                                <Icon className="text-xl/none text-primary-600" name="video-fill"></Icon>
                            </Button.Zoom>
                        </li>
                        <li className="p-0.5 sm:p-1.5 hidden sm:block">
                            <ItemOptionsDropdown />
                        </li>
                        <li className="p-0.5 sm:p-1.5 -me-3">
                            <Button.Zoom onClick={()=> setShowProfile(!showProfile)} size="rg" className={showProfile ? 'active' : ''}>
                                <Icon className="text-xl/none text-primary-600" name="alert-circle-fill"></Icon>
                            </Button.Zoom>
                        </li>
                    </ul>
                </div>
                <SimpleBar className="p-5 lg:px-7 bg-gray-100 dark:bg-gray-1000 bg-opacity-70 h-full max-h-full overflow-auto">
                    {chat.messages.map((item,index)=> {
                        return(
                            <React.Fragment key={index}>
                                {item.separator ? 
                                    <div className="overflow-hidden py-4 text-center"> <div className="relative inline-block px-3 text-slate-400 text-xs/snug before:absolute before:h-px before:bg-gray-300 before:dark:bg-gray-900 before:w-screen before:top-1/2 before:end-full after:absolute after:h-px after:bg-gray-300 after:dark:bg-gray-900 after:w-screen after:top-1/2 after:start-full"><span>{item.separator.date}</span></div> </div> 
                                    :
                                    <div className={`group/chat flex items-end -m-1 pt-2 first:pt-0 ${item.me ? 'is-me' : 'is-you'}`}>
                                        {!item.me && <div className="p-1 mb-6">
                                            {chat.image ? <Avatar size="rg" rounded img={chat.image}/> : <Avatar size="rg" variant={chat.theme} rounded text={toInitials(chat.name)}/>}
                                        </div>}
                                        <div className={`p-1 ${item.me ? 'w-full' : ''}`}>
                                            <div className="chat-bubbles">
                                                {item.chat.map((cItem, cIndex)=>{
                                                    return(
                                                        <div key={cIndex} className={`group/chatbubble flex items-center py-0.5 ${item.me ? 'flex-row-reverse' : ''}`}>
                                                            <div className={` px-4 py-2 ${item.me ? 'bg-primary-600 text-white rounded-lg group-last/chatbubble:ltr:rounded-br-none  group-last/chatbubble:rtl:rounded-bl-none  group-[&:not(:last-child)]/chatbubble:ltr:rounded-br group-[&:not(:first-child)]/chatbubble:ltr:rounded-tr group-[&:not(:last-child)]/chatbubble:rtl:rounded-bl group-[&:not(:first-child)]/chatbubble:rtl:rounded-tl' : 'bg-white dark:bg-gray-900 rounded-lg group-last/chatbubble:ltr:rounded-bl-none  group-last/chatbubble:rtl:rounded-br-none  group-[&:not(:last-child)]/chatbubble:ltr:rounded-bl group-[&:not(:first-child)]/chatbubble:ltr:rounded-tl group-[&:not(:last-child)]/chatbubble:rtl:rounded-br group-[&:not(:first-child)]/chatbubble:rtl:rounded-tr'}`}>
                                                                {cItem}
                                                            </div>
                                                            <ul className={`flex items-center mx-3 flex-shrink-0 transition-all duration-300 opacity-0 group-hover/chatbubble:opacity-100 ${item.me ? 'flex-row-reverse' : ''}`}>
                                                                <li className="hidden md:block">
                                                                    <Button.Zoom size="sm">
                                                                        <Icon className="text-base/none" name="reply-fill"></Icon>
                                                                    </Button.Zoom>
                                                                </li>
                                                                <li>
                                                                    <MessageOptionsDropdown 
                                                                        placement={item.me ? "bottom-start" : "bottom-end"}
                                                                        rtlPlacement={item.me ? "bottom-end" : "bottom-start"}
                                                                        offset={item.me ? [14, -8] : [-14, -8]}
                                                                        rtlOffset={item.me ? [-14, -8] : [14, -8]}
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <ul className={`flex items-center pt-1 gap-3 ${item.me ? 'justify-end' : ''}`}>
                                                <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.date}</li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </React.Fragment>
                        )
                    })}
                </SimpleBar>
                <div className="flex items-center bg-white dark:bg-gray-950 py-4 px-5">
                    <div className="relative z-[2] flex items-center -ms-1.5">
                        <Button.Zoom onClick={()=> setShowUploadOption(!showUploadOption)} size="sm"  className={showUploadOption ? 'active' : ''}>
                            <Icon className="text-2xl/none text-primary-600" name="plus-circle-fill"></Icon>
                        </Button.Zoom>
                        <div className={`absolute start-full p-2 bg-white dark:bg-gray-950 hidden [&.active]:block ${showUploadOption ? 'active' : ''}`}>
                            <ul className="flex items-center">
                                <li>
                                    <a className="inline-flex items-center justify-center h-9 w-9 text-primary-600 hover:text-primary-700" href="#link"  onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-xl/none" name="img-fill"></Icon>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-flex items-center justify-center h-9 w-9 text-primary-600 hover:text-primary-700" href="#link"  onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-xl/none" name="camera-fill"></Icon>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-flex items-center justify-center h-9 w-9 text-primary-600 hover:text-primary-700" href="#link"  onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-xl/none" name="mic"></Icon>
                                    </a>
                                </li>
                                <li>
                                    <a className="inline-flex items-center justify-center h-9 w-9 text-primary-600 hover:text-primary-700" href="#link"  onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-xl/none" name="grid-sq"></Icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-grow px-2">
                        <div className="form-control-wrap">
                            <textarea className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-2 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none" rows="1" id="default-textarea" placeholder="Type your message..."></textarea>
                        </div>
                    </div>
                    <ul className="flex items-center gap-1.5">
                        <li>
                            <Button.Zoom  size="sm">
                                <Icon className="text-xl/none text-primary-600" name="happyf-fill"></Icon>
                            </Button.Zoom>
                        </li>
                        <li>
                            <Button size="rg" icon pill variant="primary"><Icon className="text-xl/4.5" name="send-alt"></Icon></Button>
                        </li>
                    </ul>
                </div>
                <Profile show={showProfile} setShow={setShowProfile} data={chat} />
            </div> : <div className='flex flex-col justify-center items-center flex-grow bg-gray-100 dark:bg-gray-1000'>
                <div className='h-16 w-16 rounded-full bg-white dark:bg-gray-950 text-slate-700 dark:text-white flex items-center justify-center mb-3'><Icon className="text-2xl" name="chat"/></div>
                <div className='text-slate-600 dark:text-slate-200 text-lg'>Select a chat</div>
            </div>}
        </div>
    </>
  )
}

export default ChatsPage