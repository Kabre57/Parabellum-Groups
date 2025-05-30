import React from 'react'
import classNames from 'classnames'

const Card = ({className, variant, ...props}) => {
  const wrapperClass = classNames({
    "border rounded-md" : true,
    "bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900": !variant,
    "bg-primary-600 border-primary-600": variant === "primary",
    "bg-gray-600 border-gray-600": variant === "secondary",
    "bg-green-600 border-green-600": variant === "green",
    "bg-red-600 border-red-600": variant === "red",
    "bg-yellow-600 border-yellow-600": variant === "yellow",
    "bg-cyan-600 border-cyan-600": variant === "cyan",
    [`${className}`]: className,
})
  return (
    <div className={wrapperClass}>{props.children}</div>
  )
}

export default Card

const Body = ({className, ...props}) => {
  const wrapperClass = classNames({
    "p-5 sm:p-6" : true,
    [`${className}`]: className,
  })
    return (
        <div className={wrapperClass}>{props.children}</div>
    )
}
    
Card.Body = Body;

const Header = ({className, variant,...props}) => {
  const wrapperClass = classNames({
    "px-5 sm:px-6 py-3 sm:py-4 rounded-t-md border-b" : true,
    "border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-gray-900": !variant,
    "bg-primary-700 bg-opacity-40 border-primary-700 border-opacity-70": variant === "primary",
    "bg-gray-700 bg-opacity-40 border-gray-700 border-opacity-70": variant === "secondary",
    "bg-green-700 bg-opacity-40 border-green-700 border-opacity-70": variant === "green",
    "bg-red-700 bg-opacity-40 border-red-700 border-opacity-70": variant === "red",
    "bg-yellow-700 bg-opacity-40 border-yellow-700 border-opacity-70": variant === "yellow",
    "bg-cyan-700 bg-opacity-40 border-cyan-700 border-opacity-70": variant === "cyan",
    [`${className}`]: className,
  })
    return (
        <div className={wrapperClass}>{props.children}</div>
    )
}
    
Card.Header = Header;

const Footer = ({className, variant,...props}) => {
  const wrapperClass = classNames({
    "px-5 sm:px-6 py-3 sm:py-4 rounded-b-md border-t" : true,
    "border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-gray-900": !variant,
    "bg-primary-700 bg-opacity-40 border-primary-700 border-opacity-70": variant === "primary",
    "bg-gray-700 bg-opacity-40 border-gray-700 border-opacity-70": variant === "secondary",
    "bg-green-700 bg-opacity-40 border-green-700 border-opacity-70": variant === "green",
    "bg-red-700 bg-opacity-40 border-red-700 border-opacity-70": variant === "red",
    "bg-yellow-700 bg-opacity-40 border-yellow-700 border-opacity-70": variant === "yellow",
    "bg-cyan-700 bg-opacity-40 border-cyan-700 border-opacity-70": variant === "cyan",
    [`${className}`]: className,
  })
    return (
        <div className={wrapperClass}>{props.children}</div>
    )
}
    
Card.Footer = Footer;