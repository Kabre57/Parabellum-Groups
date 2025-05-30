import React from 'react'
import { Avatar, Badge, Card } from '../../../componenets'
import { toInitials } from '../../../utilities'
const SupportRequestsCard = ({className}) => {
    const data =[
        {
            user:{
                name: "Vincent Lopez",
                image: "/images/avatar/a-sm.jpg",
            },
            message: "Thanks for contact us with your issues...",
            when: "6 min ago",
            status: "pending",
        },
        {
            user:{
                name: "Daniel Moore",
                theme: "purple-pale",
            },
            message: "Thanks for contact us with your issues...",
            when: "2 Hours ago",
            status: "open",
        },
        {
            user:{
                name: "Larry Henry",
                image: "/images/avatar/b-sm.jpg",
            },
            message: "Thanks for contact us with your issues...",
            when: "3 Hours ago",
            status: "solved",
        },
    ]
  return (
    <Card className="h-full">
        <Card.Body className="border-b border-gray-300 dark:border-gray-900">
            <div className="relative flex items-center justify-between -my-1">
                <h6 className="font-heading text-base -tracking-snug leading-6.5 font-bold text-slate-700 dark:text-white">Support Requests</h6>
                <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600">All Tickets</a>
            </div>
        </Card.Body>
        <ul>
            {data.map((item,index) => {
                const badgeVariant = item.status === "solved" ? "green" : item.status === "pending" ? "yellow" : item.status === "open" ? "cyan" : "light"; 
                return(                        
                    <li key={index} className="flex p-5 sm:px-6 border-b border-gray-300 dark:border-gray-900 last:border-b-0">
                        {item.user.image ? <Avatar size="rg" rounded img={item.user.image}/> : <Avatar size="rg" variant={item.user.theme} rounded text={toInitials(item.user.name)}/>}
                        <div className="ms-4 flex-grow">
                            <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-white">
                                <span>{item.user.name}</span>
                                <Badge.Dot className="capitalize" variant={badgeVariant}>{item.status}</Badge.Dot>
                            </div>
                            <p className="mt-1">{item.message}</p>
                            <span className="text-xs leading-5 text-slate-400 block">{item.when}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </Card>
  )
}

export default SupportRequestsCard