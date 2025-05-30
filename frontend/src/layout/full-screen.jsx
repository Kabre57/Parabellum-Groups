import React from "react";
import { Outlet } from "react-router-dom";

const FullScreenLayout = ({...props}) => {
  return (
    <>
      <div className="nk-main">
          <div className="nk-wrap flex flex-col min-h-screen">
            <Outlet />
          </div>
      </div>
    </>
  );
};
export default FullScreenLayout;
