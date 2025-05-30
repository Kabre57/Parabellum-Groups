import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Breadcrumb = ({className,...props}) => {
    const wrapperClass = classNames({
        "flex flex-wrap py-1" : true,
        [`${className}`]: className,
    })
  return (
    <ul className={wrapperClass}>{props.children}</ul>
  )
}

export default Breadcrumb

const BreadcrumbItem = ({className, separator, ...props}) => {
    const wrapperClass = classNames({
        "first:ps-0 ps-2 inline-flex last:after:hidden text-slate-300 text-xs font-medium tracking-wider" : true,
        "after:content-[''] after:block after:ms-2 after:w-px after:h-3 after:my-0.5 after:rotate-[25deg] after:bg-slate-400": !separator,
        "after:content-[''] after:block after:ms-2 after:w-px after:h-2.5 after:my-0.75 after:bg-slate-400": separator === "pipe",
        "group/arrow": separator === "arrow",
        [`${className}`]: className,
    })
  return (
    <>
        <li className={wrapperClass}>
            {props.children}
            {separator === "arrow" && <em className="group-last/arrow:hidden text-slate-400 my-0.5 ms-2 rtl:-scale-x-100 font-medium ni ni-forward-ios"></em>}
        </li>
    </>
  )
}

Breadcrumb.Item = BreadcrumbItem;

const BreadcrumbLink = ({className,to, href, ...props}) => {
    const compClass = classNames({
        "text-slate-400 hover:text-primary-600" : true,
        [`${className}`]: className,
    })
  return (
    <>
        { to ? (
            <Link className={compClass} to={to}>
                {props.children}
            </Link>
        ) : (
            <a className={compClass} href={href}>
                {props.children}
            </a>
        ) }
    </>
  )
}

Breadcrumb.Link = BreadcrumbLink;