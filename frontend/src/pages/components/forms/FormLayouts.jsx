import React from 'react'
import { Head, Block, Button, Card, CheckBox, Form, Input, Radio, Switch, TextArea } from '../../../componenets'

const FormLayoutsPage = () => {
  return (
    <>
        <Head title="Form Layouts" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Form Layouts</Block.TitleLg>
            <Block.LeadText>Form is most esential part of your project. We styled out nicely so you can build your form so quickly.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Basic Form Style - S1</Block.Title>
                <Block.Text>Below example helps you to build your own form nice way.</Block.Text>
            </Block.Head>
            <div className="grid grid-flow-dense grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                    <Card className="h-full">
                    <Card.Body>
                        <h5 className="text-xl leading-tighter font-heading font-bold mb-5">Customer Info</h5>
                        <Form>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="ciFullName">Full Name</Form.Label>
                                <Input.Wrap>
                                    <Input id="ciFullName" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="ciEmailAddress">Email address</Form.Label>
                                <Input.Wrap>
                                    <Input id="ciEmailAddress" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="ciPhoneNo">Phone No</Form.Label>
                                <Input.Wrap>
                                    <Input id="ciPhoneNo" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2">Communication</Form.Label>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <CheckBox id="ciEmail" size="sm">Email</CheckBox>
                                    <CheckBox id="ciSMS" size="sm">SMS</CheckBox>
                                    <CheckBox id="ciPhone" size="sm">Phone</CheckBox>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="ciAmount">Amount</Form.Label>
                                <Input.Wrap>
                                    <Input id="ciAmount" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2">Payment Methods</Form.Label>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <CheckBox id="ciCard" size="sm">Card</CheckBox>
                                    <CheckBox id="ciBitcoin" size="sm">Bitcoin</CheckBox>
                                    <CheckBox id="ciCash" size="sm">Cash</CheckBox>
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Button size="lg" variant="primary">Save Informations</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Card className="h-full">
                    <Card.Body>
                        <h5 className="text-xl leading-tighter font-heading font-bold mb-5">Contact Form</h5>
                        <Form action="#">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="cfFullName">Full Name</Form.Label>
                                <Input.Wrap>
                                    <Input id="cfFullName" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="cfEmailAddress">Email address</Form.Label>
                                <Input.Wrap>
                                    <Input id="cfEmailAddress" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="cfPhoneNo">Phone No</Form.Label>
                                <Input.Wrap>
                                    <Input id="cfPhoneNo" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="cfSubject">Subject</Form.Label>
                                <Input.Wrap>
                                    <Input id="cfSubject" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="ciMessage">Message</Form.Label>
                                <Input.Wrap>
                                    <TextArea id="ciMessage" />
                                </Input.Wrap>
                            </Form.Group>
                            <Form.Group>
                                <Button size="lg" variant="primary">Save Informations</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Basic Form Style - S2</Block.Title>
                <Block.Text>You can alow display form in column as example below.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <h5 className="text-xl leading-tighter font-heading font-bold mb-5">Customer Info S2</h5>
                <Form action="#">
                    <div className="grid grid-flow-dense grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" for="cis2FullName">Full Name</Form.Label>
                                <Input.Wrap>
                                    <Input id="cis2FullName" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" for="cis2EmailAddress">Email address</Form.Label>
                                <Input.Wrap>
                                    <Input id="cis2EmailAddress" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" for="cis2PhoneNo">Phone No</Form.Label>
                                <Input.Wrap>
                                    <Input id="cis2PhoneNo" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" for="cis2Amount">Amount</Form.Label>
                                <Input.Wrap>
                                    <Input id="cis2Amount" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">Communication</Form.Label>
                                <div className="flex flex-wrap gap-4">
                                    <CheckBox id="cis2Email" size="sm">Email</CheckBox>
                                    <CheckBox id="cis2SMS" size="sm">SMS</CheckBox>
                                    <CheckBox id="cis2Phone" size="sm">Phone</CheckBox>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">Payment Methods</Form.Label>
                                <div className="flex flex-wrap gap-4">
                                    <CheckBox id="cis2Card" size="sm">Card</CheckBox>
                                    <CheckBox id="cis2Bitcoin" size="sm">Bitcoin</CheckBox>
                                    <CheckBox id="cis2Cash" size="sm">Cash</CheckBox>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                            <Button size="lg" variant="primary">Save Informations</Button>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Setting Form Style</Block.Title>
                <Block.Text>You can make style out your setting related form as per below example.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <h5 className="text-xl leading-tighter font-heading font-bold mb-5">Website Setting</h5>
                <Form action="#" className="flex flex-col gap-y-4">
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="wsSiteName">Site Name</label>
                                <span className="block italic text-xs text-slate-400">Specify the name of your website.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <Input.Wrap>
                                    <Input id="wsSiteName" defaultValue="DashParabellumGroups Admin Template" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="wsSiteEmail">Site Email</label>
                                <span className="block italic text-xs text-slate-400">Specify the email address of your website.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <Input.Wrap>
                                    <Input id="wsSiteEmail" defaultValue="info@softnio.com" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="wsSiteCopyright">Site Copyright</label>
                                <span className="block italic text-xs text-slate-400">Copyright information of your website.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <Input.Wrap>
                                    <Input id="wsSiteCopyright" defaultValue="&copy; 2023, DashParabellumGroups. All Rights Reserved." />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Allow Registration</label>
                                <span className="block italic text-xs text-slate-400">Enable or disable registration from site.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <div className="flex flex-wrap items-center gap-5">
                                    <Radio name="registerOption" id="registrationOptionEnable">Enable</Radio>
                                    <Radio name="registerOption" id="registrationOptionDisable">Disable</Radio>
                                    <Radio name="registerOption" id="registrationOptionOnRequest">On Request</Radio>
                                </div>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2" htmlFor="wsMainWebsite">Main Website</label>
                                <span className="block italic text-xs text-slate-400">Specify the URL if your main website is external.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <Input.Wrap>
                                    <Input id="wsMainWebsite" defaultValue="https://www.softnio.com" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-5/12 p-2">
                            <Form.Group>
                                <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Maintanance Mode</label>
                                <span className="block italic text-xs text-slate-400">Enable to make website make offline.</span>
                            </Form.Group>
                        </div>
                        <div className="w-full lg:w-7/12 p-2">
                            <Form.Group>
                                <Switch id="offline">Offline</Switch>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center -m-2">
                        <div className="w-full lg:w-7/12 p-2 lg:ms-[calc(100%/12*5)]">
                            <Form.Group>
                                <Button size="lg" variant="primary">Update</Button>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default FormLayoutsPage