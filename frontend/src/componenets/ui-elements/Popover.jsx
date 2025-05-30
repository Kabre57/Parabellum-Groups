import React, {useState} from 'react'
import classNames from 'classnames';
import { Popover as PopoverComponent } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../layout/context';

const Popover = ({ className, placement, rtlPlacement, title, content, offset, children, ...props}) => {

    const theme = useTheme();
    const localPlacement = placement ? placement : "right";
    const localRtlPlacement = rtlPlacement ? rtlPlacement : localPlacement;

    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement : theme.direction === "rtl" ? localRtlPlacement : localPlacement,
        modifiers: [
            {
            name: 'offset',
            options: {
                offset: offset || [0, 10],
            },
            },
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['top', 'bottom'],
                },
            },
        ],
    })
    "data-[placement=top]"
    const panelClass = classNames({
        "absolute w-screen max-w-[276px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow-md z-[1070]" : true,
        "[&[data-popper-placement^='top']_.popover-arrow]:h-2 [&[data-popper-placement^='top']_.popover-arrow]:w-4 [&[data-popper-placement^='top']_.popover-arrow]:-bottom-2 [&[data-popper-placement^='top']_.popover-arrow]:left-1/2 [&[data-popper-placement^='top']_.popover-arrow]:-translate-x-1/2 [&[data-popper-placement^='top']_.popover-arrow]:before:border-t-gray-300 [&[data-popper-placement^='top']_.popover-arrow]:before:dark:border-t-gray-900 [&[data-popper-placement^='top']_.popover-arrow]:before:border-t-8 [&[data-popper-placement^='top']_.popover-arrow]:before:border-r-8 [&[data-popper-placement^='top']_.popover-arrow]:before:border-b-0 [&[data-popper-placement^='top']_.popover-arrow]:before:border-l-8 [&[data-popper-placement^='top']_.popover-arrow]:after:bottom-px [&[data-popper-placement^='top']_.popover-arrow]:after:left-0 [&[data-popper-placement^='top']_.popover-arrow]:after:border-t-white [&[data-popper-placement^='top']_.popover-arrow]:after:dark:border-t-gray-950 [&[data-popper-placement^='top']_.popover-arrow]:after:border-t-8 [&[data-popper-placement^='top']_.popover-arrow]:after:border-r-8 [&[data-popper-placement^='top']_.popover-arrow]:after:border-b-0 [&[data-popper-placement^='top']_.popover-arrow]:after:border-l-8":true,
        "[&[data-popper-placement='right']_.popover-arrow]:h-4 [&[data-popper-placement='right']_.popover-arrow]:w-2 [&[data-popper-placement='right']_.popover-arrow]:-left-2 [&[data-popper-placement='right']_.popover-arrow]:top-1/2 [&[data-popper-placement='right']_.popover-arrow]:-translate-y-1/2 [&[data-popper-placement='right']_.popover-arrow]:before:border-r-gray-300 [&[data-popper-placement='right']_.popover-arrow]:before:dark:border-r-gray-900 [&[data-popper-placement='right']_.popover-arrow]:before:border-t-8 [&[data-popper-placement='right']_.popover-arrow]:before:border-r-8 [&[data-popper-placement='right']_.popover-arrow]:before:border-b-8 [&[data-popper-placement='right']_.popover-arrow]:before:border-l-0 [&[data-popper-placement='right']_.popover-arrow]:after:left-px [&[data-popper-placement='right']_.popover-arrow]:after:top-0 [&[data-popper-placement='right']_.popover-arrow]:after:border-r-white [&[data-popper-placement='right']_.popover-arrow]:after:dark:border-r-gray-950 [&[data-popper-placement='right']_.popover-arrow]:after:border-t-8 [&[data-popper-placement='right']_.popover-arrow]:after:border-r-8 [&[data-popper-placement='right']_.popover-arrow]:after:border-b-8 [&[data-popper-placement='right']_.popover-arrow]:after:border-l-0":true,
        "[&[data-popper-placement='bottom']_.popover-arrow]:h-2 [&[data-popper-placement='bottom']_.popover-arrow]:w-4 [&[data-popper-placement='bottom']_.popover-arrow]:-top-2 [&[data-popper-placement='bottom']_.popover-arrow]:left-1/2 [&[data-popper-placement='bottom']_.popover-arrow]:-translate-x-1/2 [&[data-popper-placement='bottom']_.popover-arrow]:before:left-0 [&[data-popper-placement='bottom']_.popover-arrow]:before:border-b-gray-300 [&[data-popper-placement='bottom']_.popover-arrow]:before:dark:border-b-gray-900 [&[data-popper-placement='bottom']_.popover-arrow]:before:border-t-0 [&[data-popper-placement='bottom']_.popover-arrow]:before:border-r-8 [&[data-popper-placement='bottom']_.popover-arrow]:before:border-b-8 [&[data-popper-placement='bottom']_.popover-arrow]:before:border-l-8 [&[data-popper-placement='bottom']_.popover-arrow]:after:top-px [&[data-popper-placement='bottom']_.popover-arrow]:after:left-0 [&[data-popper-placement='bottom']_.popover-arrow]:after:border-b-white [&[data-popper-placement='bottom']_.popover-arrow]:after:dark:border-b-gray-950 [&[data-popper-placement='bottom']_.popover-arrow]:after:border-t-0 [&[data-popper-placement='bottom']_.popover-arrow]:after:border-r-8 [&[data-popper-placement='bottom']_.popover-arrow]:after:border-b-8 [&[data-popper-placement='bottom']_.popover-arrow]:after:border-l-8":true,
        "[&[data-popper-placement='left']_.popover-arrow]:h-4 [&[data-popper-placement='left']_.popover-arrow]:w-2 [&[data-popper-placement='left']_.popover-arrow]:-right-2 [&[data-popper-placement='left']_.popover-arrow]:top-1/2 [&[data-popper-placement='left']_.popover-arrow]:-translate-y-1/2 [&[data-popper-placement='left']_.popover-arrow]:before:top-0 [&[data-popper-placement='left']_.popover-arrow]:before:border-l-gray-300 [&[data-popper-placement='left']_.popover-arrow]:before:dark:border-l-gray-900 [&[data-popper-placement='left']_.popover-arrow]:before:border-t-8 [&[data-popper-placement='left']_.popover-arrow]:before:border-r-0 [&[data-popper-placement='left']_.popover-arrow]:before:border-b-8 [&[data-popper-placement='left']_.popover-arrow]:before:border-l-8 [&[data-popper-placement='left']_.popover-arrow]:after:right-px [&[data-popper-placement='left']_.popover-arrow]:after:top-0 [&[data-popper-placement='left']_.popover-arrow]:after:border-l-white [&[data-popper-placement='left']_.popover-arrow]:after:dark:border-l-gray-950 [&[data-popper-placement='left']_.popover-arrow]:after:border-t-8 [&[data-popper-placement='left']_.popover-arrow]:after:border-r-0 [&[data-popper-placement='left']_.popover-arrow]:after:border-b-8 [&[data-popper-placement='left']_.popover-arrow]:after:border-l-8":true,
        [`${className}`]: className,
    });
  return(
    <PopoverComponent className="relative inline-block">
        <PopoverComponent.Button ref={setReferenceElement} className="[&>*]:pointer-events-none peer relative inline-flex items-center text-center align-middle text-base font-bold leading-4.5 rounded-md px-6 py-3 tracking-wide border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-300 focus-visible:outline-none"><span>{children}</span></PopoverComponent.Button>
        <PopoverComponent.Panel className={panelClass} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            {console.log(attributes.popper)}
            <div className="popover-arrow absolute before:block before:h-0 before:w-0 before:border-transparent after:absolute after:block after:h-0 after:w-0 after:border-transparent"></div>
            {title && <h3 className="px-3 py-2 border-b border-gray-300 dark:border-gray-900 bg-gray-100 dark:bg-gray-900 text-base leading-5 font-bold font-heading text-slate-700 dark:text-white rounded-t-[inherit]">{title}</h3>}
            <div className="px-3 py-2 text-sm leading-6">{content}</div>
        </PopoverComponent.Panel>
    </PopoverComponent>
  )
  
}

export default Popover