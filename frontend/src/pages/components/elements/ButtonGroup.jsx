import React from 'react'
import { Head, Button, Card, Block, Text } from '../../../componenets'

const ButtonGroup = () => {
  return (
    <>
        <Head title="Buttons Group" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Buttons Group</Block.TitleLg>
              <Block.LeadText>Group a series of buttons together on a single line with the button group.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Example</Block.Title>
                <Block.Text>Combine sets of button to wrap a series of buttons</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full sm:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Default Buttons</Text.Overline>
                        <Button.Group>
                            <Button variant="primary" size="rg">Start</Button>
                            <Button variant="primary" size="rg">Middle</Button>
                            <Button variant="primary" size="rg">End</Button>
                        </Button.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Pale Buttons</Text.Overline>
                        <Button.Group>
                            <Button variant="primary-pale" size="rg">Start</Button>
                            <Button variant="primary-pale" size="rg">Middle</Button>
                            <Button variant="primary-pale" size="rg">End</Button>
                        </Button.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Bordered Buttons</Text.Overline>
                        <Button.Group>
                            <Button variant="primary-outline" size="rg">Start</Button>
                            <Button variant="primary-outline" size="rg">Middle</Button>
                            <Button variant="primary-outline" size="rg">End</Button>
                        </Button.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3.5">
                        <Text.Overline className="mb-3">Pale Bordered Buttons</Text.Overline>
                        <Button.Group>
                            <Button variant="primary-pale-outline" size="rg">Start</Button>
                            <Button variant="primary-pale-outline" size="rg">Middle</Button>
                            <Button variant="primary-pale-outline" size="rg">End</Button>
                        </Button.Group>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Button Toolbar</Block.Title>
                <Block.Text>Combine sets of button groups into button toolbars for more complex components.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-wrap gap-3">
                  <Button.Group>
                      <Button variant="primary" size="rg">1</Button>
                      <Button variant="primary" size="rg">2</Button>
                      <Button variant="primary" size="rg">3</Button>
                      <Button variant="primary" size="rg">4</Button>
                  </Button.Group>
                  <Button.Group>
                      <Button variant="primary" size="rg">5</Button>
                      <Button variant="primary" size="rg">6</Button>
                      <Button variant="primary" size="rg">7</Button>
                  </Button.Group>
                  <Button.Group>
                      <Button variant="primary" size="rg">8</Button>
                  </Button.Group>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Button Sizing</Block.Title>
                <Block.Text>Use Any sized button in group button.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col gap-4">
                    <Button.Group size="lg">
                        <Button variant="primary" size="lg">Start</Button>
                        <Button variant="primary" size="lg">Middle</Button>
                        <Button variant="primary" size="lg">End</Button>
                    </Button.Group>
                    <Button.Group size="rg">
                        <Button variant="primary" size="rg">Start</Button>
                        <Button variant="primary" size="rg">Middle</Button>
                        <Button variant="primary" size="rg">End</Button>
                    </Button.Group>
                    <Button.Group size="sm">
                        <Button variant="primary" size="sm">Start</Button>
                        <Button variant="primary" size="sm">Middle</Button>
                        <Button variant="primary" size="sm">End</Button>
                    </Button.Group>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default ButtonGroup