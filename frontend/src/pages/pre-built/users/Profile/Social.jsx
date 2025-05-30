import React from 'react'
import { Avatar, Button, Card, Icon } from '../../../../componenets'

const Social = ({pageAside}) => {
  return (
    <>
        <div className="flex justify-between items-center pb-4 gap-x-6">
            <div className="relative">
                <h5 className="text-2xl font-heading mb-2 font-bold leading-tighter tracking-tight text-slate-700 dark:text-white">Connected with Social Account</h5>
                <p className="text-slate-600 dark:text-slate-400">You can connect with your social account such as facebook, google etc to make easier to login into account.</p>
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
        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4">Connect to Facebook</h6>
        <Card>
            <Card.Body>
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <div className="flex items-center gap-4 sm:max-w-lg">
                        <Avatar rounded customVariant="text-white bg-[#3b5998] h-11 w-11" >
                            <Icon className="text-2xl"  name="facebook-f" />
                        </Avatar>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400">You have successfully connected with your facebook account, you can easily log in using your account too.</p>
                        </div>
                    </div>
                    <div>
                        <Button size="lg" variant="red">Revoke Access</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
        <h6 className="text-sm font-heading font-bold text-slate-700 dark:text-white mb-4 mt-8">Connect to Google</h6>
        <Card>
            <Card.Body>
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                    <div className="flex items-center gap-4 sm:max-w-lg">
                        <Avatar rounded customVariant="text-white bg-[#de5246] h-11 w-11" >
                            <Icon className="text-2xl"  name="google" />
                        </Avatar>
                        <div>
                            <p className="text-slate-600 dark:text-slate-400">You can connect with your google account. <em className="block text-slate-400">Not connected yet</em></p>
                        </div>
                    </div>
                    <div>
                        <Button size="lg" variant="primary-pale">Connect</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
        <div className="mt-10">
            <h6 className="text-base font-heading font-bold">Import Contacts <a href="#link" onClick={(e)=> e.preventDefault()} className="inline-flex text-sm leading-none whitespace-nowrap transition-all duration-300 font-medium font-body text-primary-600 hover:text-primary-700 ms-auto">Import from Google</a></h6>
            <p className="text-sm text-slate-600 dark:text-slate-400">You have not imported contacts from your mobile phone.</p>
        </div>
    </>
  )
}

export default Social