import React from 'react'
import { Card } from '../../../componenets'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const StatusCard = ({title, linktext, linkto, amount, amountText, total, note, className, theme}) => {
    const cardClass = classNames({
        "rounded-md h-full": true,
        "bg-primary-600": theme === "primary",
        "bg-orange-400": theme === "orange",
        "bg-blue-500": theme === "blue",
        "bg-red-600": theme === "red",
        [`${className}`]: className
    })
  return (
    <div className={cardClass}>
        <Card.Body>
            <div className="flex items-center justify-between mb-2">
                <div className="text-base text-white">{title}</div>
                <Link to={linkto} className="text-white">{linktext}</Link>
            </div>
            <h5 className="font-heading font-bold text-3xl leading-tighter tracking-tight mb-2 text-white">{amount} <small className="text-2xl font-normal">{amountText}</small></h5>
            <div className="text-sm text-white text-opacity-75 mt-1"><span className="text-white">{total - amount}</span>/{total} {note}</div>
        </Card.Body>
    </div>
  )
}

export default StatusCard