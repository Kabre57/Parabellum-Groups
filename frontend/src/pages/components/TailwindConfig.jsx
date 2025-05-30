import React from 'react'
import { Head, Block, Card } from '../../componenets'

const TailwindConfigPage = () => {
  return (
    <>
        <Head title="Tailwind Config" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Tailwind Config</Block.TitleLg>
            <Block.LeadText>Documentation for tailwind config edit.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title></Block.Title>
                <Block.Text></Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Breakpoint - added</h6>
                    <p>New Breakpint added as <code className="text-pink-600">xs</code> at <code className="text-pink-600">480px</code>.</p>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Container - Modified</h6>
                    <p>Made container centered by default and added <code className="text-pink-600">.5rem</code> padding left and right.</p>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Font Family - added</h6>
                    <p><strong>Roboto</strong> as <code className="text-pink-600">.font-body</code>, <strong>Nunito</strong> as <code className="text-pink-600">.font-heading</code>, <strong>Nioicon</strong> as <code className="text-pink-600">.font-nioicon</code></p>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Font Size - added</h6>
                    <p><strong>xxs</strong> as <code className="text-pink-600">11px</code></p>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Line Height (leading) - added</h6>
                    <p>Added few more value for line height to match with our design,</p> 
                    <div className="grid grid-flow-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">
                        <code className="text-pink-600">tighter - 1.1</code>
                        <code className="text-pink-600">3.5 - 0.875rem</code>
                        <code className="text-pink-600">4.5 - 1.125rem</code>
                        <code className="text-pink-600">5.5 - 1.375rem</code>
                        <code className="text-pink-600">6.5 - 1.625rem</code>
                    </div>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Letter Spacing (tracking) - added</h6>
                    <p>Added few more value for line height to match with our design,</p> 
                    <div className="grid grid-flow-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-2">        
                        <code className="text-pink-600">snug - 0.01em</code>
                        <code className="text-pink-600">relaxed - 0.2em</code>
                    </div>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Color - added + modified</h6>
                    <p>New color preset added and named as <strong>Primary</strong> eg: <code className="text-pink-600">.[property]-primary-[value]</code></p>
                    <p>Updated color value for <strong>green, yellow, red, cyan, slate and gray</strong>.</p>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Spacing - added</h6>
                    <p>Added few value multiplied with <code className="text-pink-600">.25rem</code> as 1. It's just missing and need values added alongside default values, here is the list,</p> 
                    <div className="grid grid-flow-dense xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-3">
                        <code className="text-pink-600">0.75 - 0.1875rem</code>
                        <code className="text-pink-600">4.5 - 1.125rem</code>
                        <code className="text-pink-600">5.5 - 1.375rem</code>
                        <code className="text-pink-600">6.5 - 1.625rem</code>
                        <code className="text-pink-600">7.5 - 1.875rem</code>
                        <code className="text-pink-600">13 - 3.25rem</code>
                        <code className="text-pink-600">15 - 3.75rem</code>
                        <code className="text-pink-600">17 - 4.25rem</code>
                        <code className="text-pink-600">18 - 4.5rem</code>
                        <code className="text-pink-600">19 - 4.75rem</code>
                    </div>
                </div>
                <div className="mb-6 last:mb-0">
                    <h6 className="text-slate-500 whitespace-nowrap uppercase font-bold text-xxs tracking-relaxed leading-tight mb-1">Border - added</h6>
                    <p>Few extra border value added for convenient, <strong>3,5,6,7</strong>. Now we can use <code className="text-pink-600">.border-[1 to 8]</code>.</p>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default TailwindConfigPage