import React from 'react'
import classNames from 'classnames'
import { Card, Icon } from '../../../componenets'
 
const Item = ({title, amount, icon, variant}) => {
  const iconStyle = classNames({
    "flex items-center justify-center text-2xl/none rounded-md h-11 w-11":true,
    "text-primary-600 bg-primary-100 dark:bg-primary-950": !variant || variant === "primary",
    "text-cyan-600 bg-cyan-100 dark:bg-cyan-950": variant === "cyan",
    "text-pink-600 bg-pink-100 dark:bg-pink-950": variant === "pink",
    "text-purple-600 bg-purple-100 dark:bg-purple-950": variant === "purple",
  })
  return (
    <li className="flex items-center justify-between">
        <div>
            <div className="text-sm text-slate-400 mb-1">{title}</div>
            <div className="text-xl text-slate-700 dark:text-white font-bold">{amount}</div>
        </div>
        <Icon className={iconStyle} name={icon} />
    </li>
  )
}


const StoreStatisticsCard = () => {
  const data = [
    {
      title: "Orders",
      amount: "1,795",
      icon: "bag",
      variant: "primary",
    },
    {
      title: "Customers",
      amount: "2,327",
      icon: "users",
      variant: "cyan",
    },
    {
      title: "Products",
      amount: "674",
      icon: "box",
      variant: "pink",
    },
    {
      title: "Categories",
      amount: "68",
      icon: "server",
      variant: "purple",
    },
  ]
  return (
    <Card>
        <Card.Body>
            <h6 className="font-heading text-base -tracking-snug leading-tighter font-bold text-slate-700 dark:text-white mb-3">Store Statistics</h6>
            <ul className="flex flex-col gap-y-4 py-2">
                {data.map((item,index) => {
                  return(
                    <Item key={index} title={item.title} amount={item.amount} icon={item.icon} variant={item.variant} />
                  )
                })}
            </ul>
        </Card.Body>
    </Card>
  )
}

export default StoreStatisticsCard