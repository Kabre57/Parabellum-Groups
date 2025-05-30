import React from 'react'

const NewsTicker = () => {
  return (
    <a className="flex items-center transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
        <div className="w-8 inline-flex flex-shrink-0">
            <em className="text-2xl leading-none text-primary-600 ni ni-card-view"></em>
        </div>
        <div className="flex items-center max-w-[calc(100%-theme(spacing.8))]">
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium text-ellipsis overflow-hidden whitespace-nowrap w-[calc(100%-theme(spacing.8))]">Do you know the latest update of 2022? <span className="text-slate-400 dark:text-slate-500 font-normal"> A overview of our is now available on YouTube</span></p>
            <em className="text-slate-400 ms-1 ni ni-external"></em>
        </div>
    </a>
  )
}

export default NewsTicker