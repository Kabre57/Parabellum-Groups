import React, {useState} from 'react'
import { Avatar, Button, Card, Icon } from '../../../componenets'
import { toInitials } from '../../../utilities'
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../../layout/context';

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
                    <Button.Zoom className="-me-2">
                        <Icon className="text-xl" name="more-h" />
                    </Button.Zoom>
                </Menu.Button>
                <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                    <ul className="py-2">
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg leading-none w-7 text-start opacity-80" name="setting"/>
                                <span>Action Settings</span>
                            </Menu.Item>
                        </li>
                        <li>
                            <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                                <Icon className="text-lg leading-none w-7 text-start opacity-80" name="notify"/>
                                <span>Push Notification</span>
                            </Menu.Item>
                        </li>
                    </ul>
                </Menu.Items>
            </>
        )}
    </Menu>
  )
}

const NewUsersCard = ({className}) => {
    const data = [
        {
            name: "Abu Bin Ishtiyak",
            email:"info@softnio.com",
            theme:"primary-pale"
        },
        {
            name: "Sharon Walker",
            email:"sharon-90@example.com",
            theme:"pink-pale"
        },
        {
            name: "Gloria Oliver",
            email:"gloria_72@example.com",
            theme:"yellow-pale"
        },
        {
            name: "Phillip Sullivan",
            email:"phillip-85@example.com",
            theme:"green-pale"
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="border-b border-gray-300 dark:border-gray-900">
            <div className="relative flex items-center justify-between -my-1">
                <h6 className="font-heading text-base -tracking-snug leading-6.5 font-bold text-slate-700 dark:text-white">New Users</h6>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600">View All</a>
            </div>
        </Card.Body>
        <ul>
            {data.map((item,index) => {
                return(          
                    <li key={index} className="flex items-center p-5 sm:px-6 sm:py-4 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                        {item.image ? <Avatar size="rg" rounded img={item.image}/> : <Avatar size="rg" variant={item.theme} rounded text={toInitials(item.name)}/>}
                        <div className="ms-4">
                            <span className="block text-sm font-bold leading-6 text-slate-700 dark:text-white">{item.name}</span>
                            <span className="block text-xs leading-4 text-slate-400">{item.email}</span>
                        </div>
                        <ActionDropdown className="ms-auto" />
                    </li>
                )
            })}
        </ul>
    </Card>
  )
}

export default NewUsersCard