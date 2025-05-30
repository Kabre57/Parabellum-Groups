import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Block = ({className, ...props}) => {
  const wrapperClass = classNames({
    "[&:not(:last-child)]:pb-7 lg:[&:not(:last-child)]:pb-10":true,
    [`${className}`] : className
  })
  return (
    <div className={wrapperClass}>
        {props.children}
    </div>
  )
}

export default Block


const BlockHead = ({className, ...props}) => {
  const wrapperClass = classNames({
    "pb-5":true,
    [`${className}`] : className
  })
  return (
    <div className={wrapperClass}>
        {props.children}
    </div>
  )
}

Block.Head = BlockHead

const BlockPageHead = ({className,  ...props}) => {
  const wrapperClass = classNames({
    "pb-6 sm:pb-10 relative":true,
    [`${className}`] : className
  })
  return (
    <div className={wrapperClass}>
        {props.children}
    </div>
  )
}

Block.PageHead = BlockPageHead

const BlockTitleLg = ({className, ...props}) => {
  const wrapperClass = classNames({
    "font-normal text-3xl lg:text-5xl leading-tighter tracking-tight text-slate-700 dark:text-white font-heading [&:not(:last-child)]:mb-4":true,
    [`${className}`] : className
  })
  return (
    <h5 className={wrapperClass}>{props.children}</h5>
  )
}

Block.TitleLg = BlockTitleLg

const BlockTitle = ({className, ...props}) => {
  const wrapperClass = classNames({
    "text-xl font-medium -tracking-snug text-slate-700 dark:text-white leading-tighter [&:not(:last-child)]:mb-2":true,
    [`${className}`] : className
  })
  return (
    <h5 className={wrapperClass}>{props.children}</h5>
  )
}

Block.Title = BlockTitle

const BlockText = ({className, ...props}) => {
  const wrapperClass = classNames({
    "text-sm leading-6 text-slate-400 [&:not(:last-child)]:mb-3":true,
    [`${className}`] : className
  })
  return (
    <p className={wrapperClass}>{props.children}</p>
  )
}

Block.Text = BlockText

const BlockLeadText = ({className, ...props}) => {
  const wrapperClass = classNames({
    "text-lg text-slate-600 dark:text-slate-400 [&:not(:last-child)]:mb-4":true,
    [`${className}`] : className
  })
  return (
    <p className={wrapperClass}>{props.children}</p>
  )
}

Block.LeadText = BlockLeadText

const BlockBack = ({className, to, icon, ...props}) => {
  const wrapperClass = classNames({
    "inline-flex items-center text-base [&:not(:last-child)]:mb-3 relative font-normal text-slate-400":true,
    [`${className}`] : className
  })
  return (
    <Link className={wrapperClass} to={to}>
        <em className={`text-2xl leading-none w-8 inline-block -mt-0.5 rtl:-scale-x-100 ni ni-${icon ? icon : 'arrow-left'} -tracking-wide`}></em>
        <span className="ms-1">{props.children}</span>
    </Link>
  )
}

Block.Back = BlockBack