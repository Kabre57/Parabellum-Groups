import React from 'react'
import classNames from 'classnames'

const Spinner = ({className, size, variant, ...props}) => {
    const wrapperClass = classNames({
        "inline-block rounded-full align-[-0.125em] border-r-transparent animate-[spin_750ms_linear_infinite]" : true,
        "border-primary-600" : variant === "primary",
        "border-gray-600" : variant === "secondary",
        "border-green-600" : variant === "green",
        "border-cyan-600" : variant === "cyan",
        "border-yellow-600" : variant === "yellow",
        "border-red-600" : variant === "red",
        "border-slate-600" : variant === "light",
        "border-gray-800" : variant === "dark",
        "border-white" : variant === "white",
        "h-8 w-8 border-4" : !size || size === "rg",
        "h-4 w-4 border-2" : size === "sm",
        "h-12 w-12 border-4" : size === "lg",
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}>
        {props.children}
    </div>
  )
}

export default Spinner

const Grow = ({className, size, variant, ...props}) => {
    const wrapperClass = classNames({
        "inline-block rounded-full align-[-0.125em] animate-[grow_750ms_linear_infinite]" : true,
        "bg-primary-600" : variant === "primary",
        "bg-gray-600" : variant === "secondary",
        "bg-green-600" : variant === "green",
        "bg-cyan-600" : variant === "cyan",
        "bg-yellow-600" : variant === "yellow",
        "bg-red-600" : variant === "red",
        "bg-slate-600" : variant === "light",
        "bg-gray-800" : variant === "dark",
        "bg-white" : variant === "white",
        "h-8 w-8" : !size || size === "rg",
        "h-4 w-4" : size === "sm",
        "h-12 w-12" : size === "lg",
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}>
        {props.children}
    </div>
  )
}

Spinner.Grow = Grow