import React from 'react'
import { Button, Card, Icon, Tooltip } from '../../../../componenets'

const Activity = ({pageAside}) => {
    const data = [
        {
            browser : "Chrome on Window",
            ip: "192.149.122.128",
            time: "11:34 PM",
            current: true,
        },
        {
            browser : "Mozilla on Window",
            ip: "86.188.154.225",
            time: "Nov 20, 2019 10:34 PM",
        },
        {
            browser : "Chrome on iMac",
            ip: "192.149.122.128",
            time: "Nov 12, 2019 08:56 PM",
        },
        {
            browser : "Chrome on Window",
            ip: "192.149.122.128",
            time: "Nov 03, 2019 04:29 PM",
        },
        {
            browser : "Mozilla on Window",
            ip: "86.188.154.225",
            time: "Oct 29, 2019 09:38 AM",
        },
        {
            browser : "Chrome on iMac",
            ip: "192.149.122.128",
            time: "Oct 23, 2019 04:16 PM",
        },
        {
            browser : "Chrome on Window",
            ip: "192.149.122.128",
            time: "Oct 15, 2019 11:41 PM",
        },
        {
            browser : "Mozilla on Window",
            ip: "86.188.154.225",
            time: "Oct 13, 2019 05:43 AM",
        },
        {
            browser : "Chrome on iMac",
            ip: "192.149.122.128",
            time: "Oct 03, 2019 04:12 AM",
        },
    ]
  return (
    <>
        <div className="flex justify-between items-center pb-6 sm:pb-10 gap-x-6">
            <div className="relative">
                <h5 className="text-2xl font-heading mb-2 font-bold leading-tighter tracking-tight text-slate-700 dark:text-white">Login Activity</h5>
                <p className="text-slate-600 dark:text-slate-400">Here is your last 20 login activities log. 
                    <Tooltip placement="right" rtlPlacement="left" content="Stored activities whenever you login into account">
                        <Icon className="text-slate-400 relative top-0.5" name="info" />
                    </Tooltip>
                </p>
            </div>
            <div className="lg:hidden">
                <Button.Zoom
                    onClick={()=>{
                        pageAside(true)
                    }}
                >
                    <Icon className="text-xl" name="menu-alt-r" />
                </Button.Zoom>
            </div>
        </div>
        <Card>
            <div className="table border-collapse w-full border-gray-300 dark:border-gray-900"> 
                <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                    <div className="table-cell py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                        <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Browser</span>
                    </div>
                    <div className="hidden sm:table-cell py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                        <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">IP</span>
                    </div>
                    <div className="table-cell py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                        <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Time</span>
                    </div>
                    <div className="table-cell py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-end"> </div>
                </div>
                {data.map((item,index) => {
                    return(   
                        <div key={index} className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                            <div className="table-cell py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                <span className="text-sm text-slate-600 dark:text-slate-400">{item.browser}</span>
                            </div>
                            <div className="hidden sm:table-cell py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                <span className="text-xs text-slate-400">{item.ip}</span>
                            </div>
                            <div className="table-cell py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                <span className="text-xs text-slate-400">{item.time}</span>
                            </div>
                            <div className="table-cell py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-end">
                                {item.current !== true && 
                                    <button className="inline-flex items-center justify-center isolate -me-2 relative h-6 w-6 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-4 before:w-4 hover:before:h-6 hover:before:w-6 before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-red-100 text-slate-400 hover:text-red-600">
                                        <Icon className="text-base" name="cross" />
                                    </button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </Card>
    </>
  )
}

export default Activity