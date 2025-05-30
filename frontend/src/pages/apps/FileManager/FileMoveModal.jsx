import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Breadcrumb, Button, Icon } from '../../../componenets'
import { fileManagerIcons } from '../../../store/icons'

const FileMoveModal = ({show, setShow}) => {

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
                        <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 pt-4 rounded-t-[inherit]">
                            <h5 className="text-xl font-bold font-heading text-slate-700 dark:text-white">Move item to ...</h5>
                            <button onClick={() => setShow(false)} className="text-slate-500 hover:text-slate-700 dark:text-white">
                                <Icon className="text-2xl" name="cross"></Icon>
                            </button>
                        </div>
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                            <ul className="flex flex-wrap py-1 mb-2">
                                <li className="first:ps-0 ps-2 inline-flex items-center text-slate-300 text-xxs font-medium tracking-wider">
                                    <a className="text-slate-400 hover:text-primary-600" href="#link" onClick={(e)=> e.preventDefault()}>Project</a>
                                    <Icon className="text-slate-400 my-0.5 ms-2 text-xxs/none font-medium rtl:-scale-x-100" name="forward-ios"></Icon>
                                </li>
                                <li className="first:ps-0 ps-2 inline-flex items-center text-slate-300 text-xxs font-medium tracking-wider">Apps</li>
                            </ul>
                            <div className="border border-gray-200 dark:border-gray-800 rounded">
                                <a className="flex items-center px-5 py-2 last:border-b-0 border-b border-gray-200 dark:border-gray-800 [&.selected]:bg-gray-100 [&.selected]:dark:bg-gray-900 first:rounded-t-[inherit] last:rounded-b-[inherit]" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <div className="h-8 [&>svg]:h-full">
                                        {fileManagerIcons.folder}
                                    </div>
                                    <span className="text-sm font-medium ms-3"><span className="line-clamp-1">UI/UX Design</span></span>
                                    <div className="ms-auto inline-flex -me-1"><Icon className="text-base/none rtl:-scale-x-100" name="chevron-right"></Icon></div>
                                </a>
                                <a className="flex items-center px-5 py-2 last:border-b-0 border-b border-gray-200 dark:border-gray-800 [&.selected]:bg-gray-100 [&.selected]:dark:bg-gray-900 first:rounded-t-[inherit] last:rounded-b-[inherit]" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <div className="h-8 [&>svg]:h-full">
                                        {fileManagerIcons.folder}
                                    </div>
                                    <span className="text-sm font-medium ms-3"><span className="line-clamp-1">UI Design</span></span>
                                    <div className="ms-auto inline-flex -me-1"><Icon className="text-base/none rtl:-scale-x-100" name="chevron-right"></Icon></div>
                                </a>
                                <a className="flex items-center px-5 py-2 last:border-b-0 border-b border-gray-200 dark:border-gray-800 [&.selected]:bg-gray-100 [&.selected]:dark:bg-gray-900 first:rounded-t-[inherit] last:rounded-b-[inherit] selected" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <div className="h-8 [&>svg]:h-full">
                                        {fileManagerIcons.folderShared}
                                    </div>
                                    <span className="text-sm font-medium ms-3"><span className="line-clamp-1">Projects</span></span>
                                    <div className="ms-auto inline-flex -me-1"><Icon className="text-base/none rtl:-scale-x-100" name="chevron-right"></Icon></div>
                                </a>
                                <a className="flex items-center px-5 py-2 last:border-b-0 border-b border-gray-200 dark:border-gray-800 [&.selected]:bg-gray-100 [&.selected]:dark:bg-gray-900 first:rounded-t-[inherit] last:rounded-b-[inherit]" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <div className="h-8 [&>svg]:h-full">
                                        {fileManagerIcons.folder}
                                    </div>
                                    <span className="text-sm font-medium ms-3"><span className="line-clamp-1">2019 Project</span></span>
                                    <div className="ms-auto inline-flex -me-1"><Icon className="text-base/none rtl:-scale-x-100" name="chevron-right"></Icon></div>
                                </a>
                            </div>
                        </div>
                        <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-900 rounded-b-[inherit]">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-all duration-300">Create New Folder</button>
                                <ul className="flex items-center gap-5">
                                    <li><Button onClick={() => setShow(false)} size="rg" variant="light" className="bg-white">Cancel</Button></li>
                                    <li><Button onClick={() => setShow(false)} size="rg" variant="primary">Move</Button></li>
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

export default FileMoveModal