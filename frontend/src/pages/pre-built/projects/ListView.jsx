import React, {useState} from 'react'
import {Button, Card, CheckBox, Icon, PageHead, Progress, Avatar, Badge, Pagination, Select, Head} from "../../../componenets";
import { projects } from '../../../store/projects';
import { toInitials } from '../../../utilities';

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
                    <Button.Zoom size="rg">
                        <Icon className="text-xl" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="eye" />
                                <span>View Project</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="edit" />
                                <span>Edit Project</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="check-round-cut" />
                                <span>Mark As Done</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ActionDropdown2 = ({className}) => {
    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: theme.direction === "rtl" ? [8, -8] : [-8, -8]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom size="xs">
                        <Icon className="text-lg" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="check-round-cut" />
                                <span>Mark As Done</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="archive" />
                                <span>Mark As Archive</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg/none text-start w-7 opacity-80" name="trash" />
                                <span>Remove Projects</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const ProjectsListPage = () => {
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
        <Head title="Project List" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Projects</PageHead.Title>
                <PageHead.SubTitle>You have total 95 projects.</PageHead.SubTitle>
            </PageHead.Group>
            <PageHead.Group>
                <PageHead.Option>
                    <ul className="flex items-center gap-4 px-3.5 py-5 sm:py-0">
                        <li>
                            <Menu as="div" className="inline-flex relative">
                                {({ open }) => (
                                    <>
                                        <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                            <Button size="rg" variant="white-outline">
                                                <Icon className="text-xl/4.5 me-3" name="filter-alt" />
                                                <span className="me-4">Filtered By</span>
                                                <Icon className="text-xl/4.5 rtl:-scale-x-100" name="chevron-right" />
                                            </Button>
                                        </Menu.Button>
                                        <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                            <ul className="py-2">
                                                <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 30 Days</span></Menu.Item></li>
                                                <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 6 Months</span></Menu.Item></li>
                                                <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 1 Years</span></Menu.Item></li>
                                            </ul>
                                        </Menu.Items>
                                    </>
                                )}
                            </Menu>
                        </li>
                        <li className="ms-auto">
                            <Button size="rg" variant="primary" className="hidden sm:inline-flex">
                                <Icon className="text-xl/4.5" name="plus" />
                                <span className="ms-3">Add Project</span>
                            </Button>
                            <Button size="rg" variant="primary" icon className="sm:hidden">
                                <Icon className="text-xl/4.5" name="plus" />
                            </Button>
                        </li>
                    </ul>
                </PageHead.Option>
            </PageHead.Group>
        </PageHead>
        <Card>
            <table className="border-collapse w-full border-gray-300 dark:border-gray-900"> 
                <thead>
                    <tr>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start w-12 sm:w-13">
                            <div className="flex items-center">
                                <CheckBox size="sm" id="pid-all" />
                            </div>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Project Name</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden 2xl:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Client</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden lg:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Project Lead</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden lg:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Team</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden 2xl:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Status</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden md:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Progress</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start hidden xs:table-cell">
                            <span className="block text-sm leading-relaxed font-bold text-slate-400">Deadline</span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end max-w-[3.75rem]">
                            <ActionDropdown2 className="-me-1" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                {projects.map((item, index) => {
                    return(
                        <tr key={index} className="transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000">
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 w-12 sm:w-13">
                                <div className="flex items-center">
                                    <CheckBox size="sm" id={item.id} />
                                </div>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                <a href="#link" onClick={(e)=> e.preventDefault()} className="flex items-center">
                                    <Avatar size="rg" variant={item.theme} text={toInitials(item.title)} />
                                    <h6 className="ms-4 text-base leading-5 text-slate-700 dark:text-white font-heading font-bold mb-0.5">{item.title}</h6>
                                </a>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden 2xl:table-cell">
                                <span className="text-sm text-slate-400">{item.client}</span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden lg:table-cell">
                                <span className="text-sm text-slate-400">{item.teamLead}</span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden lg:table-cell">
                                <ul className="flex items-center gap-1.5">
                                    {item.team.map((tItem,tIndex) => {
                                        return(
                                            <li key={tIndex}>
                                                {tItem.img ? <Avatar size="sm" rounded img={tItem.img}/> : <Avatar variant={tItem.theme} size="sm" rounded text={toInitials(tItem.name)}/>}
                                            </li>
                                        )
                                    })}
                                    {item.teamCount > 2 &&
                                        <li>
                                            <Avatar size="sm" text={`+${item.teamCount - 2}`} variant="light" rounded/>
                                        </li>
                                    }
                                </ul>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden 2xl:table-cell">
                                <span className="text-sm text-slate-400">Open</span>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden md:table-cell">
                                <div className="flex items-center gap-4">
                                    <Progress className="w-[140px]">
                                        <Progress.Bar progress={item.progress} />
                                    </Progress>
                                    <div className="font-medium text-slate-600 dark:text-slate-300">{item.progress}</div>
                                </div>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 hidden xs:table-cell">
                                <Badge variant={item.status.theme}>
                                    <Icon className="me-2 text-base/none" name="clock" />
                                    <span>{item.status.message}</span>
                                </Badge>
                            </td>
                            <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end max-w-[3.75rem]">
                                <ActionDropdown className="-me-2" />
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
        </Card>
    </>
  )
}

export default ProjectsListPage