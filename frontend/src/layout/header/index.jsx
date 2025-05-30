import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import { useTheme } from "../context"
import SidebarToggle from "../components/SidebarToggle";
import NewsTicker from '../components/NewsTicker';
import LanguageDropdown from '../components/LanguageDropdown';
import UserDropdown from '../components/UserDropdown';
import NotificationDropdown from '../components/NotificationDropdown';

const Header = ({className, sidebarVisibility, setSidebarVisibility}) => {

  const theme = useTheme();

  const headerClass = classNames({
    "nk-header fixed start-0 w-full h-16 top-0 z-[1021] transition-all duration-300 min-w-[320px]": true,
    [`dark`]: theme.header == "dark",
    [`${className}`]: className,
  });

  return (
    <>
        <div className={headerClass}>
            <div className="h-16 border-b bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-900 px-1.5 sm:px-5">
                <div className="container max-w-none">
                    <div className="relative flex items-center -mx-1">
                        <div className="px-1 me-4 -ms-1.5 xl:hidden">
                            <SidebarToggle icon="menu" onClick={()=> setSidebarVisibility(!sidebarVisibility)} />
                        </div>
                        <div className="px-1 py-3.5 flex xl:hidden">
                            <Link to="/" className="relative inline-block transition-opacity duration-300 h-9">
                                <img className="h-full opacity-0 dark:opacity-100" src="/logo.png" srcSet="/logo2x.png 2x" alt="logo" />
                                <img className="h-full opacity-100 dark:opacity-0 absolute start-0 top-0" src="/logo-dark.png" srcSet="/logo-dark2x.png 2x" alt="logo" />
                            </Link>
                        </div>
                        <div className="px-1 py-2 hidden xl:block">
                            <NewsTicker />
                        </div>
                        <div className="px-1 py-3.5 ms-auto">
                            <ul className="flex item-center -mx-1.5 sm:-mx-2.5">
                                <li className="px-1.5 sm:px-2.5 hidden sm:inline-flex">
                                    <LanguageDropdown />
                                </li>
                                <li className="px-1.5 sm:px-2.5 inline-flex">
                                    <UserDropdown />
                                </li>
                                <li className="px-1.5 sm:px-2.5 inline-flex">
                                    <NotificationDropdown />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header