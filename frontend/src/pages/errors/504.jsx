import React from "react";
import { Head, Button } from "../../componenets";

const Error504Page = () => {
  return (
    <>
        <Head title="Error 504" />
        <div className="relative flex items-center justify-center min-h-screen">
          <div className="m-auto text-center py-8 px-4 max-w-[520px]">
              <h1 className="text-[160px] font-heading font-bold leading-tighter -tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-b from-primary-600 to-primary-900 opacity-90">504</h1>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl leading-tighter tracking-tight text-slate-700 dark:text-white pb-4">Gateway Timeout Error</h3>
              <p className="text-base text-slate-600 mb-4">We are very sorry for inconvenience. It looks like some how our server did not receive a timely response.</p>
              <Button as="Link" to="/home" variant="primary" size="lg" className="mt-3">Back To Home</Button>
          </div>
        </div>
    </>
  );
};
export default Error504Page;
