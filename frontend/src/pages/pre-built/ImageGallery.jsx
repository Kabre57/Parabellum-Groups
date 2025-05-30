import React from 'react'
import { Avatar, Block, Button, Head, Icon, PageHead } from '../../componenets'
import { galleryData } from '../../store/gallery'
import { toInitials } from '../../utilities'
import LightBox from '../../componenets/partials/LightBox'

const ImageGalleryPage = () => {
  return (
    <>
      <Head title="Gallery" />
      <PageHead>
        <PageHead.Group>
            <PageHead.Title>Image Gallery</PageHead.Title>
            <PageHead.SubTitle>You have total <span className="text-slate-600 dark:text-slate-400">1,257</span> Media.</PageHead.SubTitle>
        </PageHead.Group>
        <PageHead.Group>
          <Button size="rg" variant="white-outline" className="hidden sm:inline-flex">
            <Icon className="text-xl/4.5" name="download-cloud" />
            <span className="ms-3">Download All</span>
          </Button>
          <Button size="rg" variant="white-outline" className="sm:hidden" icon>
            <Icon className="text-xl/4.5" name="download-cloud" />
          </Button>
        </PageHead.Group>
      </PageHead>
      <Block>
          <div className="grid grid-flow-dense grid-cols-12 gap-7">
            {galleryData.map((item, index) => {
                return(
                  <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
                      <div className="relative border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full">
                          <LightBox className="relative z-[1]" sources={item.img}>
                              <img className="w-full rounded-t" src={item.img} alt="" />
                          </LightBox>
                          <div className="p-5 sm:p-6 flex items-center justify-between flex-wrap gap-3">
                              <div className="flex items-center">
                                  {item.userImg ? <Avatar size="rg" rounded img={item.userImg}/> : <Avatar size="rg" variant={item.theme} rounded text={toInitials(item.userName)}/>}
                                  <div className="ms-4">
                                      <span className="block text-sm font-medium leading-6 text-slate-700 dark:text-white">{item.userName}</span>
                                      <span className="block text-xs leading-4 text-slate-400">{item.userEmail}</span>
                                  </div>
                              </div>
                              <div>
                                  <button className="relative inline-flex items-center text-center align-middle text-sm font-heading font-bold leading-4.5 tracking-wide transition-all duration-300">
                                      <Icon className="text-xl leading-4.5" name="heart" />
                                      <span className="ms-3">{item.heart}</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                )
            })}
          </div>
      </Block>
    </>
  )
}

export default ImageGalleryPage