import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'

const NotificationDropdown = () => {
  return (
    <Menu as="div" className="dropdown relative">
        {({ open }) => (
            <>
            <Menu.Button className={`dropdown-toggle [&>*]:pointer-events-none peer inline-flex items-center isolate relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-[1] before:rounded-full before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 dark:before:bg-gray-900 ${open ? 'before:h-10 before:w-10 before:opacity-100' : 'before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 before:opacity-0 hover:before:opacity-100'}`}>
                <div className="relative inline-flex after:content-[''] after:absolute after:rounded-full after:end-0 after:top-px after:h-2.5 after:w-2.5 after:border-2 after:border-white after:bg-sky-400">
                    <em className="text-2xl leading-none text-slate-600 dark:text-slate-300 ni ni-bell"></em>
                </div>
            </Menu.Button>
            <Menu.Items modal={false} className="dropdown-menu absolute end-0 top-full mt-2.5 max-xs:min-w-[240px] max-xs:max-w-[240px] min-w-[360px] max-w-[360px] border border-t-3 border-gray-200 dark:border-gray-800 border-t-primary-600 dark:border-t-primary-600 bg-white dark:bg-gray-950 rounded shadow z-[1000]">
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-sm font-normal">Notifications</span>
                    <Menu.Item as="button" className="text-sm font-normal text-primary-600 hover:text-primary-700">
                        Mark All as Read
                    </Menu.Item>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center p-5 border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                        <div className="flex-shrink-0 me-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-950 text-yellow-600">
                            <em className="text-lg leading-none ni ni-curve-down-right"></em>
                        </div>
                        <div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">You have requested to <span>Widthdrawl</span></div>
                            <div className="text-xs text-slate-400">2 hrs ago</div>
                        </div>
                    </div>
                    <div className="flex items-center p-5 border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                        <div className="flex-shrink-0 me-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-950 text-green-600">
                            <em className="text-lg leading-none ni ni-curve-down-left"></em>
                        </div>
                        <div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">Your Deposit Order is placed</div>
                            <div className="text-xs text-slate-400">2 hrs ago</div>
                        </div>
                    </div>
                    <div className="flex items-center p-5 border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                        <div className="flex-shrink-0 me-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-950 text-yellow-600">
                            <em className="text-lg leading-none ni ni-curve-down-right"></em>
                        </div>
                        <div>
                            <div className="text-sm text-slate-600 dark:text-slate-300">You have requested to <span>Widthdrawl</span></div>
                            <div className="text-xs text-slate-400">2 hrs ago</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-5 py-3 border-t border-gray-200 dark:border-gray-800">
                    <Menu.Item as="button" className="text-sm font-normal text-primary-600 hover:text-primary-700">
                    View All
                    </Menu.Item>
                </div>
            </Menu.Items>
            </>
        )}
    </Menu>
  )
}

export default NotificationDropdown