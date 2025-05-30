import React from 'react'
import { Button, Icon, Switch } from '../../../../componenets'

const Notification = ({pageAside}) => {
  return (
    <>
        <div className="flex justify-between items-center  pb-6 sm:pb-10 gap-x-6">
            <div className="relative">
                <h5 className="text-2xl font-heading mb-2 font-bold leading-tighter tracking-tight text-slate-700 dark:text-white">Notification Settings</h5>
                <p className="text-slate-600 dark:text-slate-400">You will get only notification what have enabled.</p>
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
        <div className="pb-4">
            <h6 className="text-base font-heading font-bold leading-tighter -tracking-snug text-slate-700 dark:text-white mb-2">Security Alerts</h6>
            <p className="text-slate-600 text-sm">You will get only those email notification what you want.</p>
        </div>
        <ul className="flex flex-col gap-4">
            <li className="flex">
                <Switch type="checkbox" id="checkUnusualActivity" defaultChecked>
                    Email me whenever encounter unusual activity
                </Switch>
            </li>
            <li className="flex">
                <Switch type="checkbox" id="checkNewSignIn">
                    Email me if new browser is used to sign in
                </Switch>
            </li>
        </ul>
        <div className="pb-4 pt-6 sm:pt-10">
            <h6 className="text-base font-heading font-bold leading-tighter -tracking-snug text-slate-700 dark:text-white mb-2">News</h6>
            <p className="text-slate-600 text-sm">You will get only those email notification what you want.</p>
        </div>
        <ul className="flex flex-col gap-4">
            <li className="flex">
                <Switch type="checkbox" id="notifyLatestNews" defaultChecked>
                    Notify me by email about sales and latest news
                </Switch>
            </li>
            <li className="flex">
                <Switch type="checkbox" id="notifyFeatureUpdate">
                    Email me about new features and updates
                </Switch>
            </li>
            <li className="flex">
                <Switch type="checkbox" id="notifyAccountTips" defaultChecked>
                    Email me about tips on using account
                </Switch>
            </li>
        </ul>
    </>
  )
}

export default Notification