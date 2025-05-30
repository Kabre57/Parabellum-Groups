import React from 'react'
import { Head, Breadcrumb, Card, Block } from '../../../componenets'

const BreadcrumbPage = () => {
  return (
    <>
      <Head title="Breadcrumb" />
      <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Breadcrumb</Block.TitleLg>
            <Block.LeadText>Indicate the current page’s location within a navigational hierarchy.</Block.LeadText>
        </Block.PageHead>
        <Block>
          <Block.Head>
              <Block.Title>Default Style</Block.Title>
          </Block.Head>
          <Card>
            <Card.Body>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item>Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item><Breadcrumb.Link to="/">Library</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Block>
        <Block>
          <Block.Head>
              <Block.Title>Arrow Style</Block.Title>
          </Block.Head>
          <Card>
            <Card.Body>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="arrow">Home</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="arrow"><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="arrow">Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="arrow"><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="arrow"><Breadcrumb.Link to="/">Library</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="arrow">Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Block>
        <Block>
          <Block.Head>
              <Block.Title>Pipe Style</Block.Title>
          </Block.Head>
          <Card>
            <Card.Body>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="pipe">Home</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="pipe"><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="pipe">Library</Breadcrumb.Item>
              </Breadcrumb>
              <Breadcrumb className="uppercase">
                  <Breadcrumb.Item separator="pipe"><Breadcrumb.Link to="/">Home</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="pipe"><Breadcrumb.Link to="/">Library</Breadcrumb.Link></Breadcrumb.Item>
                  <Breadcrumb.Item separator="pipe">Data</Breadcrumb.Item>
              </Breadcrumb>
            </Card.Body>
          </Card>
        </Block>

      </div>
    </>
  )
}

export default BreadcrumbPage