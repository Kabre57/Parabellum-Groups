import React from 'react'
import { Head, Avatar, Block, Card, CheckBox, Icon, Radio, Text } from '../../../componenets'

const AdvancedControlPage = () => {
  return (
    <>
        <Head title="Advanced Controls" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Advanced Controls</Block.TitleLg>
              <Block.LeadText>Examples and usage guidelines for custom styled Checkbox and Radio.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Image Checkbox & Radio</Block.Title>
                <Block.Text>To create custom checkbox and radio with image, use <code className="text-pink-600">CheckBox.Image</code> and <code className="text-pink-600">Radio.Image</code>  component.</Block.Text> 
            </Block.Head>
            <Card>
              <Card.Body>
                <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-4">With Checkbox</h6>
                <div className="grid grid-flow-dense grid-cols-12 gap-4">
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Default</Text.Overline>
                      <CheckBox.Image src="/images/stock/a.jpg" id="imageCheck1" />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Checked</Text.Overline>
                      <CheckBox.Image src="/images/stock/b.jpg" id="imageCheck2" checked />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Disabled</Text.Overline>
                      <CheckBox.Image src="/images/stock/c.jpg" id="imageCheck3" disabled />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Checked Disabled</Text.Overline>
                      <CheckBox.Image src="/images/stock/d.jpg" id="imageCheck4" disabled checked />
                    </div>
                </div>
                <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-4 mt-6">With Radio</h6>
                <div className="grid grid-flow-dense grid-cols-12 gap-4">
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Default</Text.Overline>
                      <Radio.Image src="/images/stock/e.jpg" name="imageRadio" id="imageRadio1" />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Checked</Text.Overline>
                      <Radio.Image src="/images/stock/f.jpg" name="imageRadio" id="imageRadio2" checked />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Disabled</Text.Overline>
                      <Radio.Image src="/images/stock/g.jpg" name="imageRadioDisabled" id="imageRadio3" disabled />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <Text.Overline className="mb-3">Checked Disabled</Text.Overline>
                      <Radio.Image src="/images/stock/h.jpg" name="imageRadioDisabled" id="imageRadio4" disabled checked />
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Grouped Checkbox</Block.Title>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-3">Default Mode</h6>
                        <div className="flex flex-wrap items-center gap-3">
                            <CheckBox.Button id="btnCheckControl1">Option Label</CheckBox.Button>
                            <CheckBox.Button id="btnCheckControl2">Option Label</CheckBox.Button>
                            <CheckBox.Button id="btnCheckControl3">Option Label</CheckBox.Button>
                            <CheckBox.Button id="btnCheckControl4" checked>Option Checked</CheckBox.Button>
                            <CheckBox.Button id="btnCheckControl5" disabled>Option Disabled</CheckBox.Button>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-3">NoControl Mode</h6>
                        <div className="flex flex-wrap items-center gap-3">
                          <CheckBox.Button id="btnCheck1" nocontrol>Option Label</CheckBox.Button>
                          <CheckBox.Button id="btnCheck2" nocontrol>Option Label</CheckBox.Button>
                          <CheckBox.Button id="btnCheck3" nocontrol>Option Label</CheckBox.Button>
                          <CheckBox.Button id="btnCheck4" checked nocontrol>Option Checked</CheckBox.Button>
                          <CheckBox.Button id="btnCheck5" disabled nocontrol>Option Disabled</CheckBox.Button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">    
                        <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-3">With Icon</h6>
                        <div className="flex flex-wrap items-center gap-3">
                          <CheckBox.Button id="btnIconCheckNc1" icon="user" nocontrol>User</CheckBox.Button>
                          <CheckBox.Button id="btnIconCheckNc2" icon="loader" nocontrol>Loading</CheckBox.Button>
                          <CheckBox.Button id="btnIconCheckNc3" icon="signal" nocontrol>Network</CheckBox.Button>
                          <CheckBox.Button id="btnIconCheckNc4" icon="wifi-off" nocontrol>No Wifi</CheckBox.Button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <h6 className="text-base font-heading font-bold text-slate-700 dark:text-white mb-3">Only Icon</h6>
                        <div className="flex flex-wrap items-center gap-3">
                          <CheckBox.Button id="btnOnlyIconCheck1" icon="user" nocontrol></CheckBox.Button>
                          <CheckBox.Button id="btnOnlyIconCheck2" icon="loader" nocontrol></CheckBox.Button>
                          <CheckBox.Button id="btnOnlyIconCheck3" icon="signal" nocontrol></CheckBox.Button>
                          <CheckBox.Button id="btnOnlyIconCheck4" icon="wifi-off" nocontrol></CheckBox.Button>
                        </div>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Grouped Radio</Block.Title>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <Text.Overline className="mb-3">Default Mode</Text.Overline>
                        <div className="flex flex-wrap items-center gap-3">
                            <Radio.Button id="btnRadioControl1" name="btnRadio">Option Label</Radio.Button>
                            <Radio.Button id="btnRadioControl2" name="btnRadio">Option Label</Radio.Button>
                            <Radio.Button id="btnRadioControl3" name="btnRadio">Option Label</Radio.Button>
                            <Radio.Button id="btnRadioControl4" name="btnRadio" checked>Option Checked</Radio.Button>
                            <Radio.Button id="btnRadioControl5" name="btnRadio" disabled>Option Disabled</Radio.Button>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <Text.Overline className="mb-3">NoControl Mode</Text.Overline>
                        <div className="flex flex-wrap items-center gap-3">
                          <Radio.Button id="btnRadio1" name="btnRadioNc" nocontrol>Option Label</Radio.Button>
                          <Radio.Button id="btnRadio2" name="btnRadioNc" nocontrol>Option Label</Radio.Button>
                          <Radio.Button id="btnRadio3" name="btnRadioNc" nocontrol>Option Label</Radio.Button>
                          <Radio.Button id="btnRadio4" name="btnRadioNc" checked nocontrol>Option Checked</Radio.Button>
                          <Radio.Button id="btnRadio5" name="btnRadioNc" disabled nocontrol>Option Disabled</Radio.Button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">    
                        <Text.Overline className="mb-3">With Icon</Text.Overline>
                        <div className="flex flex-wrap items-center gap-3">
                          <Radio.Button id="btnIconRadioNc1" name="btnIconRadio" icon="user" nocontrol>User</Radio.Button>
                          <Radio.Button id="btnIconRadioNc2" name="btnIconRadio" icon="loader" nocontrol>Loading</Radio.Button>
                          <Radio.Button id="btnIconRadioNc3" name="btnIconRadio" icon="signal" nocontrol>Network</Radio.Button>
                          <Radio.Button id="btnIconRadioNc4" name="btnIconRadio" icon="wifi-off" nocontrol>No Wifi</Radio.Button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <Text.Overline className="mb-3">Only Icon</Text.Overline>
                        <div className="flex flex-wrap items-center gap-3">
                          <Radio.Button id="btnOnlyIconRadio1" name="btnOnlyIconRadio" icon="user" nocontrol></Radio.Button>
                          <Radio.Button id="btnOnlyIconRadio2" name="btnOnlyIconRadio" icon="loader" nocontrol></Radio.Button>
                          <Radio.Button id="btnOnlyIconRadio3" name="btnOnlyIconRadio" icon="signal" nocontrol></Radio.Button>
                          <Radio.Button id="btnOnlyIconRadio4" name="btnOnlyIconRadio" icon="wifi-off" nocontrol></Radio.Button>
                        </div>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>With Custom Content</Block.Title>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <Text.Overline className="mb-3">User Selection</Text.Overline>
                        <div className="flex flex-col gap-3">
                            <CheckBox.Button id="userSelection1" labelClass="w-full">
                              <span className="flex items-center whitespace-nowrap w-full ps-1">
                                  <Avatar variant="green" size="rg" img="/images/avatar/c-sm.jpg" imgAlt=""></Avatar>
                                  <span className="ms-4">
                                      <span className="block text-sm font-bold text-slate-700 dark:text-white">Keith Jensen</span>
                                      <span className="block text-xs text-slate-400">Senior Developer</span>
                                  </span>
                              </span>
                            </CheckBox.Button>
                            <CheckBox.Button id="userSelection2" labelClass="w-full">
                              <span className="flex items-center whitespace-nowrap w-full ps-1">
                                  <Avatar variant="pink" size="rg" text="AB"></Avatar>
                                  <span className="ms-4">
                                      <span className="block text-sm font-bold text-slate-700 dark:text-white">Abu Bin Ishtiyak</span>
                                      <span className="block text-xs text-slate-400">Senior Developer</span>
                                  </span>
                              </span>
                            </CheckBox.Button>
                            <CheckBox.Button id="userSelection3" labelClass="w-full">
                              <span className="flex items-center whitespace-nowrap w-full ps-1">
                                  <Avatar variant="green" size="rg" img="/images/avatar/d-sm.jpg" imgAlt=""></Avatar>
                                  <span className="ms-4">
                                      <span className="block text-sm font-bold text-slate-700 dark:text-white">Daisy Morgan</span>
                                      <span className="block text-xs text-slate-400">UI/UX Designer</span>
                                  </span>
                              </span>
                            </CheckBox.Button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <Text.Overline className="mb-3">User Choose</Text.Overline>
                        <div className="flex flex-col -space-y-px [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:rounded-t-none">
                            <Radio.Button id="userChoice1" name="userChoice" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full pl-1">
                                    <span className="relative flex-shrink-0 flex items-center justify-center text-sm text-white bg-primary-600 h-8 w-8 rounded-full font-medium">
                                        <Avatar variant="green" rounded size="sm" img="/images/avatar/c-sm.jpg" imgAlt=""></Avatar>
                                    </span>
                                    <span className="block text-xs font-bold text-slate-700 dark:text-white ms-3">Keith Jensen</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="userChoice2" name="userChoice" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full pl-1">
                                    <span className="relative flex-shrink-0 flex items-center justify-center text-sm text-white bg-primary-600 h-8 w-8 rounded-full font-medium">
                                        <Avatar variant="pink" rounded size="sm" text="AB"></Avatar>
                                    </span>
                                    <span className="block text-xs font-bold text-slate-700 dark:text-white ms-3">Keith Jensen</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="userChoice3" name="userChoice" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full pl-1">
                                    <span className="relative flex-shrink-0 flex items-center justify-center text-sm text-white bg-primary-600 h-8 w-8 rounded-full font-medium">
                                        <Avatar variant="green" rounded size="sm" img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                                    </span>
                                    <span className="block text-xs font-bold text-slate-700 dark:text-white ms-3">Keith Jensen</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="userChoice4" name="userChoice" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full pl-1">
                                    <span className="relative flex-shrink-0 flex items-center justify-center text-sm text-white bg-primary-600 h-8 w-8 rounded-full font-medium">
                                        <Avatar variant="green" rounded size="sm" img="/images/avatar/d-sm.jpg" imgAlt=""></Avatar>
                                    </span>
                                    <span className="block text-xs font-bold text-slate-700 dark:text-white ms-3">Keith Jensen</span>
                                </span>
                            </Radio.Button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <Text.Overline className="mb-3">Payment Method</Text.Overline>
                        <div className="flex flex-col gap-3">
                            <Radio.Button id="paymentCheck1" name="paymentCheck" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full ps-1">
                                    <Icon className="text-3xl/none" name="cc-paypal" />
                                    <span className="block text-sm text-slate-600 dark:text-slate-400 ms-3">Paypal</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="paymentCheck2" name="paymentCheck" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full ps-1">
                                    <Icon className="text-3xl/none" name="cc-mc" />
                                    <span className="block text-sm text-slate-600 dark:text-slate-400 ms-3">Master Card</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="paymentCheck3" name="paymentCheck" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full ps-1">
                                    <Icon className="text-3xl/none" name="cc-visa" />
                                    <span className="block text-sm text-slate-600 dark:text-slate-400 ms-3">Visa Card</span>
                                </span>
                            </Radio.Button>
                            <Radio.Button id="paymentCheck4" name="paymentCheck" labelClass="w-full">
                                <span className="flex items-center whitespace-nowrap w-full ps-1">
                                    <Icon className="text-3xl/none" name="cc-stripe" />
                                    <span className="block text-sm text-slate-600 dark:text-slate-400 ms-3">Stripe</span>
                                </span>
                            </Radio.Button>
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

export default AdvancedControlPage