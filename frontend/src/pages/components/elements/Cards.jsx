import React from 'react'
import { Head, Button, Block, Card } from '../../../componenets'

const CardsPage = () => {
  return (
    <>
        <Head title="Card Boxed" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Card Boxed</Block.TitleLg>
            <Block.LeadText>Cards provide a flexible and extensible content container with multiple variants and options.</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Basic Examples</Block.Title>
                <Block.Text>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full lg:w-1/3 p-3.5">
                        <Card>
                            <img className="rounded-t-md" src="/images/slides/slide-a.jpg" alt="" />
                            <Card.Body>
                                <h5 className="text-xl leading-tighter font-bold font-heading text-slate-700 dark:text-white mb-3">Card with stretched link</h5>
                                <p className="text-sm text-slate-600 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Button size="rg" variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Basic Examples</Block.Title>
                <Block.Text>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full lg:w-1/3 p-3.5">
                        <Card>
                            <Card.Body>
                                <h5 className="text-xl leading-tighter font-bold font-heading text-slate-700 dark:text-white mb-3">Card title</h5>
                                <h5 className="text-base leading-tighter font-bold font-heading text-slate-500 mb-3 -mt-1.5">Card subtitle</h5>
                                <p className="text-sm text-slate-600 mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <ul className="flex space-x-5">
                                    <li><a href="#link" onClick={(e)=> e.preventDefault()} className="text-sm text-primary-600 hover:text-primary-700">Card link</a></li>
                                    <li><a href="#link" onClick={(e)=> e.preventDefault()} className="text-sm text-primary-600 hover:text-primary-700">Another link</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Header and footer</Block.Title>
                <Block.Text>Add an optional header and/or footer within a card.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                    <div className="w-full lg:w-1/3 p-3.5">
                        <Card>
                            <Card.Header>
                                <h6 className="text-sm text-slate-600 dark:text-slate-400">Featured Title</h6>
                            </Card.Header>
                            <Card.Body>
                                <h5 className="text-xl leading-tighter font-bold font-heading text-slate-700 dark:text-white mb-3">Special title treatment</h5>
                                <p className="text-sm text-slate-600 mb-4">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#link" onClick={(e)=> e.preventDefault()} className="relative inline-flex items-center text-center align-middle text-sm font-bold leading-4.5 rounded px-5 py-2 tracking-wide border border-primary-600 text-white bg-primary-600 hover:bg-primary-700 hover:border-primary-700 active:bg-primary-800 transition-all duration-300">Go somewhere</a>
                            </Card.Body>
                            <Card.Footer>
                                <div className="text-xs text-slate-400">2 days ago</div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Card Styles</Block.Title>
                <Block.Text>Cards include various options for customizing their backgrounds, borders, and color.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="flex flex-wrap -m-3.5">
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="primary">
                        <Card.Header variant="primary">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Primary card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="primary">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="secondary">
                        <Card.Header variant="secondary">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Dark card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="secondary">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="red">
                        <Card.Header variant="red">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Danger card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="red">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="green">
                        <Card.Header variant="green">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Success card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="green">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="yellow">
                        <Card.Header variant="yellow">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Warning card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="yellow">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 p-3.5">
                    <Card variant="cyan">
                        <Card.Header variant="cyan">
                            <h6 className="text-sm text-white">Header</h6>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="text-xl leading-tighter font-bold font-heading text-white mb-3">Info card title</h5>
                            <p className="text-sm text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                        <Card.Footer variant="cyan">
                            <h6 className="text-sm text-white">Footer</h6>
                        </Card.Footer>
                    </Card>
                </div>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default CardsPage