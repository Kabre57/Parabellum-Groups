import React, {useState, useEffect} from "react";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";


const Layout = ({title, container, ...props}) => {

  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [sidebarCompact, setSidebarCompact] = useState(false);

  useEffect(() => {
    sidebarVisibility ? document.body.classList.add('overflow-hidden') : document.body.classList.remove('overflow-hidden');
  }, [sidebarVisibility])
  

  useEffect(() => {
    const handleMobileSidebar = () => {
        if (window.innerWidth < 1200) {
          setSidebarMobile(true);
        } else {
          setSidebarMobile(false);
          setSidebarVisibility(false)
        }
    }

    handleMobileSidebar();
    window.addEventListener('resize', handleMobileSidebar);
    return () => {
      window.removeEventListener('resize', handleMobileSidebar);
    };
  }, []);

  const containerClass = classNames({
    "container" : true,
    "max-w-none" : !container
  })
  return (
    <>
      <div className="nk-main">
          <Sidebar mobile={sidebarMobile} visibility={sidebarVisibility} setVisibility={setSidebarVisibility} compact={sidebarCompact} setCompact={setSidebarCompact} />
          <div className="nk-wrap xl:ps-72 [&>.nk-header]:xl:start-72 [&>.nk-header]:xl:w-[calc(100%-theme(spacing.72))] peer-[&.is-compact:not(.has-hover)]:xl:ps-[74px] peer-[&.is-compact:not(.has-hover)]:[&>.nk-header]:xl:start-[74px] peer-[&.is-compact:not(.has-hover)]:[&>.nk-header]:xl:w-[calc(100%-74px)] flex flex-col min-h-screen transition-all duration-300">
              <Header sidebarVisibility={sidebarVisibility} setSidebarVisibility={setSidebarVisibility} />
                <div className="nk-content mt-16  px-1.5 sm:px-5 py-6 sm:py-8">
                    <div className={containerClass}>
                      <Outlet />
                    </div>
                </div>
              <Footer />
          </div>
      </div>
    </>
  );
};
export default Layout;
