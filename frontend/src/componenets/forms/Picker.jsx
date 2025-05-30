import React, {useState} from "react";
import classNames from "classnames";
import Input from "./Input";
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import Select from "./Select";
import Button from "../ui-elements/Button";
import Icon from "../ui-elements/Icon";

const Picker = ({...props}) => {
  return (
    <div>{props.children}</div>
  )
}
export default Picker;


const Date = React.forwardRef(({
    id,
    placeholder,
    className,
    size,
    icon,
    required,
    ...rest
}, ref) =>  {
  const [startDate, setStartDate] = useState();
    const compClass = classNames({
      "block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10": true,
      ["text-sm leading-4.5 py-1.5 h-9 rounded"]: !size,
      ["text-base leading-4.5 py-2.5 h-11 rounded-md"]: size === "lg",
      ["text-xs leading-5 py-1 h-8 rounded-sm"]: size === "sm",
      ["px-4"]: !icon ,
      ["ps-10 pe-4"]: icon === "start",
      ["pe-10 ps-4"]: icon === "end",
      [`${className}`]: className,
    });
  
    return (
        <DatePicker popperPlacement="bottom-start" showPopperArrow={false} ref={ref} selected={startDate} onChange={(date) => setStartDate(date)} className={compClass} id={id} placeholderText={placeholder} required={required && "required"} {...rest} />
    );
})

Picker.Date = Date;

const DateOfBirth = React.forwardRef(({
    id,
    placeholder,
    className,
    size,
    icon,
    required,
    ...rest
}, ref) =>  {
  const [startDate, setStartDate] = useState();
  const years = range(1990, 2025, 1);
  // const years = [1990,1991,1992];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
    const compClass = classNames({
      "block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10": true,
      ["text-sm leading-4.5 py-1.5 h-9 rounded"]: !size,
      ["text-base leading-4.5 py-2.5 h-11 rounded-md"]: size === "lg",
      ["text-xs leading-5 py-1 h-8 rounded-sm"]: size === "sm",
      ["px-4"]: !icon ,
      ["ps-10 pe-4"]: icon === "start",
      ["pe-10 ps-4"]: icon === "end",
      [`${className}`]: className,
    });
  
    return (
        <DatePicker renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              padding: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <button className="flex items-center justify-center flex-shrink-0 h-8 px-1 text-slate-500 dark:text-slate-300" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <Icon className="text-xl/none" name="chevron-left" />
            </button> */}
            <select
              className="block text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all focus:z-10 text-xs leading-4.5 pe-6 ps-3 py-1 h-8 bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center] !w-18"
              size="sm"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              className="block text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950 disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed rounded transition-all focus:z-10 text-xs leading-4.5 pe-6 ps-3 py-1 h-8 bg-[right_0.5rem_center] rtl:bg-[left_0.5rem_center] !w-28"
              size="sm"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {/* <button className="flex items-center justify-center flex-shrink-0 h-8 px-1 text-slate-500 dark:text-slate-300" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <Icon className="text-xl/none" name="chevron-right" />
            </button> */}
          </div>
        )} popperPlacement="bottom-start" showPopperArrow={false} ref={ref} selected={startDate} onChange={(date) => setStartDate(date)} className={compClass} id={id} placeholderText={placeholder} required={required && "required"} {...rest} />
    );
})

Picker.DateOfBirth = DateOfBirth;

const DateRange = ({
    id,
    placeholder,
    className,
    size,
    icon,
    required
}) =>  {

      const [startDate, setStartDate] = useState();
      const [endDate, setEndDate] = useState();
      const compClass = classNames({
          "block w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10": true,
          ["text-sm leading-4.5 py-1.5 h-9"]: !size,
          ["text-base leading-4.5 px-4 py-2.5 h-11"]: size === "lg",
          ["text-xs leading-5 px-4 py-1 h-8"]: size === "sm",
          ["px-4"]: !icon ,
          ["ps-10 pe-4"]: icon === "start",
          ["pe-10 ps-4"]: icon === "end",
          [`${className}`]: className,
      });
      const startDateClass = classNames({
          ["rounded-s"]: !size,
          ["rounded-s-md"]: size === "lg",
          ["rounded-s-sm"]: size === "sm",
      })
      const endDateClass = classNames({
          ["rounded-e"]: !size,
          ["rounded-e-md"]: size === "lg",
          ["rounded-e-sm"]: size === "sm",
      })
      const wrapperClass = classNames({
        "relative flex w-full items-stretch [&>*:not(:first-of-type)]:rounded-s-none [&>*:not(:last-of-type)]:rounded-e-none -space-x-px":true,
        [`${className}`] : className
      })

    return (
      <div className={wrapperClass} id={id}>
        <DatePicker popperPlacement="bottom-start" showPopperArrow={false} selected={startDate} onChange={(date) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} className={`${compClass} ${startDateClass}`} id={id} placeholderText={placeholder} required={required && "required"} />
        <Input.Addon>to</Input.Addon>
        <DatePicker popperPlacement="bottom-end" showPopperArrow={false} selected={endDate} onChange={(date) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} className={`${compClass} ${endDateClass}`} id={id} placeholderText={placeholder} required={required && "required"} />
      </div>
    );
}

Picker.DateRange = DateRange;


const Time = React.forwardRef(({ className,placeholder,value, required, size, icon, id, timeIntervals, format, ...rest},ref) =>  {
  const [startDate, setStartDate] = useState();
  const dateFormat = format === 24 ? "HH:mm" : "hh:mm aa"
  const timeFormat = format === 24 ? "HH:mm" : "hh:mm aa"
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
    <DatePicker 
      ref={ref}
      showPopperArrow={false}
      popperPlacement="bottom-start"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={timeIntervals || 30}
      timeCaption={false}
      timeFormat={timeFormat}
      dateFormat={dateFormat} className={compClass} id={id} placeholderText={placeholder} required={required && "required"} {...rest} />
  );
})

Picker.Time = Time;
