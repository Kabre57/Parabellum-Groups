import React from 'react'
import { Head, Block, Card } from '../../../componenets'

const TypographyPage = () => {
  return (
    <>
        <Head title="Typography" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/components">Components</Block.Back>
              <Block.TitleLg>Typography</Block.TitleLg>
              <Block.LeadText>These examples for typography, including global settings, headings, body text, lists, and more.</Block.LeadText>
          </Block.PageHead>
          <Block>
            <Block.Head className="md:max-w-[680px]">
                <Block.Title>Text Sizes</Block.Title>
                <Block.Text>You can use tailwind predefined classes for text sizes. Also you can always use tailwind arbitrary value like <code className="text-pink-400">.text-[--px] or .text-[--rem]</code> or something else.</Block.Text>
            </Block.Head>
            <Card>
              <table className="table border-collapse w-full border-gray-300 dark:border-gray-900">
                  <thead>
                      <tr className="first:[&>*]:rounded-tl last:[&>*]:rounded-tr">
                          <td className="py-3 first:ps-6 last:pe-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-900">
                              <h6 className="text-slate-400 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">Class</h6>
                          </td>
                          <td className="py-3 first:ps-6 last:pe-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-900">
                              <h6 className="text-slate-400 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">Examples</h6>
                          </td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-xs</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-xs text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-sm</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-sm text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-base</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-base text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-lg</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-lg text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-2xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-2xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-3xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-3xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-4xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-4xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-5xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-5xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                      <tr className="[&:last-child>*]:border-b-0 [&:last-child>*:last-child]:rounded-br [&:last-child>*:first-child]:rounded-bl">
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <code className="text-pink-400">.text-6xl</code>
                          </td>
                          <td className="py-4 first:ps-6 last:pe-6 bg-white dark:bg-gray-950 border-b border-gray-300 dark:border-gray-900">
                            <p className="text-6xl text-slate-700 dark:text-white">The quick brown fox</p>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </Card>
          </Block>

        </div>
    </>
  )
}

export default TypographyPage