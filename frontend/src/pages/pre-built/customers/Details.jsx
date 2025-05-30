import React, {useEffect, useState} from 'react'
import {Avatar, Button, Head, Icon, PageHead} from "../../../componenets";
import { useParams } from "react-router-dom";
import { customerData } from '../../../store/customers';
import { toInitials } from '../../../utilities';
const CustomersDetailsPage = () => {
    const [data, setData] = useState([]);

    let {customerId} = useParams();
    // grabs the id of the url and loads the corresponding data
    useEffect(() => {
      const id = customerId;
      if (id !== undefined || null || "") {
        let customer = customerData.find((item) => item.id === Number(id));
        if (customer) {
            setData(customer)
        }
      } else {
        setData(customerData[0])
      }
    }, [customerId]);
  return (
    <>
        <Head title="Customer Details" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Customer Details</PageHead.Title>
                <PageHead.SubTitle>An example page for customer details.</PageHead.SubTitle>
            </PageHead.Group>
            <PageHead.Group>
                <Button as="Link" size="rg" variant="white-outline" className="hidden sm:inline-flex" to="/customer-list">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                    <span className="ms-3">Back</span>
                </Button>
                <Button as="Link" size="rg" variant="white-outline" className="sm:hidden" icon to="/customer-list">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                </Button>
            </PageHead.Group>
        </PageHead>

        <div className="grid grid-flow-dense grid-cols-12 gap-7">
            <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
                <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                    <div className="flex flex-col items-center text-center p-5 sm:px-6 sm:py-8 border-b border-gray-300 dark:border-gray-900">
                        {data.img ? <Avatar size="2xl" rounded img={data.img}/> : <Avatar variant={data.theme} size="2xl" rounded text={data.name && toInitials(data.name)}/>}
                        <div className="mt-4">
                            <span className="relative inline-flex rounded-full px-2 border border-gray-100 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-white text-xxs text-center font-medium leading-4.5 tracking-snug whitespace-nowrap align-middle uppercase">Platinam</span>
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
                    <div className="p-5 sm:p-6">
                        <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-3">Short Details</h6>
                        <div className="grid grid-flow-dense grid-cols-12 gap-4">
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">User ID:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">UD003054</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">Billing Email:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">billing@softnio.com</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">Billing Address:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">551 Swanston Street, Melbourne
                                    <br />Victoria 3053 Australia</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">Language:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">English, France</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">Last Login:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">15 Feb, 2019 01:02 PM</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">KYC Status:</span>
                                <span className="block text-sm font-bold mt-1 text-green-600">Approved</span>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-12">
                                <span className="block text-xs text-slate-400">Register At:</span>
                                <span className="block text-sm mt-1 text-slate-600 dark:text-slate-200">Nov 24, 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
                <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                    <div className="p-5 sm:p-6">
                        <h6 className="text-slate-400 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight mb-3">In Account </h6>
                        <div className="flex items-end -mx-3 mb-6">
                            <div className="flex gap-x-2 px-3 text-sm text-slate-400">
                                <div className="flex flex-col">
                                    <div className="text-xl text-slate-700 dark:text-white font-bold leading-6 whitespace-nowrap">
                                        237.89
                                        <span className="text-lg leading-6 font-normal">1,643</span>
                                    </div>
                                    <div className="text-xs mt-2">Wallet Balance</div>
                                </div>
                            </div>
                            <div className="flex gap-x-2 px-3 text-sm text-slate-400">
                                <span className="text-slate-400 text-base"><Icon name="plus" /></span>
                                <div className="flex flex-col">
                                    <div className="text-xl text-slate-700 dark:text-white font-bold leading-6 whitespace-nowrap">1,643.76</div>
                                    <div className="text-xs mt-2">Credit Points</div>
                                </div>
                            </div>
                        </div>

                        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4">Recent Orders</h6>
                        <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                            <div className="table border-collapse w-full border-gray-300 dark:border-gray-900"> 
                                <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                                    <div className="table-cell align-middle py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                                        <span className="text-slate-400 text-xs">Order ID</span>
                                    </div>
                                    <div className="hidden sm:table-cell align-middle py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                                        <span className="text-slate-400 text-xs">Product Name</span>
                                    </div>
                                    <div className="hidden 2xl:table-cell align-middle py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                                        <span className="text-slate-400 text-xs">Total Price</span>
                                    </div>
                                    <div className="table-cell align-middle py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                                        <span className="text-slate-400 text-xs">Status</span>
                                    </div>
                                    <div className="table-cell align-middle py-1 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900 text-start">
                                        <span className="text-slate-400 text-xs">Delivery</span>
                                    </div>
                                </div>
                                <div className="table-row [&>*]:border-b [&>*]:last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group">
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700 ms-auto">#4947</a>
                                    </div>
                                    <div className="hidden sm:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <div className="flex items-center">
                                            <div className="relative flex-shrink-0 flex items-center justify-center text-xxs text-white bg-primary-600 h-12 w-12 rounded font-medium">
                                                <img className="rounded" src="/images/product/c.png" alt="" />
                                            </div>
                                            <span className="ms-4 block text-sm font-medium leading-6 text-slate-700 dark:text-white">
                                                Black Mi Band Smartwatch
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hidden 2xl:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm text-slate-400">$ 89.49</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm font-medium text-yellow-600">Shipped</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-xs text-slate-400">In 2 days</span>
                                    </div>
                                </div>
                                <div className="table-row [&>*]:border-b [&>*]:last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group">
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700 ms-auto">#4948</a>
                                    </div>
                                    <div className="hidden sm:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <div className="flex items-center">
                                            <div className="relative flex-shrink-0 flex items-center justify-center text-xxs text-white bg-primary-600 h-12 w-12 rounded font-medium">
                                                <img className="rounded" src="/images/product/b.png" alt="" />
                                            </div>
                                            <span className="ms-4 block text-sm font-medium leading-6 text-slate-700 dark:text-white">
                                                Purple Smartwatch
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hidden 2xl:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm text-slate-400">$299.49</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm font-medium text-green-600">Delivered</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-xs text-slate-400">12 Dec, 2020</span>
                                    </div>
                                </div>
                                <div className="table-row [&>*]:border-b [&>*]:last:border-b-0 transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-1000 group">
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700 ms-auto">#4949</a>
                                    </div>
                                    <div className="hidden sm:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <div className="flex items-center">
                                            <div className="relative flex-shrink-0 flex items-center justify-center text-xxs text-white bg-primary-600 h-12 w-12 rounded font-medium">
                                                <img className="rounded" src="/images/product/a.png" alt="" />
                                            </div>
                                            <span className="ms-4 block text-sm font-medium leading-6 text-slate-700 dark:text-white">
                                                Pink Fitness Tracker
                                            </span>
                                        </div>
                                    </div>
                                    <div className="hidden 2xl:table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm text-slate-400">$99.49</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-sm font-medium text-red-600">Canceled</span>
                                    </div>
                                    <div className="table-cell align-middle py-2 px-2 first:ps-5 last:pe-5 border-gray-300 dark:border-gray-900">
                                        <span className="text-xs text-slate-400">Never</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4 mt-8">Payment Methods</h6>
                        <div className="grid grid-flow-dense grid-cols-12 gap-4">
                            <div className="col-span-12 2xl:col-span-6">
                                <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full">
                                    <div className="p-5 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-primary-600 h-11 w-11 rounded-full font-medium">
                                                    <Icon className="text-2xl" name="visa" />
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="block text-sm font-heading font-bold leading-6 text-slate-700 dark:text-white">
                                                        Visa Card 
                                                        <span className="text-slate-400 font-normal ms-1">**** 1955</span> 
                                                    </h6>
                                                    <span className="block text-xs leading-4 text-slate-400">Expires Nov 2023</span>
                                                </div>
                                            </div>
                                            <ul className="flex flex-nowrap gap-1.5 -me-1.5">
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="edit" />
                                                    </Button.Zoom>
                                                </li>
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="trash" />
                                                    </Button.Zoom>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6">
                                <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full">
                                    <div className="p-5 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-indigo-900 h-11 w-11 rounded-full font-medium">
                                                    <Icon className="text-2xl" name="american-express" />
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="block text-sm font-heading font-bold leading-6 text-slate-700 dark:text-white">
                                                        American Express
                                                        <span className="text-slate-400 font-normal ms-1">**** 4352</span> 
                                                    </h6>
                                                    <span className="block text-xs leading-4 text-slate-400">Expires Feb 2024</span>
                                                </div>
                                            </div>
                                            <ul className="flex flex-nowrap gap-1.5 -me-1.5">
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="edit" />
                                                    </Button.Zoom>
                                                </li>
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="trash" />
                                                    </Button.Zoom>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6">
                                <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full">
                                    <div className="p-5 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-orange-500 h-11 w-11 rounded-full font-medium">
                                                    <Icon className="text-2xl" name="mc" />
                                                </div>
                                                <div className="ms-4">
                                                    <h6 className="block text-sm font-heading font-bold leading-6 text-slate-700 dark:text-white">
                                                        Mastercard
                                                        <span className="text-slate-400 font-normal ms-1">**** 9478</span> 
                                                    </h6>
                                                    <span className="block text-xs leading-4 text-red-600">Expired</span>
                                                </div>
                                            </div>
                                            <ul className="flex flex-nowrap gap-1.5 -me-1.5">
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="edit" />
                                                    </Button.Zoom>
                                                </li>
                                                <li>
                                                    <Button.Zoom>
                                                        <Icon className="text-lg" name="trash" />
                                                    </Button.Zoom>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 2xl:col-span-6">
                                <button className="border border-dashed rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full w-full p-5 sm:p-6">
                                    <span className="text-slate-400">
                                        Add New Card
                                    </span>
                                </button>
                            </div>
                        </div>

                        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4 mt-8">Connect to Facebook</h6>
                        <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                                    <div className="flex items-center gap-4 sm:max-w-lg">
                                        <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-[#3b5998] h-11 w-11 rounded-full font-medium">
                                            <Icon className="text-2xl" name="facebook-f" />
                                        </div>
                                        <div>
                                            <p className="text-slate-600 dark:text-slate-400">You have successfully connected with your facebook account, you can easily log in using your account too.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="red">Revoke Access</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4 mt-8">Connect to Google</h6>
                        <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                                    <div className="flex items-center gap-4 sm:max-w-lg">
                                        <div className="relative flex-shrink-0 flex items-center justify-center text-white bg-[#de5246] h-11 w-11 rounded-full font-medium">
                                            <Icon className="text-2xl" name="google" />
                                        </div>
                                        <div>
                                            <p className="text-slate-600 dark:text-slate-400">You can connect with your google account. <em className="block text-slate-400">Not connected yet</em></p>
                                        </div>
                                    </div>
                                    <div>
                                        <Button size="lg" variant="primary-pale">Connect</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <h6 className="text-base font-heading font-bold">Import Contacts <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700 ms-auto">Import from Google</a></h6>
                            <p className="text-sm text-slate-600 dark:text-slate-400">You have not imported contacts from your mobile phone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomersDetailsPage