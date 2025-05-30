import React, {useEffect, useState} from 'react'
import {Avatar, Button, Card, Head, Icon, PageHead} from "../../../componenets";
import { useParams } from "react-router-dom";
import { toInitials } from '../../../utilities';
import { userData } from '../../../store/users';
import SimpleBar from 'simplebar-react';

const UserDetailsPage = () => {
    const [data, setData] = useState([]);
    const [pageAside, setPageAside] = useState(false);

    let {userId} = useParams();
    // grabs the id of the url and loads the corresponding data
    useEffect(() => {
      const id = userId;
      if (id !== undefined || null || "") {
        let user = userData.find((item) => item.id === Number(id));
        if (user) {
            setData(user)
        }
      } else {
        setData(userData[0])
      }
    }, [userId]);

    useEffect(() => {
        const handleAside = () => {
            if (window.innerWidth > 1535) {
              setPageAside(false);
            }
        }
    
        handleAside();
        window.addEventListener('resize', handleAside);
        return () => {
         window.removeEventListener('resize', handleAside);
        };
    }, []);

    useEffect(() => {
        pageAside ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
      }, [pageAside])
  return (
    <>
        <Head title="Users Details" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Users / <strong className="text-primary-600 text-2xl font-normal">{data.name}</strong></PageHead.Title>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
                    <li>User ID: <span className="text-slate-600 dark:text-slate-400">UD003054</span></li>
                    <li>Last Login: <span className="text-slate-600 dark:text-slate-400">{data.lastLogin}, 01:02 PM</span></li>
                </ul>
            </PageHead.Group>
            <PageHead.Group>
                <Button as="Link" size="rg" variant="white-outline" className="hidden sm:inline-flex" to="/user-card">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                    <span className="ms-3">Back</span>
                </Button>
                <Button as="Link" size="rg" variant="white-outline" className="sm:hidden" icon to="/user-card">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                </Button>
            </PageHead.Group>
        </PageHead>
        <Card className="h-full">
            <div className="relative flex">
                <div className="flex-grow">
                    <ul className="flex flex-wrap items-center font-heading text-sm border-b border-gray-300 dark:border-gray-900 px-5 sm:px-6">
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                            <button className="inline-flex items-center text-sm font-bold py-4 max-sm:px-1 max-md:px-2 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 [&.active]:after:opacity-100 [&.active]:text-primary-600 active">
                                <em className="text-xl ni ni-user-circle"></em>
                                <span className="ms-2 max-md:hidden">Personal</span>
                            </button>
                        </li>
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                            <button className="inline-flex items-center text-sm font-bold py-4 max-sm:px-1 max-md:px-2 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 [&.active]:after:opacity-100 [&.active]:text-primary-600">
                                <em className="text-xl ni ni-repeat"></em>
                                <span className="ms-2 max-md:hidden">Transactions</span>
                            </button>
                        </li>
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                            <button className="inline-flex items-center text-sm font-bold py-4 max-sm:px-1 max-md:px-2 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 [&.active]:after:opacity-100 [&.active]:text-primary-600">
                                <em className="text-xl ni ni-file-text"></em>
                                <span className="ms-2 max-md:hidden">Documents</span>
                            </button>
                        </li>
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                            <button className="inline-flex items-center text-sm font-bold py-4 max-sm:px-1 max-md:px-2 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 [&.active]:after:opacity-100 [&.active]:text-primary-600">
                                <em className="text-xl ni ni-bell"></em>
                                <span className="ms-2 max-md:hidden">Notifications</span>
                            </button>
                        </li>
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0">
                            <button className="inline-flex items-center text-sm font-bold py-4 max-sm:px-1 max-md:px-2 relative -mb-px text-slate-600 after:absolute after:h-0.75 after:bg-primary-600 after:inset-x-0 after:bottom-0 after:opacity-0 [&.active]:after:opacity-100 [&.active]:text-primary-600">
                                <em className="text-xl ni ni-activity"></em>
                                <span className="ms-2 max-md:hidden">Activities</span>
                            </button>
                        </li>
                        <li className="pe-4 md:pe-6 lg:pe-7 xl:pe-9 last:pe-0 ms-auto 2xl:hidden">
                            <div className="py-2">
                                <Button.Zoom  
                                    onClick={()=>{
                                        setPageAside(!pageAside)
                                    }} 
                                    className="-me-2">
                                    <Icon className="text-xl" name="user-list-fill" />
                                </Button.Zoom>
                            </div>
                        </li>
                    </ul>
                    <div className="p-5 sm:p-6">
                        <div className="pb-7 md:pb-8">
                            <h5 className="text-xl font-heading mb-2 font-bold leading-tighter text-slate-700 dark:text-white">Personal Information</h5>
                            <p className="text-slate-600 dark:text-slate-400">Basic info, like your name and address, that you use on Nio Platform.</p>
                        </div>
                        <div className="flex flex-wrap 2xl:max-w-5xl -my-2 md:-mx-6 lg:-mx-12 overflow-hidden">
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Title</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">Mr.</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Full Name</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.name}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Date of Birth</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.dob}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Surname</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">IO</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Mobile Number</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.phone}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Email Address</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.email}</span>
                                </div>
                            </div>
                        </div>
                        <h6 className="text-slate-600 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-5 mt-6">
                            Additional Information
                        </h6>
                        <div className="flex flex-wrap 2xl:max-w-5xl -my-2 md:-mx-6 lg:-mx-12 overflow-hidden">
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Joining Date</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">08-16-2018 09:04PM</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Reg Method</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">Email</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Country</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.country}</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 py-2 md:py-3 md:px-6 lg:px-12">
                                <div className="flex justify-between gap-2">
                                    <span className="text-slate-400 -tracking-snug">Nationality</span>
                                    <span className="font-medium text-slate-600 dark:text-slate-300">{data.country}</span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t block border-gray-300 dark:border-gray-900 my-6"></div>
                        <div className="flex items-center justify-between pb-4 gap-2">
                            <h5 className="text-xl -tracking-snug font-heading leading-tighter font-bold text-slate-700 dark:text-white">Admin Note</h5>
                            <a href="#link" onClick={(e)=> e.preventDefault()} className="text-sm font-medium leading-none whitespace-nowrap text-primary-600 hover:text-primary-700">+ Add Note</a>
                        </div>

                        <div className="flex flex-col gap-7">
                            <div>
                                <div className="py-4 px-5 sm:py-5 sm:px-6 bg-slate-50 dark:bg-gray-900 rounded">
                                    <p className="text-slate-600 dark:text-slate-400">Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra. </p>
                                </div>
                                <div className="flex flex-wrap items-center text-xs text-slate-400 dark:text-slate-600 mt-3">
                                    <span>Added on <span className="text-slate-600 dark:text-slate-400">November 18, 2019</span> at <span className="text-slate-600 dark:text-slate-400">5:34 PM</span></span>
                                    <span className="px-1">|</span>
                                    <span>By <span className="text-slate-600 dark:text-slate-400">Softnio</span></span>
                                    <a href="#link" onClick={(e)=> e.preventDefault()} className="ms-3 text-xs font-medium leading-none whitespace-nowrap text-red-600 hover:text-red-700">Delete Note</a>
                                </div>
                            </div>
                            <div>
                                <div className="py-4 px-5 sm:py-5 sm:px-6 bg-slate-50 dark:bg-gray-900 rounded">
                                    <p className="text-slate-600 dark:text-slate-400">Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra. </p>
                                </div>
                                <div className="flex flex-wrap items-center text-xs text-slate-400 dark:text-slate-600 mt-3">
                                    <span>Added on <span className="text-slate-600 dark:text-slate-400">November 18, 2019</span> at <span className="text-slate-600 dark:text-slate-400">5:34 PM</span></span>
                                    <span className="px-1">|</span>
                                    <span>By <span className="text-slate-600 dark:text-slate-400">Softnio</span></span>
                                    <a href="#link" onClick={(e)=> e.preventDefault()} className="ms-3 text-xs font-medium leading-none whitespace-nowrap text-red-600 hover:text-red-700">Delete Note</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pageAside" className={`peer min-w-[260px] max-w-[calc(100%-2.5rem)] w-[300px] 2xl:w-[380px] min-h-screen bg-white dark:bg-gray-950 2xl:bg-transparent border-s border-gray-300 dark:border-gray-900 flex-shrink-0 fixed 2xl:static top-0 end-0 z-[999] transition-transform duration-500 2xl:transition-none translate-x-full rtl:-translate-x-full [&.active]:transform-none 2xl:transform-none 2xl:rtl:transform-none ${pageAside ? "active" : ''}`}>
                    <SimpleBar className="max-2xl:mt-16 max-2xl:max-h-[calc(100vh-theme(spacing.16))]">
                        <div className="flex flex-col items-center text-center p-5 sm:px-6 sm:py-8 border-b border-gray-300 dark:border-gray-900">
                            {data.img ? <Avatar size="2xl" rounded img={data.img}/> : <Avatar variant={data.theme} size="2xl" rounded text={data.name && toInitials(data.name)}/>}
                            <div className="mt-4">
                                <span className="relative inline-flex rounded-full px-2 border border-gray-300 dark:border-gray-900 text-slate-400 text-xxs text-center font-medium leading-4.5 tracking-snug whitespace-nowrap align-middle uppercase">{data.role}</span>
                                <h6 className="text-xl text-slate-700 dark:text-white font-bold font-heading leading-tighter mb-2 mt-4">{data.name}</h6>
                                <span className="text-sm text-slate-400">{data.email}</span>
                            </div>
                        </div>
                        <div className="px-5 py-3 sm:px-6 border-b border-gray-300 dark:border-gray-900">
                            <ul className="flex flex-wrap justify-center gap-1.5">
                                <li>
                                    <Button.Zoom>
                                        <Icon className="text-lg" name="shield-off" />
                                    </Button.Zoom>
                                </li>
                                <li>
                                    <Button.Zoom>
                                        <Icon className="text-lg" name="mail" />
                                    </Button.Zoom>
                                </li>
                                <li>
                                    <Button.Zoom>
                                        <Icon className="text-lg" name="download-cloud" />
                                    </Button.Zoom>
                                </li>
                                <li>
                                    <Button.Zoom>
                                        <Icon className="text-lg" name="bookmark" />
                                    </Button.Zoom>
                                </li>
                                <li>
                                    <Button.Zoom>
                                        <Icon className="text-lg text-red-600" name="na" />
                                    </Button.Zoom>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                            <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-3">In Account </h6>
                            <div className="flex items-end -mx-3">
                                <div className="flex gap-x-2 px-3 text-sm text-slate-400">
                                    <div className="flex flex-col">
                                        <div className="text-xl text-slate-700 dark:text-white font-bold leading-6 whitespace-nowrap">
                                            2,500.00
                                            <span className="text-lg leading-6 font-normal"> USD</span>
                                        </div>
                                        <div className="text-xs mt-2">Invested Amount</div>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 px-3 text-sm text-slate-400">
                                    <span className="text-slate-400 text-base"><em className="ni ni-plus"></em></span>
                                    <div className="flex flex-col">
                                        <div className="text-xl text-slate-700 dark:text-white font-bold leading-6 whitespace-nowrap">1,643.76</div>
                                        <div className="text-xs mt-2">Profit Earned</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                            <div className="grid grid-flow-dense grid-cols-12">
                                <div className="col-span-4">
                                    <div className="text-center">
                                        <span className="block text-lg text-slate-600 dark:text-white font-bold">23</span>
                                        <span className="block text-xs leading-5 text-slate-400">Total Order</span>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="text-center">
                                        <span className="block text-lg text-slate-600 dark:text-white font-bold">20</span>
                                        <span className="block text-xs leading-5 text-slate-400">Complete</span>
                                    </div>
                                </div>
                                <div className="col-span-4">
                                    <div className="text-center">
                                        <span className="block text-lg text-slate-600 dark:text-white font-bold">3</span>
                                        <span className="block text-xs leading-5 text-slate-400">Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 sm:p-6 border-b border-gray-300 dark:border-gray-900">
                            <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-3">Additional </h6>
                            <div className="grid grid-flow-dense grid-cols-12 gap-4">
                                <div className="col-span-6">
                                    <span className="block text-xs text-slate-400">User ID:</span>
                                    <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">UD003054</span>
                                </div>
                                <div className="col-span-6">
                                    <span className="block text-xs text-slate-400">Last Login:</span>
                                    <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">{data.lastLogin}, 01:02 PM</span>
                                </div>
                                <div className="col-span-6">
                                    <span className="block text-xs text-slate-400">KYC Status:</span>
                                    <span className="block text-sm font-bold mt-1 text-green-600">Approved</span>
                                </div>
                                <div className="col-span-6">
                                    <span className="block text-xs text-slate-400">Register At:</span>
                                    <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">Nov 24, 2019</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 sm:p-6">
                            <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-3">Groups </h6>
                            <ul className="flex flex-wrap gap-2">
                                <Button.Group tagName="li">
                                    <Button size="xs" variant="light-pale">investor</Button>
                                    <Button size="xs" variant="light-pale" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                </Button.Group>
                                <Button.Group tagName="li">
                                    <Button size="xs" variant="light-pale">support</Button>
                                    <Button size="xs" variant="light-pale" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                </Button.Group>
                                <Button.Group tagName="li">
                                    <Button size="xs" variant="light-pale">another tag</Button>
                                    <Button size="xs" variant="light-pale" icon><Icon className="text-xs leading-4.5" name="cross" /></Button>
                                </Button.Group>
                            </ul>
                        </div>
                    </SimpleBar>
                </div>
                <div onClick={()=>{
                    setPageAside(false)
                }} className="class-toggle fixed inset-0 bg-slate-950 bg-opacity-20 z-[900] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible 2xl:!opacity-0 2xl:!invisible"></div>
            </div>
        </Card>
    </>
  )
}

export default UserDetailsPage