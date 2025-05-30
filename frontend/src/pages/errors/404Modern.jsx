import React from "react";
import { Head, Button } from "../../componenets";

const Error404ModernPage = () => {
  return (
    <>
        <Head title="Error 404 Modern" />
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="m-auto text-center py-8 px-4 max-w-[520px]">
                <div className="mb-15">
                    <img src="/images/gfx/error-404.svg" alt="" />
                </div>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white pb-4">Oops! Why you’re here?</h3>
                <p className="text-base text-slate-600 mb-4">We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted or never existed.</p>
                <Button as="Link" to="/home" variant="primary" size="lg" className="mt-3">Back To Home</Button>
            </div>
        </div>
    </>
  );
};
export default Error404ModernPage;
