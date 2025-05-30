import React from 'react'
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { useTheme } from '../../layout/context';


const Tooltip = ({ offset, content, placement, rtlPlacement, className, children}) => {
    const theme = useTheme();

    const localPlacement = placement ? placement : "right";
    const localRtlPlacement = rtlPlacement ? rtlPlacement : localPlacement;

    const contentClass = classNames({
        "text-white bg-gray-800 text-xs px-3 py-1.5 rounded-sm z-[10000] max-w-[200px] w-max bock break-words font-normal after:absolute after:block after:h-0 after:w-0 after:border-transparent after:z-[10000] [&[data-reference-hidden]]:hidden": true,
        "data-[placement=top]:after:top-full data-[placement=top]:after:left-1/2 data-[placement=top]:after:-translate-x-1/2 data-[placement=top]:after:border-t-gray-800 data-[placement=top]:after:border-t-6 data-[placement=top]:after:border-r-6 data-[placement=top]:after:border-b-0 data-[placement=top]:after:border-l-6" : true,
        "data-[placement=right]:after:right-full data-[placement=right]:after:top-1/2 data-[placement=right]:after:-translate-y-1/2 data-[placement=right]:after:border-r-gray-800 data-[placement=right]:after:border-t-6 data-[placement=right]:after:border-r-6 data-[placement=right]:after:border-b-6 data-[placement=right]:after:border-l-0":true,
        "data-[placement=bottom]:after:bottom-full data-[placement=bottom]:after:left-1/2 data-[placement=bottom]:after:-translate-x-1/2 data-[placement=bottom]:after:border-b-gray-800 data-[placement=bottom]:after:border-t-0 data-[placement=bottom]:after:border-r-6 data-[placement=bottom]:after:border-b-6 data-[placement=bottom]:after:border-l-6":true,
        "data-[placement=left]:after:left-full data-[placement=left]:after:top-1/2 data-[placement=left]:after:-translate-y-1/2 data-[placement=left]:after:border-l-gray-800 data-[placement=left]:after:border-t-6 data-[placement=left]:after:border-r-0 data-[placement=left]:after:border-b-6 data-[placement=left]:after:border-l-6":true,
        [`${className}`]: className,
    });
  return (
    <Tippy
        render={attrs => (
          <div className={contentClass} tabIndex="-1" {...attrs}>
            {content}
          </div>
        )}
        placement={placement || "top"}
        popperOptions={{
        placement : theme.direction === "rtl" ? localRtlPlacement : localPlacement,
        modifiers: [
            {
                name: 'offset',
                options: {
                offset: offset || [0,10],
                },
            },
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['top', 'bottom'],
                },
            },
        ],
      }}
  >
    {children}
  </Tippy>
  )
}

export default Tooltip