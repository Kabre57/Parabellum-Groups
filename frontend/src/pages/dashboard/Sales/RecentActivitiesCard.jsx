import React from 'react'
import { Avatar, Card } from '../../../componenets'
import { toInitials } from '../../../utilities'
const RecentActivitiesCard = ({className}) => {
    const data = [
        {
            user: {
                image: "/images/avatar/c-sm.jpg",
                name: "Keith Jensen",
            },
            message: "requested to Widthdrawl.",
            when: "2 hours ago",
        },
        {
            user: {
                name: "Harry Simpson",
                theme: "yellow"
            },
            message: "placed a Order.",
            when: "2 hours ago",
        },
        {
            user: {
                name: "Stephanie Marshall",
                theme: "blue"
            },
            message: "got a huge bonus.",
            when: "2 hours ago",
        },
        {
            user: {
                image: "/images/avatar/d-sm.jpg",
                name: "Nicholas Carr",
            },
            message: "deposited funds.",
            when: "2 hours ago",
        },
        {
            user: {
                name: "Timothy Moreno",
                theme: "pink"
            },
            message: "placed a Order.",
            when: "2 hours ago",
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="border-b border-gray-300 dark:border-gray-900">
            <div className="relative flex items-center justify-between -my-1">
                <h6 className="font-heading text-base -tracking-snug leading-6.5 font-bold text-slate-700 dark:text-white">Recent Activities</h6>
                <ul className="flex gap-x-5 -my-1">
                    <li><a className="relative text-slate-400 [&.active]:text-slate-600 py-2.5 block leading-none before:absolute before:inset-0 before:top-auto before:h-0.5 before:bg-primary-600 before:opacity-0 [&.active]:before:opacity-100" href="#link"  onClick={(e)=> e.preventDefault()}><span>Cancel</span></a></li>
                    <li><a className="active relative text-slate-400 [&.active]:text-slate-600 py-2.5 block leading-none before:absolute before:inset-0 before:top-auto before:h-0.5 before:bg-primary-600 before:opacity-0 [&.active]:before:opacity-100" href="#link"  onClick={(e)=> e.preventDefault()}><span>All</span></a></li>
                </ul>
            </div>
        </Card.Body>
        <ul>
            {data.map((item,index) => {
                return(                                 
                    <li key={index} className="flex items-center p-5 sm:px-6 sm:py-4 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                        {item.user.image ? <Avatar size="rg" rounded img={item.user.image}/> : <Avatar size="rg" variant={item.user.theme} rounded text={toInitials(item.user.name)}/>}
                        <div className="ms-4">
                            <div className="text-slate-600 dark:text-slate-400">{item.user.name} {item.message}</div>
                            <span className="block text-xs text-slate-400 leading-[1.3]">{item.when}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </Card>
  )
}

export default RecentActivitiesCard