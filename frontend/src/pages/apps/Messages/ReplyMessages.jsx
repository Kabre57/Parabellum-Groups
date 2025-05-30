import React from 'react'
import { Icon, Avatar } from '../../../componenets'
import { toInitials } from '../../../utilities'

const ReplyMessages = ({data}) => {
  return (
    <>
        <div className="px-5 sm:px-9 py-6 lg:hidden border-b border-gray-200 dark:border-gray-800">
            <h4 className="font-heading font-bold tracking-tight text-slate-700 dark:text-white text-xl/tighter mb-2 sm:mb-4 line-clamp-1">{data.title}</h4>
            <ul className="flex flex-wrap gap-6">
                <li>
                    <span className="inline-flex items-center text-slate-400 gap-2">
                        <Icon className="text-sm/none text-primary-600" name="flag-fill" /> 
                        <span>Technical Problem</span>
                    </span>
                </li>
            </ul>
        </div>
        <div className="py-5 px-5 sm:px-9 lg:py-8">
            <div className="flex items-center justify-between mb-2 cursor-pointer [&.is-opended]:cursor-default">
                <div className="flex items-center">
                    {data.image ? <Avatar size="sm" rounded img={data.image}/> : <Avatar size="sm" variant={data.theme} rounded text={toInitials(data.name)}/>}
                    <div className="text-sm/4 font-bold text-slate-600 dark:text-white ms-3">{data.name}</div>
                </div>
                <div className="text-xs text-slate-400">{data.date}</div>
            </div>
            <div className="ms-12">
                <div className="entry">
                    {data.message.map((item,index)=>{
                        return(
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
                <div className="rounded border border-gray-200 dark:border-gray-800 mt-7">
                    <ul className="flex flex-wrap px-5 py-4 gap-x-8 gap-y-2">
                        <li className="w-[180px]">
                            <a className="flex items-center w-full text-slate-600 dark:text-slate-300" href="#link" onClick={(e)=> e.preventDefault()}><em className="text-2xl/none text-primary-600 me-4 ni ni-img"></em><span className="line-clamp-1">error-show-On-order.jpg</span></a>
                        </li>
                        <li className="w-[180px]">
                            <a className="flex items-center w-full text-slate-600 dark:text-slate-300" href="#link" onClick={(e)=> e.preventDefault()}><em className="text-2xl/none text-primary-600 me-4 ni ni-img"></em><span className="line-clamp-1">full-page-error.jpg</span></a>
                        </li>
                    </ul>
                    <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-5 py-3 flex flex-wrap justify-between rounded-b">
                        <span className="font-medium text-slate-700 dark:text-white text-sm">2 files attached</span>
                        <a className="inline-flex items-center text-sm/none font-medium whitespace-nowrap gap-3.5 group/link" href="#link" onClick={(e)=> e.preventDefault()}>
                            <em className="text-lg/none text-primary-500 group-hover/link:text-primary-600 transition-all duration-300 ni ni-download"></em>
                            <span className="text-slate-400 group-hover/link:text-primary-600 transition-all duration-300">Download All</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {data.reply.map((item,index)=>{
            return(
                <React.Fragment key={index}>
                    {item.note ? 
                        <div className="py-5 px-5 sm:px-9 lg:py-8">
                            <div className="flex items-center justify-between mb-2 cursor-pointer [&.is-opended]:cursor-default">
                                <div className="flex items-center">
                                    {item.image ? <Avatar size="sm" rounded img={item.image}/> : <Avatar size="sm" variant={item.theme} rounded text={toInitials(item.name)}/>}
                                    <div className="text-sm/4 font-bold text-slate-600 dark:text-white ms-3">{item.name} <span className="text-slate-400 font-normal">added a note</span></div>
                                </div>
                                <div className="text-xs text-slate-400">{item.date}</div>
                            </div>
                            <div className="ms-12">
                                <div className="entry rounded bg-gray-100 dark:bg-gray-900 bg-opacity-70 px-5 py-3">
                                    {item.message.map((item,index)=>{
                                        return(
                                            <p key={index}>{item}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div> : item.assigned ?
                        <div className="text-center overflow-hidden mx-5 sm:mx-9 lg:mx-10 px-8">
                            <div className="relative inline-block px-3 text-slate-400 text-xs/snug before:absolute after:absolute before:h-px after:h-px before:bg-gray-200 before:dark:bg-gray-900 after:bg-gray-200 after:dark:bg-gray-900 before:w-screen after:w-screen before:top-1/2 after:top-1/2 before:end-full after:start-full"><span className="text-slate-600 dark:text-slate-400">{item.assigned.by}</span> assigned user: <span className="text-primary-600">{item.assigned.name}</span> at {item.assigned.date} at {item.assigned.time}</div>
                        </div>
                         : item.sap ?
                         <div className="text-center overflow-hidden mx-5 sm:mx-9 lg:mx-10 px-8">
                            <div className="relative inline-block px-3 text-slate-400 text-xs/snug before:absolute after:absolute before:h-px after:h-px before:bg-gray-200 before:dark:bg-gray-900 after:bg-gray-200 after:dark:bg-gray-900 before:w-screen after:w-screen before:top-1/2 after:top-1/2 before:end-full after:start-full"><strong className="text-gray-600 dark:text-gray-400">{item.sap.date}</strong></div>
                        </div>
                        :
                        <div className="py-5 px-5 sm:px-9 lg:py-8">
                            <div className="flex items-center justify-between mb-2 cursor-pointer [&.is-opended]:cursor-default">
                                <div className="flex items-center">
                                    {item.image ? <Avatar size="sm" rounded img={item.image}/> : <Avatar size="sm" variant={item.theme} rounded text={toInitials(item.name)}/>}
                                    <div className="text-sm/4 font-bold text-slate-600 dark:text-white ms-3">{item.name} {item.you && <span className="text-slate-400 font-normal">(You)</span>}</div>
                                </div>
                                <div className="text-xs text-slate-400">{item.date}</div>
                            </div>
                            <div className="ms-12">
                                <div className="entry">
                                    {item.message.map((item,index)=>{
                                        return(
                                            <p key={index}>{item}</p>
                                        )
                                    })}
                                </div>
                                <div className="inline-block text-xs rounded bg-gray-100 dark:bg-gray-900 bg-opacity-70 px-3 py-1.5 mt-5">
                                    Replied by <span>{item.name}</span> at {item.time}
                                </div>
                            </div>
                        </div>
                    }
                </React.Fragment>
            )
        })}
    </>
  )
}

export default ReplyMessages