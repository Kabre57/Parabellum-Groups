import React,{useState} from 'react'
import { Button, Icon, Tooltip } from '../../../componenets'
import Tags from "@yaireo/tagify/dist/react.tagify"

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
                    <Button.Zoom size="rg">
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

const ReplyDropdown = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
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
                        <Icon className="text-xl/4.5 text-slate-400 dark:text-slate-300" name="curve-up-left" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[280px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="reply-fill"></Icon><span>Reply to Abu Bin Ishtiyak</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="forward-arrow-fill"></Icon><span>Forward</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"> </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="edit-fill"></Icon><span>Edit Subject</span>
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
    const [showCC, setShowCC] = useState(false);
    const [showBCC, setShowBCC] = useState(false);
  return (
    <div className="border-t border-gray-200 dark:border-gray-800 sm:rounded sm:border sm:mt-2 sm:mb-9 lg:mb-10 sm:ms-24 lg:ms-20 sm:me-9 lg:me-10">
        <div className="px-5 sm:px-6 border-b border-gray-200 dark:border-gray-800">
            <div className="relative py-4 flex-grow flex items-center sm:items-start max-sm:flex-wrap">
                <div className="-ms-2 me-3">
                    <ReplyDropdown />
                </div>
                <div className="text-sm font-bold sm:hidden">Reply</div>
                <div className="w-full ">
                    <div className="flex items-center sm:pe-14">
                        <label className="text-sm text-slate-400 pe-2 w-6">To</label>
                        <Tags className='!border-transparent' defaultValue="info@softnio.com" />
                    </div>
                    {showCC && <div className="flex items-center [&_.tags-input]:flex-grow" id="mail-cc">
                        <label className="text-sm text-slate-400 pe-2 w-6">Cc</label>
                        <Tags className='!border-transparent' />
                        <button onClick={()=> setShowCC(!showCC)} className="class-toggle [&>*]:pointer-events-none text-slate-400 hover:text-primary-600">
                            <Icon name="cross"></Icon>
                        </button>
                    </div>}
                    {showBCC && <div className="flex items-center [&_.tags-input]:flex-grow" id="mail-bcc">
                        <label className="text-sm text-slate-400 pe-2 w-6">Bcc</label>
                        <Tags className='!border-transparent' />
                        <button onClick={()=> setShowBCC(!showBCC)} className="class-toggle [&>*]:pointer-events-none text-slate-400 hover:text-primary-600">
                            <Icon name="cross"></Icon>
                        </button>
                    </div>}
                </div>
                <ul className="flex gap-x-3 absolute top-5 sm:top-6 end-0">
                    <li><button onClick={()=> setShowCC(!showCC)} className="class-toggle [&>*]:pointer-events-none text-slate-400 hover:text-primary-600">CC</button></li>
                    <li><button onClick={()=> setShowBCC(!showBCC)} className="class-toggle [&>*]:pointer-events-none text-slate-400 hover:text-primary-600">BCC</button></li>
                </ul>
            </div>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="py-2 px-5 sm:px-6">
                <textarea className="block w-full text-sm leading-4.5 p-0 pt-2 min-h-[78px] text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none" placeholder="Hello"></textarea>
            </div>
        </div>
        <div className="flex justify-between py-4 px-5 sm:px-6">
            <ul className="inline-flex items-center gap-1.5">
                <li className="me-2">
                    <Button size="rg" variant="primary" type="submit">Send</Button>
                </li>
                <li>
                    <TemplateDropdown />
                </li>
                <li>
                    <Tooltip placement="top" content="Upload Attachment">
                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide" href="#link" onClick={(e)=> e.preventDefault()}>
                            <Icon className="text-base/none" name="clip-v"></Icon>
                        </a>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip placement="top" content="Upload Images">
                        <a className="relative inline-flex items-center justify-center text-center align-middle text-xs font-bold leading-4.5 rounded-sm h-7.5 w-7.5 tracking-wide"  href="#link" onClick={(e)=> e.preventDefault()}>
                            <Icon className="text-base/none" name="img"></Icon>
                        </a>
                    </Tooltip>
                </li>
            </ul>
            <ul className="inline-flex items-center gap-1 -me-2">
                <li>
                    <ActionDropdown />
                </li>
                <li>
                    <Button.Zoom size="rg">
                        <Icon className="text-base/none text-slate-600" name="trash" />
                    </Button.Zoom>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ReplyForm