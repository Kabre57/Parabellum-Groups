import React from 'react'
import { Head, Block, Card, Form, Input, Picker } from '../../../componenets'


const DateTimePickerPage = () => {
  return (
    <>
        <Head title="Date & Time Picker" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Date & Time Picker</Block.TitleLg>
            <Block.LeadText>Examples and usage guidelines for date and time picker for form.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Date Picker</Block.Title>
                <Block.Text>Custom date and time picker with <a className="text-primary-600 hover:text-primary-700" target="_blank" href="https://reactdatepicker.com/">reactdatepicker</a>.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="datePicker1" className="mb-2">Datepicker</Form.Label>
                            <Picker.Date id="datePicker1" placeholder="dd/mm/yyyy" />
                            <div className="block text-xs text-slate-400 italic mt-2">Date format <code className="text-pink-400">mm/dd/yyyy</code></div>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="datePicker2" className="mb-2">Datepicker Alt</Form.Label>
                            <Picker.DateOfBirth id="datePicker2" placeholder="dd/mm/yyyy" />
                            <div className="block text-xs text-slate-400 italic mt-2">Date format <code className="text-pink-400">mm/dd/yyyy</code></div>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="datePicker3" className="mb-2">Datepicker with Start Icon</Form.Label>
                            <Input.Wrap>
                                <Input.Icon icon="calendar" start/>
                                <Picker.Date id="datePicker3" placeholder="dd/mm/yyyy" icon="start" />
                            </Input.Wrap>
                            <div className="block text-xs text-slate-400 italic mt-2">Date format <code className="text-pink-400">mm/dd/yyyy</code></div>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="datePicker4" className="mb-2">Datepicker with End Icon</Form.Label>
                            <Input.Wrap>
                                <Input.Icon icon="calendar-alt" end/>
                                <Picker.Date id="datePicker4" placeholder="dd/mm/yyyy" icon="end" />
                            </Input.Wrap>
                            <div className="block text-xs text-slate-400 italic mt-2">Date format <code className="text-pink-400">mm/dd/yyyy</code></div>
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Date Range Picker</Block.Title>
                <Block.Text>Here is an  example for date range picker</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2">Datepicker Range</Form.Label>
                            <Picker.DateRange placeholder="dd/mm/yyyy" />
                        </Form.Group>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Time Picker</Block.Title>
                <Block.Text>Use <code className="text-pink-400">Picker.Time</code> for time picker.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="timePicker1" className="mb-2">Time Picker</Form.Label>
                            <Picker.Time placeholder="hh:mm" />
                        </Form.Group>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Form.Group>
                            <Form.Label htmlFor="timePicker2" className="mb-2">Time Picker (24hour)</Form.Label>
                            <Picker.Time format={24} placeholder="hh:mm" />
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

export default DateTimePickerPage