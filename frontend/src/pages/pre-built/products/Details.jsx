import React, {useEffect, useState, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {Badge, Button, Card, Icon, PageHead, Block, Radio, NumberSpinner, LightBox, Head} from "../../../componenets";
import { Link, useParams } from "react-router-dom";
import { productCardData } from '../../../store/products';
import { useTheme } from '../../../layout/context';

const ProductsDetailsPage = () => {
    const theme = useTheme()
    const [data, setData] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [prevEl, setPrevEl] = useState(null)
    const [nextEl, setNextEl] = useState(null)

    let {productId} = useParams();
    // grabs the id of the url and loads the corresponding data
    useEffect(() => {
      const id = productId;
      if (id !== undefined || null || "") {
        let product = productCardData.find((item) => item.id === Number(id));
        if (product) {
            setData(product)
        }
      } else {
        setData(productCardData[0])
      }
    }, [productId]);
  return (
    <>
        <Head title="Product Details" />
        <PageHead>
            <PageHead.Group>
                <PageHead.Title>Product Details</PageHead.Title>
                <PageHead.SubTitle>An example page for product details</PageHead.SubTitle>
            </PageHead.Group>
            <PageHead.Group>
                <Button as="Link" size="rg" variant="white-outline" className="hidden sm:inline-flex" to="/product-card">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                    <span className="ms-3">Back</span>
                </Button>
                <Button as="Link" size="rg" variant="white-outline" className="sm:hidden" icon to="/product-card">
                    <Icon className="text-xl leading-4.5 rtl:-scale-x-100" name="arrow-left" />
                </Button>
            </PageHead.Group>
        </PageHead>

        <Block>
            <Card className="h-full">
                <Card.Body>
                    <div className="flex flex-wrap -m-3.5">
                        <div className="w-full lg:w-1/2 p-3.5">
                            <div className="relative h-auto rounded border border-gray-100 mb-7.5 xl:me-1.5 2xl:me-11">
                                <Swiper
                                    dir="rtl"
                                    loop={true}
                                    spaceBetween={0}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="sliderNav"
                                >
                                    {data.slider && data.slider.map((item, index) => {
                                        return(
                                            <SwiperSlide key={index}>
                                                <img src={item.img} className="w-full rounded" alt="" />
                                            </SwiperSlide>
                                            )
                                    })}
                                </Swiper>
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-7.5 z-10 w-[282px] md:w-[384px] 2xl:w-[470px]">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={0}
                                        slidesPerView={2}
                                        breakpoints={{
                                            420: {
                                              slidesPerView: 3,
                                            },
                                            768: {
                                              slidesPerView: 4,
                                            },
                                            1540: {
                                              slidesPerView: 5,
                                            },
                                        }}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="thumbsSwiper"
                                    >
                                        {data.slider && data.slider.map((item, index) => {
                                            return(
                                                <SwiperSlide key={index} className="group swiper-slide cursor-pointer [&.swiper-slide-thumb-active]:cursor-auto p-2">
                                                    <img src={item.img} className="w-full rounded border-2 border-white dark:border-gray-950 transition-all ring-2 ring-gray-200 dark:ring-gray-600 group-[.swiper-slide-thumb-active]:ring-primary-600 group-[.swiper-slide-thumb-active]:dark:ring-primary-600" alt="" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-3.5">
                            <div className="mt-11 2xl:me-11">
                                <h4 className="text-xl lg:text-2xl tracking-tight font-bold font-heading leading-tighter mb-2 text-primary-600">${data.currentPrice} <small className="text-sm text-slate-400 font-normal">${data.price}</small></h4>
                                <h2 className="text-3xl lg:text-4xl tracking-tight font-heading font-bold leading-tighter mb-2 text-slate-700 dark:text-white">{data.title}</h2>
                                <div className="flex items-center">
                                    <ul className="flex items-center gap-0.5 text-yellow-600">
                                        <li><em className="text-base/none ni ni-star-fill"></em></li>
                                        <li><em className="text-base/none ni ni-star-fill"></em></li>
                                        <li><em className="text-base/none ni ni-star-fill"></em></li>
                                        <li><em className="text-base/none ni ni-star-fill"></em></li>
                                        <li><em className="text-base/none ni ni-star-half"></em></li>
                                    </ul>
                                    <div className="text-sm ms-2 text-slate-400">(2 Reviews)</div>
                                </div>
                                <div className="mt-6 mb-8 text-slate-400">
                                    <p className="text-lg">I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>
                                </div>
                                <div className="mb-5 last:mb-0">
                                    <ul className="flex gap-y-4 gap-x-5.5">
                                        <li>
                                            <div className="text-sm text-slate-400">Type</div>
                                            <div className="text-base font-bold text-slate-700 dark:text-white">Watch</div>
                                        </li>
                                        <li>
                                            <div className="text-sm text-slate-400">Model Number</div>
                                            <div className="text-base font-bold text-slate-700 dark:text-white">Forerunner 290XT</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5 last:mb-0">
                                    <h6 className="text-base -tracking-snug font-heading font-bold leading-tighter mb-2 text-slate-700 dark:text-white">Color</h6>
                                    <ul className="flex flex-wrap gap-6 items-center">
                                        <li>
                                            <Radio.Color name="productColor" id="productColor1" className="!bg-[#754c24]" checked />
                                        </li>
                                        <li>
                                            <Radio.Color name="productColor" id="productColor2" className="!bg-[#636363]" />
                                        </li>
                                        <li>
                                            <Radio.Color name="productColor" id="productColor3" className="!bg-[#ba6ed4]" />
                                        </li>
                                        <li>
                                            <Radio.Color name="productColor" id="productColor4" className="!bg-[#ff87a3]" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5 last:mb-0">
                                    <h6 className="text-base -tracking-snug font-heading font-bold leading-tighter mb-2 text-slate-700 dark:text-white">Size</h6>
                                    <ul className="inline-flex flex-wrap items-center gap-3">
                                        <li>
                                            <Radio.Button name="sizeCheck" nocontrol id="sizeCheckXS" checked>XS</Radio.Button>
                                        </li>
                                        <li>
                                            <Radio.Button name="sizeCheck" nocontrol id="sizeCheckSM">SM</Radio.Button>
                                        </li>
                                        <li>
                                            <Radio.Button name="sizeCheck" nocontrol id="sizeCheckL">L</Radio.Button>
                                        </li>
                                        <li>
                                            <Radio.Button name="sizeCheck" nocontrol id="sizeCheckXL">XL</Radio.Button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-5 last:mb-0">
                                    <ul className="flex flex-wrap items-center gap-3 pt-1.5">
                                        <li className="w-[140px]">
                                            <NumberSpinner variant="white-outline" defaultValue={0} inputClassName="w-[68px]"></NumberSpinner>
                                        </li>
                                        <li>
                                            <Button size="rg" variant="primary">Add to Cart</Button>
                                        </li>
                                        <li className="ms-n1">
                                            <Button.Zoom size="rg"><Icon className="text-lg text-primary-600" name="heart" /></Button.Zoom>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t my-15 border-gray-400 border-opacity-25"></div>
                    <div className="flex flex-wrap lg:flex-row-reverse -m-3.5">
                        <div className="w-full lg:w-5/12 p-3.5">
                            <div className="relative overflow-hidden rounded before:absolute before:bottom-0 before:start-0 before:end-0 before:h-[120px] before:bg-gradient-to-t from-black/40 to-transparent">
                                <img className="w-full" src="/images/product/video-a.jpg" alt="" />
                                <LightBox className="absolute start-8 bottom-8 text-white text-xl flex items-center gap-2" sources="https://www.youtube.com/watch?v=SSo_EIwHSd4">
                                    <Icon className="text-3xl" name="play" />
                                    <span>Watch Video</span>
                                </LightBox>
                            </div>
                        </div>
                        <div className="w-full lg:w-7/12 p-3.5">
                            <div className="2xl:me-4 entry">
                                <h3>Product details of Comfy cushions</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem consectetur, adipisci velit.Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                <ul className="prose-li:relative prose-li:py-1 prose-li:ps-5 prose-li:before:absolute prose-li:before:start-0 prose-li:before:top-1 prose-li:before:font-nioicon prose-li:before:content-['\e9b9'] prose-li:before:text-xs prose-li:before:text-primary-600 prose-li:leading-6 prose-li:before:leading-6">
                                    <li>Meets and/or exceeds performance standards.</li>
                                    <li>Liumbar support.</li>
                                    <li>Made of bonded teather and poiyurethane.</li>
                                    <li>Metal frame.</li>
                                    <li>Anatomically shaped cork-latex</li>
                                    <li>As attractively priced as you look attractive in one</li>
                                </ul>
                                <p>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                                <h3>The best seats in the house</h3>
                                <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Block>
        <Block>
            <div className="relative mb-5 last:mb-0">
                <h3 className="font-heading font-bold text-2xl lg:text-3xl text-slate-700 dark:text-white">Related Products</h3>
            </div>
            <Swiper
                dir="rtl"
                spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={{ prevEl, nextEl }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    992: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                    1540: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                }}
                modules={[Navigation]}
                className="swiper !-mx-3.5"
            >
                {productCardData.map((item, index) => {
                    return(
                        <SwiperSlide key={index} className="px-3.5">
                            <Card className="h-full group">
                                <div className="relative">
                                    <Link to={`/product-details/${item.id}`}>
                                        <img className="rounded-t" src={item.img} alt="" />
                                    </Link>
                                    <ul className="flex flex-wrap gap-2 absolute top-4 start-4">
                                        {item.new && <li><Badge variant="green">New</Badge></li>}
                                        {item.hot && <li><Badge variant="red">Hot</Badge></li>}
                                    </ul>
                                    <ul className="flex rounded-t overflow-hidden transition ease-linear duration-200 absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100">
                                        <li className="px-0.5">
                                            <a href="#link"  onClick={(e)=> e.preventDefault()} className="w-8 h-8 inline-flex items-center justify-center transition-all duration-300 text-slate-600 hover:text-primary-600">
                                                <em className="text-base ni ni-cart"></em>
                                            </a>
                                        </li>
                                        <li className="px-0.5">
                                            <a href="#link"  onClick={(e)=> e.preventDefault()} className="w-8 h-8 inline-flex items-center justify-center transition-all duration-300 text-slate-600 hover:text-primary-600">
                                                <em className="text-base ni ni-heart"></em>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-5 sm:p-6 text-center">
                                    <ul className="flex flex-wrap justify-center">
                                        <li className="p-1"><a className="text-slate-400 hover:text-primary-600 text-sm/6" href="#link"  onClick={(e)=> e.preventDefault()}>{item.category}</a></li>
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
                        </SwiperSlide>
                    )
                })}
                <div ref={(node) => setPrevEl(node)} className="swiper-button-prev after:hidden !h-11 !w-11 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-full !text-slate-400 dark:!text-slate-200 !-translate-x-2 sm:!-translate-x-2.5 [&.swiper-button-disabled]:!text-slate-200 [&.swiper-button-disabled]:dark:!text-slate-400 [&.swiper-button-disabled]:cursor-not-allowed">
                    <Icon className="text-2xl leading-none text-current" name="chevron-left" />
                </div>
                <div ref={(node) => setNextEl(node)} className="swiper-button-next after:hidden !h-11 !w-11 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-full !text-slate-400 dark:!text-slate-200 !translate-x-2 sm:!translate-x-2.5 [&.swiper-button-disabled]:!text-slate-200 [&.swiper-button-disabled]:dark:!text-slate-400 [&.swiper-button-disabled]:cursor-not-allowed">
                    <Icon className="text-2xl leading-none text-current rtl:-scale-x-100" name="chevron-right" />
                </div>
            </Swiper>
        </Block>
    </>
  )
}

export default ProductsDetailsPage