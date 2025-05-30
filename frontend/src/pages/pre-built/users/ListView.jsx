import React, {Fragment, useState} from 'react'
import {Avatar, Button, Icon, PageHead, Select, CheckBox, Form, Input, Pagination, Tooltip, Head} from "../../../componenets";
import { toInitials } from '../../../utilities';
import { userData } from '../../../store/users';

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const ActionDropdown = ({className}) => {
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
                    <Button.Zoom>
                        <Icon className="text-xl" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="focus" />
                                <span>Quick View</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="eye" />
                                <span>View Details</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="repeat" />
                                <span>Transaction</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="activity-round" />
                                <span>Activitis</span>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="shield-star" />
                                <span>Reset Pass</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="shield-off" />
                                <span>Reset 2FA</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="na" />
                                <span>Suspend User</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}
const FilterDropdown = ({className}) => {
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
                    <Button.Zoom>
                        <Icon className="text-xl/4.5" name="filter-alt" />
                        <span className="absolute top-0.5 end-0.5 h-2 w-2 inline-block rounded-full bg-primary-600"></span>
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[260px] xs:min-w-[360px]">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                        <span className="font-medium text-slate-700 dark:text-white">Filter Users</span>
                    </div>
                    <div className="p-5">
                        <div className="grid grid-flow-dense grid-cols-12 gap-x-6 gap-y-4">
                            <div className="col-span-6">
                                <CheckBox size="sm" id="haveBalance">Have Balance</CheckBox>
                            </div>
                            <div className="col-span-6">
                                <CheckBox size="sm" id="KYCVerified">KYC Verified</CheckBox>
                            </div>
                            <div className="col-span-6">
                                <Form.Group>
                                    <Form.Label className="mb-3" htmlFor="userRole">Role </Form.Label>
                                    <Input.Wrap>
                                        <Select.Choice id="userRole">
                                            <Select.Option value="AnyRole">Any Role</Select.Option>
                                            <Select.Option value="Investor">Investor</Select.Option>
                                            <Select.Option value="Seller">Seller</Select.Option>
                                            <Select.Option value="Buyer">Buyer</Select.Option>
                                        </Select.Choice>
                                    </Input.Wrap>
                                </Form.Group>
                            </div>
                            <div className="col-span-6">
                                <Form.Group>
                                    <Form.Label className="mb-3" htmlFor="userStatus">Status</Form.Label>
                                    <Input.Wrap>
                                        <Select.Choice id="userStatus">
                                            <Select.Option value="AnyRole">Any Status</Select.Option>
                                            <Select.Option value="Active">Active</Select.Option>
                                            <Select.Option value="Pending">Pending</Select.Option>
                                            <Select.Option value="Suspend">Suspend</Select.Option>
                                            <Select.Option value="Deleted">Deleted</Select.Option>
                                        </Select.Choice>
                                    </Input.Wrap>
                                </Form.Group>
                            </div>
                            <div className="col-span-12">
                                <Menu.Item as={Fragment}>
                                    <Button size="rg" variant="secondary">Filter</Button>
                                </Menu.Item>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 dark:border-gray-800">
                        <a className="text-sm text-primary-500 hover:text-primary-700 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>Reset Filter</a>
                        <a className="text-sm text-primary-500 hover:text-primary-700 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>Save Filter</a>
                    </div>
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
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [14, -8] : [-14, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom>
                        <Icon className="text-xl/4.5" name="setting" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[120px]">
                    <ul className="py-2">
                        <li>
                            <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Show</h6>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>10 Items</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group active">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>20 Items</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>30 Items</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                        <li>
                            <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Order By</h6>
                        </li>
                        <li className="group active">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>DESC</span>
                                <em className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2 ni ni-check-thick"></em>
                            </Menu.Item>
                        </li>
                        <li className="group">
                            <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                                <span>ASC</span>
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
const OptionsDropdown = ({className}) => {
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
                    <Button size="xs" icon>
                        <Icon className="text-sm/4.5" name="plus" />
                    </Button>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[120px]">
                    <ul className="text-start py-2">
                        <li className="px-4 py-2">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="checkBalance">Balance</CheckBox>
                            </div>
                        </li>
                        <li className="px-4 py-2">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="checkPhone">Phone</CheckBox>
                            </div>
                        </li>
                        <li className="px-4 py-2">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="checkVerified">Verified</CheckBox>
                            </div>
                        </li>
                        <li className="px-4 py-2">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="checkStatus">Status</CheckBox>
                            </div>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const UsersListPage = () => {
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [showCardOptions, setShowCardOptions] = useState(false);

    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: [0,4]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <>
        <Head title="Users Lists" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Users Lists</PageHead.Title>
                <PageHead.SubTitle>You have total 2,595 users.</PageHead.SubTitle>
            </PageHead.Group>
            <PageHead.Group>
                <PageHead.Option>
                    <ul className="flex items-center gap-4 px-3.5 py-5 sm:py-0">
                        <li>
                            <Button size="rg" variant="white-outline">
                                <Icon className="text-xl/4.5" name="download-cloud" />
                                <span className="ms-3">Export</span>
                            </Button>
                        </li>
                        <li className="ms-auto">
                            <Menu as="div" className="inline-flex relative">
                                {({ open }) => (
                                    <>
                                        <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                            <Button size="rg" variant="primary" icon >
                                                <Icon className="text-xl/4.5" name="plus" />
                                            </Button>
                                        </Menu.Button>
                                        <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                            <ul className="py-2">
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Add User</span></Menu.Item>
                                                </li>
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Add Team</span></Menu.Item>
                                                </li>
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Import User</span></Menu.Item>
                                                </li>
                                            </ul>
                                        </Menu.Items>
                                    </>
                                )}
                            </Menu>
                        </li>
                    </ul>
                </PageHead.Option>
            </PageHead.Group>
        </PageHead>
        <div className="border-y sm:border-x sm:rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full -mx-3.5 sm:m-0">
            <div className="p-5 relative">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center gap-4">
                        <div className="relative w-[132px]">
                            <Select.Choice placeholder="Bulk Action">
                                <Select.Option value="SendEmail">Send Email</Select.Option>
                                <Select.Option value="ChangeGroup">Change Group</Select.Option>
                                <Select.Option value="SuspendUser">Suspend User</Select.Option>
                                <Select.Option value="DeleteUser">Delete User</Select.Option>
                            </Select.Choice>
                        </div>
                        <Button size="rg" variant="light-pale-outline" className="hidden sm:inline-flex" disabled>Apply</Button>
                        <Button size="rg" variant="light-pale-outline" className="sm:hidden" icon disabled><Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-right" /></Button>
                    </div>
                    <ul className="flex flex-wrap items-start gap-2.5">
                        <li>
                            <Button.Zoom onClick={()=> setShowSearchForm(true)}>
                                <Icon className="text-xl/4.5" name="search" />
                            </Button.Zoom>
                        </li>
                        <li className="h-9 border-s border-gray-200 dark:border-gray-800"></li>
                        <li>
                            <Button.Zoom onClick={()=> setShowCardOptions(true)} className="sm:hidden" size="rg">
                                <Icon className="text-xl text-slate-600 dark:text-slate-300 rtl:-scale-x-100" name="menu-right" />
                            </Button.Zoom>
                            <div className={`absolute sm:relative start-0 end-0 top-0 bottom-0 -m-5 p-5 sm:p-0 sm:m-0 bg-white dark:bg-gray-950 sm:bg-transparent sm:dark:bg-transparent shadow sm:shadow-none shadow-gray-200 dark:shadow-gray-900 opacity-0 invisible sm:opacity-100 sm:visible [&.active]:opacity-100 [&.active]:visible z-[700] ${showCardOptions ? "active" : ''}`}>
                                <ul className="flex items-center gap-x-1">
                                    <li className="me-auto sm:hidden -ms-2">
                                        <Button.Zoom  onClick={()=> setShowCardOptions(false)} size="rg">
                                            <Icon className="text-xl/4.5 rtl:-scale-x-100" name="arrow-left" />
                                        </Button.Zoom>
                                    </li>
                                    <li>
                                        <FilterDropdown />
                                    </li>
                                    <li>
                                        <SettingsDropdown />
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`absolute inset-0 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-[800] transition-all duration-300 bg-white dark:bg-gray-950 sm:rounded-t-md ${showSearchForm ? "active" : ''}`}>
                    <div className="p-5 flex items-center">
                        <button onClick={()=> setShowSearchForm(false)} className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 transition-all duration-300">
                            <Icon className="text-xl/4.5 rtl:-scale-x-100" name="arrow-left" />
                        </button>
                        <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Search by user or email" autoComplete="off" />
                        <button type="submit" className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 hover:text-primary-600 transition-all duration-300">
                            <Icon className="text-xl/4.5" name="search" />
                        </button>
                    </div>
                </div>
            </div>
            <table className="border-collapse w-full border-gray-300 dark:border-gray-900"> 
                <thead>
                    <tr>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start w-12 sm:w-13">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="uid-all" />
                            </div>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">User</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start hidden xs:table-cell">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">Balance</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start hidden md:table-cell">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">Phone</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start hidden lg:table-cell">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">Verified</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start hidden lg:table-cell">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">Last Login</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start hidden md:table-cell">
                            <span className="block text-sm leading-relaxed text-slate-400 font-normal">Status</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-end max-w-[3.75rem]">
                            <OptionsDropdown />
                        </th>
                    </tr>
                </thead>
                <tbody>
                {userData.map((item, index) => {
                    return(
                        <tr key={index} className="transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group">
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 w-12 sm:w-13">
                                <div className="flex items-center">
                                    <CheckBox size="sm" id={item.id} />
                                </div>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                <div className="flex items-center">
                                    {item.img ? <Avatar size="rg" rounded img={item.img}/> : <Avatar variant={item.theme} size="rg" rounded text={toInitials(item.name)}/>}
                                    <div className="ms-4">
                                        <span className="block text-sm font-medium leading-6 text-slate-700 dark:text-white">
                                            {item.name}
                                            {item.status === "Active" && <span className="h-2 w-2 inline-block rounded-full bg-green-600 lg:hidden ms-1"></span>}
                                            {item.status === "Inactive" && <span className="h-2 w-2 inline-block rounded-full bg-cyan-600 lg:hidden ms-1"></span>}
                                            {item.status === "Pending" && <span className="h-2 w-2 inline-block rounded-full bg-yellow-600 lg:hidden ms-1"></span>}
                                            {item.status === "Suspend" && <span className="h-2 w-2 inline-block rounded-full bg-red-600 lg:hidden ms-1"></span>}    
                                        </span>
                                        <span className="block text-xs leading-4 text-slate-400">{item.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden xs:table-cell">
                                <span className="text-sm font-medium text-slate-700 dark:text-white">{item.balance} <span className="font-normal text-slate-500">USD</span></span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden md:table-cell">
                                <span className="text-sm text-slate-400">{item.phone}</span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden lg:table-cell">
                                <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-400">
                                    <li className="inline-flex items-center align-middle gap-2.5">
                                        {item.emailStatus === "success" && <Icon className="text-green-600" name="check-circle" />}
                                        {item.emailStatus === "alert" && <Icon name="alert-circle" />}
                                        {item.emailStatus === "warning" && <Icon className="text-yellow-600" name="alert-circle" />}
                                        {item.emailStatus === "pending" && <Icon className="text-cyan-600" name="alarm-alt" />}
                                        {item.emailStatus === "error" && <Icon className="text-red-600" name="alert-circle" />}
                                        <span>Email</span>
                                    </li>
                                    <li className="inline-flex items-center align-middle gap-2.5">
                                        {item.kycStatus === "success" && <Icon className="text-green-600" name="check-circle" />}
                                        {item.kycStatus === "alert" && <Icon name="alert-circle" />}
                                        {item.kycStatus === "warning" && <Icon className="text-yellow-600" name="alert-circle" />}
                                        {item.kycStatus === "pending" && <Icon className="text-cyan-600" name="alarm-alt" />}
                                        {item.kycStatus === "error" && <Icon className="text-red-600" name="alert-circle" />}
                                        <span>KYC</span>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden lg:table-cell">
                                <span className="text-sm text-slate-400">{item.lastLogin}</span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden md:table-cell">
                                {item.status === "Active" && <span className="text-sm font-medium text-green-600">Active</span>}
                                {item.status === "Inactive" && <span className="text-sm font-medium text-cyan-600">Inactive</span>}
                                {item.status === "Pending" && <span className="text-sm font-medium text-yellow-600">Pending</span>}
                                {item.status === "Suspend" && <span className="text-sm font-medium text-red-600">Suspend</span>}
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end max-w-[3.75rem]">
                                <ul className="relative flex items-center justify-end -me-2">
                                    <li className="opacity-0 transition-all duration-300 bg-gray-50 dark:bg-gray-1000 px-0.5 group-hover:opacity-100">
                                        <Tooltip placement="top" content="Wallet">
                                            <Button.Zoom>
                                                <Icon className="text-xl/4.5" name="wallet-fill" />
                                            </Button.Zoom>
                                        </Tooltip>
                                    </li>
                                    <li className="opacity-0 transition-all duration-300 bg-gray-50 dark:bg-gray-1000 px-0.5 group-hover:opacity-100">
                                        <Tooltip placement="top" content="Send Email">
                                            <Button.Zoom>
                                                <Icon className="text-xl/4.5" name="mail-fill" />
                                            </Button.Zoom>
                                        </Tooltip>
                                    </li>
                                    <li className="opacity-0 transition-all duration-300 bg-gray-50 dark:bg-gray-1000 px-0.5 group-hover:opacity-100">
                                        <Tooltip placement="top" content="Suspend">
                                            <Button.Zoom>
                                                <Icon className="text-xl/4.5" name="user-cross-fill" />
                                            </Button.Zoom>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <ActionDropdown />
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="p-5">
                <div className="flex flex-wrap justify-center sm:justify-between gap-4">
                    <Pagination>
                        <Pagination.Prev text="Prev"/>
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Dot />
                        <Pagination.Item>6</Pagination.Item>
                        <Pagination.Item>7</Pagination.Item>
                        <Pagination.Next text="Next"/>
                    </Pagination>
                    <div className="flex items-center gap-x-4">
                        <div className="text-xs uppercase text-slate-600">Page</div>
                        <div className="relative w-16">
                            <Select.Choice>
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                                <Select.Option value="3">3</Select.Option>
                            </Select.Choice>
                        </div>
                        <div className="text-xs uppercase text-slate-600">Of 102</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UsersListPage