import React, { Fragment, useState } from 'react'
import { Dialog, Transition, Tab } from '@headlessui/react'
import { Head, Block, Button, Card, Icon, CheckBox, Form, Input, Picker, Switch, Select } from '../../../componenets'


const ModalPage = () => {
  let [isDefaultModal, setIsDefaultModal] = useState(false);
  let [isSmallModal, setIsSmallModal] = useState(false);
  let [isLargeModal, setIsLargeModal] = useState(false);
  let [isTopModal, setIsTopModal] = useState(false);
  let [isBottomModal, setIsBottomModal] = useState(false);
  let [isZoomModal, setIsZoomModal] = useState(false);
  let [isFormModal, setIsFormModal] = useState(false);
  let [isTabsModal, setIsTabsModal] = useState(false);
  let [isSuccessModal, setIsSuccessModal] = useState(false);
  let [isDangerModal, setIsDangerModal] = useState(false);
  return (
    <>
        <Head title="Modals" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Modals</Block.TitleLg>
            <Block.LeadText>Here we are utilizing  <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://headlessui.com/react/dialog">HeadlessUI Dialog</a>  component.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Base Examples</Block.Title>
                <Block.Text>
                    Following are basic example of modals, just toggle a working modal demo by clicking the buttons below.
                </Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap gap-5">
                <>
                    <Button onClick={() => setIsDefaultModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Default</span></Button> 
                    <Transition appear show={isDefaultModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsDefaultModal(false)}>
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
                                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                    <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsDefaultModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <>
                    <Button onClick={() => setIsSmallModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Small</span></Button> 
                    <Transition appear show={isSmallModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsSmallModal(false)}>
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
                                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[360px] mx-auto text-start">
                                    <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsSmallModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <>
                    <Button onClick={() => setIsLargeModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Large</span></Button> 
                    <Transition appear show={isLargeModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsLargeModal(false)}>
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
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsLargeModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <>
                    <Button onClick={() => setIsTopModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Top</span></Button> 
                    <Transition appear show={isTopModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsTopModal(false)}>
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
                                <div className="flex min-h-full items-start justify-center p-5 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 -translate-y-6"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-6"
                                >
                                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                    <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsTopModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <>
                    <Button onClick={() => setIsBottomModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Bottom</span></Button> 
                    <Transition appear show={isBottomModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsBottomModal(false)}>
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
                                <div className="flex min-h-full items-end justify-center p-5 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 -translate-y-6"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-6"
                                >
                                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                    <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsBottomModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                <>
                    <Button onClick={() => setIsZoomModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal Zoom</span></Button> 
                    <Transition appear show={isZoomModal} as={Fragment}>
                        <Dialog as="div" className="relative z-[5000]" onClose={() => setIsZoomModal(false)}>
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
                                <div className="flex min-h-full items-center justify-center p-5 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                    <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                        <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Modal Title</h5>
                                        <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsZoomModal(false)}>
                                            <Icon  className="text-2xl" name="cross" />
                                        </button>
                                    </div>
                                    <div className="px-5 sm:px-6 py-5 sm:py-6">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique earum necessitatibus nesciunt! Quia id expedita asperiores voluptatem odit quis fugit sapiente assumenda sunt voluptatibus atque facere autem, omnis explicabo.</p>
                                    </div>
                                    <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                        <span className="text-sm text-slate-400">Modal Footer Text</span>
                                    </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Use Case Modal</Block.Title>
                <Block.Text>Some use-case example of modals that helps in develop your projects.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap gap-5">
                    <>
                        <Button onClick={() => setIsFormModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="primary"><span>Modal With Form</span></Button> 
                        <Transition appear show={isFormModal} as={Fragment}>
                            <Dialog as="div" className="relative z-[5000]" onClose={() => setIsFormModal(false)}>
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
                                        <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                        <div className="flex flex-shrink-0 items-center justify-between px-5 sm:px-6 py-4 rounded-t-[inherit] border-b border-gray-200 dark:border-gray-800">
                                            <h5 className="text-xl -tracking-snug font-sans font-bold text-slate-700 dark:text-white">Customer Info</h5>
                                            <button className="[&>*]:pointer-events-none text-slate-500 hover:text-slate-700 dark:text-white" onClick={() => setIsFormModal(false)}>
                                                <Icon  className="text-2xl" name="cross" />
                                            </button>
                                        </div>
                                        <div className="px-5 sm:px-6 py-5 sm:py-6">
                                            <Form>
                                            <Form.Group>
                                                <Form.Label className="mb-2" htmlFor="ciFullName">Full Name</Form.Label>
                                                    <Input.Wrap>
                                                        <Input id="ciFullName" />
                                                    </Input.Wrap>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="mb-2" htmlFor="ciEmailAddress">Email address</Form.Label>
                                                    <Input.Wrap>
                                                        <Input id="ciEmailAddress" />
                                                    </Input.Wrap>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="mb-2" htmlFor="ciPhoneNo">Phone No</Form.Label>
                                                    <Input.Wrap>
                                                        <Input id="ciPhoneNo" />
                                                    </Input.Wrap>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="mb-2">Communication</Form.Label>
                                                    <div className="flex flex-wrap gap-4 pt-2">
                                                        <CheckBox id="ciEmail" size="sm">Email</CheckBox>
                                                        <CheckBox id="ciSMS" size="sm">SMS</CheckBox>
                                                        <CheckBox id="ciPhone" size="sm">Phone</CheckBox>
                                                    </div>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="mb-2" htmlFor="ciAmount">Amount</Form.Label>
                                                    <Input.Wrap>
                                                        <Input id="ciAmount" />
                                                    </Input.Wrap>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Button size="lg" variant="primary">Save Informations</Button>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className="px-5 sm:px-6 py-4 bg-gray-200 dark:bg-gray-1000 rounded-b-[inherit] text-end">
                                            <span className="text-sm text-slate-400">Modal Footer Text</span>
                                        </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </>
                    <>
                        <Button onClick={() => setIsTabsModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="dark"><span>Modal With Form</span></Button> 
                        <Transition appear show={isTabsModal} as={Fragment}>
                            <Dialog as="div" className="relative z-[5000]" onClose={() => setIsTabsModal(false)}>
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
                                            <button onClick={() => setIsTabsModal(false)} className="modal-close [&>*]:pointer-events-none absolute top-4 end-4 text-slate-500 hover:text-slate-700 dark:text-white">
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
                                                                            <Button onClick={() => setIsTabsModal(false)} variant="primary" size="lg">Update Profile</Button>
                                                                        </li>
                                                                        <li>
                                                                            <button onClick={() => setIsTabsModal(false)} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-slate-400 hover:text-slate-300">Cancel</button>
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
                                                                            <Button onClick={() => setIsTabsModal(false)} variant="primary" size="lg">Update Address</Button>
                                                                        </li>
                                                                        <li>
                                                                            <button onClick={() => setIsTabsModal(false)} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-slate-400 hover:text-slate-300">Cancel</button>
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
                    <>
                        <Button onClick={() => setIsSuccessModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="green"><span>Modal Success</span></Button> 
                        <Transition appear show={isSuccessModal} as={Fragment}>
                            <Dialog as="div" className="relative z-[5000]" onClose={() => setIsSuccessModal(false)}>
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
                                        <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                            <button onClick={() => setIsSuccessModal(false)} className="modal-close [&>*]:pointer-events-none absolute top-4 end-4 text-slate-500 hover:text-slate-700 dark:text-white">
                                                <Icon className="text-xl" name="cross" />
                                            </button>
                                            <div className="px-5 py-6 sm:p-15">
                                                <div className="text-center">
                                                    <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-green-600 h-20 w-20 rounded-full font-normal mx-auto">
                                                        <em className="text-3xl/none ni ni-check"></em>
                                                    </div>
                                                    <h4 className="font-sans font-bold text-xl lg:text-2xl text-slate-700 dark:text-white py-6">Congratulations!</h4>
                                                    <div className="mb-5">
                                                        <div className="text-base/tight -tracking-snug text-slate-600 dark:text-slate-200 mb-2">You’ve successfully bought <strong>0.5968</strong> BTC for <strong>200.00</strong> USD</div>
                                                        <span className="text-xs text-slate-400">Learn when you reciveve bitcoin in your wallet. <a className="text-primary-500 hover:text-primary-700" href="#"> Click here</a></span>
                                                    </div>
                                                    <Button onClick={() => setIsSuccessModal(false)} size="lg" variant="primary" className="justify-center min-w-[140px]">OK</Button>
                                                </div>
                                            </div>
                                            <div className="px-5 sm:px-6 py-5 bg-gray-100 dark:bg-gray-1000 rounded-b-[inherit] text-center">
                                                <p className="text-sm text-slate-400">Earn upto $25 for each friend your refer! <a className="text-primary-500 hover:text-primary-700" href="#">Invite friends</a></p>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </>
                    <>
                        <Button onClick={() => setIsDangerModal(true)} className="[&>*]:pointer-events-none" size="rg" variant="red"><span>Modal Danger</span></Button> 
                        <Transition appear show={isDangerModal} as={Fragment}>
                            <Dialog as="div" className="relative z-[5000]" onClose={() => setIsDangerModal(false)}>
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
                                        <Dialog.Panel className="bg-white dark:bg-gray-950 rounded-md w-full sm:w-[520px] mx-auto text-start">
                                            <button onClick={() => setIsDangerModal(false)} className="modal-close [&>*]:pointer-events-none absolute top-4 end-4 text-slate-500 hover:text-slate-700 dark:text-white">
                                                <Icon className="text-xl" name="cross" />
                                            </button>
                                            <div className="px-5 py-6 sm:p-15">
                                                <div className="text-center">
                                                    <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-red-600 h-20 w-20 rounded-full font-normal mx-auto">
                                                        <em className="text-3xl/none ni ni-cross"></em>
                                                    </div>
                                                    <h4 className="font-sans font-bold text-xl lg:text-2xl text-slate-700 dark:text-white py-6">Unable to Process!</h4>
                                                    <div className="mb-5">
                                                        <div className="text-base -tracking-snug text-slate-600 dark:text-slate-200 mb-2">We are sorry, we were unable to process your payment. Please try after sometimes.</div>
                                                        <span className="text-sm text-slate-400">If you need help please contact us at (855) 485-7373.</span>
                                                    </div>
                                                    <Button onClick={() => setIsDangerModal(false)} size="lg" variant="light" href="#" className="justify-center min-w-[140px]">Return</Button>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default ModalPage