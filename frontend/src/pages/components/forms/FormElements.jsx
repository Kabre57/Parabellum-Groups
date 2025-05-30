import React from 'react'
import { Head, Block, Card, Input, Text, Form, TextArea, Select, File } from '../../../componenets'

const FormElementsPage = () => {
  return (
    <>
        <Head title="Form Elements" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Form Elements</Block.TitleLg>
            <Block.LeadText>Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms. Here’s a quick example to demonstrate form styles, so use these classes to opt into their customized displays.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Form controls</Block.Title>
                <Block.Text>Here is some example for default form elements</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <Text.Overline className="mb-3">Default Style's</Text.Overline>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-01">Input text Default</Form.Label>
                            <Input.Wrap>
                                <Input id="default-01" placeholder="Input placeholder" autoComplete="off" />
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-05">Input with Text</Form.Label>
                            <Input.Wrap>
                                <Input.Hint>Usd</Input.Hint>
                                <Input id="default-05" placeholder="Input placeholder" autoComplete="off" />
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-02">Input with Icon Start</Form.Label>
                            <Input.Wrap>
                                <Input.Icon icon="user" start/>
                                <Input id="default-02" icon="start" placeholder="Input placeholder" autoComplete="off" />
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-03">Input with Icon End</Form.Label>
                            <Input.Wrap>
                                <Input.Icon icon="mail" end/>
                                <Input id="default-03" icon="end" placeholder="Input placeholder" autoComplete="off" />
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6 sm:row-span-2 sm:col-start-7 sm:row-start-2">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-textarea">Textarea</Form.Label>
                            <Input.Wrap>
                                <TextArea id="default-textarea" autoComplete="off" defaultValue="Large text area content"/>
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="customFile">Default File Upload</Form.Label>
                            <File id="customFile">Choose file</File>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6 sm:row-span-2">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-07">Default Select Multiple</Form.Label>
                            <Input.Wrap>
                                <Select id="default-07" multiple>
                                    <Select.Option value="option_select0">Default Option</Select.Option>
                                    <Select.Option value="option_select1">Option select name</Select.Option>
                                    <Select.Option value="option_select2">Option select name</Select.Option>
                                    <Select.Option value="option_select2">Option select name</Select.Option>
                                    <Select.Option value="option_select2">Option select name</Select.Option>
                                </Select>
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" htmlFor="default-06">Default Select</Form.Label>
                            <Input.Wrap>
                                <Select id="default-06">
                                    <Select.Option value="default_option">Default Option</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                    <Select.Option value="option_select_name">Option select name</Select.Option>
                                </Select>
                            </Input.Wrap>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Select with ChoiceJS</Block.Title>
                <Block.Text>
                Take a look at this element's to replace browser default style with <a className="text-primary-500 hover:text-primary-700" target="_blank" href="https://choices-js.github.io/Choices/">ChoiceJS</a>, as its give you a customizable select box with support for searching, tagging, and many other highly used options.
                </Block.Text>
            </Block.Head>
            <Card>
                <Card.Body>
                    <div className="grid grid-flow-dense grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">ChoiceJS Default</Form.Label>
                                <Input.Wrap>
                                    <Select.Choice>
                                        <Select.Option value="default_option">Default Option</Select.Option>
                                        <Select.Option value="option_select_name_1">Option select name 1</Select.Option>
                                        <Select.Option value="option_select_name_2">Option select name 2</Select.Option>
                                    </Select.Choice>
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">ChoiceJS With Search</Form.Label>
                                <Input.Wrap>        
                                    <Select.Choice search="true">
                                        <Select.Option value="default_option">Default Option</Select.Option>
                                        <Select.Option value="option_select_name_1">Option select name 1</Select.Option>
                                        <Select.Option value="option_select_name_2">Option select name 2</Select.Option>
                                    </Select.Choice>
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">ChoiceJS Multiple Select</Form.Label>
                                <Input.Wrap>
                                    <Select.Choice multiple placeholder="Select Multiple Options">
                                        <Select.Option value="default_option">Default Option</Select.Option>
                                        <Select.Option value="option_select_name_1">Option select name 1</Select.Option>
                                        <Select.Option value="option_select_name_2">Option select name 2</Select.Option>
                                        <Select.Option value="option_select_name_3">Option select name 3</Select.Option>
                                        <Select.Option value="option_select_name_4">Option select name 4</Select.Option>
                                        <Select.Option value="option_select_name_5">Option select name 5</Select.Option>
                                        <Select.Option value="option_select_name_6">Option select name 6</Select.Option>
                                        <Select.Option value="option_select_name_7">Option select name 7</Select.Option>
                                        <Select.Option value="option_select_name_8">Option select name 8</Select.Option>
                                        <Select.Option value="option_select_name_9">Option select name 9</Select.Option>
                                        <Select.Option value="option_select_name_10">Option select name 10</Select.Option>
                                    </Select.Choice>
                                </Input.Wrap>
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

export default FormElementsPage