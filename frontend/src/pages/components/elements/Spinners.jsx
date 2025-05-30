import React from 'react'
import { Head, Block, Button, Card, Spinner } from '../../../componenets'

const SpinnerPage = () => {
  return (
    <>
        <Head title="Spinner" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Spinner</Block.TitleLg>
              <Block.LeadText>DashParabellumGroups includes couple of predefined spinner styles, to display loading status.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Example</Block.Title>
            </Block.Head>
            <Card>
              <Card.Body>
                <Spinner variant="light" />
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Colors</Block.Title>
                <Block.Text>The border spinner uses its border-color, meaning you can customize the color with border color utilities.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-3">
                  <Spinner variant="primary" />
                  <Spinner variant="secondary" />
                  <Spinner variant="green" />
                  <Spinner variant="red" />
                  <Spinner variant="yellow" />
                  <Spinner variant="cyan" />
                  <Spinner variant="light" />
                  <Spinner variant="dark" />
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Growing spinner</Block.Title>
                <Block.Text>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Spinner.Grow variant="light" />
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-3">
                  <Spinner.Grow variant="primary" />
                  <Spinner.Grow variant="secondary" />
                  <Spinner.Grow variant="green" />
                  <Spinner.Grow variant="red" />
                  <Spinner.Grow variant="yellow" />
                  <Spinner.Grow variant="cyan" />
                  <Spinner.Grow variant="light" />
                  <Spinner.Grow variant="dark" />
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Size</Block.Title>
                <Block.Text>Change h-[value], w-[value] to make a smaller/larger spinner that can quickly be used within other components.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-12">
                  <div className="flex flex-wrap gap-3">
                    <Spinner variant="light" size="sm" />
                    <Spinner variant="light" size="rg" />
                    <Spinner variant="light" size="lg" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Spinner.Grow variant="light" size="sm" />
                    <Spinner.Grow variant="light" size="rg" />
                    <Spinner.Grow variant="light" size="lg" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>With Buttons</Block.Title>
                <Block.Text>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-wrap gap-3">
                    <Button className="opacity-60" variant="primary" size="rg" icon>
                      <Spinner variant="white" size="sm" />
                    </Button>
                    <Button className="opacity-60" variant="primary" size="rg">
                      <Spinner variant="white" size="sm" />
                      <span className="ms-3">loading ...</span>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button className="opacity-60" variant="primary" size="rg" icon>
                      <Spinner.Grow variant="white" size="sm" />
                    </Button>
                    <Button className="opacity-60" variant="primary" size="rg">
                      <Spinner.Grow variant="white" size="sm" />
                      <span className="ms-3">loading ...</span>
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

export default SpinnerPage