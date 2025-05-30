import React, {useState} from 'react'
import { Head, Block, Card, Text, Icon, Button } from '../../../componenets'

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const BasicDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                  <ul className="py-2">
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <span>List Action</span>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <span>Another Action</span>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <span>More Action</span>
                        </Menu.Item>
                      </li>
                  </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)}

const GeneralBorderDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                  <ul>
                      <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="setting" />
                          <span>Action Settings</span>
                        </Menu.Item>
                      </li>
                      <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="notify" />
                          <span>Push Notification</span>
                        </Menu.Item>
                      </li>
                      <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="activity-alt" />
                          <span>Login Activity</span>
                        </Menu.Item>
                      </li>
                  </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)
}

const GeneralNoBorderDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                  <ul className="py-2">
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="setting" />
                          <span>Action Settings</span>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="notify" />
                          <span>Push Notification</span>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="activity-alt" />
                          <span>Login Activity</span>
                        </Menu.Item>
                      </li>
                  </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)
}

const SeparatorDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                  <ul className="py-2">
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="setting" />
                          <span>Action Settings</span>
                        </Menu.Item>
                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="notify" />
                          <span>Push Notification</span>
                        </Menu.Item>
                      </li>
                      <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                      </li>
                      <li>
                        <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300">
                          <Icon className="text-start text-lg leading-none w-7 opacity-80" name="activity-alt" />
                          <span>Login Activity</span>
                        </Menu.Item>
                      </li>
                  </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)}

const MultiColumnDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[280px]">
                <ul className="flex flex-wrap text-center">
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Jan</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Feb</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Mar</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Apr</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>May</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Jun</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Jul</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Aug</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Sep</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Oct</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Nov</span>
                    </Menu.Item>
                  </li>
                  <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Dec</span>
                    </Menu.Item>
                  </li>
                </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)
}

const HeadingDropdown = ({className, button, placement, rtlPlacement }) => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? rtlPlacement : placement,
      modifiers: [
          {name: 'offset', options: { offset: [0, 4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
return (
  <Menu as="div" className={`inline-flex relative ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                {button}
              </Menu.Button>
              <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                <ul className="py-2">
                  <li>
                    <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">List Action</h6>
                  </li>
                  <li>
                    <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Hello Team!</span>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Thank You!</span>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300"><span>Most Welcome!</span>
                    </Menu.Item>
                  </li>
                  <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                  <li>
                    <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Manage</h6>
                  </li>
                  <li>
                    <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                      <Icon className="text-lg leading-none w-7" name="file-plus" />
                      <span>Save as Template</span>
                    </Menu.Item>
                  </li>
                  <li>
                    <Menu.Item as="button" className="w-full relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300">
                      <Icon className="text-lg leading-none w-7" name="notes-alt" />
                      <span>Manage Template</span>
                    </Menu.Item>
                  </li>
                </ul>
              </Menu.Items>
          </>
      )}
  </Menu>
)
}

const DropdownPage = () => {
  return (
    <>
        <Head title="List Dropdowns" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>List Style for Dropdown</Block.TitleLg>
              <Block.LeadText>Toggle contextual overlays for displaying lists of links and more with the <a className="text-primary-600 hover:text-primary-800" target="_blank" href="https://headlessui.com/react/menu">HeadlessUI Menu</a> component. Our exclusive link list style for dropdown that give you more power.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Dropdown Variations</Block.Title>
                <Block.Text>Here some examples for dropdown previews.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Text.Overline className="mb-3">Previews</Text.Overline>
                <div className="flex flex-wrap gap-4">
                  <BasicDropdown button={<Button size="rg" variant="light">Dropdown</Button>} placement="bottom-start" rtlPlacement="bottom-end" />
                  <BasicDropdown button={<Button size="rg" variant="light">DropUp</Button>} placement="top-start" rtlPlacement="top-end" />
                  <BasicDropdown button={<Button size="rg" variant="light">DropEnd</Button>} placement="right-start" rtlPlacement="left-start" />
                  <BasicDropdown button={<Button size="rg" variant="light">DropStart</Button>} placement="left-start" rtlPlacement="right-start" />
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Dropdown List Style - General</Block.Title>
                <Block.Text>Here is few General styles for dropdown list style.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                  <h6 className="text-base font-bold text-slate-700 dark:text-white font-heading mb-3">With Border</h6>
                  <div className="flex flex-wrap -m-3.5">
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Default</Text.Overline>
                            <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                                <ul>
                                    <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>List Action</span>
                                      </a>
                                    </li>
                                    <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>Another Action</span>
                                      </a>
                                    </li>
                                    <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>More Action</span>
                                      </a>
                                    </li>
                                </ul>
                            </div>
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Selected / Actived</Text.Overline>
                          
                          <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                            <ul>
                                <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900 group">
                                  <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>List Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900 group active">
                                  <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>Another Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900 group">
                                  <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>More Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                            </ul>
                          </div>
                          
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">With Icon</Text.Overline>
                          
                            <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                              <ul>
                                  <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="setting" />
                                      <span>Action Settings</span>
                                    </a>
                                  </li>
                                  <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="notify" />
                                      <span>Push Notification</span>
                                    </a>
                                  </li>
                                  <li className="first:rounded-t-md last:rounded-b-md first:border-t-0 border-t border-gray-300 dark:border-gray-900">
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="activity-alt" />
                                      <span>Login Activity</span>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                          
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Preview</Text.Overline>
                          <div className="flex flex-wrap gap-4">
                              <GeneralBorderDropdown 
                                  placement="bottom-start"
                                  rtlPlacement="bottom-end"
                                  button={
                                      <Button size="rg" variant="light">
                                          Click Here
                                      </Button>
                                  }
                              />
                              <GeneralBorderDropdown 
                                  placement="bottom-end"
                                  rtlPlacement="bottom-start"
                                  button={
                                      <Button size="rg" variant="light" icon>
                                          <Icon className="text-xl leading-4.5" name="more-h" />
                                      </Button>
                                  }
                              />
                          </div>
                      </div>
                  </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Card>
              <Card.Body>
                <div className="p-5 sm:p-6 border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900">
                    <h6 className="text-base font-bold text-slate-700 dark:text-white font-heading mb-3">Without Border</h6>
                    <div className="flex flex-wrap -m-3.5">
                        <div className="p-3.5">
                            <Text.Overline className="mb-3">Default</Text.Overline>
                            
                              <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                                <ul className="py-2">
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>List Action</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>Another Action</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>More Action</span>
                                      </a>
                                    </li>
                                </ul>
                              </div>
                            
                        </div>
                        <div className="p-3.5">
                            <Text.Overline className="mb-3">Selected / Actived</Text.Overline>
                            
                              <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                                <ul className="py-2">
                                    <li className="group">
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>List Action</span>
                                      <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                    </a>
                                    </li>
                                    <li className="group active"><a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>Another Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                    </a>
                                    </li>
                                    <li className="group">
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <span>More Action</span>
                                      <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                    </a>
                                    </li>
                                </ul>
                              </div>
                            
                        </div>
                        <div className="p-3.5">
                            <Text.Overline className="mb-3">With Icon</Text.Overline>
                            
                              <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                                <ul className="py-2">
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-lg leading-none w-7 opacity-80" name="setting" />
                                        <span>Action Settings</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-lg leading-none w-7 opacity-80" name="notify" />
                                        <span>Push Notification</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                        <Icon className="text-lg leading-none w-7 opacity-80" name="activity-alt" />
                                        <span>Login Activity</span>
                                      </a>
                                    </li>
                                </ul>
                              </div>
                            
                        </div>
                        <div className="p-3.5">
                            <Text.Overline className="mb-3">Preview</Text.Overline>
                            <div className="flex flex-wrap gap-4">
                              <GeneralNoBorderDropdown 
                                  placement="bottom-start"
                                  rtlPlacement="bottom-end"
                                  button={
                                      <Button size="rg" variant="light">
                                          Click Here
                                      </Button>
                                  }
                              />
                              <GeneralNoBorderDropdown 
                                  placement="bottom-end"
                                  rtlPlacement="bottom-start"
                                  button={
                                      <Button size="rg" variant="light" icon>
                                          <Icon className="text-xl leading-4.5" name="more-h" />
                                      </Button>
                                  }
                              />
                            </div>
                        </div>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Card>
              <Card.Body>
                  <h6 className="text-base font-bold text-slate-700 dark:text-white font-heading mb-3">With Separator</h6>
                  <div className="flex flex-wrap -m-3.5">
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Default</Text.Overline>
                          
                            <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                              <ul className="py-2">
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>List Action</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>Another Action</span>
                                    </a>
                                  </li>
                                  <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                                  </li>
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>More Action</span>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                          
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Selected / Actived</Text.Overline>
                          
                            <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">  
                              <ul className="py-2">
                                  <li className="group">
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>List Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                  </li>
                                  <li className="group active"><a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>Another Action</span>
                                  <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                  </li>
                                  <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                                  </li>
                                  <li className="group">
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <span>More Action</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                  </li>
                              </ul>
                            </div>
                          
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">With Icon</Text.Overline>
                          
                            <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                              <ul className="py-2">
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="setting" />
                                      <span>Action Settings</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="notify" />
                                      <span>Push Notification</span>
                                    </a>
                                  </li>
                                  <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                                  </li>
                                  <li>
                                    <a className="relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                      <Icon className="text-lg leading-none w-7 opacity-80" name="activity-alt" />
                                      <span>Login Activity</span>
                                    </a>
                                  </li>
                              </ul>
                            </div>
                          
                      </div>
                      <div className="p-3.5">
                          <Text.Overline className="mb-3">Preview</Text.Overline>
                          <div className="flex flex-wrap gap-4">
                              <SeparatorDropdown 
                                  placement="bottom-start"
                                  rtlPlacement="bottom-end"
                                  button={
                                      <Button size="rg" variant="light">
                                          Click Here
                                      </Button>
                                  }
                              />
                              <SeparatorDropdown 
                                  placement="bottom-end"
                                  rtlPlacement="bottom-start"
                                  button={
                                      <Button size="rg" variant="light" icon>
                                          <Icon className="text-xl leading-4.5" name="more-h" />
                                      </Button>
                                  }
                              />
                          </div>
                      </div>
                  </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Dropdown List Style - Column</Block.Title>
                <Block.Text>Here is few Column styles for dropdown list style.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <h6 className="text-base font-bold text-slate-700 dark:text-white font-heading mb-3">Multiple Column</h6>
                <div className="flex flex-wrap -m-3.5">
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">3 Column</Text.Overline>
                        
                          <div className="min-w-[280px] max-w-[280px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">  
                            <ul className="flex flex-wrap text-center">
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jan</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Feb</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Mar</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Apr</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>May</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jun</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jul</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Aug</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Sep</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Oct</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Nov</span>
                                  </a>
                                </li>
                                <li className="w-1/3 border-e [&:nth-child(3n)]:border-e-0 border-b [&:nth-last-child(-n+3)]:border-b-0 border-gray-300 dark:border-gray-900"><a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Dec</span>
                                  </a>
                                </li>
                            </ul>
                          </div>
                        
                    </div>
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">4 Column</Text.Overline>
                        
                          <div className="min-w-[280px] max-w-[280px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                            <ul className="flex flex-wrap text-center">
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jan</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Feb</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Mar</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Apr</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>May</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jun</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Jul</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Aug</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Sep</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Oct</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Nov</span>
                                  </a>
                                </li>
                                <li className="w-1/4 border-e [&:nth-child(4n)]:border-e-0 border-b [&:nth-last-child(-n+4)]:border-b-0 border-gray-300 dark:border-gray-900">
                                  <a className="relative px-5 py-2.5 flex items-center justify-center text-xs leading-5 font-normal text-slate-600 dark:text-slate-400 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Dec</span>
                                  </a>
                                </li>
                            </ul>
                          </div>
                        
                    </div>
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">Preview</Text.Overline>
                        <div className="flex flex-wrap gap-4">
                            <MultiColumnDropdown 
                                placement="bottom-start"
                                rtlPlacement="bottom-end"
                                button={
                                    <Button size="rg" variant="light">
                                        Click Here
                                    </Button>
                                }
                            />
                            <MultiColumnDropdown 
                                placement="bottom-end"
                                rtlPlacement="bottom-start"
                                button={
                                    <Button size="rg" variant="light" icon>
                                        <Icon className="text-xl leading-4.5" name="more-h" />
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Dropdown List Style - Heading</Block.Title>
                <Block.Text>Here is a style for dropdown list with heading style.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <h6 className="text-base font-bold text-slate-700 dark:text-white font-heading mb-3">with Heading</h6>
                <div className="flex flex-wrap -m-3.5">
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">Default</Text.Overline>
                        
                          <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                            <ul className="py-2">
                                <li>
                                  <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">List Action</h6>
                                </li>
                                <li>
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Hello Team!</span>
                                    </a>
                                </li>
                                <li>
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Thank You!</span>
                                    </a>
                                </li>
                                <li>
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}><span>Most Welcome!</span>
                                    </a>
                                </li>
                                <li className="block border-t border-gray-300 dark:border-gray-900 my-2">

                                </li>
                                <li>
                                  <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Manage</h6>
                                </li>
                                <li>
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <Icon className="text-lg leading-none w-7" name="file-plus" />
                                    <span>Save as Template</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <Icon className="text-lg leading-none w-7" name="notes-alt" />
                                    <span>Manage Template</span>
                                  </a>
                                </li>
                            </ul>
                          </div>
                        
                    </div>
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">Selected / Actived</Text.Overline>
                        
                          <div className="min-w-[180px] border border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950 rounded-md shadow">
                            <ul className="py-2">
                                <li>
                                  <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Show</h6>
                                </li>
                                <li className="group">
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>10 Items</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="group active"><a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                  <span>20 Items</span>
                                  <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="group">
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <span>30 Items</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
                                <li>
                                  <h6 className="relative px-5 py-1.5 flex items-center text-xs leading-5 tracking-[1px] font-bold uppercase text-slate-700 dark:text-white">Order By</h6>
                                </li>
                                <li className="group active"><a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                  <Icon className="text-lg leading-none w-7" name="arrow-long-up"/>
                                  <span>DESC</span>
                                  <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                                <li className="group">
                                  <a className="relative px-5 py-1.5 flex items-center rounded-[inherit] text-xs leading-5 font-normal text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:dark:text-primary-600 hover:bg-slate-50 hover:dark:bg-slate-900 transition-all duration-300" href="#link" onClick={(e)=> e.preventDefault()}>
                                    <Icon className="text-lg leading-none w-7" name="arrow-long-down"/>
                                    <span>ASC</span>
                                    <Icon className="hidden group-[.active]:block text-xs font-medium leading-none absolute top-1/2 end-4 -translate-y-1/2" name="check-thick"/>
                                  </a>
                                </li>
                            </ul>
                          </div>
                        
                    </div>
                    <div className="p-3.5">
                        <Text.Overline className="mb-3">Preview</Text.Overline>
                        <div className="flex flex-wrap gap-4">
                            <HeadingDropdown 
                                placement="bottom-start"
                                rtlPlacement="bottom-end"
                                button={
                                    <Button size="rg" variant="light">
                                        Click Here
                                    </Button>
                                }
                            />
                            <HeadingDropdown 
                                placement="bottom-end"
                                rtlPlacement="bottom-start"
                                button={
                                    <Button size="rg" variant="light" icon>
                                        <Icon className="text-xl leading-4.5" name="more-h" />
                                    </Button>
                                }
                            />
                        </div>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default DropdownPage