import React,{ useState } from 'react'
import { usePopper } from 'react-popper';
import { Listbox } from '@headlessui/react'

const CategorySelect = ({selected, setSelected, data}) => {
    let [referenceElement, setReferenceElement] = useState()
    let [popperElement, setPopperElement] = useState()
    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement : 'bottom',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0,4],
                },
            },
        ],
    })
  return (
    <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button ref={setReferenceElement} className="flex  items-center w-full box-border text-slate-700 dark:text-white placeholder-slate-300 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none focus:border-primary-500 focus:dark:border-primary-600 focus:outline-offset-0 focus:outline-primary-200 focus:dark:outline-primary-950  disabled:bg-slate-50 disabled:dark:bg-slate-950 disabled:cursor-not-allowed transition-all focus:z-10 text-sm leading-4.5 py-1.5 h-9 rounded px-4">
            <span className={`fc-select-dot ${selected.value}`}></span>
            {selected.label}
        </Listbox.Button>
            <Listbox.Options ref={setPopperElement} style={styles.popper} {...attributes.popper} className="absolute p-1 w-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-10 max-h-80 overflow-auto">
                {data.map((item,index) => (
                    <Listbox.Option
                        key={index}
                        value={item}
                        className="text-sm/5 rounded px-3 py-1.5 hover:bg-gray-100 cursor-pointer ui-selected:bg-gray-100"
                    >
                        <span className={`fc-select-dot ${item.value}`}></span>
                        {item.label}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
    </Listbox>
  )
}

export default CategorySelect