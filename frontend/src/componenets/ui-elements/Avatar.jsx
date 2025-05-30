import React from 'react'
import classNames from 'classnames'
import Icon from './Icon'

const Avatar = ({variant, rounded, size, img, text, icon, status, className, children, customVariant, ...props}) => {
    const wrapperClass = classNames({
        "relative flex-shrink-0 flex items-center justify-center rounded-full font-medium": true,
        "rounded-md": !rounded,
        "rounded-full": rounded,
        "text-[9px] h-6 w-6": size === "xs",
        "text-xs h-7 w-7": size === "mb",
        "text-xs h-8 w-8": size === "sm",
        "text-sm h-10 w-10": size === "rg",
        "text-sm h-12 w-12": size === "lg",
        "text-xl h-16 w-16": size === "xl",
        "text-3xl h-20 w-20": size === "2xl",
        "text-5xl h-28 w-28": size === "3xl",
        "text-white bg-primary-600": variant === "primary",
        "bg-primary-100 dark:bg-primary-950 text-primary-600": variant === "primary-pale",
        "text-white bg-slate-900": variant === "secondary",
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100": variant === "secondary-pale",
        "text-white bg-yellow-600": variant === "yellow",
        "bg-yellow-100 dark:bg-yellow-950 text-yellow-600": variant === "yellow-pale",
        "text-white bg-red-600": variant === "red",
        "bg-red-100 dark:bg-red-950 text-red-600": variant === "red-pale",
        "text-white bg-green-600": variant === "green",
        "bg-green-100 dark:bg-green-950 text-green-600": variant === "green-pale",
        "text-white bg-cyan-600": variant === "cyan",
        "bg-cyan-100 dark:bg-cyan-950 text-cyan-600": variant === "cyan-pale",
        "text-white bg-blue-600": variant === "blue",
        "bg-blue-100 dark:bg-blue-950 text-blue-600": variant === "blue-pale",
        "text-white bg-pink-600": variant === "pink",
        "bg-pink-100 dark:bg-pink-950 text-pink-600": variant === "pink-pale",
        "text-white bg-indigo-600": variant === "indigo",
        "bg-indigo-100 dark:bg-indigo-950 text-indigo-600": variant === "indigo-pale",
        "text-white bg-black": variant === "black",
        "bg-gray-200 dark:bg-gray-800 text-black dark:text-white": variant === "black-pale",
        "text-white bg-slate-600": variant === "slate",
        "bg-slate-100 dark:bg-slate-950 text-slate-600": variant === "slate-pale",
        "text-slate-600 bg-gray-100": variant === "light",
        "text-white bg-orange-600": variant === "orange",
        "bg-orange-100 dark:bg-orange-950 text-orange-600": variant === "orange-pale",
        "text-white bg-purple-600": variant === "purple",
        "bg-purple-100 dark:bg-purple-950 text-purple-600": variant === "purple-pale",
        [`${customVariant}`] : customVariant,
        [`${className}`]: className,
    })
    const statusClass = classNames({
        "absolute rounded-full  h-3 w-3 border-2 border-white dark:border-gray-950": true,
        "bg-green-600": status === "active",
        "bg-gray-500 dark:bg-gray-300": status === "inactive",
        "bg-yellow-600": status === "away",
        "-end-1.5 -bottom-1.5": !rounded,
        "end-0 bottom-0": rounded && size === "rg",
        "end-1 bottom-1": rounded && size === "xl",
        "end-1.5 bottom-1.5": rounded && size === "2xl",
    })
  return (
    <div className={wrapperClass}>
      {text && <span>{text}</span>}
      {img && <img className={`${rounded ? 'rounded-full' : 'rounded-md'}`} src={img} alt=""/>}
      {icon && <Icon name={icon}/>}
      {status && <div className={statusClass}></div>}
      {children && children}
    </div>
  )
}

export default Avatar

export const AvatarGroup = ({size, className, ...props}) => {
  const wrapperClass = classNames({
    "flex [&>*]:border-2 [&>*]:border-white [&>*]:dark:border-gray-950": true,
    "[&>:not(:first-child)]:-ms-1": size === "xs",
    "[&>:not(:first-child)]:-ms-2": size === "mb",
    "[&>:not(:first-child)]:-ms-3": size === "sm",
    "[&>:not(:first-child)]:-ms-3.5": size === "rg",
    "[&>:not(:first-child)]:-ms-4.5": size === "lg",
    "[&>:not(:first-child)]:-ms-5.5": size === "xl",
    "[&>:not(:first-child)]:-ms-6.5": size === "2xl",
    "[&>:not(:first-child)]:-ms-7.5": size === "3xl",
    [`${className}`]: className,
})
  return (
    <div className={wrapperClass}>{props.children}</div>
  )
}

Avatar.Group = AvatarGroup;

export const AvatarGroupS2 = ({size,...props}) => {
  const wrapperClass = classNames({
    "relative flex [&>*]:border-2 [&>*]:border-white [&>*]:dark:border-gray-950 [&>*]:h-[70%] [&>*]:w-[70%] [&>*]:absolute [&>*:first-child]:top-0 [&>*:first-child]:end-0 [&>*:last-child]:bottom-0 [&>*:last-child]:start-0": true,
    "text-[9px] h-6 w-6": size === "xs",
    "text-xs h-8 w-8": size === "sm",
    "text-xs h-10 w-10": size === "rg",
    "text-sm h-12 w-12": size === "lg",
    "text-base h-16 w-16": size === "xl",
    "text-2xl h-20 w-20": size === "2xl",
    "text-4xl h-28 w-28": size === "3xl",
})
  return (
    <div className={wrapperClass}>{props.children}</div>
  )
}

Avatar.GroupS2 = AvatarGroupS2;