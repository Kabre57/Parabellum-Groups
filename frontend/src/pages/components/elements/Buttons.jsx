import React from 'react'
import { Head, Button, Block, Card, Icon, Text } from '../../../componenets'

const Buttons = () => {
  return (
    <>
        <Head title="Buttons" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Buttons</Block.TitleLg>
            <Block.LeadText>Documentation and examples of button styles for multiple sizes, variant, and more.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Example with Variations</Block.Title>
                <Block.Text>DashParabellumGroups includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <h5 className="font-heading font-bold text-base text-slate-700 dark:text-white mb-4">Regular Buttons</h5>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Primary</Text.Overline>
                        <Button variant="primary" size="rg">Primary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Secondary</Text.Overline>
                        <Button variant="secondary" size="rg">Secondary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Success</Text.Overline>
                        <Button variant="green" size="rg">Success</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Danger</Text.Overline>
                        <Button variant="red" size="rg">Danger</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Warning</Text.Overline>
                        <Button variant="yellow" size="rg">Warning</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Info</Text.Overline>
                        <Button variant="cyan" size="rg">Info</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Light</Text.Overline>
                        <Button variant="light" size="rg">Light</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Dark</Text.Overline>
                        <Button variant="dark" size="rg">Dark</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Card>
            <Card.Body>
                <h5 className="font-heading font-bold text-base text-slate-700 dark:text-white mb-4">Pale Buttons</h5>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Primary</Text.Overline>
                        <Button variant="primary-pale" size="rg">Primary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Secondary</Text.Overline>
                        <Button variant="secondary-pale" size="rg">Secondary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Success</Text.Overline>
                        <Button variant="green-pale" size="rg">Success</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Danger</Text.Overline>
                        <Button variant="red-pale" size="rg">Danger</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Warning</Text.Overline>
                        <Button variant="yellow-pale" size="rg">Warning</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Info</Text.Overline>
                        <Button variant="cyan-pale" size="rg">Info</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Light</Text.Overline>
                        <Button variant="light-pale" size="rg">Light</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Dark</Text.Overline>
                        <Button variant="dark-pale" size="rg">Dark</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Card>
            <Card.Body>
                <h5 className="font-heading font-bold text-base text-slate-700 dark:text-white mb-4">Outlined Buttons</h5>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Primary</Text.Overline>
                        <Button variant="primary-outline" size="rg">Primary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Secondary</Text.Overline>
                        <Button variant="secondary-outline" size="rg">Secondary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Success</Text.Overline>
                        <Button variant="green-outline" size="rg">Success</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Danger</Text.Overline>
                        <Button variant="red-outline" size="rg">Danger</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Warning</Text.Overline>
                        <Button variant="yellow-outline" size="rg">Warning</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Info</Text.Overline>
                        <Button variant="cyan-outline" size="rg">Info</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Light</Text.Overline>
                        <Button variant="light-outline" size="rg">Light</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Dark</Text.Overline>
                        <Button variant="dark-outline" size="rg">Dark</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Card>
            <Card.Body>
                <h5 className="font-heading font-bold text-base text-slate-700 dark:text-white mb-4">Outlined Buttons</h5>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Primary</Text.Overline>
                        <Button variant="primary-pale-outline" size="rg">Primary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Secondary</Text.Overline>
                        <Button variant="secondary-pale-outline" size="rg">Secondary</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Success</Text.Overline>
                        <Button variant="green-pale-outline" size="rg">Success</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Danger</Text.Overline>
                        <Button variant="red-pale-outline" size="rg">Danger</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Warning</Text.Overline>
                        <Button variant="yellow-pale-outline" size="rg">Warning</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Info</Text.Overline>
                        <Button variant="cyan-pale-outline" size="rg">Info</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Light</Text.Overline>
                        <Button variant="light-pale-outline" size="rg">Light</Button>
                    </div>
                    <div className="w-1/2 md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Dark</Text.Overline>
                        <Button variant="dark-pale-outline" size="rg">Dark</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Button Sizes</Block.Title>
                <Block.Text>Use following <code className="text-pink-600">size</code> props to control button sizes.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Extra Large</Text.Overline>
                        <Button variant="primary" size="xl">Extra Large</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Button Large</Text.Overline>
                        <Button variant="primary" size="lg">Button Large</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Regular Button</Text.Overline>
                        <Button variant="primary" size="rg">Regular Button</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Small Button</Text.Overline>
                        <Button variant="primary" size="sm">Small Button</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Extra Large</Text.Overline>
                        <Button variant="primary" pill size="xl">Extra Large</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Button Large</Text.Overline>
                        <Button variant="primary" pill size="lg">Button Large</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Regular Button</Text.Overline>
                        <Button variant="primary" pill size="rg">Regular Button</Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Small Button</Text.Overline>
                        <Button variant="primary" pill size="sm">Small Button</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Button With Icon</Block.Title>
                <Block.Text>Use icons inside Button.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Start Icon</Text.Overline>
                        <Button variant="primary" size="rg">
                            <Icon className="text-xl leading-4.5" name="setting"></Icon>
                            <span className="ms-3">Button Start Icon</span>
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">End Icon</Text.Overline>
                        <Button variant="primary" size="rg">
                            <span className="me-3">Button End Icon</span>
                            <Icon className="text-xl leading-4.5" name="setting"></Icon>
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Icon on End</Text.Overline>
                        <Button variant="primary" size="rg" block>
                            <span className="me-3">Action Button</span>
                            <Icon className="text-xl leading-4.5 ms-auto rtl:-scale-x-100" name="arrow-right"></Icon>
                        </Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Start Icon</Text.Overline>
                        <Button variant="primary" pill size="rg">
                            <Icon className="text-xl leading-4.5" name="setting"></Icon>
                            <span className="ms-3">Button Start Icon</span>
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">End Icon</Text.Overline>
                        <Button variant="primary" pill size="rg">
                            <span className="me-3">Button End Icon</span>
                            <Icon className="text-xl leading-4.5" name="setting"></Icon>
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Icon on End</Text.Overline>
                        <Button variant="primary" pill size="rg" block>
                            <span className="me-3">Action Button</span>
                            <Icon className="text-xl leading-4.5 ms-auto rtl:-scale-x-100" name="arrow-right"></Icon>
                        </Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Button With Only Icon</Block.Title>
                <Block.Text>Use the icons as a button.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5 text-center">
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">LG</Text.Overline>
                        <Button variant="primary" size="lg" icon>
                            <Icon className="text-2xl leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">RG</Text.Overline>
                        <Button variant="primary" size="rg" icon>
                            <Icon className="text-xl leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">SM</Text.Overline>
                        <Button variant="primary" size="sm" icon>
                            <Icon className="text-base leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">LG</Text.Overline>
                        <Button variant="primary" size="lg" pill icon>
                            <Icon className="text-2xl leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">RG</Text.Overline>
                        <Button variant="primary" size="rg" pill icon>
                            <Icon className="text-xl leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                    <div className="w-1/3 md:w-1/6 p-3.5">
                        <Text.Overline className="mb-3">SM</Text.Overline>
                        <Button variant="primary" size="sm" pill icon>
                            <Icon className="text-base leading-4.5" name="play"></Icon>
                        </Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default Buttons