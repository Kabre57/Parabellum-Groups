import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {Button, Card, Icon, PageHead, Input, Badge, Head} from "../../../componenets";
import AddProduct from './AddProduct';
import { productCardData } from '../../../store/products';

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const ProductsCardPage = () => {
    const [showAddProduct, setShowAddProduct] = useState(false);

    const theme = useTheme();
    let [dropdownToggle, setDropdownToggle] = useState()
    let [dropdownContent, setDropdownContent] = useState()
    let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
        placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
        modifiers: [
            {name: 'offset', options: { offset: [0,4]}},
            {name: 'preventOverflow', options: { padding: 8 }},
        ],
    })
  return (
    <>
        <Head title="Product Card" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Products</PageHead.Title>
            </PageHead.Group>
            <PageHead.Group>
                <PageHead.Option responsive="xs">
                    <ul className="flex items-center gap-4 px-3.5 py-5 sm:py-0">
                        <li>
                            <Input.Wrap className="max-w-[190px]">
                                <Input.Icon icon="search" end/>
                                <Input id="default-03" icon="end" placeholder="Quick search by id" />
                            </Input.Wrap>
                        </li>
                        <li>
                            <Menu as="div" className="inline-flex relative">
                                {({ open }) => (
                                    <>
                                        <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                            <Button size="rg" variant="white-outline">
                                                <span className="me-1">Status</span>
                                                <Icon className="-me-1 text-base/4.5" name="chevron-down" />
                                            </Button>
                                        </Menu.Button>
                                        <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                            <ul className="py-2">
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>New Items</span></Menu.Item>
                                                </li>
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Featured</span></Menu.Item>
                                                </li>
                                                <li>
                                                    <Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Out of Stock</span></Menu.Item>
                                                </li>
                                            </ul>
                                        </Menu.Items>
                                    </>
                                )}
                            </Menu>
                        </li>
                        <li className="ms-auto">
                            <Button size="rg" variant="primary" className="hidden sm:inline-flex" onClick={()=>{
                                    setShowAddProduct(!showAddProduct)
                                }}>
                                <Icon className="text-xl/4.5" name="plus" />
                                <span className="ms-3">Add Product</span>
                            </Button>
                            <Button size="rg" variant="primary" icon className="sm:hidden" onClick={()=>{
                                setShowAddProduct(!showAddProduct)
                            }}>
                                <Icon className="text-xl/4.5" name="plus" />
                            </Button>
                        </li>
                    </ul>
                </PageHead.Option>
            </PageHead.Group>
        </PageHead>
        <div className="grid grid-flow-dense grid-cols-12 gap-7">
        {productCardData.map((item, index) => {
            return(
                <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
                    <Card className="h-full group">
                        <div className="relative">
                            <Link to={`/product-details/${item.id}`}>
                                <img className="rounded-t" src={item.img} alt="" />
                            </Link>
                            <ul className="flex flex-wrap gap-2 absolute top-4 start-4">
                                {item.new && <li><Badge variant="green">New</Badge></li>}
                                {item.hot && <li><Badge variant="red">Hot</Badge></li>}
                            </ul>
                            <ul className="flex rounded-t overflow-hidden transition ease-linear duration-200 absolute bottom-1 start-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100">
                                <li className="px-0.5">
                                    <a href="#link" onClick={(e)=> e.preventDefault()} className="w-8 h-8 inline-flex items-center justify-center transition-all duration-300 text-slate-600 hover:text-primary-600">
                                        <em className="text-base ni ni-cart"></em>
                                    </a>
                                </li>
                                <li className="px-0.5">
                                    <a href="#link" onClick={(e)=> e.preventDefault()} className="w-8 h-8 inline-flex items-center justify-center transition-all duration-300 text-slate-600 hover:text-primary-600">
                                        <em className="text-base ni ni-heart"></em>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 sm:p-6 text-center">
                            <ul className="flex flex-wrap justify-center">
                                <li className="p-1"><a className="text-slate-400 hover:text-primary-600 text-sm/6" href="#link" onClick={(e)=> e.preventDefault()}>{item.category}</a></li>
                            </ul>
                            <h5 className="text-lg font-bold font-heading leading-tighter mt-2 mb-4">
                                <Link className="text-slate-700 dark:text-white hover:text-primary-600 transition-all duration-300"  to={`/product-details/${item.id}`}>{item.title}</Link>
                            </h5>
                            <div className="text-lg font-bold font-heading leading-tighter text-primary-600">
                                <small className="text-slate-400 text-xs font-normal line-through">${item.price}</small> 
                                ${item.currentPrice}
                            </div>
                        </div>
                    </Card>
                </div>
            )
        })}
        </div>
        <AddProduct show={showAddProduct} setShowAddProduct={setShowAddProduct} />
    </>
  )
}

export default ProductsCardPage