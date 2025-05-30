import React, {useLayoutEffect, useRef} from "react";
import classNames from "classnames";
import Choices from 'choices.js';

const Select = React.forwardRef(({
    defaultValue,
    id,
    className,
    size,
    disabled,
    required,
    name,
    multiple,
    onChange,
    placeholder,
    ...props
},ref) =>  {
    const compClass = classNames({
        "block w-full text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all focus:z-10": true,
        "text-sm leading-4.5 pe-8 ps-4 py-1.5 h-9 bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center]": !multiple && !size,
        "text-xs leading-4.5 pe-6 ps-3 py-1 h-8 bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center]": !multiple && size === "sm",
        "text-sm leading-5 pe-4 ps-4 pt-1.5 pb-4 [&>*]:px-2 [&>*]:py-1 [&>*]:my-0.5 [&>*]:-mx-2 [&>*]:rounded-sm [&>*]:cursor-pointer [&>*]:text-slate-600": multiple,
        [`${className}`]: className,
    });
    return (
        <select
            ref={ref}
            className={compClass}
            id={id && id}
            defaultValue={defaultValue && defaultValue}
            disabled={disabled && "disabled"}
            required={required && "required"}
            name= {name && name}
            multiple = {multiple && multiple}
            onChange={onChange}
        >
            {props.children}
        </select>
    );
})

export default Select;

const SelectOption = ({value, disabled, selected, className, ...props}) => {
    return (
      <option className={className} defaultValue={value} disabled={disabled && disabled}>{props.children}</option>
    )
}
  
Select.Option = SelectOption


const SelectChoice = React.forwardRef(({...props},ref) =>  {

    const {multiple, disabled, className, placeholder, removeItemButton, shouldSort, search, searchPlaceholder, defaultValue,required, id} = props;
  
    const selectInput = useRef(null);
    useLayoutEffect( ()=> {
      new Choices(selectInput.current, {
        silent: true,
        allowHTML: false,
        searchEnabled: false || search,
        placeholder: true,
        placeholderValue: placeholder,
        searchPlaceholderValue: 'Search' || searchPlaceholder,
        shouldSort: false || shouldSort,
        removeItemButton: false || removeItemButton,
        itemSelectText: '',
        noResultsText: 'No results',
      });
    })
  
    return (
      <>
        <select id={id} defaultValue={defaultValue} className={className} ref={selectInput} multiple={multiple} disabled={disabled} required={required && "required"}>
          {placeholder && <option value=''>{placeholder}</option> }
          {props.children}
        </select>
      </>
    )
  })
  
  Select.Choice = SelectChoice


