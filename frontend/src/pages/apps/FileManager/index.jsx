import React,{useState, useEffect, Fragment} from 'react'
import Aside from './Aside';
import Header from './Header';
import QuickAccess from './QuickAccess';
import { Button, Icon, CheckBox, Avatar, Head } from '../../../componenets';
import { fileManagerIcons } from '../../../store/icons'
import { toInitials } from '../../../utilities';
import { Tab } from '@headlessui/react';
import UploadModal from './UploadModal';
import FileDetailsModal from './FileDetailsModal';
import FileCopyModal from './FileCopyModal';
import FileMoveModal from './FileMoveModal';
import FileShareModal from './FileShareModal';

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const ItemActionDropdown = ({className, setShowDetailsModal, setShowShareModal, setShowCopyModal, setShowMoveModal}) => {
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
                    <Button.Zoom size="sm">
                        <Icon className="text-base/4.5" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[150px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowDetailsModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="eye" />
                                    <span>Details</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowShareModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="share" />
                                    <span>Share</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowCopyModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="copy" />
                                    <span>Copy</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowMoveModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="forward-arrow" />
                                    <span>Move</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="download" />
                                <span>Download</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="pen" />
                                <span>Rename</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="trash" />
                                <span>Delete</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const BulkActionDropdown = ({className, setShowShareModal, setShowCopyModal, setShowMoveModal}) => {
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
                    <Button.Zoom size="sm">
                        <Icon className="text-base/4.5" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[150px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowShareModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="share" />
                                    <span>Share</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowCopyModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="copy" />
                                    <span>Copy</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as={Fragment}>
                                <button onClick={() => setShowMoveModal(true)} className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300 outline-none">
                                    <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="forward-arrow" />
                                    <span>Move</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="relative px-5 py-2 flex items-center w-full rounded-[inherit] text-xs leading-5 text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <Icon className="text-lg/none w-8 opacity-80 text-primary-600 text-start" name="download" />
                                <span>Download</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const AddDropdown = ({className, setShowUploadModal}) => {
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
                        <Icon className="text-xl/none text-slate-400 dark:text-slate-300" name="plus" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as={Fragment}>
                                <button  onClick={() => setShowUploadModal(true)} className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                    <Icon className="text-start text-lg leading-none w-7 opacity-80" name="upload-cloud"></Icon><span>Upload File</span>
                                </button>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="file-plus"></Icon><span>Create File</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80 " name="folder-plus"></Icon><span>Create Folder</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const FilterDropdown = ({className, icon, textClassName}) => {
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
                    <button className="inline-flex items-center">
                        <span className={`me-1 ${textClassName}`}>Last Opened</span>
                        <Icon className="text-base/4.5" name={icon}></Icon>
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[150px]">
                    <ul className="py-2">
                        <li className="group active">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Last Opened</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Name</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Size</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const OrderedDropdown = ({className, icon, textClassName}) => {
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
                    <button className="inline-flex items-center">
                        <span className="me-1 font-medium text-sm">Name</span>
                        <em className="text-base/4.5 ni ni-caret-down-fill"></em>
                    </button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[150px]">
                    <ul className="py-2">
                        <li className="group">
                            <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Ordered By</h6>
                        </li>
                        <li className="group active">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Ascending</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <span>Descending</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const FileManagerPage = () => {
    const [pageAside, setPageAside] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showMoveModal, setShowMoveModal] = useState(false);
    const [showCopyModal, setShowCopyModal] = useState(false);
    const files = [
        {
            id:1,
            icon: fileManagerIcons.folderSecureAlt,
            name : "UI Design",
            date: "Today",
            time: "08:29 AM",
            size: "4.5 MB",
            stared: false,
            type: 'folder',
        },
        {
            id:2,
            icon: fileManagerIcons.folderAlt,
            name : "Proposal",
            date: "Today",
            time: "08:29 AM",
            size: "4.5 MB",
            stared: true,
            type: 'folder',
        },
        {
            id:3,
            icon: fileManagerIcons.folderSharedAlt,
            name : "Projects",
            date: "Yesterday",
            time: "08:29 AM",
            size: "35 MB",
            stared: false,
            type: 'folder',
            owner:{name:"Iliash Hossain"},
            users:[
                {name:"Iliash Hossain", theme:"purple"},
                {name:"Abu Bin Ishityak", theme:"pink"},
                {name:"Ricardo Salazar", image:"/images/avatar/b-sm.jpg"},
            ]
        },
        {
            id:4,
            icon: fileManagerIcons.folderAlt,
            name : "2022 Projects",
            date: "03 May",
            time: "08:29 AM",
            size: "1.2 GB",
            stared: false,
            type: 'folder',
        },
        {
            icon: fileManagerIcons.fileSheetAlt,
            name : "Update Data",
            ext: "xlsx",
            date: "Yesterday",
            time: "08:29 AM",
            size: "235 KB",
            stared: false,
            type: 'file',
            owner:{name:"Abu Bin Ishityak"},
            users:[
                {name:"Ricardo Salazar", image:"/images/avatar/b-sm.jpg"},
                {name:"Iliash Hossain", theme:"purple"},
                {name:"Abu Bin Ishityak", theme:"pink"},
                {name: "Mildred Delga", image: "/images/avatar/c-sm.jpg",},
                {name: "Larry Hughes", theme: "primary"},
            ]
        },
        {
            id:5,
            icon: fileManagerIcons.fileZipAlt,
            name : "DashParabellumGroups v.1.2",
            ext: "zip",
            date: "03 May",
            time: "08:29 AM",
            size: "235 KB",
            stared: false,
            type: 'file',
        },
        {
            id:6,
            icon: fileManagerIcons.fileZipAlt,
            name : "covstats v1.0",
            ext: "zip",
            date: "01 May",
            time: "08:29 AM",
            size: "235 KB",
            stared: false,
            type: 'file',
        },
        {
            id:7,
            icon: fileManagerIcons.fileDocAlt,
            name : "Quotation",
            ext: "doc",
            date: "06 Apr",
            time: "08:29 AM",
            size: "23 MB",
            stared: false,
            type: 'file',
        },
        {
            id:8,
            icon: fileManagerIcons.fileDocAlt,
            name : "Work-to-do",
            ext: "txt",
            date: "02 Apr",
            time: "08:29 AM",
            size: "23 MB",
            stared: false,
            type: 'file',
        },
        {
            id:9,
            icon: fileManagerIcons.fileMediaAlt,
            name : "DashParabellumGroups-Crypto-v1",
            ext: "psd",
            date: "02 Apr",
            time: "08:29 AM",
            size: "23 MB",
            stared: false,
            type: 'file',
        },
    ]

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
        <Head title="File Manager" />
        <div className="border rounded-md bg-white dark:bg-gray-950 bg-opacity-40 border-gray-300 dark:border-gray-900 h-full">
            <div className="relative flex">
                <Aside  show={pageAside} setShow={setPageAside} />
                <div className="flex-grow">
                    <Header showUploadModal={showUploadModal} setShowUploadModal={setShowUploadModal} />
                    <div className="h-full max-h-full overflow-auto py-4.5 px-5 sm:py-5 lg:p-7">
                        <div className="pb-4">
                            <div className="relative flex items-center justify-between">
                                <h3 className="font-heading font-bold text-2xl/tighter tracking-tight text-slate-700 dark:text-white">Files</h3>
                                <ul className="flex items-center gap-1.5 lg:hidden -me-1.5">
                                    <li>
                                        <Button.Zoom size="rg" onClick={()=> {
                                            setShowSearch(!showSearch);
                                        }}>
                                            <Icon className="text-xl/none text-slate-400 dark:text-slate-300" name="search"></Icon>
                                        </Button.Zoom>
                                    </li>
                                    <li>
                                        <AddDropdown setShowUploadModal={setShowUploadModal} />
                                    </li>
                                    <li>
                                        <Button.Zoom size="rg" onClick={()=> {
                                            setPageAside(!pageAside);
                                        }}>
                                            <Icon className="text-xl/none text-slate-400 dark:text-slate-300" name="menu-alt-r"></Icon>
                                        </Button.Zoom>
                                    </li>
                                </ul>
                                <div className={`absolute inset-x-0 -inset-y-0.5 opacity-0 bg-white dark:bg-gray-950 transition-all duration-300 rounded-md pointer-events-none px-3 lg:hidden [&.active]:opacity-100 [&.active]:pointer-events-auto [&.active]:z-10 ${showSearch ? 'active' : ''}`} id="search">
                                    <div className="relative w-full flex items-center">
                                        <button  onClick={(e)=> {
                                            setShowSearch(false);
                                        }} className="inline-flex items-center justify-center h-9 w-9 text-slate-600 hover:text-red-600">
                                            <Icon className="text-lg/none rtl:-scale-x-100" name="arrow-left" />
                                        </button>
                                        <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-2 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search files, folders" />
                                        <button className="inline-flex items-center justify-center h-9 w-9 text-slate-600 hover:text-primary-600">
                                            <Icon className="text-lg/none" name="search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10 last:mb-0">
                            <QuickAccess />
                        </div>
                        <div className="mb-10 last:mb-0">
                            <Tab.Group>
                                <div className="pb-3 relative flex justify-between items-center">
                                    <h6 className="font-heading font-bold text-base/tighter -tracking-snug text-slate-700 dark:text-white">Browse Files</h6>
                                    <Tab.List as="ul" className="tab-nav flex items-center gap-4">
                                        <li className="tab-item">
                                            <Tab className="tab-toggle flex items-center justify-center h-6 w-6 text-slate-400 ui-selected:text-primary-600 hover:text-slate-700 dark:text-white transition-all duration-300 outline-none">
                                                <em className="text-2xl/none ni ni-view-grid3-wd"></em>
                                            </Tab>
                                        </li>
                                        <li className="tab-item">
                                            <Tab className="tab-toggle flex items-center justify-center h-6 w-6 text-slate-400 ui-selected:text-primary-600 hover:text-slate-700 dark:text-white transition-all duration-300 outline-none">
                                                <em className="text-2xl/none ni ni-view-group-wd"></em>
                                            </Tab>
                                        </li>
                                        <li className="tab-item">
                                            <Tab className="tab-toggle flex items-center justify-center h-6 w-6 text-slate-400 ui-selected:text-primary-600 hover:text-slate-700 dark:text-white transition-all duration-300 outline-none">
                                                <em className="text-2xl/none ni ni-view-row-wd"></em>
                                            </Tab>
                                        </li>
                                    </Tab.List>
                                </div>
                                <Tab.Panels className="tab-content">
                                    <Tab.Panel className="tab-panel">
                                        <div className="flex items-center justify-between gap-3">
                                            <FilterDropdown icon="caret-down-fill" />
                                            <BulkActionDropdown className="dropdown" setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                        </div>
                                        <div className="grid grid-flow-dense grid-cols-12 gap-4">
                                            {files.map((item,index)=> {
                                                return(
                                                    <div key={index} className="group/fileitem relative border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded col-span-12 xs:col-span-6 sm:col-span-4 xl:col-span-3 2xl:col-span-2">
                                                        <a href="#link" onClick={(e)=> e.preventDefault()} className="flex flex-col pt-6 pb-4">
                                                            <div className="h-18 [&>svg]:h-full [&>svg]:mx-auto">
                                                                {item.icon}
                                                            </div>
                                                            <div className="relative text-sm/snug text-center font-medium pt-4 px-5.5 mx-auto inline-flex justify-center">
                                                                <span className="line-clamp-1">{item.name}</span> {item.ext && '.' + item.ext}
                                                                <div className={`inline-flex absolute end-0 group/asterisk cursor-pointer opacity-0 group-hover/fileitem:opacity-100 ${item.stared ? 'active' : ''}`}>
                                                                    <em className="text-lg/none text-primary-600 ni ni-star"></em>
                                                                    <em className="text-lg/none text-primary-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill"></em>
                                                                </div>
                                                            </div>
                                                            <ul className="flex items-center justify-center pt-1 gap-3">
                                                                <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.date}</li>
                                                                <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.size}</li>
                                                            </ul>
                                                        </a>
                                                        <div className="absolute top-2 end-2 transition-all duration-300 group-hover/fileitem:opacity-100">
                                                            <ItemActionDropdown setShowDetailsModal={setShowDetailsModal} setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel className="tab-panel">
                                        <div className="flex items-center justify-between gap-3">
                                            <FilterDropdown icon="caret-down-fill" />
                                            <BulkActionDropdown className="dropdown" setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                        </div>
                                        <div className="mb-10 last:mb-0">
                                            <h6 className="border-t border-gray-200 dark:border-gray-800 font-heading font-bold text-xs tracking-wider uppercase py-4">Folder</h6>
                                            <div className="grid grid-flow-dense grid-cols-12 gap-4">
                                                {files.map((item,index)=> {
                                                    return(
                                                        <React.Fragment key={index}>
                                                            {item.type === "folder" && <div className="group/fileitem relative border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded col-span-12 sm:col-span-6 2xl:col-span-4">
                                                                <a href="#link" onClick={(e)=> e.preventDefault()} className="flex flex-col p-4">
                                                                    <div className="flex items-center">
                                                                        <div className="h-8 [&>svg]:h-full [&>svg]:mx-auto">
                                                                            {item.icon}
                                                                        </div>
                                                                        <div className="relative text-sm/snug font-medium ps-3 pe-5.5 inline-flex">
                                                                            <span className="line-clamp-1">{item.name}</span>
                                                                            <div className={`inline-flex absolute end-0 group/asterisk cursor-pointer opacity-0 group-hover/fileitem:opacity-100 ${item.stared ? 'active' : ''}`}>
                                                                                <em className="text-lg/none text-primary-600 ni ni-star"></em>
                                                                                <em className="text-lg/none text-primary-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill"></em>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="flex items-center pt-1 gap-3">
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.date}</li>
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.size}</li>
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.users ? item.users.length + ' Members' : "Only Me"}</li>
                                                                    </ul>
                                                                </a>
                                                                <div className="absolute top-2 end-2 transition-all duration-300 group-hover/fileitem:opacity-100">
                                                                    <ItemActionDropdown setShowDetailsModal={setShowDetailsModal} setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                                                </div>
                                                            </div>}
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="mb-10 last:mb-0">
                                            <h6 className="border-t border-gray-200 dark:border-gray-800 font-heading font-bold text-xs tracking-wider uppercase py-4">Files</h6>
                                            <div className="grid grid-flow-dense grid-cols-12 gap-4">
                                                {files.map((item,index)=> {
                                                    return(
                                                        <React.Fragment key={index}>
                                                            {item.type === "file" && <div className="group/fileitem relative border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded col-span-12 sm:col-span-6 2xl:col-span-4">
                                                                <a href="#link" onClick={(e)=> e.preventDefault()} className="flex flex-col p-4">
                                                                    <div className="flex items-center">
                                                                        <div className="h-8 [&>svg]:h-full [&>svg]:mx-auto">
                                                                            {item.icon}
                                                                        </div>
                                                                        <div className="relative text-sm/snug font-medium ps-3 pe-5.5 inline-flex">
                                                                            <span className="line-clamp-1">{item.name}</span> {item.ext && '.' + item.ext}
                                                                            <div className={`inline-flex absolute end-0 group/asterisk cursor-pointer opacity-0 group-hover/fileitem:opacity-100 ${item.stared ? 'active' : ''}`}>
                                                                                <em className="text-lg/none text-primary-600 ni ni-star"></em>
                                                                                <em className="text-lg/none text-primary-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill"></em>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="flex items-center pt-1 gap-3">
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.date}</li>
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.size}</li>
                                                                        <li className="text-xs/5 relative text-slate-400 first:before:hidden before:absolute before:rounded-full before:-start-1.5 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2  before:h-1 before:w-1 before:bg-slate-400 before:opacity-80">{item.users ? item.users.length + ' Members' : "Only Me"}</li>
                                                                    </ul>
                                                                </a>
                                                                <div className="absolute top-2 end-2 transition-all duration-300 group-hover/fileitem:opacity-100">
                                                                    <ItemActionDropdown setShowDetailsModal={setShowDetailsModal} setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                                                </div>
                                                            </div>}
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel className="tab-panel">
                                        <div className="w-full">
                                            <div className="flex items-center">
                                                <div className="flex-grow ">
                                                    <OrderedDropdown />
                                                </div>
                                                <div className="w-3/12 hidden sm:block">
                                                    <FilterDropdown icon="arrow-long-down" textClassName="text-sm font-medium" />
                                                </div>
                                                <div className="w-3/12 hidden md:block"><div className="font-medium text-sm">Members</div></div>
                                                <div className="flex-shrink w-[60px] pe-4 text-end">
                                                    <BulkActionDropdown className="dropdown me-px" setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                                </div>
                                            </div>
                                            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded">
                                                {files.map((item,index)=> {
                                                    return(
                                                        <div key={index} className="group/filelist flex items-center w-full border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                                                            <div className="flex-grow py-4 first:ps-5">
                                                                <div className="flex items-center">
                                                                    <div className="me-3">
                                                                        <div className="flex">
                                                                            <CheckBox size="sm" id="mid-01" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="h-8 [&>svg]:h-full [&>svg]:mx-auto">
                                                                        {item.icon}
                                                                    </div>
                                                                    <div className="relative text-sm/snug font-medium ps-3 pe-5.5 inline-flex">
                                                                        <span className="line-clamp-1">{item.name}{item.ext && '.'+item.ext}</span>
                                                                        <div className={`inline-flex absolute end-0 group/asterisk cursor-pointer opacity-0 group-hover/filelist:opacity-100 ${item.stared ? 'active' : ''}`}>
                                                                            <em className="text-lg/none text-primary-600 ni ni-star"></em>
                                                                            <em className="text-lg/none text-primary-600 absolute top-0 opacity-0 group-hover/asterisk:opacity-100 group-[.active]/asterisk:opacity-100 ni ni-star-fill"></em>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-3/12 py-4 first:ps-5 hidden sm:block">
                                                                <div className="text-sm text-slate-600 dark:text-slate-400">{item.date},&nbsp; {item.time}</div>
                                                                {item.owner && <><div className="text-xs text-slate-400 mt-0.5">by {item.owner.name}</div></>}
                                                            </div>
                                                            <div className="w-3/12 py-4 first:ps-5 hidden md:block">
                                                                {(item.users?.length > 1) ?
                                                                    <Avatar.Group size="mb">
                                                                        {item.users.slice(0,3).map((uItem,uIndex)=> {
                                                                            return(
                                                                                <React.Fragment key={uIndex}>
                                                                                    {uItem.image ? <Avatar size="mb" rounded img={uItem.image}/> : <Avatar size="mb" variant={uItem.theme} rounded text={toInitials(uItem.name)}/>}
                                                                                </React.Fragment>
                                                                            )
                                                                        })}
                                                                        {item.users?.length > 3 && <Avatar variant="slate" size="mb" rounded text={`+${item.users?.length - 3}`}></Avatar>}
                                                                    </Avatar.Group>
                                                                :
                                                                <div className="text-sm text-slate-600 dark:text-slate-400">Only Me</div> 
                                                                }
                                                            </div>
                                                            <div className="flex-shrink w-[60px] py-4 first:ps-5 pe-4 text-end">
                                                                <ItemActionDropdown setShowDetailsModal={setShowDetailsModal} setShowShareModal={setShowShareModal} setShowCopyModal={setShowCopyModal} setShowMoveModal={setShowMoveModal} />
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <UploadModal show={showUploadModal} setShow={setShowUploadModal} />
        <FileDetailsModal show={showDetailsModal} setShow={setShowDetailsModal} />
        <FileCopyModal show={showCopyModal} setShow={setShowCopyModal} />
        <FileMoveModal show={showMoveModal} setShow={setShowMoveModal} />
        <FileShareModal show={showShareModal} setShow={setShowShareModal} />

    </>
  )
}

export default FileManagerPage