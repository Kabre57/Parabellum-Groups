import React from 'react'
import { Head, Block, Card } from '../../componenets'

const Alerts = () => {
  return (
    <div className="lg:max-w-[960px] mx-auto">
      <Block.PageHead className="md:max-w-[720px]">
          <Block.Back to="/components">Components</Block.Back>
          <Block.TitleLg></Block.TitleLg>
          <Block.LeadText></Block.LeadText>
      </Block.PageHead>
      <Block>
        <Block.Head>
            <Block.Title></Block.Title>
            <Block.Text></Block.Text>
        </Block.Head>
        <Card>
          <Card.Body>

          </Card.Body>
        </Card>
      </Block>

    </div>
  )
}

export default Alerts