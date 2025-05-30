import React, {useState} from 'react'
import { Tab } from '@headlessui/react'
import { Avatar, Button, Icon, Tooltip } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const ActionDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "top-start" : "top-end",
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
                    <Button.Zoom size="sm">
                        <Icon className="text-xl" name="more-v" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Another Option</span>
                            </Menu.Item>
                        </li>
                        <li className="active">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>More Option</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const TemplateDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "top-end" : "top-start",
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
                    <Tooltip placement="top" content="Template">
                        <button className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide">
                            <Icon className="text-base/none" name="hash" />
                        </button>
                    </Tooltip>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <h6 className="relative px-5 py-2.5 flex items-center text-xs leading-5 text-slate-400">Quick Insert</h6>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" >
                                <span>Thank you message</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" >
                                <span>Your issues solved</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" >
                                <span>Thank you message</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" >
                                <Icon className="text-start text-lg leading-none w-7" name="file-plus" />
                                <span>Save as Template</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-200 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" >
                                <Icon className="text-start text-lg leading-none w-7" name="notes-alt" />
                                <span>Manage Template</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ReplyForm = () => {
  return (
    <div className="border-t sm:border border-gray-200 dark:border-gray-800 sm:rounded sm:mt-2 sm:mx-9 lg:mx-10 sm:mb-9 lg:mb-10">
        <Tab.Group>
            <div className="flex items-center justify-between px-5 sm:px-6 border-b border-gray-200 dark:border-gray-800">
                <Tab.List as="ul" className="tab-nav flex flex-wrap font-heading text-sm">
                    <li className="tab-item pe-5 last:pe-0">
                        <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 outline-none">Reply</Tab>
                    </li>
                    <li className="tab-item pe-5 last:pe-0">
                        <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 outline-none" >Private Note</Tab>
                    </li>
                </Tab.List>
                <div className="flex items-center">
                    <div className="text-slate-400 me-3">Reply as:</div>
                    <Avatar variant="purple" size="xs" rounded text="IH" />
                </div>
            </div>
            <Tab.Panels className="tab-content">
                <Tab.Panel className="tab-panel" id="tabItem1">
                    <div className="nk-reply-form-editor">
                        <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-2 px-5 sm:px-6">
                            <textarea className="block w-full text-sm leading-4.5 px-0 pt-3 min-h-[78px] text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none" placeholder="Hello"></textarea>
                        </div>
                        <div className="flex justify-between p-5 sm:py-4 sm:px-6">
                            <ul className="inline-flex items-center gap-1.5">
                                <li className="me-2">
                                    <Button size="rg" variant="primary" type="submit">Reply</Button>
                                </li>
                                <li>
                                    <TemplateDropdown />
                                </li>
                                <li>
                                    <Tooltip placement="top" content="Upload Attachment">
                                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide" href="#link" onClick={(e)=> e.preventDefault()}>
                                            <Icon className="text-base/none" name="clip-v" />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip placement="top" content="Insert Emoji">
                                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide" href="#link" onClick={(e)=> e.preventDefault()}>
                                            <Icon className="text-base/none" name="happy" />
                                        </a>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip placement="top" content="Upload Images">
                                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide" href="#link" onClick={(e)=> e.preventDefault()}>
                                            <Icon className="text-base/none" name="img" />
                                        </a>
                                    </Tooltip>
                                </li>
                            </ul>
                            <ActionDropdown />
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel className="tab-panel" id="tabItem2">
                    <div className="nk-reply-form-editor">
                        <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-2 px-5 sm:px-6">
                            <textarea className="block w-full text-sm leading-4.5 px-0 pt-3 min-h-[78px] text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none" placeholder="Type your private note, that only visible to internal team."></textarea>
                        </div>
                        <div className="flex justify-between p-5 sm:py-4 sm:px-6">
                            <ul className="inline-flex items-center gap-1.5">
                                <li className="me-2">
                                    <Button size="rg" variant="primary" type="submit">Add Note</Button>
                                </li>
                                <li>
                                    <Tooltip placement="top" content="Upload Attachment">
                                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide" href="#link" onClick={(e)=> e.preventDefault()}>
                                            <Icon className="text-base/none" name="clip-v" />
                                        </a>
                                    </Tooltip>
                                </li>
                            </ul>
                            <ActionDropdown />
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
  )
}

export default ReplyForm