import React from 'react'
import { Head, Block, Card, Progress } from '../../../componenets'

const ProgressPage = () => {
  return (
    <>
        <Head title="Progress" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Progress</Block.TitleLg>
              <Block.LeadText>Examples for using custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Examples</Block.Title>
                <Block.Text>Here is some examples for progess bar.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="sm">
                      <Progress.Bar progress="5%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar progress="25%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar progress="50%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar progress="75%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar progress="100%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Different Sizes</Block.Title>
                <Block.Text>You can change progress thikness.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="xs">
                      <Progress.Bar progress="70%" />
                    </Progress>
                    <Progress>
                      <Progress.Bar progress="75%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar progress="80%" />
                    </Progress>
                    <Progress size="lg">
                      <Progress.Bar progress="85%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>With Label</Block.Title>
                <Block.Text>Add labels to your progress bars by placing text within the progress bar.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="lg">
                      <Progress.Bar progress="50%">50%</Progress.Bar>
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Set Background</Block.Title>
                <Block.Text>Use background utility classes to change the appearance of individual progress bars.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="sm">
                      <Progress.Bar variant="green" progress="25%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar variant="cyan" progress="50%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar variant="yellow" progress="75%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar variant="red" progress="100%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Multiple Bars</Block.Title>
                <Block.Text>Include multiple progress bars in a progress component if you need.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="sm">
                      <Progress.Bar variant="primary" progress="15%" />
                      <Progress.Bar variant="green" progress="30%" />
                      <Progress.Bar variant="yellow" progress="20%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Striped Bar</Block.Title>
                <Block.Text>Use background utility classes to change the appearance of individual progress bars.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="sm">
                      <Progress.Bar size="sm" striped variant="green" progress="25%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar size="sm" striped variant="cyan" progress="50%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar size="sm" striped variant="yellow" progress="75%" />
                    </Progress>
                    <Progress size="sm">
                      <Progress.Bar size="sm" striped variant="red" progress="100%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Animated Stripes</Block.Title>
                <Block.Text>The striped gradient can also be animated.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-6">
                    <Progress size="sm">
                      <Progress.Bar size="sm" striped animated variant="primary" progress="75%" />
                    </Progress>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default ProgressPage