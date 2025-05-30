import React from 'react'
import classNames from 'classnames'
import Icon from '../ui-elements/Icon'

const CheckBox = React.forwardRef(({id, checked, disabled, name, size, className, labelClass, required, children, ...rest},ref) => {
    const inputClass = classNames({
        "peer bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-800 checked:dark:border-primary-600  cursor-pointer disabled:cursor-not-allowed transition-all duration-300" : true,
        "h-6 w-6" : !size,
        "h-4 w-4" : size === "sm",
        "h-8 w-8" : size === "lg",
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
        <input type="checkbox" ref={ref} className={inputClass} defaultChecked={checked && checked} disabled={disabled && disabled}  name={name && name} required={required && "required"}  id={id} {...rest}  />
        {children && <label className={labelClasses} htmlFor={id}>{children}</label>}
    </div>
  )
})

export default CheckBox

const CheckBoxImage = ({id, checked, disabled, name, size, className, labelClass, src, alt, required, ...props}) => {
  const inputClass = classNames({
    "peer absolute z-10 start-4 top-4 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 checked:border-white checked:dark:border-primary-600 checked:hover:border-white checked:hover:dark:border-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none  focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border border-white dark:border-gray-950 transition-all duration-300" : true,
    "h-6 w-6" : !size,
    "h-4 w-4" : size === "sm",
    "h-8 w-8" : size === "lg",
    [`${className}`]: className,
})
  return (
    <div className="relative z-[1] inline-flex group">
        <input type="checkbox" className={inputClass} defaultChecked={checked && checked} disabled={disabled && disabled}  name={name && name} required={required && "required"}  id={id} />
        <label className="peer-disabled:opacity-70 cursor-pointer rounded overflow-hidden bg-gray-900" htmlFor={id}>
          <img className="transition-all duration-300 group-hover:opacity-80" src={src} alt={alt} />
        </label>
    </div>
  )
}

CheckBox.Image = CheckBoxImage

const CheckBoxButton = React.forwardRef(({id, checked, disabled, name, size, className, labelClass, iconClass, nocontrol, icon, children, required, ...rest}, ref) => {
  const inputClass = classNames({
    "peer absolute" : true,
    "start-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-950 checked:bg-primary-600 checked:dark:bg-primary-600 checked:hover:bg-primary-600 checked:hover:dark:bg-primary-600 checked:focus:bg-primary-600 checked:focus:dark:bg-primary-600 focus:border-primary-600 focus:dark:border-primary-600 outline-none focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 focus:ring-0 focus:ring-offset-0 disabled:bg-slate-50 disabled:dark:bg-slate-900 disabled:checked:bg-primary-400 disabled:checked:dark:bg-primary-400 rounded border-2 border-gray-300 dark:border-gray-900 checked:dark:border-primary-600  cursor-pointer disabled:cursor-not-allowed transition-all duration-300" : !nocontrol,
    "h-0 w-0 opacity-0" : nocontrol,
    "h-4 w-4" : !size && !nocontrol,
    "h-6 w-6" : size === "rg" && !nocontrol,
    "h-8 w-8" : size === "lg" && !nocontrol,
    [`${className}`]: className,
  })
  const labelClasses = classNames({
    "text-slate-600 dark:text-slate-400 peer-disabled:text-slate-400 peer-disabled:dark:text-slate-700 text-sm leading-5 border-gray-200 dark:border-gray-800 cursor-pointer inline-block  rounded-[inherit]" : true,
    "ps-10 pe-4 py-2.5 border" : !nocontrol,
    "px-4 py-1.5 border-2 peer-checked:border-primary-600 transition-all duration-300" : nocontrol,
    "flex items-center gap-3" : icon,
    [`${labelClass}`]: labelClass,
})
  const iconClasses = classNames({
    "text-lg" : true,
    [`${iconClass}`]: iconClass,
})
  return (
    <div className="inline-flex relative rounded">
        <input type="checkbox" ref={ref} className={inputClass} defaultChecked={checked && checked} disabled={disabled && disabled}  name={name && name} required={required && "required"}  id={id} {...rest} />
        <label className={labelClasses} htmlFor={id}>
          {icon && <Icon className={iconClasses} name={icon} />}
          {children}
        </label>
    </div>
  )
})

CheckBox.Button = CheckBoxButton