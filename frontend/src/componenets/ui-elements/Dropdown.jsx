import React, {useState} from 'react'
import classNames from 'classnames';
import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from '../../layout/context';

const Dropdown = ({ className, rootClassName, wrapClassName, placement, rtlPlacement, title, content, offset, rtlOffset, children, button, ...props}) => {

    const theme = useTheme();
    const localPlacement = placement ? placement : "bottom-start";
    const localRtlPlacement = rtlPlacement ? rtlPlacement : "bottom-end";
    const localOffset = offset ? offset : [0, 0];
    const localRtlOffset = rtlOffset ? rtlOffset : localOffset;

    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement : theme.direction === "rtl" ? localRtlPlacement : localPlacement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: theme.direction === "rtl" ? localRtlOffset : localOffset,
                },
            },
            {
                name: 'preventOverflow',
                options: {
                  padding: 8
                },
              },
        ],
    })

    const panelClass = classNames({
        "absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000]" : true,
        "min-w-[180px]": !className,
        [`${className}`]: className,
    });
    const wrapperClass = classNames({
        "inline-flex relative" : true,
        [`${rootClassName}`]: rootClassName,
    });
  return(
    <Menu as="div" className={wrapperClass}>
        {({ open }) => (
            <>
                <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}${wrapClassName ? ' ' + wrapClassName : ''}`} ref={setReferenceElement}>
                    {button}
                </Menu.Button>
                <Menu.Items modal={false} ref={setPopperElement} style={styles.popper} {...attributes.popper} className={panelClass}>
                    {children}
                </Menu.Items>
            </>
        )}
    </Menu>
  )
  
}

export default Dropdown