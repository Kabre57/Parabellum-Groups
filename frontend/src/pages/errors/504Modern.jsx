import React from "react";
import { Head, Button } from "../../componenets";

const Error504ModernPage = () => {
  return (
    <>
        <Head title="Error 504 Modern" />
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="m-auto text-center py-8 px-4 max-w-[520px]">
                <div className="mb-15">
                    <img src="/images/gfx/error-504.svg" alt="" />
                </div>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white pb-4">Gateway Timeout Error</h3>
                <p className="text-base text-slate-600 mb-4">We are very sorry for inconvenience. It looks like some how our server did not receive a timely response.</p>
                <Button as="Link" to="/home" variant="primary" size="lg" className="mt-3">Back To Home</Button>
            </div>
        </div>
    </>
  );
};
export default Error504ModernPage;
