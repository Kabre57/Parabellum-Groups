import React from 'react'
import { Head, Block, Card } from '../../../componenets'
import {
    Accordion,
    AccordionItem,
} from "@szhsin/react-accordion";

const Accordions = () => {
    
  return (
    <>
        <Head title="Accordions" />
        <div className="lg:max-w-[960px] mx-auto">
            <Block.PageHead className="md:max-w-[720px]">
                <Block.Back to="/components">Components</Block.Back>
                <Block.TitleLg>Accordions</Block.TitleLg>
                <Block.LeadText>We are using <a target="_blank" className="text-primary-600" href="https://szhsin.github.io/react-accordion/">@szhsin/react-accordion</a> library for accordion.</Block.LeadText>
            </Block.PageHead>
            <Block>
                <Block.Head>
                    <Block.Title>Default Style</Block.Title>
                    <Block.Text>Checkout our default styles for accordion style.</Block.Text>
                </Block.Head>
                <Card>
                    <Card.Body>
                        <Accordion transition transitionTimeout={250} className="accordion rounded border border-gray-200 dark:border-gray-800">
                            <AccordionItem
                                className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>What is DashParabellumGroups?</h6>
                                        <em className={`absolute end-6 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white font-bold leading-5 h-5 w-5 transition-all duration-300 ni ni-chevron-down ${isEnter ? 'rotate-180' : ''}`}></em>
                                    </>
                                )}
                                initialEntered
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start ps-6 pe-12 py-4 border-gray-200 dark:border-gray-800 w-full ${isEnter && 'border-b'}`,
                                }}
                                panelProps={{ className: "accordion-body px-6 pt-4 pb-5" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>What are some of the benefits of receiving my bill electronically?</h6>
                                        <em className={`absolute end-6 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white font-bold leading-5 h-5 w-5 transition-all duration-300 ni ni-chevron-down ${isEnter ? 'rotate-180' : ''}`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start ps-6 pe-12 py-4 border-gray-200 dark:border-gray-800 w-full ${isEnter && 'border-b'}`,
                                }}
                                panelProps={{ className: "accordion-body px-6 pt-4 pb-5" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>What is the relationship between DashParabellumGroups and payment?</h6>
                                        <em className={`absolute end-6 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white font-bold leading-5 h-5 w-5 transition-all duration-300 ni ni-chevron-down ${isEnter ? 'rotate-180' : ''}`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start ps-6 pe-12 py-4 border-gray-200 dark:border-gray-800 w-full ${isEnter && 'border-b'}`,
                                }}
                                panelProps={{ className: "accordion-body px-6 pt-4 pb-5" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>What are the benefits of using DashParabellumGroups?</h6>
                                        <em className={`absolute end-6 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white font-bold leading-5 h-5 w-5 transition-all duration-300 ni ni-chevron-down ${isEnter ? 'rotate-180' : ''}`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start ps-6 pe-12 py-4 border-gray-200 dark:border-gray-800 w-full ${isEnter && 'border-b'}`,
                                }}
                                panelProps={{ className: "accordion-body px-6 pt-4 pb-5" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Block>
            <Block>
                <Block.Head>
                    <Block.Title>Accordion Style 2</Block.Title>
                    <Block.Text>You can simply use tailwind classes to style your accordion diffrent, like you can remove borders, change colors.</Block.Text>
                </Block.Head>
                <Card>
                    <Card.Body>
                        <Accordion transition transitionTimeout={250} className="accordion">
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What is DashParabellumGroups?</h6>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                initialEntered
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 pe-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What are some of the benefits of receiving my bill electronically?</h6>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 pe-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What is the relationship between DashParabellumGroups and payment?</h6>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute end-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 pe-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Block>
            <Block>
                <Block.Head>
                    <Block.Title>Accordion Style 3</Block.Title>
                    <Block.Text>You can simply use tailwind classes to style your accordion diffrent, like you can remove borders, change colors or maybe place those icons on a diffrent place.</Block.Text>
                </Block.Head>
                <Card>
                    <Card.Body>
                        <Accordion transition transitionTimeout={250} className="accordion">
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What is DashParabellumGroups?</h6>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                initialEntered
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 ps-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body ps-9 py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What are some of the benefits of receiving my bill electronically?</h6>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 ps-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body ps-9 py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                            <AccordionItem
                                className="accordion-item"
                                header={({ state: { isEnter } }) => (
                                    <>
                                        <h6 className={`text-base font-bold ${isEnter ? 'text-primary-600 dark:text-primary-600' : 'text-slate-600 dark:text-slate-300'}`}>What is the relationship between DashParabellumGroups and payment?</h6>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-100' : 'opacity-0'} ni ni-minus`}></em>
                                        <em className={`absolute start-0 top-1/2 -translate-y-1/2 text-base text-center text-slate-700 dark:text-white leading-5 h-5 w-5 transition-all duration-300 ${isEnter ? 'opacity-0' : 'opacity-100'} ni ni-plus`}></em>
                                    </>
                                )}
                                contentProps={{
                                    className: "transition-height duration-200 ease-in-out",
                                }}
                                buttonProps={{
                                    className: ({ isEnter }) =>
                                        `accordion-toggle relative block text-start py-2 ps-9 w-full`,
                                }}
                                panelProps={{ className: "accordion-body ps-9 py-2" }}
                            >
                                <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="text-sm mb-4 last:mb-0 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </AccordionItem>
                        </Accordion>
                    </Card.Body>
                </Card>
            </Block>
        </div>
    </>
  )
}

export default Accordions