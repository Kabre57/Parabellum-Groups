import React from 'react'
import { Head, Avatar, Block, Card, Text } from '../../../componenets'

const AvatarPage = () => {
  return (
    <>
        <Head title="Avatar" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Avatar</Block.TitleLg>
            <Block.LeadText>Documentation and examples for avatars.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Example with Variations</Block.Title>
                <Block.Text>Carefully designed avatar examples with diffrent shape, layout and states.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Default Style's</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                            <Avatar variant="green" size="rg" rounded icon="user-alt"></Avatar>
                            <Avatar variant="green" size="rg" rounded img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Status Style's</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="rg" rounded text="AB" status="active"></Avatar>
                            <Avatar variant="green" size="rg" rounded icon="user-alt" status="inactive"></Avatar>
                            <Avatar variant="green" size="rg" rounded img="/images/avatar/b-sm.jpg" imgAlt="" status="away"></Avatar>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Square Style's</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="rg" text="AB"></Avatar>
                            <Avatar variant="green" size="rg" icon="user-alt"></Avatar>
                            <Avatar variant="green" size="rg" img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Status Style's</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="rg" text="AB" status="active"></Avatar>
                            <Avatar variant="green" size="rg" icon="user-alt" status="inactive"></Avatar>
                            <Avatar variant="green" size="rg" img="/images/avatar/b-sm.jpg" imgAlt="" status="away"></Avatar>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Group Style's</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar.Group>
                                <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                                <Avatar variant="green" size="rg" rounded text="NL"></Avatar>
                            </Avatar.Group>
                            <Avatar.Group>
                                <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                                <Avatar variant="green" size="rg" rounded img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                            </Avatar.Group>
                            <Avatar.Group>
                                <Avatar variant="green" size="rg" rounded img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                                <Avatar variant="green" size="rg" rounded img="/images/avatar/c-sm.jpg" imgAlt=""></Avatar>
                            </Avatar.Group>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 p-3.5">
                        <Text.Overline className="mb-3">Group Style's S2</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar.GroupS2 size="rg">
                                <Avatar variant="primary" rounded text="A"></Avatar>
                                <Avatar variant="green" rounded text="N"></Avatar>
                            </Avatar.GroupS2>
                            <Avatar.GroupS2 size="rg">
                                <Avatar variant="primary" rounded text="A"></Avatar>
                                <Avatar rounded img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                            </Avatar.GroupS2>
                            <Avatar.GroupS2 size="rg">
                                <Avatar rounded img="/images/avatar/b-sm.jpg" imgAlt=""></Avatar>
                                <Avatar rounded img="/images/avatar/c-sm.jpg" imgAlt=""></Avatar>
                            </Avatar.GroupS2>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        
        <Block>
            <Block.Head>
                <Block.Title>Example with Variant</Block.Title>
                <Block.Text>Checkout following component code to change the appearance of a avatar.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full p-3.5">
                        <Text.Overline className="mb-3">Highlighted colors</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                            <Avatar variant="secondary" size="rg" rounded text="NL"></Avatar>
                            <Avatar variant="yellow" size="rg" rounded text="CH"></Avatar>
                            <Avatar variant="red" size="rg" rounded text="SW"></Avatar>
                            <Avatar variant="green" size="rg" rounded text="GO"></Avatar>
                            <Avatar variant="cyan" size="rg" rounded text="PS"></Avatar>
                            <Avatar variant="blue" size="rg" rounded text="DM"></Avatar>
                            <Avatar variant="pink" size="rg" rounded text="HS"></Avatar>
                            <Avatar variant="indigo" size="rg" rounded text="SM"></Avatar>
                            <Avatar variant="black" size="rg" rounded text="TM"></Avatar>
                            <Avatar variant="slate" size="rg" rounded text="JC"></Avatar>
                            <Avatar variant="orange" size="rg" rounded text="VA"></Avatar>
                            <Avatar variant="purple" size="rg" rounded text="EH"></Avatar>
                        </div>
                    </div>
                    <div className="w-full p-3.5">
                        <Text.Overline className="mb-3">Pale colors</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary-pale" size="rg" rounded text="AB"></Avatar>
                            <Avatar variant="secondary-pale" size="rg" rounded text="NL"></Avatar>
                            <Avatar variant="yellow-pale" size="rg" rounded text="CH"></Avatar>
                            <Avatar variant="red-pale" size="rg" rounded text="SW"></Avatar>
                            <Avatar variant="green-pale" size="rg" rounded text="GO"></Avatar>
                            <Avatar variant="cyan-pale" size="rg" rounded text="PS"></Avatar>
                            <Avatar variant="blue-pale" size="rg" rounded text="DM"></Avatar>
                            <Avatar variant="pink-pale" size="rg" rounded text="HS"></Avatar>
                            <Avatar variant="indigo-pale" size="rg" rounded text="SM"></Avatar>
                            <Avatar variant="black-pale" size="rg" rounded text="TM"></Avatar>
                            <Avatar variant="slate-pale" size="rg" rounded text="JC"></Avatar>
                            <Avatar variant="orange-pale" size="rg" rounded text="VA"></Avatar>
                            <Avatar variant="purple-pale" size="rg" rounded text="EH"></Avatar>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>

        
        <Block>
            <Block.Head>
                <Block.Title>Example with Sizes</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
            <div className="flex flex-wrap -m-3.5">
                    <div className="w-full md:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Rounded Avatars</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="3xl" rounded text="AB"></Avatar>
                            <Avatar variant="primary" size="2xl" rounded text="AB"></Avatar>
                            <Avatar variant="primary" size="xl" rounded text="AB"></Avatar>
                            <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                            <Avatar variant="primary" size="sm" rounded text="AB"></Avatar>
                            <Avatar variant="primary" size="xs" rounded text="A"></Avatar>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Squared Avatars</Text.Overline>
                        <div className="flex flex-wrap gap-3">
                            <Avatar variant="primary" size="3xl" text="AB"></Avatar>
                            <Avatar variant="primary" size="2xl" text="AB"></Avatar>
                            <Avatar variant="primary" size="xl" text="AB"></Avatar>
                            <Avatar variant="primary" size="rg" text="AB"></Avatar>
                            <Avatar variant="primary" size="sm" text="AB"></Avatar>
                            <Avatar variant="primary" size="xs" text="A"></Avatar>
                        </div>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Example with Use Case</Block.Title>
                <Block.Text>Lets take a look at some real use case for avatar.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                        <Text.Overline className="mb-3">User Card 1</Text.Overline>
                        <div className="flex items-center">
                            <Avatar variant="primary" size="rg" rounded text="AB"></Avatar>
                            <div className="ms-4">
                                <div className="text-xs font-medium leading-none pt-0.5 pb-1.5 text-primary-500 group-hover:text-primary-600">Administrator</div>
                                <div className="text-slate-600 dark:text-white text-xs font-bold flex items-center">Abu Bin Ishityak <em className="text-sm leading-none ms-1 ni ni-chevron-down"></em></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                        <Text.Overline className="mb-3">User Card 2</Text.Overline>
                        <div className="flex items-center">
                            <Avatar variant="green" size="rg" rounded img="/images/avatar/c-sm.jpg" imgAlt=""></Avatar>
                            <div className="ms-4">
                                <div className="text-slate-700 dark:text-white text-sm font-bold flex items-center">Keith Jensen</div>
                                <div className="text-xs font-normal leading-none pt-0.5 pb-1.5 text-slate-400">keith@softnio.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 p-3.5">
                        <Text.Overline className="mb-3">User Card 3</Text.Overline>
                        <div className="flex items-center">
                            <Avatar variant="primary" size="sm" rounded text="AB"></Avatar>
                            <div className="ms-3">
                                <div className="text-slate-600 dark:text-white text-xs font-bold flex items-center">Abu Bin Ishityak</div>
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

export default AvatarPage