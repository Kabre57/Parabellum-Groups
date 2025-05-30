import React from 'react'
import classNames from 'classnames'

const Text = ({className,...props}) => {
    const wrapperClass = classNames({
        "entry" : true,
        [`${className}`]: className,
    })
  return (
    <div className={wrapperClass}>{props.children}</div>
  )
}

export default Text

const TextOverline = ({className, tagName, ...props}) => {
    const wrapperClass = classNames({
        "text-slate-400 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight" : true,
        [`${className}`]: className,
    })
  return (
    <>
        { tagName ? (
            <tagName className={wrapperClass}>
                {props.children}
            </tagName>
        ) : (
            <h6 className={wrapperClass}>
                {props.children}
            </h6>
        )}
    </>
  )
}

Text.Overline = TextOverline;