import React, {useState} from 'react'
import {Button, Badge, Icon, PageHead, Pagination, Head} from "../../../componenets";
import { invoiceData } from '../../../store/Invoice';
import { Link } from 'react-router-dom';

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

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

const InvoiceListPage = () => {
    const [showSearchForm, setShowSearchForm] = useState(false);

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
        <Head title="Invoice List" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Invoices</PageHead.Title>
                <PageHead.SubTitle>You have total 937 invoices.</PageHead.SubTitle>
            </PageHead.Group>
            <PageHead.Group>
                <Menu as="div" className="inline-flex relative">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button size="rg" variant="primary" icon>
                                    <Icon className="text-xl/4.5" name="plus" />
                                </Button>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                <ul className="py-2">
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Add New</span></Menu.Item>
                                    </li>
                                    <li>
                                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Import</span></Menu.Item>
                                    </li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                </Menu>
            </PageHead.Group>
        </PageHead>
        <div className="border-y sm:border-x sm:rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full -mx-3.5 sm:m-0">
            <div className="p-5 relative">
                <div className="flex items-center justify-between relative">
                    <h5 className="font-heading font-bold text-xl leading-tighter tracking-snug text-slate-700 dark:text-white">All Invoice</h5>
                    <ul className="flex flex-wrap items-start gap-2.5">
                        <li>
                            <Button.Zoom onClick={()=> setShowSearchForm(true)}>
                                <Icon className="text-xl/4.5" name="search" />
                            </Button.Zoom>
                        </li>
                        <li className="h-9 border-s border-gray-200 dark:border-gray-800"></li>
                        <li>
                            <SettingsDropdown />
                        </li>
                    </ul>
                </div>
                <div className={`absolute inset-0 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-[800] transition-all duration-300 bg-white dark:bg-gray-950 sm:rounded-t-md ${showSearchForm ? "active" : ''}`}>
                    <div className="p-5 flex items-center">
                        <button onClick={()=> setShowSearchForm(false)} className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 transition-all duration-300">
                            <Icon className="text-xl/4.5 rtl:-scale-x-100" name="arrow-left" />
                        </button>
                        <input type="text" className="flex-grow block w-full box-border text-sm leading-4.5 px-2 py-1.5 h-9 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 shadow-none focus:outline-offset-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all" placeholder="Quick search by order id" autoComplete="off" />
                        <button type="submit" className="relative inline-flex items-center justify-center text-center align-middle text-sm font-bold leading-4.5 rounded h-9 w-9 text-slate-600 hover:text-primary-600 transition-all duration-300">
                            <Icon className="text-xl/4.5" name="search" />
                        </button>
                    </div>
                </div>
            </div>
            <table className="border-collapse w-full border-gray-300 dark:border-gray-900"> 
                <thead>
                    <tr>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                            <span className="md:inline-block md:min-w-[90px] lg:min-w-[120px]">
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed     leading-tight">Order ID</span>
                            </span>
                            <span className="hidden md:inline-block">
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Date</span>
                            </span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-start">
                            <span className="md:inline-block md:min-w-[100px] lg:min-w-[50%]">
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Amount</span>
                            </span>
                            <span className="hidden md:inline-block">
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Status</span>
                            </span>
                        </th>
                        <th className="py-2 px-2 first:ps-6 last:pe-6 border-b border-t border-gray-300 dark:border-gray-900 text-end"></th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.map((item, index) => {
                        const badgeVariant = item.status === "Complete" ? "green" : item.status === "Pending" ? "yellow" : item.status === "Cancelled" ? "red" : "light"; 
                        return(
                            <tr key={index} className="transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group">
                                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <div className="md:inline-block md:min-w-[90px] lg:min-w-[120px]">
                                        <Link to={`/invoice-details/${item.id}`} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600 ms-auto">#{item.orderId}</Link>
                                    </div>
                                    <span className="text-sm whitespace-nowrap text-slate-400">{item.date}, {item.time}</span>
                                </td>
                                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <div className="md:inline-block md:min-w-[100px] lg:min-w-[50%]">
                                        <span className="text-sm font-medium text-slate-700 dark:text-white">${item.totalAmount}</span>
                                    </div>
                                    <Badge.Dot className="capitalize" variant={badgeVariant}>{item.status}</Badge.Dot>
                                </td>
                                <td className="py-4 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end">
                                    <ul className="hidden sm:flex items-center justify-end gap-2">
                                        <li>
                                            <Button as="Link" to={`/invoice-print/${item.id}`} target="_blank" size="sm" variant="primary-transparent" icon>
                                                <Icon className="text-base/4.5" name="printer-fill" />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button as="Link" to={`/invoice-details/${item.id}`} size="sm" variant="primary-pale">View</Button>
                                        </li>
                                    </ul>
                                    <div className="sm:hidden">
                                        <Button.Zoom  as="Link" to={`/invoice-details/${item.id}`} size="sm">
                                            <Icon className="text-xl rtl:-scale-x-100" name="chevron-right" />
                                        </Button.Zoom>
                                    </div>
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
                </div>
            </div>
        </div>
    </>
  )
}

export default InvoiceListPage