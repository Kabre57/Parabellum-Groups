import React from 'react'
import { Button, Card, Icon, Switch } from '../../../../componenets'

const Security = ({pageAside}) => {
  return (
    <>
        <div className="flex justify-between items-center pb-6 sm:pb-10 gap-x-6">
            <div className="relative">
                <h5 className="text-2xl font-heading mb-2 font-bold leading-tighter tracking-tight text-slate-700 dark:text-white">Security Settings</h5>
                <p className="text-slate-600 dark:text-slate-400">These settings are helps you keep your account secure.</p>
            </div>
            <div className="lg:hidden">
                <Button.Zoom
                    onClick={()=>{
                        pageAside(true)
                    }}
                >
                    <Icon className="text-xl" name="menu-alt-r" />
                </Button.Zoom>
            </div>
        </div>
        <Card>
            <Card.Body className="border-b last:border-b-0 border-gray-300 dark:border-gray-900">
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <div>
                        <h6 className="text-base font-heading font-bold leading-tighter -tracking-snug text-slate-700 dark:text-white mb-2">Save my Activity Logs</h6>
                        <p className="text-slate-600 text-sm">You can save your all activity logs including unusual activity detected.</p>
                    </div>
                    <div>
                        <div className="flex">
                            <Switch id="checkUnusualActivity" defaultChecked />
                        </div>
                    </div>
                </div>
            </Card.Body>
            <Card.Body className="border-b last:border-b-0 border-gray-300 dark:border-gray-900">
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <div>
                        <h6 className="text-base font-heading font-bold leading-tighter -tracking-snug text-slate-700 dark:text-white mb-2">Change Password</h6>
                        <p className="text-slate-600 text-sm">Set a unique password to protect your account.</p>
                    </div>
                    <div>
                        <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-6 gap-y-3">
                            <li className="md:order-2">
                                <Button size="rg" variant="primary">Change Password</Button>
                            </li>
                            <li>
                                <em className="text-xs text-slate-400 whitespace-nowrap">Last changed: <span className="text-slate-600 dark:text-slate-400">Oct 2, 2019</span></em>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card.Body>
            <Card.Body className="border-b last:border-b-0 border-gray-300 dark:border-gray-900">
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <div>
                        <h6 className="text-base font-heading font-bold leading-tighter -tracking-snug text-slate-700 dark:text-white mb-2">2 Factor Auth</h6>
                        <p className="text-slate-600 text-sm">Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>
                    </div>
                    <div>
                        <Button size="rg" variant="primary">Disable</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default Security