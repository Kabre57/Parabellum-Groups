import React from "react";
import classNames from "classnames";
import Icon from "../ui-elements/Icon";

const Input = React.forwardRef(({
    defaultValue,
    id,
    placeholder,
    type,
    className,
    size,
    maxLength,
    max,
    min,
    disabled,
    onChange,
    required,
    name,
    icon,
    ...rest
}, ref) =>  {
    const compClass = classNames({
        "block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10": true,
        ["text-sm leading-4.5 py-1.5 h-9 rounded"]: !size,
        ["text-base leading-4.5 px-4 py-2.5 h-11 rounded-md"]: size === "lg",
        ["text-xs leading-5 px-4 py-1 h-8 rounded-sm"]: size === "sm",
        ["px-4"]: !icon ,
        ["ps-10 pe-4"]: icon === "start",
        ["pe-10 ps-4"]: icon === "end",
        [`${className}`]: className,
    });
    return (
        <input
            ref={ref}
            className={compClass}
            type={type ? type : "text"}
            placeholder={placeholder && placeholder}
            id={id && id}
            maxLength={maxLength && maxLength}
            max={max && max}
            min={min && min}
            defaultValue={defaultValue && defaultValue}
            disabled={disabled && "disabled"}
            required={required && "required"}
            name= {name && name}
            onChange={onChange}
            {...rest}
        />
    );
})

export default Input;

const InputWrap = ({className, ...props}) => {
    const wrapperClass = classNames({
      "relative":true,
      [`${className}`] : className
    })
    return (
      <div className={wrapperClass}>{props.children}</div>
    )
}
  
Input.Wrap = InputWrap

const InputGroup = React.forwardRef(({className, responsive, ...props}, ref) => {
    const wrapperClass = classNames({
      "relative flex w-full items-stretch":true,
      "[&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none -space-x-px" : !responsive,
      "[&>*:not(:first-child)]:max-xs:rounded-t-none [&>*:not(:last-child)]:max-xs:rounded-b-none [&>*:not(:first-child)]:xs:rounded-s-none [&>*:not(:last-child)]:xs:rounded-e-none max-xs:flex-col max-xs:-space-y-px xs:-space-x-px" : responsive === "xs",
      "[&>*:not(:first-child)]:max-sm:rounded-t-none [&>*:not(:last-child)]:max-sm:rounded-b-none [&>*:not(:first-child)]:sm:rounded-s-none [&>*:not(:last-child)]:sm:rounded-e-none max-sm:flex-col max-sm:-space-y-px sm:-space-x-px" : responsive === "sm",
      [`${className}`] : className
    })
    return (
      <div ref={ref} className={wrapperClass}>{props.children}</div>
    )
})
  
Input.Group = InputGroup

const InputAddon = ({className, size, ...props}) => {
    const wrapperClass = classNames({
      "px-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-900 rounded flex items-center":true,
      "py-1" : !size,
      "py-1.5" : size === "lg",
      [`${className}`] : className
    })
    return (
      <div className={wrapperClass}>{props.children}</div>
    )
}
  
Input.Addon = InputAddon

const InputHint = ({className, textClass, ...props}) => {
    const wrapperClass = classNames({
      "absolute h-7 top-1 end-1 px-3 bg-white dark:bg-gray-950 rounded flex items-center":true,
      [`${className}`] : className
    })
    const textClasses = classNames({
      "text-slate-400 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight":true,
      [`${textClass}`] : textClass
    })
    return (
        <div className={wrapperClass}>
            <span className={textClasses}>{props.children}</span>
        </div>
    )
}
  
Input.Hint = InputHint

const InputIcon = ({className, start, end, icon, ...props}) => {
    const wrapperClass = classNames({
        "absolute h-9 w-9 top-0 flex items-center justify-center z-[1]":true,
        "start-0" : start,
        "end-0" : end,
      [`${className}`] : className
    })
    return (
        <div className={wrapperClass}>
            <Icon className="text-slate-400 text-base leading-none" name={icon}/>
        </div>
    )
}
  
Input.Icon = InputIcon
