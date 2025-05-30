import React from 'react'
import { Card } from '../../../componenets'
import { Tab } from '@headlessui/react'

const InvestmentOverviewCard = ({ className }) => {

  return (
    <Card className="h-full">
        <Card.Body className="pb-2 sm:pb-2">
            <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-1">Investment Overview</h6>
            <p className="text-xs leading-5 text-slate-400">The investment overview of your platform. <a className="text-primary-500 hover:text-primary-600" href="#link" onClick={(e)=> e.preventDefault()}>All Investment</a></p>
        </Card.Body>
        <Tab.Group>
            <Tab.List as="ul" className="tab-nav flex flex-wrap border-b border-gray-300 dark:border-gray-900 px-5 sm:px-6">
                <li className="tab-item pe-5 last:pe-0">
                    <Tab className="tab-toggle inline-flex items-center text-sm font-medium py-3 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">Overview</Tab>
                </li>
                <li className="tab-item pe-5 last:pe-0">
                    <Tab className="tab-toggle inline-flex items-center text-sm font-medium py-3 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">This Year</Tab>
                </li>
                <li className="tab-item pe-5 last:pe-0">
                    <Tab className="tab-toggle inline-flex items-center text-sm font-medium py-3 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600 focus-visible:outline-none">All Time</Tab>
                </li>
            </Tab.List>
            <Tab.Panels className="tab-content p-5 sm:p-6">
                <Tab.Panel>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Currently Actived Investment</div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">49,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">56</span><span className="ms-1 text-sm text-green-600"><em className="ni ni-arrow-long-up"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">49,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Paid Profit</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Investment in this Month</div>
                        <div className="flex">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">49,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">23</span><span className="ms-1 text-sm text-red-600"><em className="ni ni-arrow-long-down"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Currently Actived Investment</div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">89,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">96</span><span className="ms-1 text-sm text-green-600"><em className="ni ni-arrow-long-up"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">99,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Paid Profit</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Investment in this Month</div>
                        <div className="flex">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">149,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">83</span><span className="ms-1 text-sm text-red-600"><em className="ni ni-arrow-long-down"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Currently Actived Investment</div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">249,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">556</span><span className="ms-1 text-sm text-green-600"><em className="ni ni-arrow-long-up"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                        <div className="flex py-1.5">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">149,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Paid Profit</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-800 last:border-b-0 py-5 first:pt-0 last:pb-0">
                        <div className="text-sm font-medium text-slate-400 mb-2">Investment in this Month</div>
                        <div className="flex">
                            <div className="w-3/5">
                                <div className="text-xl leading-tighter text-slate-700 dark:text-white">249,395.395  <span className="text-slate-600 dark:text-slate-400">USD</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Amount</div>
                            </div>
                            <div className="w-2/5">
                                <div><span className="text-xl leading-tighter text-slate-700 dark:text-white">223</span><span className="ms-1 text-sm text-red-600"><em className="ni ni-arrow-long-down"></em>1.93%</span></div>
                                <div className="text-xs text-slate-400 uppercase mt-1 tracking-widest">Plans</div>
                            </div>
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </Card>
  )
}

export default InvestmentOverviewCard