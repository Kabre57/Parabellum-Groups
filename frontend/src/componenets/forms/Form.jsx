import React from "react";
import classNames from "classnames";

function Form({
    action, autoComplete, method, noValidate, className, id, onSubmit, ...props
}) {
    const compClass = classNames({
        [`${className}`]: className,
    });
    return (
        <form
            id={id}
            className={compClass}
            action={action}
            autoComplete={autoComplete}
            method={method}
            noValidate={noValidate}
            onSubmit={onSubmit}
        >
            {props.children}
        </form>
    );
}

export default Form;

const FormGroup = ({className, ...props}) => {
    const wrapperClass = classNames({
      "relative mb-5 last:mb-0":true,
      [`${className}`] : className
    })
    return (
      <div className={wrapperClass}>{props.children}</div>
    )
  }
  
  Form.Group = FormGroup


const FormLabel = ({className, htmlFor, ...props}) => {
    const wrapperClass = classNames({
      "inline-block text-sm font-medium text-slate-700 dark:text-white cursor-pointer":true,
      [`${className}`] : className
    })
    return (
      <label htmlFor={htmlFor} className={wrapperClass}>{props.children}</label>
    )
}
  
Form.Label = FormLabel

const FormError = ({className, message, floating, check, ...props}) => {
  const wrapperClass = classNames({
    "text-[11px] italic mt-1":true,
    "block leading-[1.8] text-red-600": !floating,
    "absolute leading-none bottom-[calc(100%+4px)] px-2 py-1 z-[1] rounded-sm whitespace-nowrap bg-red-500 text-white before:absolute before:h-0 before:w-0 before:top-full before:border-s-6 before:border-e-6 before:border-b-6 before:border-b-transparent ": floating ,
    "before:border-s-transparent before:border-e-red-500 before:end-2.5 end-0": floating && !check,
    "before:border-s-red-500 before:border-e-transparent before:start-2.5 start-0": floating && check,
    [`${className}`] : className
  })
  return (
    <span className={wrapperClass}>{message || 'This field is required'} <span className=""></span></span>
  )
}

Form.Error = FormError