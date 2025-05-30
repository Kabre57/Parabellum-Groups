import React from 'react'
import { Head, Badge, Block, Card, Text } from '../../../componenets'

const Badges = () => {
  return (
    <>
        <Head title="Badges" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Badges</Block.TitleLg>
              <Block.LeadText>Documentation and examples for badges, our small count and labeling component.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Example with Variations</Block.Title>
                <Block.Text>We created predefined badges styles with states appearance.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Default Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="green">Success</Badge>
                    <Badge variant="yellow">Warning</Badge>
                    <Badge variant="red">Danger</Badge>
                    <Badge variant="cyan">Info</Badge>
                    <Badge variant="dark">Dark</Badge>
                    <Badge variant="secondary">Gray</Badge>
                    <Badge variant="light">Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Pill Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary" pill>Primary</Badge>
                    <Badge variant="green" pill>Success</Badge>
                    <Badge variant="yellow" pill>Warning</Badge>
                    <Badge variant="red" pill>Danger</Badge>
                    <Badge variant="cyan" pill>Info</Badge>
                    <Badge variant="dark" pill>Dark</Badge>
                    <Badge variant="secondary" pill>Gray</Badge>
                    <Badge variant="light" pill>Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Outline Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-outline">Primary</Badge>
                    <Badge variant="green-outline">Success</Badge>
                    <Badge variant="yellow-outline">Warning</Badge>
                    <Badge variant="red-outline">Danger</Badge>
                    <Badge variant="cyan-outline">Info</Badge>
                    <Badge variant="dark-outline">Dark</Badge>
                    <Badge variant="secondary-outline">Gray</Badge>
                    <Badge variant="light-outline">Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Outline Pill Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-outline" pill>Primary</Badge>
                    <Badge variant="green-outline" pill>Success</Badge>
                    <Badge variant="yellow-outline" pill>Warning</Badge>
                    <Badge variant="red-outline" pill>Danger</Badge>
                    <Badge variant="cyan-outline" pill>Info</Badge>
                    <Badge variant="dark-outline" pill>Dark</Badge>
                    <Badge variant="secondary-outline" pill>Gray</Badge>
                    <Badge variant="light-outline" pill>Light</Badge>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Dot Style</Block.Title>
                <Block.Text>Here is a different appearance for badges with dot.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-3">
                    <Badge.Dot variant="primary">Primary</Badge.Dot>
                    <Badge.Dot variant="green">Success</Badge.Dot>
                    <Badge.Dot variant="yellow">Warning</Badge.Dot>
                    <Badge.Dot variant="red">Danger</Badge.Dot>
                    <Badge.Dot variant="cyan">Info</Badge.Dot>
                    <Badge.Dot variant="dark">Dark</Badge.Dot>
                    <Badge.Dot variant="secondary">Gray</Badge.Dot>
                    <Badge.Dot variant="light">Light</Badge.Dot>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Example with Pale color</Block.Title>
                <Block.Text>Here is badges with pale colors variants.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
              <Text.Overline className="first:mt-0 mt-6 mb-3">Default Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-pale">Primary</Badge>
                    <Badge variant="green-pale">Success</Badge>
                    <Badge variant="yellow-pale">Warning</Badge>
                    <Badge variant="red-pale">Danger</Badge>
                    <Badge variant="cyan-pale">Info</Badge>
                    <Badge variant="dark-pale">Dark</Badge>
                    <Badge variant="secondary-pale">Gray</Badge>
                    <Badge variant="light-pale">Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Pill Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-pale" pill>Primary</Badge>
                    <Badge variant="green-pale" pill>Success</Badge>
                    <Badge variant="yellow-pale" pill>Warning</Badge>
                    <Badge variant="red-pale" pill>Danger</Badge>
                    <Badge variant="cyan-pale" pill>Info</Badge>
                    <Badge variant="dark-pale" pill>Dark</Badge>
                    <Badge variant="secondary-pale" pill>Gray</Badge>
                    <Badge variant="light-pale" pill>Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Outline Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-pale-outline">Primary</Badge>
                    <Badge variant="green-pale-outline">Success</Badge>
                    <Badge variant="yellow-pale-outline">Warning</Badge>
                    <Badge variant="red-pale-outline">Danger</Badge>
                    <Badge variant="cyan-pale-outline">Info</Badge>
                    <Badge variant="dark-pale-outline">Dark</Badge>
                    <Badge variant="secondary-pale-outline">Gray</Badge>
                    <Badge variant="light-pale-outline">Light</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Outline Pill Style</Text.Overline>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="primary-pale-outline" pill>Primary</Badge>
                    <Badge variant="green-pale-outline" pill>Success</Badge>
                    <Badge variant="yellow-pale-outline" pill>Warning</Badge>
                    <Badge variant="red-pale-outline" pill>Danger</Badge>
                    <Badge variant="cyan-pale-outline" pill>Info</Badge>
                    <Badge variant="dark-pale-outline" pill>Dark</Badge>
                    <Badge variant="secondary-pale-outline" pill>Gray</Badge>
                    <Badge variant="light-pale-outline" pill>Light</Badge>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Example with Sizes</Block.Title>
                <Block.Text>You can make badge small or as big as you need.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Default Style</Text.Overline>
                <div className="flex flex-wrap items-start gap-4">
                    <Badge size="3xl" variant="primary">Primary</Badge>
                    <Badge size="2xl" variant="primary">Primary</Badge>
                    <Badge size="xl" variant="primary">Primary</Badge>
                    <Badge size="lg" variant="primary">Primary</Badge>
                    <Badge size="rg" variant="primary">Primary</Badge>
                </div>
                <Text.Overline className="first:mt-0 mt-6 mb-3">Pill Style</Text.Overline>
                <div className="flex flex-wrap items-start gap-4">
                    <Badge size="3xl" variant="primary" pill>Primary</Badge>
                    <Badge size="2xl" variant="primary" pill>Primary</Badge>
                    <Badge size="xl" variant="primary" pill>Primary</Badge>
                    <Badge size="lg" variant="primary" pill>Primary</Badge>
                    <Badge size="rg" variant="primary" pill>Primary</Badge>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default Badges