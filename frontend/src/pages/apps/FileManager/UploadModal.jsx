import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button, Icon, Progress, File } from '../../../componenets'
import { fileManagerIcons } from '../../../store/icons'

const UploadModal = ({show, setShow}) => {

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
                        <button onClick={() => setShow(false)} className="absolute top-3 end-3 text-slate-500 hover:text-slate-700 dark:text-white">
                            <Icon className="text-xl" name="cross"></Icon>
                        </button>
                        <div className="px-5 py-6 sm:p-8">
                            <div className="mb-9">
                                <h5 className="text-xl font-bold font-heading text-slate-700 dark:text-white mb-4">Upload File</h5>
                                <File.Dropzone id="DropzoneDefault" className="!bg-gray-50 dark:!bg-gray-900">
                                    <div className="dz-message !my-3">
                                        <span className="block text-sm text-primary-600">Drag and drop <span className="text-slate-400"> file here or </span> browse</span>
                                    </div>
                                </File.Dropzone>
                            </div>
                            <h6 className="font-heading font-bold text-base/tighter -tracking-snug text-slate-700 dark:text-white mb-3">Uploaded Files</h6>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center p-2 rounded border border-gray-200 dark:border-gray-800">
                                    <div className="flex-shrink-0 h-12 me-1 [&>svg]:h-full">
                                        {fileManagerIcons.fileZip}
                                    </div>
                                    <div className="flex-grow pe-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm/tighter font-medium text-slate-600 dark:text-white flex items-center">
                                                <span className="line-clamp-1">DashParabellumGroups-latest-version</span>.zip
                                            </span>
                                        </div>
                                        <div className="text-xs text-slate-400">25.49 MB</div>
                                    </div>
                                    <div className="ms-auto">
                                        <Button.Zoom size="rg">
                                            <Icon className="text-xl text-slate-500 dark:text-slate-300" name="trash" />
                                        </Button.Zoom>
                                    </div>
                                </div>
                                <div className="flex items-center p-2 rounded border border-gray-200 dark:border-gray-800">
                                    <div className="flex-shrink-0 h-12 me-1 [&>svg]:h-full">
                                        {fileManagerIcons.fileDoc}
                                    </div>
                                    <div className="flex-grow pe-3">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm/tighter font-medium text-slate-600 dark:text-white flex items-center">
                                                <span className="line-clamp-1">Update work history</span>.docx
                                            </span>
                                            <span className="text-xs text-slate-400">70% Done</span>
                                        </div>
                                        <Progress size="xs" className="bg-slate-100 dark:bg-slate-900">
                                            <Progress.Bar progress="70%"></Progress.Bar>
                                        </Progress>
                                    </div>
                                    <div className="ms-auto">
                                        <Button.Zoom size="rg">
                                            <Icon className="text-xl text-slate-500 dark:text-slate-300" name="trash" />
                                        </Button.Zoom>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <ul className="flex items-center gap-5">
                                    <li><button onClick={() => setShow(false)} className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-all duration-300">Cancel</button></li>
                                    <li>
                                        <Button size="rg" variant="primary">Add Files</Button>
                                    </li>
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

export default UploadModal