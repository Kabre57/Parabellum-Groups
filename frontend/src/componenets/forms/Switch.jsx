import React from 'react'
import classNames from 'classnames'

const Switch = ({id, defaultChecked, disabled, name, size, className, labelClass, required, ...props}) => {
    const inputClass = classNames({
        "peer relative bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded-full transition-all border-2 border-gray-300 dark:border-gray-900 checked:bg-none after:absolute after:rounded-full after:bg-gray-300 checked:after:bg-white after:transition-all after:duration-300 cursor-pointer disabled:cursor-not-allowed" : true,
        "h-6 w-12 after:h-4 after:w-4 after:top-0.5 after:start-0.5 checked:after:start-6.5" : !size,
        "h-4 w-8 after:h-2 after:w-2 after:top-0.5 after:start-0.5 checked:after:start-4.5" : size === "sm",
        "h-8 w-16 after:h-5 after:w-5 after:top-1 after:start-1 checked:after:start-9" : size === "lg",
        [`${className}`]: className,
    })
    const labelClasses = classNames({
        "text-slate-600 dark:text-slate-400 peer-disabled:text-slate-400 peer-disabled:dark:text-slate-700 cursor-pointer inline-block" : true,
        "text-sm leading-5 pt-0.5 ps-3" : !size,
        "text-xs leading-4 ps-2" : size === "sm",
        "text-base leading-6 pt-1 ps-4" : size === "lg",
        [`${labelClass}`]: labelClass,
    })

  return (
    <div className="inline-flex">
        <input type="checkbox" className={inputClass} defaultChecked={defaultChecked && defaultChecked} disabled={disabled && disabled}  name={name && name}  id={id} required={required && "required"} />
        {props.children && <label className={labelClasses} htmlFor={id}>{props.children}</label>}
    </div>
  )
}

export default Switch