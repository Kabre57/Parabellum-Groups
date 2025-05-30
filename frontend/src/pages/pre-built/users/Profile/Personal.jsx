import React, { Fragment, useState } from 'react'
import { Dialog, Transition, Tab } from '@headlessui/react'
import { Button, Form, Icon, Input, Select, Switch, Picker } from '../../../../componenets'

const Personal = ({pageAside}) => {
    let [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div className="flex justify-between items-center pb-6 sm:pb-10 gap-x-6">
            <div className="relative">
                <h5 className="text-2xl font-heading mb-2 font-bold leading-tighter tracking-tight text-slate-700 dark:text-white">Personal Information</h5>
                <p className="text-slate-600 dark:text-slate-400">Basic info, like your name and address, that you use on Nio Platform.</p>
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
        <div className="mb-8 last:mb-0">
            <div className="py-2 px-5 bg-gray-100 dark:bg-gray-900 rounded">
                <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Basics</h6>
            </div>
            <div className="modal-toggle group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800" onClick={() => setIsOpen(true)}>
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Full Name</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">Abu Bin Ishtiyak</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 group-hover:before:h-8 group-hover:before:w-8 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 before:dark:bg-gray-900 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-white">
                        <Icon className="text-base rtl:-scale-x-100" name="forward-ios" />
                    </span>
                </div>
            </div>
            <div className="modal-toggle group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800" onClick={() => setIsOpen(true)}>
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Display Name</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">Ishtiyak</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 group-hover:before:h-8 group-hover:before:w-8 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 before:dark:bg-gray-900 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-white">
                        <Icon className="text-base rtl:-scale-x-100" name="forward-ios" />
                    </span>
                </div>
            </div>
            <div className="group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Email</span>
                    <span className="text-sm/6 text-slate-600 dark:text-slate-300 block md:w-1/2">info@softnio.com</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 text-slate-400 group-hover:text-slate-600">
                        <Icon className="text-base rtl:-scale-x-100" name="lock-alt" />
                    </span>
                </div>
            </div>
            <div className="modal-toggle group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800" onClick={() => setIsOpen(true)}>
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Phone Number</span>
                    <span className="text-sm/6 text-slate-400 dark:text-slate-600 block md:w-1/2">Not add yet</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 group-hover:before:h-8 group-hover:before:w-8 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 before:dark:bg-gray-900 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-white">
                        <Icon className="text-base rtl:-scale-x-100" name="forward-ios" />
                    </span>
                </div>
            </div>
            <div className="modal-toggle group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800" onClick={() => setIsOpen(true)}>
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Date of Birth</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">29 Feb, 1986</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 group-hover:before:h-8 group-hover:before:w-8 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 before:dark:bg-gray-900 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-white">
                        <Icon className="text-base rtl:-scale-x-100" name="forward-ios" />
                    </span>
                </div>
            </div>
            <div className="modal-toggle group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800" onClick={() => setIsOpen(true)}>
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Address</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">2337 Kildeer Drive,<br />Kentucky, Canada</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <span className="inline-flex items-center justify-center isolate relative h-8 w-8 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 group-hover:before:h-8 group-hover:before:w-8 before:rounded-full before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 before:dark:bg-gray-900 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-white">
                        <Icon className="text-base rtl:-scale-x-100" name="forward-ios" />
                    </span>
                </div>
            </div>
        </div>
        <div className="mb-8 last:mb-0">
            <div className="py-2 px-5 bg-gray-100 dark:bg-gray-900 rounded">
                <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Preferences</h6>
            </div>
            <div className="group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Language</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">English (United State)</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700">Change Language</a>
                </div>
            </div>
            <div className="group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Date Format</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">M d, YYYY</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700">Change</a>
                </div>
            </div>
            <div className="group px-5 py-4 md:py-6 flex items-center border-b last:border-b-0 border-gray-200 dark:border-gray-800">
                <div className="md:flex md:items-center flex-grow">
                    <span className="text-sm/6 text-slate-400 group-hover:text-slate-600 group-hover:dark:text-slate-300 transition-all duration-300 block md:w-1/2">Timezone</span>
                    <span className="text-sm/6 text-slate-600 group-hover:text-slate-700 dark:text-white group-hover:dark:text-slate-200 transition-all duration-300 block md:w-1/2">Bangladesh (GMT +6)</span>
                </div>
                <div className="md:flex md:items-center flex-grow-0 ms-auto md:justify-end md:w-[200px] md:text-end">
                    <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700">Change</a>
                </div>
            </div>
        </div>
        
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[5000]" onClose={() => setIsOpen(false)}>
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
                            <button onClick={() => setIsOpen(false)} className="modal-close [&>*]:pointer-events-none absolute top-4 end-4 text-slate-500 hover:text-slate-700 dark:text-white">
                                <Icon className="text-xl" name="cross" />
                            </button>
                            <div className="px-5 py-6 sm:p-15">
                                <Tab.Group>
                                    <h5 className="text-xl font-bold font-heading text-slate-700 dark:text-white">Update Profile</h5>
                                    <Tab.List as="ul" className="tab-nav flex flex-wrap font-heading text-sm border-b border-gray-300 dark:border-gray-900">
                                        <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                                            <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600" data-target="#personal-info">Personal</Tab>
                                        </li>
                                        <li className="tab-item pe-5 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                                            <Tab className="tab-toggle inline-flex items-center text-sm font-bold py-4 relative -mb-px text-slate-600 dark:text-slate-400 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 ui-selected:after:opacity-100 ui-selected:text-primary-600" data-target="#personal-address">Address</Tab>
                                        </li>
                                    </Tab.List>
                                    <Tab.Panels className="tab-content mt-5">
                                        <Tab.Panel>
                                            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="FullName">Full Name</Form.Label>
                                                        <Input.Wrap>
                                                            <Input defaultValue="Abu Bin Ishtiyak" id="FullName" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="DisplayName">Display Name</Form.Label>
                                                        <Input.Wrap>
                                                            <Input defaultValue="Ishtiyak" id="DisplayName" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="PhoneNumber">Phone Number</Form.Label>
                                                        <Input.Wrap>
                                                            <Input defaultValue="+880" id="PhoneNumber" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="DateofBirth">Date of Birth</Form.Label>
                                                        <Input.Wrap>
                                                            <Picker.Date id="DateofBirth" placeholder="dd/mm/yyyy" startView={2} />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12">
                                                    <Switch id="checkDisplayNmae">Use full name to display</Switch>
                                                </div>
                                                <div className="col-span-12">
                                                    <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-6 gap-y-1.5">
                                                        <li>
                                                            <Button onClick={() => setIsOpen(false)} variant="primary" size="lg">Update Profile</Button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => setIsOpen(false)} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-slate-400 hover:text-slate-300">Cancel</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Panel>
                                        <Tab.Panel>
                                            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="AddressLine1">Address Line 1</Form.Label>
                                                        <Input.Wrap>
                                                            <Input defaultValue="2337 Kildeer Drive" id="AddressLine1" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="AddressLine2">Address Line 2</Form.Label>
                                                        <Input.Wrap>
                                                            <Input id="AddressLine2" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="State">State</Form.Label>
                                                        <Input.Wrap>
                                                            <Input defaultValue="Kentucky" id="State" />
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12 md:col-span-6">
                                                    <Form.Group>
                                                        <Form.Label className="mb-2" for="DateofBirth">Country</Form.Label>
                                                        <Input.Wrap>
                                                            <Select>
                                                                <Select.Option>Canada</Select.Option>
                                                                <Select.Option>United State</Select.Option>
                                                                <Select.Option>United Kindom</Select.Option>
                                                                <Select.Option>Australia</Select.Option>
                                                                <Select.Option>India</Select.Option>
                                                                <Select.Option>Bangladesh</Select.Option>
                                                            </Select>
                                                        </Input.Wrap>
                                                    </Form.Group>
                                                </div>
                                                <div className="col-span-12">
                                                    <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-6 gap-y-1.5">
                                                        <li>
                                                            <Button onClick={() => setIsOpen(false)} variant="primary" size="lg">Update Address</Button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => setIsOpen(false)} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-slate-400 hover:text-slate-300">Cancel</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        
    </>
  )
}

export default Personal