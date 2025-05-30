import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Avatar, Breadcrumb, Button, Icon } from '../../../componenets'
import { fileManagerIcons } from '../../../store/icons'

const FileDetailsModal = ({show, setShow}) => {

  return (
    <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-[5000]" onClose={() => setShow(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-slate-700/50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 -translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-6"
                >
                    <Dialog.Panel className="relative bg-white dark:bg-gray-950 rounded-md w-full md:w-[720px] sm:w-[520px] mx-auto text-start">
                        <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                            <div className="flex items-center">
                                <div className="h-10 [&>svg]:h-full">
                                    {fileManagerIcons.folder}
                                </div>
                                <div className="ms-2">
                                    <div className="flex items-center text-sm font-medium mb-1"><span className="line-clamp-1">UI/UX Design</span></div>
                                    <div className="text-xs text-slate-400">Project</div>
                                </div>
                            </div>
                            <button onClick={() => setShow(false)} className="text-slate-500 hover:text-slate-700 dark:text-white">
                                <Icon className="text-2xl" name="cross" />
                            </button>
                        </div>
                        <div className="px-5 sm:px-6 py-5 sm:py-6">
                            <div className="nk-file-details">
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Type</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">Folder</div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Size</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">35.48 MB</div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Location</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">
                                        <Breadcrumb>
                                            <Breadcrumb.Item separator="arrow"><Breadcrumb.Link to="/">ThemeForest</Breadcrumb.Link></Breadcrumb.Item>
                                            <Breadcrumb.Item separator="arrow">Project</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Owner</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">Me</div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Shared with</div>
                                    <div className="text-sm/5 flex-shrink-0 text-slate-600">
                                        <Avatar.Group size="mb">
                                            <Avatar variant="primary" size="mb" rounded img="/images/avatar/b-sm.jpg"></Avatar>
                                            <Avatar variant="purple" size="mb" rounded text="IH"></Avatar>
                                            <Avatar variant="pink" size="mb" rounded text="AB"></Avatar>
                                            <Avatar variant="slate" size="mb" rounded text="+2"></Avatar>
                                        </Avatar.Group>
                                    </div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Modified</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">Feb 19, 2020 by Abu Bit Istiyak</div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Opened</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">Apr 23, 2020 by Me</div>
                                </div>
                                <div className="py-2 flex flex-wrap xs:flex-nowrap xs:py-1.5">
                                    <div className="text-sm/5 w-full xs:w-[100px] xs:flex-shrink-0 text-slate-400">Created</div>
                                    <div className="text-sm/5 text-slate-600 dark:text-slate-400">Feb 19, 2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-900 rounded-b-[inherit]">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-all duration-300">View All Activity</button>
                                <ul className="flex items-center gap-5">
                                    <li><Button size="rg" variant="light" className="bg-white">Share</Button></li>
                                    <li><Button onClick={() => setShow(false)} size="rg" variant="primary">Download</Button></li>
                                </ul>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
  )
}

export default FileDetailsModal