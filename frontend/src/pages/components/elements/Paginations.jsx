import React from 'react'
import { Head, Block, Card, Pagination } from '../../../componenets'

const PaginationPage = () => {
  return (
    <>
        <Head title="Pagination" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Pagination</Block.TitleLg>
              <Block.LeadText>The following example of basic pagination.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Style</Block.Title>
                <Block.Text>Checkout our basic style for pagination.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Pagination>
                    <Pagination.Prev text="Prev"/>
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Dot />
                    <Pagination.Item>6</Pagination.Item>
                    <Pagination.Next text="Next"/>
                </Pagination>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Working with Icons</Block.Title>
                <Block.Text>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with aria attributes.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Pagination>
                    <Pagination.Prev icon />
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Dot />
                    <Pagination.Item>6</Pagination.Item>
                    <Pagination.Next icon />
                </Pagination>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Active States</Block.Title>
                <Block.Text>Use active to indicate the current page.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <Pagination>
                    <Pagination.Prev icon />
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item active>2</Pagination.Item>
                    <Pagination.Dot />
                    <Pagination.Item>6</Pagination.Item>
                    <Pagination.Next icon />
                </Pagination>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Sizing</Block.Title>
                <Block.Text>Here is some examples with diffrent size.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="flex flex-col space-y-4">
                    <Pagination>
                        <Pagination.Prev size="sm" icon />
                        <Pagination.Item size="sm">1</Pagination.Item>
                        <Pagination.Item size="sm" active>2</Pagination.Item>
                        <Pagination.Dot size="sm" />
                        <Pagination.Item size="sm">6</Pagination.Item>
                        <Pagination.Next size="sm" icon />
                    </Pagination>
                    <Pagination>
                        <Pagination.Prev icon />
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item active>2</Pagination.Item>
                        <Pagination.Dot />
                        <Pagination.Item>6</Pagination.Item>
                        <Pagination.Next icon />
                    </Pagination>
                    <Pagination>
                        <Pagination.Prev size="lg" icon />
                        <Pagination.Item size="lg">1</Pagination.Item>
                        <Pagination.Item size="lg" active>2</Pagination.Item>
                        <Pagination.Dot size="lg" />
                        <Pagination.Item size="lg">6</Pagination.Item>
                        <Pagination.Next size="lg" icon />
                    </Pagination>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default PaginationPage