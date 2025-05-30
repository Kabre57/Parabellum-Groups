import React, {useState} from 'react'
import classNames from 'classnames';
import {Button, Icon} from "../../componenets";
const PageHead = ({children}) => {
  return (
    <div className="flex justify-between items-center pb-5 md:pb-7 relative">
        {children}
    </div>
  )
}

export default PageHead

const Group = ({children}) => {
  return (
    <div>{children}</div>
  )
}

const Title = ({className, children}) => {
    const wrapperClass = classNames({
        "font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2 last:mb-0" : true,
        [`${className}`]: className,
     })
  return (
    <h3 className={wrapperClass}>{children}</h3>
  )
}
const SubTitle = ({className, children}) => {
    const wrapperClass = classNames({
        "text-slate-400" : true,
        [`${className}`]: className,
     })
  return (
    <p className={wrapperClass}>{children}</p>
  )
}

const Option = ({className, children, responsive}) => {
    const [pageOption, setPageOption] = useState(false);
    const buttonClassName = classNames({
      "-me-2":true,
      "sm:hidden" : !responsive || responsive === "sm",
      "xs:hidden" : responsive === "xs",
    })
    const optionClassName = classNames({
      "absolute start-0 end-0 top-full -mx-3.5 bg-white dark:bg-gray-950 opacity-0 invisible [&.active]:opacity-100 [&.active]:visible z-[1000]": true,
      "sm:relative sm:bg-transparent sm:dark:bg-transparent max-sm:shadow max-sm:dark:shadow-gray-800 sm:opacity-100 sm:visible" : !responsive || responsive === "sm",
      "xs:relative xs:bg-transparent xs:dark:bg-transparent max-xs:shadow max-xs:dark:shadow-gray-800 xs:opacity-100 xs:visible" : responsive === "xs",
      "active": pageOption,
    })
  return (
    <>
        <Button.Zoom className={buttonClassName} active={pageOption} onClick={()=>setPageOption(!pageOption)}>
            <Icon className="text-xl" name="more-v" />
        </Button.Zoom>
        <div className={optionClassName}>
            {children}
        </div>
    </>
  )
}

PageHead.Group = Group;
PageHead.Title = Title;
PageHead.SubTitle = SubTitle;
PageHead.Option = Option;