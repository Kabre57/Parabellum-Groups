import React from 'react'
import classNames from 'classnames';

const Badge = ({ variant, size, pill, className, tagName, ...props}) => {
    const compClass = classNames({
        "relative inline-flex border text-center font-medium tracking-snug whitespace-nowrap align-middle": true,
        "border-primary-600 bg-primary-600 text-white" :  variant === "primary",
        "border-gray-500 bg-gray-500 text-white" :  variant === "secondary",
        "border border-green-600 bg-green-600 text-white" :  variant === "green",
        "border-red-600 bg-red-600 text-white" :  variant === "red",
        "border-yellow-600 bg-yellow-600 text-white" :  variant === "yellow",
        "border-cyan-600 bg-cyan-600 text-white" :  variant === "cyan",
        "border-blue-600 bg-blue-600 text-white" :  variant === "blue",
        "border-purple-600 bg-purple-600 text-white" :  variant === "purple",
        "border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 text-slate-600 dark:text-slate-200" :  variant === "light",
        "border-gray-900 dark:border-gray-400 bg-gray-900 dark:bg-gray-400 text-white dark:text-gray-700" :  variant === "dark",
        "border-primary-100 dark:border-primary-950 bg-primary-100 dark:bg-primary-950 text-primary-600" :  variant === "primary-pale",
        "border-gray-200 dark:border-gray-800 bg-gray-200 dark:bg-gray-800 text-slate-500 dark:text-slate-300" :  variant === "secondary-pale",
        "border-green-100 dark:border-green-950 bg-green-100 dark:bg-green-950 text-green-600" :  variant === "green-pale",
        "border-red-100 dark:border-red-950 bg-red-100 dark:bg-red-950 text-red-600" :  variant === "red-pale",
        "border-yellow-100 dark:border-yellow-950 bg-yellow-100 dark:bg-yellow-950 text-yellow-600" :  variant === "yellow-pale",
        "border-cyan-100 dark:border-cyan-950 bg-cyan-100 dark:bg-cyan-950 text-cyan-600" :  variant === "cyan-pale",
        "border-blue-100 dark:border-blue-950 bg-blue-100 dark:bg-blue-950 text-blue-600" :  variant === "blue-pale",
        "border-purple-100 dark:border-purple-950 bg-purple-100 dark:bg-purple-950 text-purple-600" :  variant === "purple-pale",
        "border-gray-100 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-slate-400 dark:text-slate-200" :  variant === "light-pale",
        "border-gray-300 dark:border-gray-900 bg-gray-300 dark:bg-gray-900 text-slate-600 dark:text-slate-200" :  variant === "dark-pale",
        "border-primary-600 text-primary-600" :  variant === "primary-outline",
        "border-gray-400 text-gray-500" :  variant === "secondary-outline",
        "border-green-600 text-green-600" :  variant === "green-outline",
        "border-red-600 text-red-600" :  variant === "red-outline",
        "border-yellow-600 text-yellow-600" :  variant === "yellow-outline",
        "border-cyan-600 text-cyan-600" :  variant === "cyan-outline",
        "border-blue-600 text-blue-600" :  variant === "blue-outline",
        "border-purple-600 text-purple-600" :  variant === "purple-outline",
        "border-gray-300 dark:border-gray-900 text-slate-400" :  variant === "light-outline",
        "border-gray-900 dark:border-gray-400 text-gray-900 dark:text-gray-400" :  variant === "dark-outline",
        "border-primary-300 dark:border-primary-800 bg-primary-100 dark:bg-primary-950 text-primary-600" :  variant === "primary-pale-outline",
        "border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-slate-500 dark:text-slate-300" :  variant === "secondary-pale-outline",
        "border-green-300 dark:border-green-800 bg-green-100 dark:bg-green-950 text-green-600" :  variant === "green-pale-outline",
        "border-red-300 dark:border-red-800 bg-red-100 dark:bg-red-950 text-red-600" :  variant === "red-pale-outline",
        "border-yellow-300 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-950 text-yellow-600" :  variant === "yellow-pale-outline",
        "border-cyan-300 dark:border-cyan-800 bg-cyan-100 dark:bg-cyan-950 text-cyan-600" :  variant === "cyan-pale-outline",
        "border-blue-300 dark:border-blue-800 bg-blue-100 dark:bg-blue-950 text-blue-600" :  variant === "blue-pale-outline",
        "border-purple-300 dark:border-purple-800 bg-purple-100 dark:bg-purple-950 text-purple-600" :  variant === "purple-pale-outline",
        "border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-slate-400 dark:text-slate-200" :  variant === "light-pale-outline",
        "border-gray-500 dark:border-gray-700 bg-gray-300 dark:bg-gray-900 text-slate-600 dark:text-slate-200" :  variant === "dark-pale-outline",
        "text-xxs/4 px-2 py-px": size === "sm",
        "text-xxs leading-4.5 px-2": size === "rg" || !size ,
        "text-xs leading-4.5 py-1 px-3": size === "lg" ,
        "text-sm leading-4.5 py-2 px-4": size === "xl" ,
        "text-base leading-4.5 py-3 px-5": size === "2xl" ,
        "text-lg leading-5 py-3 px-6": size === "3xl" ,
        ["rounded-sm"]: !pill,
        "rounded-full": pill,
        [`${className}`]: className,
    });
  return(
    <>
        { tagName ? (
            <tagName className={compClass}>
                {props.children}
            </tagName>
        ) : (
            <span className={compClass}>
                {props.children}
            </span>
        )}
    </>
  )
  
}

export default Badge



export const BadgeDot = ({variant, className, tagName, ...props}) => {
    const compClass = classNames({
        "relative inline-flex items-center ps-3 text-xxs font-medium leading-4.5 tracking-snug whitespace-nowrap align-middle after:content-[''] after:absolute after:rounded-full after:start-0 after:top-1/2 after:-translate-y-1/2 after:-mt-px after:h-1.5 after:w-1.5 after:bg-current": true,
        "text-primary-600" :  variant === "primary",
        "text-gray-600 dark:text-gray-500" :  variant === "secondary",
        "text-green-600" :  variant === "green",
        "text-red-600" :  variant === "red",
        "text-yellow-600" :  variant === "yellow",
        "text-cyan-600" :  variant === "cyan",
        "text-gray-500 dark:text-gray-600" :  variant === "light",
        "text-gray-900 dark:text-gray-400" :  variant === "dark",
        [`${className}`]: className,
    });
  return (
    <>
        { tagName ? (
            <tagName className={compClass}>
                {props.children}
            </tagName>
        ) : (
            <span className={compClass}>
                {props.children}
            </span>
        )}
    </>
  )
}

Badge.Dot = BadgeDot;