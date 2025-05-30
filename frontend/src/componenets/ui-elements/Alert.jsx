import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const Alert = ({className, icon, variant, ...props}) => {
    const wrapperClass = classNames({
        "py-4 relative rounded-md border" : true,
        "px-5" : !icon,
        "pe-5 ps-12" : icon,
        "border-primary-300 dark:border-primary-900 bg-primary-100 dark:bg-primary-950 text-primary-800 dark:text-primary-600" : variant === "primary",
        "border-primary-600 bg-primary-600 text-white" : variant === "primary-fill",
        "border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-slate-200" : variant === "secondary",
        "border-gray-600 bg-gray-600 text-white" : variant === "secondary-fill",
        "border-green-300 dark:border-green-900 bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-600" : variant === "green",
        "border-green-600 bg-green-600 text-white" : variant === "green-fill",
        "border-cyan-300 dark:border-cyan-900 bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-600" : variant === "cyan",
        "border-cyan-600 bg-cyan-600 text-white" : variant === "cyan-fill",
        "border-yellow-300 dark:border-yellow-900 bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-600" : variant === "yellow",
        "border-yellow-600 bg-yellow-600 text-white" : variant === "yellow-fill",
        "border-red-300 dark:border-red-800 bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-600" : variant === "red",
        "border-red-600 bg-red-600 text-white" : variant === "red-fill",
        "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200" : variant === "light",
        "border-gray-100 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-slate-300" : variant === "light-fill",
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}>
        {icon && <Icon className="absolute text-xl leading-none w-8 top-4 start-5" name={icon} />}
        {props.children}
    </div>
  )
}

export default Alert

const AlertLink = ({className, to, href, ...props}) => {
  const wrapperClass = classNames({
    "font-bold transition-all shadow-[0_1px_0] hover:shadow-none shadow-current" : true,
    [`${className}`]: className,
  })
  return (
    <>
      {to ? 
      <Link to={to} className={wrapperClass}>{props.children}</Link>
      : 
      <a href={href} onClick={(e)=> e.preventDefault()} className={wrapperClass}>{props.children}</a>}
    </>
  )
}

Alert.Link = AlertLink;

const AlertPro = ({className, variant, ...props}) => {
  const wrapperClass = classNames({
    "py-4 px-5 border-s-4 shadow-md rounded-md bg-white dark:bg-gray-950" : true,
    "border-primary-600" : variant === "primary",
    "border-gray-600" : variant === "secondary",
    "border-green-600" : variant === "green",
    "border-cyan-600" : variant === "cyan",
    "border-yellow-600" : variant === "yellow",
    "border-red-600" : variant === "red",
    "border-gray-400" : variant === "light",
    [`${className}`]: className,
  })
  return (
    <div className={wrapperClass}>
      {props.children}
    </div>
  )
}

Alert.Pro = AlertPro;