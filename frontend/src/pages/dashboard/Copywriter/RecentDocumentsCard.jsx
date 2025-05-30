import React, {useState} from 'react'
import { Badge, Button, Card, CheckBox, Icon } from '../../../componenets'
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

const ActionDropdown = () => {
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
    <Menu as="div" className="inline-flex relative">
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                    <Button.Zoom className="-me-2">
                        <Icon className="text-xl" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg leading-none w-7 text-start opacity-80" name="eye"/>
                                <span>View Document</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg leading-none w-7 text-start opacity-80" name="edit"/>
                                <span>Rename</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg leading-none w-7 text-start opacity-80" name="trash"/>
                                <span>Move to Trash</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}


const RecentDocumentsCard = () => {

    const data = [
        {
            id:"did-01",
            title:"The Impact of Artificial Intelligence on the Future of Work",
            type:"Document",
            theme: "dark-pale",
            modified: {
                date: "Feb 15,2023",
                time: "02:31 PM"
            }
        },
        {
            id:"did-02",
            title:"How to Boost Your Online Presence with Social Media Marketing",
            type:"Social Media",
            theme: "blue-pale",
            modified: {
                date: "Feb 15,2023",
                time: "02:31 PM"
            }
        },
        {
            id:"did-03",
            title:"Top 10 Tips for Effective Time Management in the Workplace",
            type:"Blog Content",
            theme: "purple-pale",
            modified: {
                date: "Feb 15,2023",
                time: "02:31 PM"
            }
        },
        {
            id:"did-04",
            title:"Transforming Healthcare with Big Data: Exploring the Opportunities",
            type:"Website Copy & SEO",
            theme: "yellow-pale",
            modified: {
                date: "Feb 15,2023",
                time: "02:31 PM"
            }
        },
    ]
  return (
    <Card className="h-full">
        <div className="table w-full text-sm text-slate-400">
            <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                <div className="relative table-cell align-middle w-13 px-2 py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                    <CheckBox size="sm" id="did-all" className="my-1"/>
                </div>
                <div className="relative table-cell align-middle px-2 py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                    <span className=" text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">Name</span>
                </div>
                <div className="relative hidden sm:table-cell align-middle px-2 py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                    <span className=" text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">Type</span>
                </div>
                <div className="relative hidden lg:table-cell align-middle px-2 py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                    <span className=" text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">Last Modified</span>
                </div>
                <div className="relative table-cell align-middle px-2 py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>&nbsp;</span></div>
            </div>
            {data.map((item,index) => {
                return(        
                    <div key={index} className="table-row transition-all duration-300 [&>*]:border-b [&>*]:last:border-b-0 hover:bg-gray-50 hover:dark:bg-gray-1000">
                        <div className="relative table-cell align-middle w-13 px-2 py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <CheckBox size="sm" id={item.id} className="my-1"/>
                        </div>
                        <div className="relative table-cell align-middle px-2 py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <div className="text-base text-slate-600 dark:text-white">{item.title}</div>
                        </div>
                        <div className="relative hidden sm:table-cell align-middle px-2 py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <Badge variant={item.theme} pill>{item.type}</Badge>
                        </div>
                        <div className="relative hidden lg:table-cell align-middle px-2 py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                            <ul className="flex flex-wrap gap-x-2">
                                <li>{item.modified.date}</li>
                                <li>{item.modified.time}</li>
                            </ul>
                        </div>
                        <div className="relative table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900 text-end">
                            <ActionDropdown />
                        </div>
                    </div>
                )
            })}
        </div>
    </Card>
  )
}

export default RecentDocumentsCard