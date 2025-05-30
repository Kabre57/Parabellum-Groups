import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const Pagination = ({className,...props}) => {
    const wrapperClass = classNames({
        "inline-flex align-middle -space-x-px" : true,
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}>{props.children}</div>
  )
}

export default Pagination

const PaginationItem = ({className, onClick, to, href, as, active, size, ...props}) => {
    const wrapperClass = classNames({
        "relative inline-flex items-center justify-center text-center align-middle font-normal leading-4.5 first:rounded-s last:rounded-e tracking-wide border  hover:z-10 transition-all duration-300" : true,
        "border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:dark:bg-slate-800 hover:text-primary-600 active:bg-primary-700": !active,
        "border-primary-600 bg-primary-600 text-white": active,
        "w-9 h-9 text-sm": !size,
        "w-7.5 h-7.5 text-xs": size === "sm",
        "w-11 h-11 text-base": size === "lg",
        [`${className}`]: className,
    })
  return (
    <>
        { as === "Link" ? (
            <Link to={to} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {props.children}
            </Link>
        ) : (
            <a href={href || "#link"} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {props.children}
            </a>
        )}
    </>
  )
}

Pagination.Item = PaginationItem;


const PaginationPrev = ({className, onClick, to, href, as, active, size, text, icon, ...props}) => {
    const wrapperClass = classNames({
        "relative inline-flex items-center justify-center text-center align-middle font-normal leading-4.5 first:rounded-s last:rounded-e tracking-wide border hover:z-10 transition-all duration-300" : true,
        "border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:dark:bg-slate-800 hover:text-primary-600 active:bg-primary-700": !active,
        "border-primary-600 bg-primary-600 text-white": active,
        "px-3 sm:px-4" : text,
        "h-9 text-sm": !size,
        "h-7.5 text-xs": size === "sm",
        "h-11 text-base": size === "lg",
        "w-9": (!size && !text),
        "w-7.5": (size === "sm" && !text),
        "w-11": (size === "lg" && !text),
        [`${className}`]: className,
    })
  return (
    <>
        { as === "Link" ? (
            <Link to={to} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {icon && <Icon className="rtl:-scale-x-100" name="chevrons-left"/>} {text && <span>{text}</span>}
            </Link>
        ) : (
            <a href={href || "#link"} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {icon && <Icon className="rtl:-scale-x-100" name="chevrons-left"/>} {text && <span>{text}</span>}
            </a>
        )}
    </>
  )
}
Pagination.Prev = PaginationPrev;

const PaginationNext = ({className, onClick, to, href, as, active, size, text, icon, ...props}) => {
    const wrapperClass = classNames({
        "relative inline-flex items-center justify-center text-center align-middle font-normal leading-4.5 first:rounded-s last:rounded-e tracking-wide border hover:z-10 transition-all duration-300" : true,
        "border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 hover:dark:bg-slate-800 hover:text-primary-600 active:bg-primary-700": !active,
        "border-primary-600 bg-primary-600 text-white": active,
        "px-3 sm:px-4" : text,
        "h-9 text-sm": !size,
        "h-7.5 text-xs": size === "sm",
        "h-11 text-base": size === "lg",
        "w-9": (!size && !text),
        "w-7.5": (size === "sm" && !text),
        "w-11": (size === "lg" && !text),
        [`${className}`]: className,
    })
  return (
    <>
        { as === "Link" ? (
            <Link to={to} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {icon && <Icon name="chevrons-right"/>} {text && <span>{text}</span>}
            </Link>
        ) : (
            <a href={href || "#link"} onClick={(e)=> e.preventDefault()} className={wrapperClass}>
                {icon && <Icon name="chevrons-right"/>} {text && <span>{text}</span>}
            </a>
        )}
    </>
  )
}
Pagination.Next = PaginationNext;

const PaginationDot = ({className, size, ...props}) => {
    const wrapperClass = classNames({
        "relative inline-flex items-center justify-center text-center align-middle text-sm font-normal leading-4.5 first:rounded-s last:rounded-e tracking-wide border border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:z-10 transition-all duration-300" : true,
        "w-9 h-9 text-sm": !size,
        "w-7.5 h-7.5 text-xs": size === "sm",
        "w-11 h-11 text-base": size === "lg",
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}><Icon name="more-h" /></div>
  )
}

Pagination.Dot = PaginationDot;