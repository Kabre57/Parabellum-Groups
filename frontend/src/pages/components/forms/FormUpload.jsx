import React from 'react'
import { Head, Block, Card, File, Form } from '../../../componenets'

const FormUploadPage = () => {
  return (
    <>
        <Head title="Form Upload" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Form Upload / Dropzone</Block.TitleLg>
              <Block.LeadText>Examples and usage guidelines for form upload fields with default file input type and with Dropzone plugin.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head>
                <Block.Title>Default Upload Field</Block.Title>
                <Block.Text>File Upload with default input file type.</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" for="customFile">Default File Upload</Form.Label>
                            <File id="customFile1">Choose file</File>
                        </Form.Group>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Group>
                            <Form.Label className="mb-2" for="customMultipleFile">Multiple File Upload</Form.Label>
                            <File id="customFileMultiple1" multiple>Choose files</File>
                        </Form.Group>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>Dropzone Field</Block.Title>
                <Block.Text>File Upload with Dropzone .</Block.Text>
            </Block.Head>
            <Card>
              <Card.Body>
                <div className="grid grid-flow-dense grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Label className="mb-2">Dropzone Default</Form.Label>
                        <File.Dropzone id="DropzoneDefault" />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Label className="mb-2">Dropzone Single File</Form.Label>
                        <File.Dropzone maxFiles={1} errorText="Multiple files not supported, please upload single file."  id="DropzoneSingleFile"/>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <Form.Label className="mb-2">Dropzone File Size Limit (4mb)</Form.Label>
                        <File.Dropzone maxSize={4194304} errorText="File size is too large, please upload file size within (4MB)" id="DropzoneFileSizeLimit"/>
                    </div>
                </div>
              </Card.Body>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default FormUploadPage