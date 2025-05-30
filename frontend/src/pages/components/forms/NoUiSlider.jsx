import React from 'react'
import { Head, Block, Card, Form, NoUiSlider } from '../../../componenets'

const NoUiSliderPage = () => {
  return (
    <>
        <Head title="noUislider" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>noUislider</Block.TitleLg>
              <Block.LeadText>Examples and usage guidelines for range slider with noUislider plugin.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Basic Configuration</Block.Title>
                <Block.Text>For input slider use <code className="text-pink-400">NoUiSlider</code> component that must have an <code className="text-pink-400">id</code>.</Block.Text>
            </Block.Head>
            <Card className="overflow-hidden">
              <Card.Body>
                <div className="flex flex-wrap -m-3 sm:-m-4">
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Default Range Slider</Form.Label>
                            <div className="relative">
                              <NoUiSlider id="DefaultRange"  start="30"/>
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Connect (upper)</Form.Label>
                            <div className="relative">
                              <NoUiSlider  start="20" connect="upper" id="RangeConnect"/>
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Slider Step (10)</Form.Label>
                            <div className="relative">
                              <NoUiSlider step={10} start="20" id="RangeStep" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Multiple</Form.Label>
                            <div className="relative">
                              <NoUiSlider connect="true" start="30 70" id="RangeMultiple" />
                            </div>
                        </Form.Group>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Vertical Slider</Block.Title>
                <Block.Text>To make this vertical just add <code className="text-pink-400">orientation="vertical"</code> props on <code className="text-pink-400">NoUiSlider</code> component.</Block.Text>
            </Block.Head>
            <Card className="overflow-hidden">
              <Card.Body>
                <div className="flex flex-wrap -m-3 sm:-m-4">
                    <div className="w-1/2 sm:w-1/4 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Default Range Slider</Form.Label>
                            <div className="relative">
                              <NoUiSlider orientation="vertical" start="30" id="vertical-Default-Range" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-1/2 sm:w-1/4 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Connect (upper)</Form.Label>
                            <div className="relative">
                              <NoUiSlider orientation="vertical" start="20" connect="upper" id="vertical-Range-Connect" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-1/2 sm:w-1/4 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Slider Step (10)</Form.Label>
                            <div className="relative">
                              <NoUiSlider orientation="vertical" step={10} start="20" id="vertical-Range-Step" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-1/2 sm:w-1/4 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Range Multiple</Form.Label>
                            <div className="relative">
                              <NoUiSlider orientation="vertical" connect="true" start="30 70" id="vertical-Range-Multiple" />
                            </div>
                        </Form.Group>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Advanced Configuration</Block.Title>
                <Block.Text>Range slider with tooltip value preview. just add <code className="text-pink-400">tooltip={"{true}"}</code> props on <code className="text-pink-400">NoUiSlider</code> component.</Block.Text>
            </Block.Head>
            <Card className="overflow-hidden">
              <Card.Body>
                <div className="flex flex-wrap -m-3 sm:-m-4">
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Tooltip Slider</Form.Label>
                            <div className="relative">
                              <NoUiSlider tooltip={true} start="40" id="Tooltip-Range" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Minimum Distance Slider</Form.Label>
                            <div className="relative">
                              <NoUiSlider tooltip={true} connect="true" start="30 60" minDistance={20} id="Min-Distance-Range" />
                            </div>
                        </Form.Group>
                    </div>
                    <div className="w-full sm:w-1/2 p-3 sm:p-4">
                        <Form.Group>
                            <Form.Label className="mb-4">Maximum Distance Slider</Form.Label>
                            <div className="relative">
                              <NoUiSlider tooltip={true} connect="true" start="30 60" maxDistance={50} id="Max-Distance-Range" />
                            </div>
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

export default NoUiSliderPage