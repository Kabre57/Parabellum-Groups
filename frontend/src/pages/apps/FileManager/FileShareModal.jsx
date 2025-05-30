import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Icon, Button } from '../../../componenets'
import { fileManagerIcons } from '../../../store/icons'

const FileShareModal = ({show, setShow}) => {

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
                                    <div className="text-xs font-medium text-slate-400">394.87 MB</div>
                                </div>
                            </div>
                            <button onClick={() => setShow(false)} className="text-slate-500 hover:text-slate-700 dark:text-white">
                                <Icon className="text-2xl" name="cross"></Icon>
                            </button>
                        </div>
                        <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex items-center">
                                <label className="text-sm text-slate-400 pe-4">To</label>
                                <input type="text" className="block w-full text-sm placeholder-slate-300 bg-transparent leading-4.5 p-0 border-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none" placeholder="Email or Name" />
                                <Button size="sm" variant="white-outline" className="whitespace-nowrap">Can View</Button>
                            </div>
                        </div>
                        <div className="px-5 sm:px-6 py-5 sm:py-6">
                            <textarea className="block w-full text-sm leading-4.5 p-0 min-h-[200px] text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border-0 focus:border-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:shadow-none disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none" placeholder="Add a Message (optional)"></textarea>
                        </div>
                        <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-900 rounded-b-[inherit]">
                            <div className="flex items-center justify-end flex-wrap gap-3">
                                <ul className="flex items-center gap-5">
                                    <li><Button onClick={() => setShow(false)} size="rg" variant="light" className="bg-white">Cancel</Button></li>
                                    <li><Button onClick={() => setShow(false)} size="rg" variant="primary">Share</Button></li>
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

export default FileShareModal