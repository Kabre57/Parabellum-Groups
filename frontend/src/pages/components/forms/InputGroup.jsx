import React, {Fragment, useState} from 'react'
import { Head, Block, Button, Card, CheckBox, Form, Icon, Input, Radio, TextArea, Select, File } from '../../../componenets'

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
  <Menu as="div" className={`inline-flex relative rounded ${className ? className : ''}`}>
      {({ open }) => (
          <>
              <Menu.Button as={Fragment} className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
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
                      <li className="block border-t border-gray-300 dark:border-gray-900 my-2"></li>
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

const InputGroupPage = () => {
  return (
    <>
        <Head title="Input Group" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Input Group</Block.TitleLg>
            <Block.LeadText>Examples and usage guidelines for input group. Extend form controls by adding text, buttons, or button groups on either side of text inputs, custom selects, and custom file inputs.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Basic example</Block.Title>
                <Block.Text>Place one add-on or button on either side of an input. You may also place one on both sides of an input. We do not support multiple form-controls in a single input group and <code className="text-primary-600">&lt;label&gt;</code>s must come outside the input group.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon> @ </Input.Addon>
                                <Input id="default-01" placeholder="Username" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group responsive="xs">
                                <Input id="default-02" placeholder="Recipient's username" />
                                <Input.Addon>@example.com</Input.Addon>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Form.Label className="mb-2" for="default-03">Your URL</Form.Label>
                            <Input.Group responsive="xs">
                                <Input.Addon>https://example.com/users/</Input.Addon>
                                <Input id="default-03" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon>$</Input.Addon>
                                <Input id="default-04" placeholder="Username" />
                                <Input.Addon>.00</Input.Addon>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group responsive="xs">
                                <Input.Addon size="lg"> <div className="whitespace-nowrap">With textarea</div> </Input.Addon>
                                <TextArea id="default-textarea" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Sizing</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon size="sm"> Small </Input.Addon>
                                <Input size="sm" id="size-01" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon> Default </Input.Addon>
                                <Input id="size-02" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon size="lg"> Large </Input.Addon>
                                <Input size="lg" id="size-03" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Checkboxes and radios</Block.Title>
                <Block.Text>Place any checkbox or radio option within an input group’s addon instead of text.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon>
                                <CheckBox size="sm" id="customCheck1" />
                                </Input.Addon>
                                <Input id="check-01" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon>
                                <Radio size="sm" id="customRadio1" />
                                </Input.Addon>
                                <Input id="radio-01" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Multiple inputs</Block.Title>
                <Block.Text>While multiple <code className="text-primary-600">&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code className="text-primary-600">&lt;input&gt;</code>.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group responsive="sm">
                                <Input.Addon> <div className="whitespace-nowrap">First and last name</div> </Input.Addon>
                                <Input id="default-05-1" />
                                <Input id="default-05-2" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Multiple addons</Block.Title>
                <Block.Text>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon>$</Input.Addon>
                                <Input.Addon>0.00</Input.Addon>
                                <Input id="default-06" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input id="default-07" />
                                <Input.Addon>$</Input.Addon>
                                <Input.Addon>0.00</Input.Addon>
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Button addons</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Button size="rg" variant="primary-pale-outline">Button</Button>
                                <Input id="default-08" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input id="default-09" />
                                <Button size="rg" variant="primary-pale-outline">Button</Button>
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Buttons with dropdowns</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <BasicDropdown 
                                    button={
                                    <button className={`relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded-[inherit] px-5 py-2 tracking-wide border border-primary-300 dark:border-primary-800 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white hover:dark:text-white active:bg-primary-700 active:dark:bg-primary-700 hover:z-10 transition-all duration-300 ${open ? 'show' : ''}`}>
                                        Drop <Icon className="ms-1 -me-1 text-xl leading-4.5" name="chevron-down" />
                                        </button>
                                    } 
                                    placement="bottom-start" 
                                    rtlPlacement="bottom-end" 
                                />
                                <Input id="default-08" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input id="default-09" />
                                <BasicDropdown 
                                    button={
                                    <button className={`relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded-[inherit] px-5 py-2 tracking-wide border border-primary-300 dark:border-primary-800 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white hover:dark:text-white active:bg-primary-700 active:dark:bg-primary-700 hover:z-10 transition-all duration-300 ${open ? 'show' : ''}`}>
                                        Drop <Icon className="ms-1 -me-1 text-xl leading-4.5" name="chevron-down" />
                                        </button>
                                    } 
                                    placement="bottom-end" 
                                    rtlPlacement="bottom-start" 
                                />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Segmented buttons</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Button size="rg" variant="primary-pale-outline">Action</Button>
                                <BasicDropdown 
                                    button={
                                        <button className={`relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded-[inherit] px-1 py-2 tracking-wide border border-primary-300 dark:border-primary-800 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white hover:dark:text-white active:bg-primary-700 active:dark:bg-primary-700 hover:z-10 transition-all duration-300 ${open ? 'show' : ''}`}>
                                        <Icon className="text-xl leading-4.5" name="chevron-down" />
                                        </button>
                                    } 
                                    placement="bottom-start" 
                                    rtlPlacement="bottom-end" 
                                />
                                <Input id="default-08" />
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input id="default-09" />
                                <Button size="rg" variant="primary-pale-outline">Action</Button>
                                <BasicDropdown 
                                    button={
                                        <button className={`dropdown-toggle [&>*]:pointer-events-none peer relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded-[inherit] px-1 py-2 tracking-wide border border-primary-300 dark:border-primary-800 text-primary-600 bg-primary-100 dark:bg-primary-950 hover:bg-primary-600 hover:dark:bg-primary-600 hover:border-primary-600 hover:dark:border-primary-600 hover:text-white hover:dark:text-white active:bg-primary-700 active:dark:bg-primary-700 hover:z-10 transition-all duration-300 ${open ? 'show' : ''}`}>
                                        <Icon className="text-xl leading-4.5" name="chevron-down" />
                                        </button>
                                    } 
                                    placement="bottom-end" 
                                    rtlPlacement="bottom-start" 
                                />
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Custom select</Block.Title>
                <Block.Text>Input groups include support for custom selects inputs. Browser default versions of these are not supported.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon>Options</Input.Addon>
                                <Select id="default-10">
                                    <Select.Option value="default_option">Default Option</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                </Select>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Select id="default-11">
                                    <Select.Option value="default_option">Default Option</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                </Select>
                                <Input.Addon>Options</Input.Addon>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Button size="rg" variant="primary-pale-outline">Button</Button>
                                <Select id="default-12">
                                    <Select.Option value="default_option">Default Option</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                </Select>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Select id="default-13">
                                    <Select.Option value="default_option">Default Option</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                </Select>
                                <Button size="rg" variant="primary-pale-outline">Button</Button>
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Custom file input</Block.Title>
                <Block.Text>Input groups include support for custom file inputs. Browser default versions of these are not supported.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Input.Addon className="z-[3]">Upload</Input.Addon>
                                <File id="customFile1">Choose file</File>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <File id="customFile2">Choose file</File>
                                <Input.Addon className="z-[3]">Upload</Input.Addon>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <Button size="rg" variant="primary-pale-outline" className="z-[3]">Button</Button>
                                <File id="customFile3">Choose file</File>
                            </Input.Group>
                        </Form.Group>
                    </div>
                    <div className="col-span-12">
                        <Form.Group>
                            <Input.Group>
                                <File id="customFile4">Choose file</File>
                                <Button size="rg" variant="primary-pale-outline" className="z-[3]">Button</Button>
                            </Input.Group>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default InputGroupPage