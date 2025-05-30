import React from 'react'
import { Head, Block, Card, Popover } from '../../../componenets'

const PopoverPage = () => {
  return (
    <>
      <Head title="Popovers" />
      <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Popovers</Block.TitleLg>
            <Block.LeadText>We are using  <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://headlessui.com/react/popover">HeadlessUI Popover</a> component.</Block.LeadText>
        </Block.PageHead>
        <Block>
          <Block.Head>
              <Block.Title>Basic Examples</Block.Title>
              <Block.Text>Click the following button to see the basic example of popover.</Block.Text>
          </Block.Head>
          <Card>
            <Card.Body>
              <Popover placement="right" rtlPlacement="left" title="Popover title" content="And here's some amazing content. It's very engaging. Right?" >Click to toggle popover</Popover>
            </Card.Body>
          </Card>
        </Block>
        <Block>
          <Block.Head>
              <Block.Title>Directional Examples</Block.Title>
              <Block.Text>Click the following buttons to see directional example of popover.</Block.Text>
          </Block.Head>
          <Card>
            <Card.Body>
              <div className="flex flex-wrap gap-4">
                  <Popover placement="top" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >Popover on top</Popover>
                  <Popover placement="right" rtlPlacement="left" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >Popover on End</Popover>
                  <Popover placement="bottom" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >Popover on bottom</Popover>
                  <Popover placement="left" rtlPlacement="right" content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >Popover on Start</Popover>
              </div>
            </Card.Body>
          </Card>
        </Block>

      </div>
    </>
  )
}

export default PopoverPage