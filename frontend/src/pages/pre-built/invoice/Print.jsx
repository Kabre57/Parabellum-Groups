import React, {useState, useEffect} from 'react'
import { Head, Icon} from "../../../componenets";
import { invoiceData } from '../../../store/Invoice';
import { useParams, Link } from 'react-router-dom';
const InvoicePrintPage = () => {
    const [data, setData] = useState([]);

    let {invoiceId} = useParams();
    // grabs the id of the url and loads the corresponding data
    useEffect(() => {
      const id = invoiceId;
      if (id !== undefined || null || "") {
        let invoice = invoiceData.find((item) => item.id === Number(id));
        if (invoice) {
            setData(invoice)
        }
      } else {
        setData(invoiceData[0])
      }
    }, [invoiceId]);

    useEffect(() => {
        setTimeout(() => window.print(), 1500);
      }, []);
  return (
    <>
        <Head title={`${data.name} ${data.orderId}`} />
        <div className="w-full max-w-[940px] my-8 mx-auto">
            <div className="px-5">
                <div className="flex justify-center mb-6">
                    <Link className="relative inline-block transition-opacity duration-300 h-9">
                        <img className="h-full opacity-0 dark:opacity-100 print:!opacity-0" src="/logo.png" srcSet="/logo2x.png 2x" alt="logo" />
                        <img className="h-full opacity-100 dark:opacity-0 print:!opacity-100 absolute start-0 top-0" src="/logo-dark.png" srcSet="/logo-dark2x.png 2x" alt="logo" />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 pb-6">
                    <div className="relative">
                        <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight">Invoice To</span>
                        <div className="invoice-contact-info">
                            <h4 className="text-2xl text-slate-700 dark:text-white print:!text-slate-700 font-heading font-bold tracking-tight mb-4">{data.name}</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="flex gap-2 text-slate-400">
                                    <Icon className="text-base/5 text-primary-600" name="map-pin-fill"></Icon>
                                    <span className="text-sm">House #65, 4328 Marion Street<br />Newbury, VT 05051</span>
                                </li>
                                <li className="flex gap-2 text-slate-400">
                                    <Icon className="text-base/5 text-primary-600" name="call-fill"></Icon>
                                    <span className="text-sm">{data.phone}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-[210px]">
                        <h3 className="text-3xl text-primary-600 font-heading font-bold uppercase tracking-tight mb-2">Invoice</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight inline-block min-w-[90px]">Invoice ID</span>:<span className="font-medium text-sm text-slate-600 ms-3">{data.orderId}</span>
                            </li>
                            <li>
                                <span className="text-slate-400 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight inline-block min-w-[90px]">Date</span>:<span className="font-medium text-sm text-slate-600 ms-3">{data.date}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="border-collapse w-full border-gray-300 dark:border-gray-900"> 
                        <thead>
                            <tr>
                                <th className="py-1 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start">
                                    <span className="text-primary-600 uppercase font-bold text-xs leading-tight">Item Id</span>
                                </th>
                                <th className="py-1 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start">
                                    <span className="text-primary-600 uppercase font-bold text-xs leading-tight">Description</span>
                                </th>
                                <th className="py-1 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start">
                                    <span className="text-primary-600 uppercase font-bold text-xs leading-tight">Price</span>
                                </th>
                                <th className="py-1 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-start">
                                    <span className="text-primary-600 uppercase font-bold text-xs leading-tight">Qty</span>
                                </th>
                                <th className="py-1 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-primary-600 uppercase font-bold text-xs leading-tight">Amount</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">24108054</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">DashParabellumGroups - Conceptual App Dashboard - Regular License</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$40.00</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">5</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$200.00</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">24108054</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">6 months premium support</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$25.00</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">1</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$25.00</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">23604094</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">Invest Management Dashboard - Regular License</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$131.25</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">1</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$131.25</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">23604094</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">6 months premium support</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$78.75</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6 border-b border-gray-300 dark:border-gray-900">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">1</span>
                                </td>
                                <td className="py-2 px-2 first:ps-6 last:pe-6  border-b border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5">$78.75</span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="pt-4">
                            <tr>
                                <td className="pt-6 pb-1 px-2 first:ps-6 last:pe-6" colSpan="2"></td>
                                <td className="pt-6 pb-1 px-2 first:ps-6 last:pe-6" colSpan="2">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap font-medium">Subtotal</span>
                                </td>
                                <td className="pt-6 pb-1 px-2 first:ps-6 last:pe-6 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap font-medium">$435.00</span>    
                                </td>
                            </tr>
                            <tr>
                                <td className="py-1 px-2 first:ps-6 last:pe-6" colSpan="2"></td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6" colSpan="2">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">Processing fee</span>
                                </td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">$10.00</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-1 px-2 first:ps-6 last:pe-6" colSpan="2"></td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6" colSpan="2">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">TAX</span>
                                </td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap">$43.50</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-1 px-2 first:ps-6 last:pe-6" colSpan="2"></td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6 border-t border-gray-300 dark:border-gray-900" colSpan="2">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap font-medium">Grand Total</span>
                                </td>
                                <td className="py-1 px-2 first:ps-6 last:pe-6 border-t border-gray-300 dark:border-gray-900 text-end">
                                    <span className="text-slate-600 dark:text-slate-400 text-sm/5 whitespace-nowrap font-medium">$478.50</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="italic text-xs text-slate-400 px-0.5"> Invoice was created on a computer and is valid without the signature and seal. </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InvoicePrintPage