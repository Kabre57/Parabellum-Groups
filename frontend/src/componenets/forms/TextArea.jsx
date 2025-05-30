import React from "react";
import classNames from "classnames";

const TextArea = React.forwardRef(({
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
    ...rest
}, ref) =>  {
    const compClass = classNames({
        "block w-full text-sm leading-4.5 px-4 py-2.5 text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all resize-none": true,
        ["min-h-[124px]"]: !size,
        [`${className}`]: className,
    });
    console.log();
    return (
        <textarea className={compClass}
        ref={ref}
        type={type ? type : "text"}
        placeholder={placeholder && placeholder}
        id={id && id}
        maxLength={maxLength && maxLength}
        max={max && max}
        min={min && min}
        defaultValue={defaultValue && defaultValue}
        disabled={disabled && "disabled"}
        required={required && "required"}
        onChange={onChange} {...rest}></textarea>

    );
})

export default TextArea;