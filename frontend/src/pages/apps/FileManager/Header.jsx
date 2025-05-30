import React, {Fragment, useState} from 'react'
import { Button, Icon } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const Header = ({setShowUploadModal}) => {
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
    <div className="hidden lg:flex items-center justify-between flex-wrap py-3 px-5 border-b border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-tr-md">
        <div className="flex items-center flex-grow">
            <Icon className="text-base/none text-slate-600" name="search"></Icon>
            <input type="text" className="block w-full box-border text-sm leading-4.5 px-2 py-2 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search files, folders" />
        </div>
        <ul className="flex items-center gap-4">
            <li>
                <Menu as="div" className="inline-flex relative w-full">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex w-full ${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button size="rg" variant='light'>
                                    <Icon className="text-xl/4.5" name="plus" /><span className="ms-3">Create</span>
                                </Button>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[160px]">
                                <ul className="py-2">
                                    <li>
                                        <Menu.Item as={Fragment}>
                                            <button onClick={() => setShowUploadModal(true)} className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" >
                                                <em className="text-lg/none text-start w-7 opacity-80 ni ni-upload-cloud"></em><span>Upload File</span>
                                            </button>
                                        </Menu.Item>
                                    </li>
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                            <em className="text-lg/none text-start w-7 opacity-80 ni ni-file-plus"></em><span>Create File</span>
                                        </Menu.Item>
                                    </li>
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                            <em className="text-lg/none text-start w-7 opacity-80 ni ni-folder-plus"></em><span>Create Folder</span>
                                        </Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </li>
            <li>
                <Button onClick={() => setShowUploadModal(true)} size="rg" variant="primary"><Icon className="text-xl/4.5" name="upload-cloud"></Icon> <span className="ms-3">Upload</span></Button>
            </li>
        </ul>
    </div>
  )
}

export default Header