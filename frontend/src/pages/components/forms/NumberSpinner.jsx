import React from 'react'
import { Head, Block, Card, Form, NumberSpinner } from '../../../componenets'

const NumberSpinnerPage = () => {
  return (
    <>
        <Head title="Number Spinner" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Number Spinner</Block.TitleLg>
              <Block.LeadText>Examples and usage guidelines for number spinner with basic number type input.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Number Spinner</Block.Title>
                <Block.Text>With number spinner input you can use <code className="text-pink-600">min, max, step</code> same as <code className="text-pink-600">input[type="number"]</code>.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2">Number Spinner Basic</Form.Label>
                            <NumberSpinner defaultValue={5} variant="white-outline" />
                        </Form.Group> 
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2">Number Spinner Step (10)</Form.Label>
                            <NumberSpinner defaultValue={50} step={10} variant="white-outline" />
                        </Form.Group> 
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2">Number Spinner Min Max (15 - 80)</Form.Label>
                            <NumberSpinner defaultValue={20} min={15} max={80} variant="white-outline" />
                        </Form.Group> 
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2">Number Spinner with Primary Button</Form.Label>
                            <NumberSpinner defaultValue={20} variant="primary" />
                        </Form.Group> 
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default NumberSpinnerPage