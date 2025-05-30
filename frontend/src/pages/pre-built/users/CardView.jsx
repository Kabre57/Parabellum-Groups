import React, {useState} from 'react'
import {Avatar, Button, Icon, PageHead, Block, Card, Head} from "../../../componenets";
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
                    <Button.Zoom size="sm">
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
                                <Icon className="text-start text-lg leading-none w-7 opacity-80" name="mail" />
                                <span>Send Email</span>
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

const UsersCardPage = () => {
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
        <Block>
            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                {userData.slice(0,4).map((item, index) => {
                    return(
                        <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
                            <Card>
                                <Card.Body>
                                    <div className="relative">
                                        
                                        {item.status === "Active" && <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-green-600 text-white"><Icon name="check-thick" /></div>}
                                        {item.status === "Inactive" && <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-gray-200 text-gray-600"><Icon name="check-thick" /></div>}
                                        {item.status === "Pending" && <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-yellow-600 text-white"><Icon name="clock" /></div>}
                                        {item.status === "Suspend" && <div className="absolute flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white"><Icon name="na" /></div>}
                                        <ActionDropdown className="!absolute top-0 end-0 -mt-1 -me-1" />
                                        <div className="flex flex-col items-center text-center p-2">

                                            {item.img ? <Avatar size="xl" rounded img={item.img} status="active"/> : <Avatar variant={item.theme} size="xl" rounded text={toInitials(item.name)} status="active"/>}

                                            <div className="mt-5">
                                                <h6 className="text-base text-slate-700 dark:text-white font-bold font-heading leading-tighter mb-2">{item.name}</h6>
                                                <span className="text-sm text-slate-400">@{item.displayName}</span>
                                            </div>
                                        </div>
                                        <div className="pt-2 text-center mx-auto max-w-[200px]">
                                            <p>I am an UI/UX Designer and Love to be creative.</p>
                                        </div>
                                        <ul className="flex justify-around text-center pt-4 pb-6 w-full">
                                            <li className="px-2">
                                                <span className="text-lg text-slate-800 dark:text-white block">{item.projects}</span>
                                                <span className="text-sm leading-6 text-slate-400 block">Projects</span>
                                            </li>
                                            <li className="px-2">
                                                <span className="text-lg text-slate-800 dark:text-white block">{item.performed}</span>
                                                <span className="text-sm leading-6 text-slate-400 block">Performed</span>
                                            </li>
                                            <li className="px-2">
                                                <span className="text-lg text-slate-800 dark:text-white block">{item.tasks}</span>
                                                <span className="text-sm leading-6 text-slate-400 block">Tasks</span>
                                            </li>
                                        </ul>
                                        <div className="flex justify-center pb-1">
                                            <Button as="Link" to={`/user-details/${item.id}`} size="rg" variant="white-outline" pill className="min-w-[150px] justify-center"><span>View Profile</span></Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </Block>
        <Block>
            <div className="pb-5">
                <h5 className="text-xl font-medium -tracking-snug text-slate-700 dark:text-white leading-tighter mb-2">User Cards Alternet</h5>
                <p className="text-sm leading-6 text-slate-400">An alternet version of user card here.</p>
            </div>

            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                {userData.slice(0,4).map((item, index) => {
                    return(
                        <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
                            <Card>
                                <Card.Body>
                                    <div className="relative">
                                        <ActionDropdown className="!absolute top-0 end-0 -mt-1 -me-1" />
                                        <div className="flex flex-col items-center text-center p-2">
                                            {item.img ? <Avatar size="2xl" rounded img={item.img} status="active"/> : <Avatar variant={item.theme} size="2xl" rounded text={toInitials(item.name)} status="active"/>}
                                            <div className="mt-5">
                                                <h6 className="text-base text-slate-700 dark:text-white font-bold font-heading leading-tighter mb-2">{item.name}</h6>
                                                <span className="text-sm text-slate-400">{item.designation}</span>
                                            </div>
                                        </div>
                                        <ul className="pt-4 pb-5">
                                            <li className="flex items-center justify-between text-base leading-7">
                                                <span className="text-slate-400 dark:text-slate-600">Join Date</span>
                                                <span className="text-slate-600 dark:text-slate-400">24 Jun 2015</span>
                                            </li>
                                            <li className="flex items-center justify-between text-base leading-7">
                                                <span className="text-slate-400 dark:text-slate-600">Contact</span>
                                                <span className="text-slate-600 dark:text-slate-400">{item.phone}</span>
                                            </li>
                                            <li className="flex items-center justify-between text-base leading-7">
                                                <span className="text-slate-400 dark:text-slate-600">Email</span>
                                                <span className="text-slate-600 dark:text-slate-400">{item.email}</span>
                                            </li>
                                        </ul>
                                        <div className="flex justify-center pb-1">
                                            <Button as="Link" to={`/user-details/${item.id}`} size="rg" variant="primary-pale" block className="min-w-[150px] justify-center"><span>View Profile</span></Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </Block>
    </>
  )
}

export default UsersCardPage