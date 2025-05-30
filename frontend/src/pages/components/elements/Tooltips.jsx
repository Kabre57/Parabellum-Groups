import React from 'react'
import { Head, Block, Button, Card, Tooltip } from '../../../componenets'

const TooltipsPage = () => {
  return (
    <>
        <Head title="Tooltips" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Tooltips</Block.TitleLg>
              <Block.LeadText>Examples for adding custom tooltips with <a target="_blank" className="text-primary-600 hover:text-primary-800" href="https://github.com/atomiks/tippyjs-react">tippyjs-react</a>.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Examples</Block.Title>
                <Block.Text>Hover over the button below to see tooltips.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-4">
                  <Tooltip content="Tooltip on Top" placement="top" >
                    <Button size="rg" variant="primary">Tooltip on Top</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on End" placement="right" rtlPlacement="left" >
                    <Button size="rg" variant="primary">Tooltip on End</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on Bottom" placement="bottom" >
                    <Button size="rg" variant="primary">Tooltip on Bottom</Button>
                  </Tooltip>
                  <Tooltip content="Tooltip on Start" placement="left" rtlPlacement="right" >
                    <Button size="rg" variant="primary">Tooltip on Start</Button>
                  </Tooltip>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Inline Examples</Block.Title>
                <Block.Text>Here is an example with inline text.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <p>Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date {" "}
                  <Tooltip content="Enter Valid Card" placement="top" >
                    <a className="tooltip-toggle font-bold transition-all shadow-[0_1px_0] hover:shadow-none shadow-current whitespace-nowrap" href="#link" onClick={(e)=> e.preventDefault()}>credit card</a>
                  </Tooltip> {" "} for make deposit.</p>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default TooltipsPage