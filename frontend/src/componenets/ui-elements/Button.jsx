import React from 'react'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = React.forwardRef(({ variant, size, block, pill, icon, className, tagName, as, to, href, target, type, onClick, disabled, ...props}, ref) => {
    const compClass = classNames({
        "relative inline-flex items-center text-center align-middle font-heading border transition-all duration-300 whitespace-nowrap": true,
        "border-primary-600 text-white bg-primary-600 hover:bg-primary-700 hover:border-primary-700 [.active>&]:bg-primary-700 [.active>&]:border-primary-700 active:bg-primary-800" :  variant === "primary",
        "border-slate-700 text-white bg-slate-700 hover:bg-slate-800 hover:border-slate-800 [.active>&]:bg-slate-800 [.active>&]:border-slate-800 active:bg-slate-900" :  variant === "secondary",
        "border-green-600 text-white bg-green-600 hover:bg-green-700 hover:border-green-700 [.active>&]:bg-green-700 [.active>&]:border-green-700 active:bg-green-800" :  variant === "green",
        "border-red-600 text-white bg-red-600 hover:bg-red-700 hover:border-red-700 [.active>&]:bg-red-700 [.active>&]:border-red-700 active:bg-red-800" :  variant === "red",
        "border-yellow-600 text-white bg-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 [.active>&]:bg-yellow-700 [.active>&]:border-yellow-700 active:bg-yellow-800" :  variant === "yellow",
        "border-cyan-600 text-white bg-cyan-600 hover:bg-cyan-700 hover:border-cyan-700 [.active>&]:bg-cyan-700 [.active>&]:border-cyan-700 active:bg-cyan-800" :  variant === "cyan",
        "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 hover:dark:text-gray-600 [.active>&]:dark:text-gray-600 active:dark:text-gray-600 hover:bg-gray-400 hover:dark:bg-gray-400 hover:border-gray-400  hover:dark:border-gray-400 [.active>&]:bg-gray-400 [.active>&]:dark:bg-gray-400 [.active>&]:border-gray-400  [.active>&]:dark:border-gray-400 active:bg-gray-600 active:dark:bg-gray-600" :  variant === "light",
        "border-gray-600 text-white bg-gray-600 hover:bg-gray-700 hover:border-gray-700 [.active>&]:bg-gray-700 [.active>&]:border-gray-700 active:bg-gray-800" :  variant === "dark",
        "border-primary-100 dark:border-primary-950 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white [.active>&]:bg-primary-600 [.active>&]:dark:bg-primary-600 [.active>&]:border-primary-600 [.active>&]:dark:border-primary-600 [.active>&]:text-white active:bg-primary-700 active:dark:bg-primary-700" :  variant === "primary-pale",
        "border-slate-200 dark:border-gray-900 text-slate-700 dark:text-white bg-slate-200 dark:bg-gray-900 hover:bg-slate-800 hover:dark:bg-gray-800 hover:border-slate-800  hover:dark:border-gray-800 hover:text-white [.active>&]:bg-slate-800 [.active>&]:dark:bg-gray-800 [.active>&]:border-slate-800  [.active>&]:dark:border-gray-800 [.active>&]:text-white active:bg-slate-900 active:dark:bg-gray-1000" :  variant === "secondary-pale",
        "border-green-100 dark:border-green-950 text-green-600 bg-green-100 dark:bg-green-950 hover:bg-green-600 hover:dark:bg-green-600 hover:border-green-600 hover:dark:border-green-600 hover:text-white [.active>&]:bg-green-600 [.active>&]:dark:bg-green-600 [.active>&]:border-green-600 [.active>&]:dark:border-green-600 [.active>&]:text-white active:bg-green-700 active:dark:bg-green-700" :  variant === "green-pale",
        "border-red-100 dark:border-red-950 text-red-600 bg-red-100 dark:bg-red-950 hover:bg-red-600 hover:dark:bg-red-600 hover:border-red-600 hover:dark:border-red-600 hover:text-white [.active>&]:bg-red-600 [.active>&]:dark:bg-red-600 [.active>&]:border-red-600 [.active>&]:dark:border-red-600 [.active>&]:text-white active:bg-red-700 active:dark:bg-red-700" :  variant === "red-pale",
        "border-yellow-100 dark:border-yellow-950 text-yellow-600 bg-yellow-100 dark:bg-yellow-950 hover:bg-yellow-600 hover:dark:bg-yellow-600 hover:border-yellow-600 hover:dark:border-yellow-600 hover:text-white [.active>&]:bg-yellow-600 [.active>&]:dark:bg-yellow-600 [.active>&]:border-yellow-600 [.active>&]:dark:border-yellow-600 [.active>&]:text-white active:bg-yellow-700 active:dark:bg-yellow-700" :  variant === "yellow-pale",
        "border-cyan-100 dark:border-cyan-950 text-cyan-600 bg-cyan-100 dark:bg-cyan-950 hover:bg-cyan-600 hover:dark:bg-cyan-600 hover:border-cyan-600 hover:dark:border-cyan-600 hover:text-white [.active>&]:bg-cyan-600 [.active>&]:dark:bg-cyan-600 [.active>&]:border-cyan-600 [.active>&]:dark:border-cyan-600 [.active>&]:text-white active:bg-cyan-700 active:dark:bg-cyan-700" :  variant === "cyan-pale",
        "border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-400 hover:dark:bg-gray-400 hover:border-gray-400 hover:dark:border-gray-400 hover:text-gray-600 hover:dark:text-gray-600 [.active>&]:bg-gray-400 [.active>&]:dark:bg-gray-400 [.active>&]:border-gray-400 [.active>&]:dark:border-gray-400 [.active>&]:text-gray-600 [.active>&]:dark:text-gray-600 active:bg-gray-500 active:dark:bg-gray-500" :  variant === "light-pale",
        "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-slate-200 bg-gray-200 dark:bg-gray-800 hover:bg-gray-600  hover:dark:bg-gray-600 hover:border-gray-600 hover:dark:border-gray-600 hover:text-white hover:dark:text-white [.active>&]:bg-gray-600  [.active>&]:dark:bg-gray-600 [.active>&]:border-gray-600 [.active>&]:dark:border-gray-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-gray-700 active:dark:bg-gray-700" :  variant === "dark-pale",
        "border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white [.active>&]:bg-primary-600 [.active>&]:text-white active:bg-primary-700" :  variant === "primary-outline",
        "border-slate-600 hover:dark:border-slate-800 [.active>&]:dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-800 hover:dark:bg-slate-800 hover:text-white [.active>&]:bg-slate-800 [.active>&]:dark:bg-slate-800 [.active>&]:text-white active:bg-slate-900" :  variant === "secondary-outline",
        "border-green-600 text-green-600 hover:bg-green-600 hover:text-white [.active>&]:bg-green-600 [.active>&]:text-white active:bg-green-700" :  variant === "green-outline",
        "border-red-600 text-red-600 hover:bg-red-600 hover:text-white [.active>&]:bg-red-600 [.active>&]:text-white active:bg-red-700" :  variant === "red-outline",
        "border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white [.active>&]:bg-yellow-600 [.active>&]:text-white active:bg-yellow-700" :  variant === "yellow-outline",
        "border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white [.active>&]:bg-cyan-600 [.active>&]:text-white active:bg-cyan-700" :  variant === "cyan-outline",
        "border-gray-300 dark:border-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-400 hover:dark:bg-gray-400 hover:text-gray-600 hover:dark:text-gray-600 [.active>&]:bg-gray-400 [.active>&]:dark:bg-gray-400 [.active>&]:text-gray-600 [.active>&]:dark:text-gray-600 active:bg-gray-500 active:dark:bg-gray-500" :  variant === "light-outline",
        "border-gray-600  dark:border-gray-800  hover:dark:border-gray-600 [.active>&]:dark:border-gray-600 text-gray-600 dark:text-slate-200 hover:bg-gray-600 hover:dark:bg-gray-600 hover:text-white [.active>&]:bg-gray-600 [.active>&]:dark:bg-gray-600 [.active>&]:text-white active:bg-gray-700" :  variant === "dark-outline",
        "border-gray-300 dark:border-gray-900 text-slate-600 dark:text-slate-200 bg-white dark:bg-gray-900 hover:bg-slate-600 [.active>&]:bg-slate-600 hover:dark:bg-gray-800 [.active>&]:dark:bg-gray-800 hover:text-white [.active>&]:text-white hover:dark:text-white [.active>&]:dark:text-white hover:border-slate-600 [.active>&]:border-slate-600 hover:dark:border-gray-800 [.active>&]:dark:border-gray-800 active:bg-slate-700 active:text-white active:border-slate-600" :  variant === "white-outline",
        "border-primary-300 dark:border-primary-800 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white hover:dark:text-white [.active>&]:bg-primary-600 [.active>&]:dark:bg-primary-600 [.active>&]:border-primary-600 [.active>&]:dark:border-primary-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-primary-700 active:dark:bg-primary-700" :  variant === "primary-pale-outline",
        "border-slate-300 dark:border-gray-700 text-slate-700 dark:text-white bg-slate-200 dark:bg-gray-900 hover:bg-slate-800 hover:dark:bg-slate-800 hover:border-slate-800 hover:dark:border-slate-800 hover:text-white hover:dark:text-white [.active>&]:bg-slate-800 [.active>&]:dark:bg-slate-800 [.active>&]:border-slate-800 [.active>&]:dark:border-slate-800 [.active>&]:text-white [.active>&]:dark:text-white active:bg-slate-900 active:dark:bg-slate-900" :  variant === "secondary-pale-outline",
        "border-green-300 dark:border-green-800 text-green-600 bg-green-100 dark:bg-green-950 hover:bg-green-600 hover:dark:bg-green-600 hover:border-green-600 hover:dark:border-green-600 hover:text-white hover:dark:text-white [.active>&]:bg-green-600 [.active>&]:dark:bg-green-600 [.active>&]:border-green-600 [.active>&]:dark:border-green-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-green-700 active:dark:bg-green-700" :  variant === "green-pale-outline",
        "border-red-300 dark:border-red-800 text-red-600 bg-red-100 dark:bg-red-950 hover:bg-red-600 hover:dark:bg-red-600 hover:border-red-600 hover:dark:border-red-600 hover:text-white hover:dark:text-white [.active>&]:bg-red-600 [.active>&]:dark:bg-red-600 [.active>&]:border-red-600 [.active>&]:dark:border-red-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-red-700 active:dark:bg-red-700" :  variant === "red-pale-outline",
        "border-yellow-300 dark:border-yellow-800 text-yellow-600 bg-yellow-100 dark:bg-yellow-950 hover:bg-yellow-600 hover:dark:bg-yellow-600 hover:border-yellow-600 hover:dark:border-yellow-600 hover:text-white hover:dark:text-white [.active>&]:bg-yellow-600 [.active>&]:dark:bg-yellow-600 [.active>&]:border-yellow-600 [.active>&]:dark:border-yellow-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-yellow-700 active:dark:bg-yellow-700" :  variant === "yellow-pale-outline",
        "border-cyan-300 dark:border-cyan-800 text-cyan-600 bg-cyan-100 dark:bg-cyan-950 hover:bg-cyan-600 hover:dark:bg-cyan-600 hover:border-cyan-600 hover:dark:border-cyan-600 hover:text-white hover:dark:text-white [.active>&]:bg-cyan-600 [.active>&]:dark:bg-cyan-600 [.active>&]:border-cyan-600 [.active>&]:dark:border-cyan-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-cyan-700 active:dark:bg-cyan-700" :  variant === "cyan-pale-outline",
        "border-gray-300 dark:border-gray-900 text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-900 hover:bg-slate-600 hover:dark:bg-slate-700 hover:text-white hover:border-slate-600 hover:dark:border-slate-700 [.active>&]:bg-slate-600 [.active>&]:dark:bg-slate-700 [.active>&]:text-white [.active>&]:border-slate-600 [.active>&]:dark:border-slate-700 active:bg-slate-800 active:text-white active:border-slate-800 disabled:text-gray-400 disabled:bg-gray-50 disabled:border-gray-100 disabled:hover:text-gray-400 disabled:hover:bg-gray-50  disabled:hover:border-gray-100" :  variant === "light-pale-outline",
        "border-gray-400 dark:border-gray-600 text-gray-600 dark:text-slate-200 bg-gray-200 dark:bg-gray-800 hover:bg-gray-600 hover:dark:bg-gray-600 hover:border-gray-600 hover:dark:border-gray-600 hover:text-white hover:dark:text-white [.active>&]:bg-gray-600 [.active>&]:dark:bg-gray-600 [.active>&]:border-gray-600 [.active>&]:dark:border-gray-600 [.active>&]:text-white [.active>&]:dark:text-white active:bg-gray-700 active:dark:bg-gray-700" :  variant === "dark-pale-outline",
        "bg-transparent border-transparent text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 [.active>&]:bg-primary-600 [.active>&]:text-white [.active>&]:border-primary-600" :  variant === "primary-transparent",
        "bg-transparent border-transparent text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 [.active>&]:bg-slate-700 [.active>&]:text-white [.active>&]:border-slate-700" :  variant === "secondary-transparent",
        "bg-transparent border-transparent text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 [.active>&]:bg-green-600 [.active>&]:text-white [.active>&]:border-green-600" :  variant === "green-transparent",
        "bg-transparent border-transparent text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 [.active>&]:bg-red-600 [.active>&]:text-white [.active>&]:border-red-600" :  variant === "red-transparent",
        "bg-transparent border-transparent text-yellow-600 hover:bg-yellow-600 hover:text-white hover:border-yellow-600 [.active>&]:bg-yellow-600 [.active>&]:text-white [.active>&]:border-yellow-600" :  variant === "yellow-transparent",
        "bg-transparent border-transparent text-cyan-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 [.active>&]:bg-cyan-600 [.active>&]:text-white [.active>&]:border-cyan-600" :  variant === "cyan-transparent",
        "bg-transparent border-transparent text-gray-400 hover:bg-gray-400 hover:text-white hover:border-gray-400 [.active>&]:bg-gray-400 [.active>&]:text-white [.active>&]:border-gray-400" :  variant === "light-transparent",
        "bg-transparent border-transparent text-gary-700 hover:bg-gary-700 hover:text-white hover:border-gary-700 [.active>&]:bg-gary-700 [.active>&]:text-white [.active>&]:border-gary-700" :  variant === "dark-transparent",
        "text-xxs font-bold leading-5 px-2 tracking-wide": size === "xs" && !icon,
        "text-xs font-bold leading-5 px-3 py-1 tracking-wide": size === "sm" && !icon,
        "text-sm font-bold leading-4.5 px-5 py-2 tracking-wide": size === "rg" && !icon,
        "text-base font-bold leading-4.5 px-6 py-3 tracking-wide": size === "lg" && !icon,
        "text-lg font-bold leading-5 px-8 py-4 tracking-wide": size === "xl" && !icon,
        "h-5.5 w-5.5 justify-center": size === "xs" && icon,
        "h-7.5 w-7.5 justify-center": size === "sm" && icon,
        "h-9 w-9 justify-center": size === "rg" && icon,
        "h-11 w-11 justify-center": size === "lg" && icon,
        "w-full justify-center": block,
        ["rounded"]: !pill,
        ["rounded-sm"]: !pill && (size === "sm" || size === "xs"),
        ["rounded-md"]: !pill && (size === "lg" || size === "xl"),
        "rounded-full": pill,
        [`${className}`]: className,
    });
  return(
    <>
        { tagName ? (
            <tagName onClick={onClick} className={compClass} ref={ref} target={target && target} disabled={disabled && disabled}>
                {props.children}
            </tagName>
        ) : as === "Link" ? (
            <Link className={compClass} to={to} ref={ref} target={target && target} disabled={disabled && disabled}>
                {props.children}
            </Link>
        ) : href ? (
            <a onClick={onClick} className={compClass} href={href} ref={ref} target={target && target} disabled={disabled && disabled}>
                {props.children}
            </a>
        ) : (
            <button onClick={onClick} className={compClass} type={type || 'button'} ref={ref} target={target && target} disabled={disabled && disabled}>
                {props.children}
            </button>
        )}
    </>
  )
  
})

export default Button

const ButtonGroup = ({className, tagName, size, ...props}) => {
    const compClass = classNames({
        "inline-flex align-middle -space-x-px [&>*]:rounded-none [&>*:hover]:z-10": true,
        "[&>*:first-child]:rounded-s [&>*:last-child]:rounded-e" : size === "rg" || !size,
        "[&>*:first-child]:rounded-s-md [&>*:last-child]:rounded-e-md" : size === "lg",
        "[&>*:first-child]:rounded-s-sm [&>*:last-child]:rounded-e-sm" : size === "sm",
        [`${className}`]: className,
    });
  return (
    <>
        { tagName === "li" ? (
            <li className={compClass}>
                {props.children}
            </li>
        ) :  tagName === "div" ? (
            <li className={compClass}>
                {props.children}
            </li>
        ) : (
            <span className={compClass}>
                {props.children}
            </span>
        )}
    </>
  )
}

Button.Group = ButtonGroup;

const ButtonZoom = React.forwardRef(({variant, size, className, tagName, as, to, href, type, onClick, children, active, ...props}, ref) => {
    const compClass = classNames({
        "inline-flex items-center justify-center px-1.5 isolate relative before:content-[''] before:absolute before:-z-[1] before:rounded-full before:opacity-0 hover:before:opacity-100 [&.active]:before:opacity-100 [.active>&]:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2  before:-translate-y-1/2 before:top-1/2 before:left-1/2 focus-visible:outline-0": true,
        "before:bg-gray-200 dark:before:bg-gray-900 text-slate-500 dark:text-slate-300 hover:text-slate-600 [&.active]:text-slate-600 [.active>&]:text-slate-600 [.active>&]:dark:text-slate-200" : variant === "light" || !variant,
        "h-9 w-9 before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 [&.active]:before:h-10 [&.active]:before:w-10 [.active>&]:before:h-10 [.active>&]:before:w-10" : size === "rg" || !size,
        "h-9 w-9 before:h-5 before:w-5 hover:before:h-9 hover:before:w-9 [&.active]:before:h-9 [&.active]:before:w-9 [.active>&]:before:h-9 [.active>&]:before:w-9" : size === "md",
        "h-8 w-8 before:h-5 before:w-5 hover:before:h-8 hover:before:w-8 [&.active]:before:h-8 [&.active]:before:w-8 [.active>&]:before:h-8 [.active>&]:before:w-8" : size === "sm",
        "h-7 w-7 before:h-5 before:w-5 hover:before:h-7 hover:before:w-7 [&.active]:before:h-7 [&.active]:before:w-7 [.active>&]:before:h-7 [.active>&]:before:w-7" : size === "xs",
        "h-4 w-4 before:h-5 before:w-5 hover:before:h-6 hover:before:w-6 [&.active]:before:h-6 [&.active]:before:w-6 [.active>&]:before:h-6 [.active>&]:before:w-6" : size === "tiny",
        "active": active,
        [`${className}`]: className,
    });
  return (
    <>
        { tagName ? (
            <tagName onClick={onClick} className={compClass} ref={ref}>
                {children}
            </tagName>
        ) : as === "Link" ? (
            <Link className={compClass} to={to} ref={ref}>
                {children}
            </Link>
        ) : href ? (
            <a onClick={onClick} className={compClass} href={href} ref={ref}>
                {children}
            </a>
        ) : (
            <button onClick={onClick} className={compClass} type={type || 'button'} ref={ref}>
                {children}
            </button>
        )}
    </>
  )
})

Button.Zoom = ButtonZoom;