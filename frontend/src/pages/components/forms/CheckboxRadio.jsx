import React from 'react'
import { Head, Block, Card, CheckBox, Radio, Text, Switch } from '../../../componenets'

const CheckboxRadioPage = () => {
  return (
    <>
        <Head title="Checkbox Radio" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Checkbox & Radio</Block.TitleLg>
            <Block.LeadText>Examples and usage guidelines for Checkbox, Radio and Switch.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Checkbox Styles</Block.Title>
                <Block.Text>
                To create custom control, use <code className="text-primary-600">&lt;CheckBox/&gt;</code> component.
                </Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Default</Text.Overline>
                            <CheckBox id="customCheck1">Option Label</CheckBox>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Checked</Text.Overline>
                            <CheckBox id="customCheck2" checked>Option Label</CheckBox>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Disabled</Text.Overline>
                            <CheckBox id="customCheck3" disabled>Option Label</CheckBox>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Check Disabled</Text.Overline>
                            <CheckBox id="customCheck4" checked disabled>Option Label</CheckBox>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Size</Text.Overline>
                            <div className="flex items-center flex-wrap gap-4">
                                <CheckBox id="customCheck7" size="sm">Option Label</CheckBox>
                                <CheckBox id="customCheck8">Option Label</CheckBox>
                                <CheckBox id="customCheck9" size="lg">Option Label</CheckBox>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Radio Styles</Block.Title>
                <Block.Text>
                    To create custom control, use <code className="text-primary-600">&lt;Radio/&gt;</code> component.
                </Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Default</Text.Overline>
                            <Radio id="customRadio1" name="customRadio">Option Label</Radio>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Checked</Text.Overline>
                            <Radio id="customRadio2" name="customRadio" checked>Option Label</Radio>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Disabled</Text.Overline>
                            <Radio id="customRadio3" name="customRadioDisabled" disabled>Option Label</Radio>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Check Disabled</Text.Overline>
                            <Radio id="customRadio4" name="customRadioCheckedDisabled" checked disabled>Option Label</Radio>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Size</Text.Overline>
                            <div className="flex items-center flex-wrap gap-4">
                                <Radio id="customRadio7" name="customRadioSize" size="sm">Option Label</Radio>
                                <Radio id="customRadio8" name="customRadioSize">Option Label</Radio>
                                <Radio id="customRadio9" name="customRadioSize" size="lg">Option Label</Radio>
                            </div>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Switch Style</Block.Title>
                <Block.Text>
                The <code className="text-primary-600">&lt;Switch/&gt;</code> component is a <code className="text-pink-600">checkbox</code> but render a toggle switch.
                </Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Default</Text.Overline>
                            <Switch id="customSwitch1">Option Label</Switch>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Checked</Text.Overline>
                            <Switch id="customSwitch2" defaultChecked>Option Label</Switch>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Disabled</Text.Overline>
                            <Switch id="customSwitch3" disabled>Option Label</Switch>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Check Disabled</Text.Overline>
                            <Switch id="customSwitch4" defaultChecked disabled>Option Label</Switch>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="preview-block">
                            <Text.Overline className="mb-3">Size</Text.Overline>
                            <div className="flex items-center flex-wrap gap-4">
                                <Switch id="customSwitch7" size="sm">Option Label</Switch>
                                <Switch id="customSwitch8">Option Label</Switch>
                                <Switch id="customSwitch9" size="lg">Option Label</Switch>
                            </div>
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

export default CheckboxRadioPage