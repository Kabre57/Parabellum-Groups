import React from 'react'
import { Head, Block, Card } from '../../../componenets'

const BasicTablesPage = () => {
  return (
    <>
        <Head title="Basic Table" />
        <div className="lg:max-w-[960px] mx-auto">
        <Block.PageHead className="md:max-w-[720px]">
            <Block.Back to="/components">Components</Block.Back>
            <Block.TitleLg>Basic Table Example</Block.TitleLg>
            <Block.LeadText>Examples for few basic styled tables</Block.LeadText>
        </Block.PageHead>
        <Block>
            <Block.Head>
                <Block.Title>Table Default</Block.Title>
                <Block.Text>Using the most basic table markup, here’s how based tables look by default.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <table className="table border-collapse w-full [&_th]:text-start [&_th]:p-2 [&_td]:p-2 first:[&_th]:ps-5 last:[&_th]:pe-5 first:[&_td]:ps-5 last:[&_td]:pe-5">
                    <thead className="[&_th]:border-b [&_th]:border-gray-300 [&_th]:dark:border-gray-900">
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody className="[&_th]:border-b [&_td]:border-b [&_:last-child_th]:border-b-0 [&_:last-child_td]:border-b-0 [&_th]:border-gray-300 [&_th]:dark:border-gray-900 [&_td]:border-gray-300 [&_td]:dark:border-gray-900">
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Stripe Table</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <table className="table border-collapse w-full [&_th]:text-start [&_th]:p-2 [&_td]:p-2 first:[&_th]:ps-5 last:[&_th]:pe-5 first:[&_td]:ps-5 last:[&_td]:pe-5">
                    <thead className="[&_th]:border-b [&_th]:border-gray-300 [&_th]:dark:border-gray-900">
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody className="[&_th]:border-b [&_td]:border-b [&_:last-child_th]:border-b-0 [&_:last-child_td]:border-b-0 [&_th]:border-gray-300 [&_th]:dark:border-gray-900 [&_td]:border-gray-300 [&_td]:dark:border-gray-900 odd:[&_tr]:bg-gray-100 odd:[&_tr]:dark:bg-gray-900">
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Bordered Table</Block.Title>
            </Block.Head>
            <Card>
            <Card.Body>
                <table className="table border-collapse w-full [&_th]:text-start [&_th]:p-2 [&_td]:p-2 first:[&_th]:ps-5 last:[&_th]:pe-5 first:[&_td]:ps-5 last:[&_td]:pe-5">
                    <thead className="[&_th]:border [&_th]:border-gray-300 [&_th]:dark:border-gray-900">
                        <tr>
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody className="[&_th]:border [&_td]:border [&_th]:border-gray-300 [&_th]:dark:border-gray-900 [&_td]:border-gray-300 [&_td]:dark:border-gray-900">
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Card.Body>
            </Card>
        </Block>
        <Block>
            <Block.Head>
                <Block.Title>Responsive Table</Block.Title>
                <Block.Text>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive.</Block.Text>
            </Block.Head>
            <Card>
            <Card.Body>
                <div className="overflow-auto">
                    <table className="table border-collapse w-full [&_th]:text-start [&_th]:p-2 [&_td]:p-2 first:[&_th]:ps-5 last:[&_th]:pe-5 first:[&_td]:ps-5 last:[&_td]:pe-5">
                        <thead className="[&_th]:border-b [&_th]:border-gray-300 [&_th]:dark:border-gray-900">
                            <tr>
                                <th>#</th>
                                <th>Heading</th>
                                <th>Heading</th>
                                <th>Heading</th>
                                <th>Heading</th>
                                <th>Heading</th>
                                <th>Heading</th>
                                <th>Heading</th>
                            </tr>
                        </thead>
                        <tbody className="[&_th]:border-b [&_td]:border-b [&_:last-child_th]:border-b-0 [&_:last-child_td]:border-b-0 [&_th]:border-gray-300 [&_th]:dark:border-gray-900 [&_td]:border-gray-300 [&_td]:dark:border-gray-900">
                            <tr>
                                <th>1</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card.Body>
            </Card>
        </Block>

        </div>
    </>
  )
}

export default BasicTablesPage