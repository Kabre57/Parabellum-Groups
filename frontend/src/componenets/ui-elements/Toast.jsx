import React from 'react'
import classNames from 'classnames'

const Toast = ({className, variant, children}) => {
    const wrapperClass = classNames({
        "w-[350px] max-w-full text-sm pointer-events-auto border rounded mb-3 last:mb-0" : true,
        "text-slate-600 bg-white dark:bg-gray-950 bg-opacity-85 border-gray-300 dark:border-gray-900 shadow" : !variant || variant === "light",
        "text-primary-100 bg-primary-600 border-primary-700 shadow-[0_3px_12px_1px] shadow-primary-200 dark:shadow-primary-950" : variant === "primary",
        "text-gray-100 bg-gray-600 border-gray-700 shadow-[0_3px_12px_1px] shadow-gray-200 dark:shadow-gray-950" : variant === "secondary",
        "text-green-100 bg-green-600 border-green-700 shadow-[0_3px_12px_1px] shadow-green-200 dark:shadow-green-950" : variant === "green",
        "text-cyan-100 bg-cyan-600 border-cyan-700 shadow-[0_3px_12px_1px] shadow-cyan-200 dark:shadow-cyan-950" : variant === "cyan",
        "text-yellow-100 bg-yellow-600 border-yellow-700 shadow-[0_3px_12px_1px] shadow-yellow-200 dark:shadow-yellow-950" : variant === "yellow",
        "text-red-100 bg-red-600 border-red-700 shadow-[0_3px_12px_1px] shadow-red-200 dark:shadow-red-950" : variant === "red",
        "text-slate-100 bg-slate-700 border-slate-800 shadow-[0_3px_12px_1px] shadow-slate-200 dark:shadow-slate-950" : variant === "dark",
        [`${className}`]: className,
      })
  return (
    <div className={wrapperClass}>
        {children}
    </div>
  )
}

export default Toast

const ToastHeader = ({className, variant,title, subtitle, onClose}) => {
    const wrapperClass = classNames({
      "flex items-center py-1 px-3 rounded-t-[inherit] border-b" : true,
      "border-gray-200 dark:border-gray-800" : !variant || variant === "light",
      "border-primary-700" : variant === "primary",
      "border-gray-700" : variant === "secondary",
      "border-green-700" : variant === "green",
      "border-cyan-700" : variant === "cyan",
      "border-yellow-700" : variant === "yellow",
      "border-red-700" : variant === "red",
      "border-slate-800" : variant === "dark",
      [`${className}`]: className,
    })
    const titleClass = classNames({
      "me-auto" : true,
      "text-primary-600" : !variant || variant === "light",
      "text-white" : variant === "primary" || variant === "secondary" || variant === "green" || variant === "cyan" || variant === "yellow" || variant === "red" || variant === "dark",
      [`${className}`]: className,
    })
    const subtitleClass = classNames({
      "text-xs" : true,
      "text-slate-500" : !variant || variant === "light",
      "text-slate-200" : variant === "primary",
      "text-gray-100" : variant === "secondary",
      "text-green-100" : variant === "green",
      "text-cyan-100" : variant === "cyan",
      "text-yellow-100" : variant === "yellow",
      "text-red-100" : variant === "red",
      "text-slate-100" : variant === "dark",
      [`${className}`]: className,
    })
    const closeClass = classNames({
      "inline-flex border-0 text-2xl -me-1 ms-1 " : true,
      "text-slate-400 hover:text-red-400" : !variant || variant === "light",
      "text-slate-200 hover:text-white" : variant === "primary",
      "text-gray-100 hover:text-white" : variant === "secondary",
      "text-green-100 hover:text-white" : variant === "green",
      "text-cyan-100 hover:text-white" : variant === "cyan",
      "text-yellow-100 hover:text-white" : variant === "yellow",
      "text-red-100 hover:text-white" : variant === "red",
      "text-slate-100 hover:text-white" : variant === "dark",
      [`${className}`]: className,
    })
    return (
        <div className={wrapperClass}>
            <strong className={titleClass}>{title}</strong>
            {subtitle &&<small className={subtitleClass}>{subtitle}</small>}
            <button onClick={onClose} className={closeClass}>
                <em className="leading-none ni ni-cross-sm"></em>
            </button>
        </div>
    )
  }
  
  Toast.Header = ToastHeader;

const ToastBody = ({className, variant, ...props}) => {
    const wrapperClass = classNames({
      "p-3" : true,
      [`${className}`]: className,
    })
    return (
        <div className={wrapperClass}> Hello, world! This is a toast message. </div>
    )
  }
  
  Toast.Body = ToastBody;