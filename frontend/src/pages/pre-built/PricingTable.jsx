import React from 'react'
import { Badge, Block, Button, Card, Head } from '../../componenets'
import { pricingTableDataV1, pricingTableDataV2 } from '../../store/pricing'

const PricingTablePage = () => {
  return (
    <>
        <Head title="Pricing Table" />
        <div className="flex justify-between items-center pb-5 md:pb-7 relative">
            <div>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2">
                    Pricing Table
                </h3>
                <p className="text-slate-400">Choose your pricing plan and start enjoying our service.</p>
            </div>
        </div>
        <Block>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                {pricingTableDataV1.map((item, index) => {
                    return(
                        <div key={index} className="col-span-12 md:col-span-6 2xl:col-span-3">
                            <Card className="relative h-full">
                                {item.tags && <Badge className="!absolute top-2 end-2" variant="primary">Recommend</Badge>}
                                <Card.Body className="text-center">
                                    <div className="pb-5">
                                        <h4 className="text-xl lg:text-2xl text-slate-600 dark:text-white font-heading font-bold leading-tighter tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.caption}</p>
                                    </div>
                                    <div className="flex flex-wrap -mx-3.5">
                                        <div className="w-1/2 px-3.5">
                                            <div className="text-xl lg:text-2xl text-slate-700 dark:text-white font-heading font-bold leading-tighter tracking-tight">{item.interest}%</div>
                                            <div className="text-sm text-slate-400">Daily Interest</div>
                                        </div>
                                        <div className="w-1/2 px-3.5">
                                            <div className="text-xl lg:text-2xl text-slate-700 dark:text-white font-heading font-bold leading-tighter tracking-tight">{item.term}</div>
                                            <div className="text-sm text-slate-400">Term Days</div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Body className="border-t border-gray-200 dark:border-gray-800">
                                    <ul>
                                        <li className="flex py-1"><span className="w-1/2">Min Deposit</span> - <span className="ms-auto">${item.minDeposit}</span></li>
                                        <li className="flex py-1"><span className="w-1/2">Max Deposit</span> - <span className="ms-auto">${item.maxDeposit}</span></li>
                                        <li className="flex py-1"><span className="w-1/2">Deposit Return</span> - <span className="ms-auto">{item.return}</span></li>
                                        <li className="flex py-1"><span className="w-1/2">Total Return</span> - <span className="ms-auto">{item.totalReturn}%</span></li>
                                    </ul>
                                    <div className="mt-6 text-center">
                                        <Button size="rg" variant="white-outline">Choose this Plan</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </Block>
        <div className="flex justify-between items-center pb-5 md:pb-7 relative">
            <div>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white mb-2">
                    Pricing Table V2
                </h3>
                <p className="text-slate-400">Choose your pricing plan and start enjoying our service.</p>
            </div>
        </div>
        <Block>
            <div className="grid grid-flow-dense grid-cols-12 gap-7">
                {pricingTableDataV2.map((item, index) => {
                    return(
                        <div key={index} className="col-span-12 md:col-span-6 2xl:col-span-3">
                            <Card className="relative h-full">
                                {item.tags && <Badge className="!absolute top-2 end-2" variant="primary">Recommend</Badge>}
                                <Card.Body className="text-center">
                                    <div className="py-1 mb-6">
                                        <img className="max-w-[90px] mx-auto" src={item.monogram} alt="" />
                                    </div>
                                    <div className="w-[220px] mx-auto">
                                        <h5 className="text-xl text-slate-700 dark:text-white font-heading font-bold leading-tighter -tracking-snug mb-1">{item.title}</h5>
                                        <span className="text-sm text-slate-400">{item.desc}</span>
                                    </div>
                                    <div className="pt-5">
                                        <div className="text-2xl text-slate-600 dark:text-white font-bold">${item.amount} <span>/yr</span></div>
                                        <span className="text-sm text-slate-400">{item.userNumber} User, Billed Yearly</span>
                                    </div>
                                    <div className="pt-6">
                                        <Button size="rg" variant="primary">Select Plan</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </Block>
    </>
  )
}

export default PricingTablePage