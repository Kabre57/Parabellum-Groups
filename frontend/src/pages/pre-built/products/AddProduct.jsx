import React from 'react'
import classNames from 'classnames'
import { Button, Form, Input, File } from '../../../componenets'
import SimpleBar from 'simplebar-react'

const AddProduct = ({show, setShowAddProduct}) => {
    const wrapperClass = classNames({
        "peer max-w-[calc(100%-2.5rem)] w-[400px] min-h-screen bg-white dark:bg-gray-950 border-s border-gray-300 dark:border-gray-900 flex-shrink-0 fixed top-0 end-0 z-[1010] transition-transform duration-500 translate-x-full rtl:-translate-x-full [&.active]:transform-none" : true,
        "active": show
    })
  return (
    <>
        <div id="pageAside" className={wrapperClass}>
            <SimpleBar className="mt-16 max-h-[calc(100vh-theme(spacing.16))]">
                <div className="p-5 sm:p-6">
                    <div className="relative mb-5">
                        <h5 className="text-xl/6 text-slate-700 dark:text-white font-heading font-bold -tracking-snug mb-2">New Product</h5>
                        <p>Add information and add new product.</p>
                    </div>
                    <div className="grid grid-flow-dense grid-cols-12 gap-7">
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="product-title">Product Title</Form.Label>
                                <Input.Wrap>
                                    <Input id="product-title" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 xs:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="regular-price">Regular Price</Form.Label>
                                <Input.Wrap>
                                    <Input type="number" id="regular-price" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 xs:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="sale-price">Sale Price</Form.Label>
                                <Input.Wrap>
                                    <Input type="number" id="sale-price" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 xs:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="stock">Stock</Form.Label>
                                <Input.Wrap>
                                    <Input id="stock" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12 xs:col-span-6">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="SKU">SKU</Form.Label>
                                <Input.Wrap>
                                    <Input id="SKU" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="category">Category</Form.Label>
                                <Input.Wrap>
                                    <Input id="category" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <Form.Group>
                                <Form.Label className="mb-2" htmlFor="tags">Tags</Form.Label>
                                <Input.Wrap>
                                    <Input id="tags" />
                                </Input.Wrap>
                            </Form.Group>
                        </div>
                        <div className="col-span-12">
                            <File.Dropzone id="DropzoneDefault" className="!bg-gray-50 dark:!bg-gray-900">
                                <div className="dz-message !my-3">
                                    <span className="block text-sm text-slate-400">Drag and drop file</span>
                                </div>
                            </File.Dropzone>
                        </div>
                        <div className="col-span-12">
                            <Button variant="primary" size="rg">
                                <em className="text-xl leading-4.5 ni ni-plus"></em>
                                <span className="ms-3">Add New</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </SimpleBar>
        </div>
        <div className="fixed inset-0 bg-slate-950 bg-opacity-20 z-[1009] opacity-0 invisible peer-[.active]:opacity-100 peer-[.active]:visible"  onClick={()=>{
            setShowAddProduct(false)
        }}></div>
    </>
  )
}

export default AddProduct