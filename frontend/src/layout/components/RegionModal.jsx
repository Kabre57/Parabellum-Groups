import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useLocation } from 'react-router-dom'


const RegionModal = () => {
    const location = useLocation();
    let [isOpen, setIsOpen] = useState(false)

    const countries = [
        {
            flag: "/images/flags/arg.png",
            name: "Argentina"
        },
        {
            flag: "/images/flags/aus.png",
            name: "Australia"
        },
        {
            flag: "/images/flags/bangladesh.png",
            name: "Bangladesh"
        },
        {
            flag: "/images/flags/canada.png",
            name: "Canada",
            language: "English"
        },
        {
            flag: "/images/flags/china.png",
            name: "Centrafricaine"
        },
        {
            flag: "/images/flags/china.png",
            name: "China"
        },
        {
            flag: "/images/flags/french.png",
            name: "France"
        },
        {
            flag: "/images/flags/germany.png",
            name: "Germany"
        },
        {
            flag: "/images/flags/iran.png",
            name: "Iran"
        },
        {
            flag: "/images/flags/italy.png",
            name: "Italy"
        },
        {
            flag: "/images/flags/mexico.png",
            name: "México"
        },
        {
            flag: "/images/flags/philipine.png",
            name: "Philippines"
        },
        {
            flag: "/images/flags/portugal.png",
            name: "Portugal"
        },
        {
            flag: "/images/flags/s-africa.png",
            name: "South Africa"
        },
        {
            flag: "/images/flags/spanish.png",
            name: "Spain"
        },
        {
            flag: "/images/flags/switzerland.png",
            name: "Switzerland"
        },
        {
            flag: "/images/flags/uk.png",
            name: "United Kingdom"
        },
        {
            flag: "/images/flags/english.png",
            name: "United State"
        },
    ]

    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])
    

  return (
    <>
    <button onClick={() => setIsOpen(true)} className="modal-toggle [&>*]:pointer-events-none relative inline-flex items-center transition-all duration-300 px-4 py-2 text-primary-500 text-sm"><em className="text-lg ni ni-globe"></em><span className="ms-1">Select Region</span></button>
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
                <div className="fixed inset-0 bg-black/25" />
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
                            <em className="text-xl ni ni-cross"></em>
                        </button>
                        <div className="px-5 sm:px-6 py-5 sm:py-6 md:p-9">
                            <h5 className="text-xl font-bold font-heading text-slate-700 dark:text-white mb-3 pe-6">Select Your Country</h5>
                            <ul className="grid grid-flow-dense xs:grid-cols-2 md:grid-cols-3 gap-3">
                                {countries.map((item,index)=> {
                                    return(
                                        <li key={index}>
                                            <a href="#link"  onClick={(e)=> e.preventDefault()} className="flex items-center">
                                                <img src={item.flag} alt={item.name} className="w-5 me-3"/>
                                                <span className="text-base text-slate-600 dark:text-slate-200">{item.name} {item.language && <small>({item.language})</small>}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
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

export default RegionModal