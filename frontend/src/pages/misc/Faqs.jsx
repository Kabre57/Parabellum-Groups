import React from "react";
import { Head } from "../../componenets";
import {
  Accordion,
  AccordionItem,
} from "@szhsin/react-accordion";

const FaqsPage = () => {
  return (
    <>
        <Head title="FAQs" />
        <div className="relative md:max-w-[720px] mx-auto">
            <div className="pb-6 sm:pb-10 text-center sm:max-w-[520px] mx-auto">
                <div className="text-base mb-3 relative font-normal text-slate-400">FAQs</div>
                <h2 className="mb-4 font-normal text-3xl lg:text-4xl leading-tighter tracking-tight text-slate-700 dark:text-white font-heading">Frequently Asked Questions</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">Got a question? Can't find the answer you're looking for? Don't worry, drop us a line on our <a className="text-primary-500 hover:text-primary-600 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>contact page</a>.</p>
            </div>

            <Accordion transition transitionTimeout={250} className="accordion rounded bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
                <AccordionItem
                    className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className={`text-base font-bold font-heading ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>What is DashParabellumGroups?</h6>
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
                    <div className="2xl:me-4 entry text-slate-500">
                        <p>An overview of <strong>DashParabellumGroups</strong> – is fully clean and premium designed admin template which included beautiful hand-crafted components &amp; elements. <strong>DashParabellumGroups</strong> completely focusing on <strong>conceptual base apps</strong> or dashboard, as it’s equipped with pre-built screens as well.</p>
                        <p><strong>DashParabellumGroups</strong> is powerful <strong>admin dashboard</strong> template that especially build for developers and programmers. <strong>DashParabellumGroups</strong> comes with all kind of components, necessary elements and pre-build pages including <strong>3 conceptual apps</strong> screen that helps you to create your web apps or application. </p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className={`text-base font-bold font-heading ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>Do I need a Regular License or an Extended License?</h6>
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
                    <div className="2xl:me-4 entry text-slate-500">
                        <p>If your <strong>end product</strong> including the item is going to be free to the end user then a <strong>Regular License</strong> is what you need. An <strong>Extended License</strong> is required if the <strong>end user</strong> must pay to use the <strong>end product</strong>.</p>
                        <p>You may charge your client for your services to create an end product, even under the <strong>Regular License</strong>. <strong>But you can’t use one of our Standard Licenses on multiple clients or jobs.</strong></p>
                    </div>
                </AccordionItem>
                <AccordionItem
                    className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className={`text-base font-bold font-heading ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>What is Item Support?</h6>
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
                    <div className="2xl:me-4 entry text-slate-500">
                        <p>We always provide <strong>free support for first 6 months</strong> from the purchase date. If you’re about to purchase the item, you’ll have the option to purchase <strong>extended item support</strong>, increasing the item support period up to a <strong>maximum of 12 months</strong> from the date of purchase.</p>
                        <p>Yes, you can! If you have less than <strong>6 months remaining</strong> on a support item you’re eligible to renew your support.</p>
                        <h6>What else is included?</h6>
                        <ul className="prose-li:relative prose-li:py-1 prose-li:ps-5 prose-li:before:absolute prose-li:before:start-0 prose-li:before:top-1 prose-li:before:font-nioicon prose-li:before:content-['\e9b9'] prose-li:before:text-xs prose-li:before:text-primary-600 prose-li:leading-6 prose-li:before:leading-6">
                            <li>Answering all questions including technical about the item</li>
                            <li>Help with defects in the item or included third-party assets</li>
                            <li>Item updates to ensure ongoing compatibility and to resolve security vulnerabilities</li>
                            <li>Updates to ensure the item works as described and is protected against major security concerns</li>
                            <li>Included version updates for all items</li>
                        </ul>
                        <h6>What's not included in item support?</h6>
                        <ul className="prose-li:relative prose-li:py-1 prose-li:ps-5 prose-li:before:absolute prose-li:before:start-0 prose-li:before:top-1 prose-li:before:font-nioicon prose-li:before:content-['\ea02'] prose-li:before:text-xs prose-li:before:text-red-600 prose-li:leading-6 prose-li:before:leading-6">
                            <li>Installation of the item</li>
                            <li>Hosting, server environment, or software</li>
                            <li>Help from authors of included third-party assets</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem
                    className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className={`text-base font-bold font-heading ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>How to download your Item</h6>
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
                    <div className="2xl:me-4 entry text-slate-500">
                        <p>Item should be downloaded <strong>immediately</strong> after <strong>purchasing</strong>. You will get email with <strong>download link</strong> from Envato once you paid.</p>
                        <h6>Also you can download your item:</h6>
                        <ul className="prose-li:relative prose-li:py-1 prose-li:ps-5 prose-li:before:absolute prose-li:before:start-0 prose-li:before:top-1 prose-li:before:font-nioicon prose-li:before:content-['\e980'] prose-li:before:text-xs prose-li:before:text-slate-600 prose-li:leading-6 prose-li:before:leading-6">
                            <li>Hover over your username and click '<strong>Downloads'</strong> from the drop-down menu.</li>
                            <li>The downloads section displays a list of all the items purchased using your account.</li>
                            <li>Click the <strong>'Download'</strong> button next to the item and select <strong>‘Main File(s)’</strong> which contains all files, or <strong>‘Licence Certificate and Purchase Code’</strong> for the item licence information only.</li>
                        </ul>
                    </div>
                </AccordionItem>
                <AccordionItem
                    className="accordion-item border-t border-gray-300 dark:border-gray-900 first:border-t-0"
                    header={({ state: { isEnter } }) => (
                        <>
                            <h6 className={`text-base font-bold font-heading ${isEnter ? 'text-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>What are the benefits of using DashParabellumGroups?</h6>
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
                    <div className="2xl:me-4 entry text-slate-500">
                        <p>If you want to ask questions about our product, or need help using our item you’ve purchased or just want to tell us how much you love our work, that's great!</p>
                        <p>Contact us via email <a href="mailto:info@softnio.com">info(at)softnio.com</a> or Post your comment (are visible to everyone) on our item page after login into your account.</p>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    </>
  );
};
export default FaqsPage;
