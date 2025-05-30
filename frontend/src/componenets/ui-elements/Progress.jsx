import React from 'react'
import classNames from 'classnames'

const Progress = ({className, size, children}) => {
    const wrapperClass = classNames({
        "flex rounded-sm bg-slate-100 dark:bg-slate-900 overflow-hidden" : true,
        "h-1.5" : !size || size === "rg",
        "h-1" : size === "xs",
        "h-2" : size === "sm",
        "h-4" : size === "lg",
        [`${className}`]: className,
      })
  return (
    <div className={wrapperClass}>{children}</div>
  )
}

export default Progress

const Bar = ({className, variant, progress, children, size, striped, animated, ...props}) => {
    const wrapperClass = classNames({
        "text-xs text-center px-1" : true,
        "text-white bg-primary-600": !variant || variant === "primary",
        "text-white bg-green-600": variant === "green",
        "text-white bg-cyan-600": variant === "cyan",
        "text-white bg-yellow-600": variant === "yellow",
        "text-white bg-red-600": variant === "red",
        "text-white bg-pink-600": variant === "pink",
        "text-white bg-indigo-600": variant === "indigo",
        "bg-gradient-to-br stripe" : striped,
        "bg-[length:theme(spacing.1.5)_theme(spacing.1.5)]" : !size || size === "rg",
        "bg-[length:theme(spacing.1)_theme(spacing.1)]" : size === "xs",
        "bg-[length:theme(spacing.2)_theme(spacing.2)]" : size === "sm",
        "bg-[length:theme(spacing.4)_theme(spacing.4)]" : size === "lg",
        "animate-[progressBarStripes_1s_linear_infinite]" : animated,
        [`${className}`]: className,
    })
    return (
        <div className={wrapperClass} style={{width:progress}}>{children && children}</div>
    )
}
      
Progress.Bar = Bar;