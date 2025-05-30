import React from 'react'
import { Avatar, Badge, Card } from '../../../componenets'
import classNames from 'classnames'
import { toInitials } from '../../../utilities'

const RecentOrdersCard = () => {
  const data = [
    {
      id: "95954",
      amount: "4,596.75",
      date: "02/11/2020",
      status: "paid",
      customer: {
        name: "Abu Bin Ishityak",
        theme: "purple-pale"
      }
    },
    {
      id: "95850",
      amount: "596.75",
      date: "02/02/2020",
      status: "canceled",
      customer: {
        name: "Desiree Edwards",
        theme: "blue-pale"
      }
    },
    {
      id: "95812",
      amount: "199.99",
      date: "02/01/2020",
      status: "paid",
      customer: {
        name: "Blanca Schultz",
        image: "/images/avatar/b-sm.jpg"
      }
    },
    {
      id: "95256",
      amount: "1099.99",
      date: "01/29/2020",
      status: "paid",
      customer: {
        name: "Naomi Lawrence",
        theme: "indigo-pale"
      }
    },
    {
      id: "95935",
      amount: "1099.99",
      date: "01/29/2020",
      status: "due",
      customer: {
        name: "Cassandra Hogan",
        theme: "green-pale"
      }
    },
  ]
  return (
    <Card className="h-full">
        <div className="p-5 sm:p-6 pb-2 sm:pb-2">
            <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white">Recent Orders</h6>
        </div>
        <div className="table w-full text-sm text-slate-400">
            <div className="table-row [&>*]:border-b [&>*]:last:border-b-0">
                <div className="relative table-cell align-middle py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Order No.</span></div>
                <div className="relative hidden sm:table-cell align-middle py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Customer</span></div>
                <div className="relative hidden md:table-cell align-middle py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Date</span></div>
                <div className="relative table-cell align-middle py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span>Amount</span></div>
                <div className="relative table-cell align-middle py-2 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900"><span className="hidden xs:inline">Status</span></div>
            </div>
            {data.map((item,index) => {
                const badgeVariant = item.status === "paid" ? "green" : item.status === "due" ? "yellow" : item.status === "canceled" ? "red" : "light"; 
                return(      
                  <div key={index} className="table-row transition-all duration-300 [&>*]:border-b [&>*]:last:border-b-0 hover:bg-gray-50 hover:dark:bg-gray-1000">
                      <div className="relative table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                          <span>
                              <a className="inline-flex text-sm leading-snug whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-500 hover:text-primary-600" href="">#{item.id}</a>
                          </span>
                      </div>
                      <div className="relative hidden sm:table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                          <div className="flex items-center">
                              {item.customer.image ? <Avatar size="sm" rounded img={item.customer.image}/> : <Avatar variant={item.customer.theme} size="sm" rounded text={toInitials(item.customer.name)}/>}
                              <div className="text-slate-600 dark:text-white text-xs font-bold flex items-center ms-3">{item.customer.name}</div>
                          </div>
                      </div>
                      <div className="relative hidden md:table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                          <span className="text-xs">{item.date}</span>
                      </div>
                      <div className="relative table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                          <span className="text-xs font-medium text-slate-600 dark:text-white">{item.amount} <span className="font-normal text-slate-500">USD</span></span>
                      </div>
                      <div className="relative table-cell align-middle py-4 first:ps-6 last:pe-6 border-gray-300 dark:border-gray-900">
                          <Badge.Dot className="capitalize" variant={badgeVariant}>{item.status}</Badge.Dot>
                      </div>
                  </div>
                )
              })}
        </div>
    </Card>
  )
}

export default RecentOrdersCard