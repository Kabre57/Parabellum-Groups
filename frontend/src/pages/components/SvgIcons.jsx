import React from 'react'
import { Head, Block, Card } from '../../componenets'
import { svgIcons, fileManagerIcons } from '../../store/IconData'

const SvgIconsPage = () => {
  return (
    <>
        <Head title="Custom SVG Icons" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Custom SVG Icons</Block.TitleLg>
              <Block.LeadText>
                <strong>Softnio</strong> team design some beautiful and eyecatching custom icons that helps much in your dashboard. All the icons are in SVG format so it never blury in retina device and you can update color easily be edit SVG code.
              </Block.LeadText>
          </Block.PageHead>
          <Block>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                {svgIcons.map((item, index) => {
                  return (
                    <div className="col-span-6 sm:col-span-4 lg:col-span-3" key={index}>
                      <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full text-center px-4 py-5">
                          <div className="mb-3 h-24 [&>svg]:h-full [&>svg]:mx-auto">
                              {item.svg}
                          </div>
                          <span className="text-xxs text-slate-400">{item.name}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Block>
          <Block>
            <Block.Head>
                <Block.Title>File Manager Icons</Block.Title>
                <Block.Text>All the icons used in file manager app</Block.Text>
            </Block.Head>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                {fileManagerIcons.map((item, index) => {
                  return (
                    <div className="col-span-6 sm:col-span-4 lg:col-span-3" key={index}>
                      <div className="border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full text-center px-4 py-5">
                          <div className="mb-3 h-24 [&>svg]:h-full [&>svg]:mx-auto">
                              {item.svg}
                          </div>
                          <span className="text-xxs text-slate-400">{item.name}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Block>

        </div>
    </>
  )
}

export default SvgIconsPage