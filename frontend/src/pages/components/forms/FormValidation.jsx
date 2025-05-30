import React from 'react'
import { Head, Block, Button, Card, CheckBox, Form, Input, Radio, Select, TextArea } from '../../../componenets'
import { useForm } from "react-hook-form";

const FormValidationPage = () => {
  const {  register, handleSubmit, formState: { errors } } = useForm();
  const { register: register2, formState: { errors: errors2 }, handleSubmit: handleSubmit2,  } = useForm();
  const onFormSubmit = (e) => {};
  const onFormSubmit2 = (e) => {};
  return (
    <>
        <Head title="Form Validation" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Form Validation</Block.TitleLg>
            <Block.LeadText>Using the react-hook-form, you can simply add validation on client side before submit form, check out the documentation.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Validation - Regular Style</Block.Title>
                <Block.Text>For basic style use <code className="text-primary-600">&lt;Form.Error /&gt;</code> component with the response.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <Form action="#" className="js-validate" id="jsValidate" onSubmit={handleSubmit(onFormSubmit)} noValidate>
                    <div className="grid grid-flow-dense grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-full-name">Full Name</Form.Label>
                                <Input.Wrap>
                                    <Input id="fv-full-name" {...register('fvFullName', { required: true })} />
                                    {errors.fvFullName && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-email">Email address</Form.Label>
                                <Input.Wrap>
                                    <Input.Icon icon="mail" end />
                                    <Input type="email" id="fv-email" name="fvEmail" icon="end"
                                        {...register('fvEmail', {
                                            required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.fvEmail && errors.fvEmail.type === "required" && <Form.Error />}
                                    {errors.fvEmail && errors.fvEmail.type === "pattern" && (<Form.Error message={errors.fvEmail.message} />)}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-phone">Phone</Form.Label>
                                <Input.Wrap>
                                    <Input.Group>
                                    <Input.Addon>+880</Input.Addon>
                                    <Input id="fv-phone" {...register('fvPhone', { required: true })} />
                                    </Input.Group>
                                    {errors.fvPhone && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">Gender</Form.Label>
                                <Input.Wrap>
                                    <ul className="flex flex-wrap gap-2">
                                        <li>
                                        <Radio.Button name="fvGender" id="gender-male" {...register('fvGender', { required: true })} nocontrol>Male</Radio.Button>
                                        </li>
                                        <li>
                                        <Radio.Button name="fvGender" id="gender-female" {...register('fvGender', { required: true })} nocontrol>Female</Radio.Button>
                                        </li>
                                        <li>
                                        <Radio.Button name="fvGender" id="gender-other" {...register('fvGender', { required: true })} nocontrol>Others</Radio.Button>
                                        </li>
                                    </ul>
                                    {errors.fvGender && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-subject">Subject</Form.Label>
                                <Input.Wrap>
                                    <Input id="fv-subject" {...register('fvSubject', { required: true })} />
                                    {errors.fvSubject && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-topics">Topics</Form.Label>
                                <Input.Wrap>
                                    <Select id="fv-topics" placeholder="Select a option" {...register('fvTopics', { required: true })}>
                                    <Select.Option value="fv-gq">General Question</Select.Option>
                                    <Select.Option value="fv-tq">Tachnical Question</Select.Option>
                                    <Select.Option value="fv-ab">Account and Billing</Select.Option>
                                    </Select>
                                    {errors.fvTopics && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-message">Message</Form.Label>
                                <Input.Wrap>
                                    <TextArea id="fv-message" placeholder="Write your message" {...register('fvMessage', { required: true })} />
                                    {errors.fvMessage && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2">Communication</Form.Label>
                                <Input.Wrap>
                                    <ul className="flex flex-wrap items-center gap-3">
                                        <li>
                                            <CheckBox id="fv-com-email" {...register('fvCom', { required: true })}> Email </CheckBox>
                                        </li>
                                        <li>
                                            <CheckBox id="fv-com-sms" {...register('fvCom', { required: true })}> SMS </CheckBox>
                                        </li>
                                        <li>
                                            <CheckBox id="fv-com-phone" {...register('fvCom', { required: true })}> Phone </CheckBox>
                                        </li>
                                    </ul>
                                    {errors.fvCom && <Form.Error />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Button size="lg" variant="primary" type="submit">Save Informations</Button>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Validation - Floating Style</Block.Title>
                <Block.Text>For floating style use <code className="text-primary-600">&lt;Form.Error floating /&gt;</code> component (use floating props) with the response.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <Form action="#" className="js-validate floating-feedbacks" id="jsValidateFloating" onSubmit={handleSubmit2(onFormSubmit2)} noValidate>
                    <div className="grid grid-flow-dense grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-full-name-floating">Full Name</Form.Label>
                                <Input.Wrap>
                                    <Input id="fv-full-name-floating" name="fv-full-name-floating" {...register2('fvFullNameFloating', { required: true })}/>
                                    {errors2.fvFullNameFloating && <Form.Error floating />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-email-floating">Email address</Form.Label>
                                <Input.Wrap>
                                    <Input.Icon icon="mail" end />
                                    <Input id="fv-email-floating" type="email" icon="end" 
                                        {...register2('fvEmailFloating', {
                                            required: true,
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}/>
                                    {errors2.fvEmailFloating && errors2.fvEmailFloating.type === "required" && <Form.Error floating />}
                                    {errors2.fvEmailFloating && errors2.fvEmailFloating.type === "pattern" && (<Form.Error floating message={errors2.fvEmailFloating.message} />)}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-phone-floating">Phone</Form.Label>
                                <Input.Wrap>
                                    <Input.Group>
                                    <Input.Addon>+880</Input.Addon>
                                    <Input id="fv-phone-floating" {...register2('fvPhoneFloating', { required: true })} />
                                    </Input.Group>
                                    {errors2.fvPhoneFloating && <Form.Error floating />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2">Gender</Form.Label>
                                <Input.Wrap>
                                    <ul className="flex flex-wrap gap-2">
                                        <li>
                                        <Radio.Button id="gender-male-floating" {...register2('fvGenderFloating', { required: true })} nocontrol>Male</Radio.Button>
                                        </li>
                                        <li>
                                        <Radio.Button id="gender-female-floating" {...register2('fvGenderFloating', { required: true })} nocontrol>Female</Radio.Button>
                                        </li>
                                        <li>
                                        <Radio.Button id="gender-other-floating" {...register2('fvGenderFloating', { required: true })} nocontrol>Others</Radio.Button>
                                        </li>
                                    </ul>
                                    {errors2.fvGenderFloating && <Form.Error floating check />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-subject-floating">Subject</Form.Label>
                                <Input.Wrap>
                                    <Input id="fv-subject-floating" name="fv-subject-floating" {...register2('fvSubjectFloating', { required: true })}  />
                                    {errors2.fvSubjectFloating && <Form.Error floating />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-topics-floating">Topics</Form.Label>
                                <Input.Wrap>
                                    <Select id="fv-topics-floating" placeholder="Select a option" {...register2('fvTopicsFloating', { required: true })} >
                                    <Select.Option value="fv-gq-floating">General Question</Select.Option>
                                    <Select.Option value="fv-tq-floating">Tachnical Question</Select.Option>
                                    <Select.Option value="fv-ab-floating">Account and Billing</Select.Option>
                                    </Select>
                                    {errors2.fvTopicsFloating && <Form.Error floating />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="fv-message-floating">Message</Form.Label>
                                <Input.Wrap>
                                    <TextArea id="fv-message-floating" placeholder="Write your message" {...register2('fvMessageFloating', { required: true })} />
                                    {errors2.fvMessageFloating && <Form.Error floating />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2">Communication</Form.Label>
                                <Input.Wrap>
                                    <ul className="flex flex-wrap items-center gap-3">
                                        <li>
                                            <CheckBox id="fv-com-email-floating" {...register2('fvComFloating', { required: true })}> Email </CheckBox>
                                        </li>
                                        <li>
                                            <CheckBox id="fv-com-sms-floating" {...register2('fvComFloating', { required: true })}> SMS </CheckBox>
                                        </li>
                                        <li>
                                            <CheckBox id="fv-com-phone-floating" {...register2('fvComFloating', { required: true })}> Phone </CheckBox>
                                        </li>
                                    </ul>
                                    {errors2.fvComFloating && <Form.Error floating check />}
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Button size="lg" variant="primary" type="submit">Save Information</Button>
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

export default FormValidationPage