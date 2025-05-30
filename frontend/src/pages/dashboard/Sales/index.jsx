import React, {useState} from "react";
import {Button, Head, Icon, PageHead} from "../../../componenets";
import SalesRevenueCard from "./SalesRevenueCard";
import ActiveSubscriptionsCard from "./ActiveSubscriptionsCard";
import AvgSubscriptionsCard from "./AvgSubscriptionsCard";
import SalesOverviewCard from "./SalesOverviewCard";
import RecentTransactionCard from "./RecentTransactionCard";
import RecentActivitiesCard from "./RecentActivitiesCard";
import NewUsersCard from "./NewUsersCard";
import SupportRequestsCard from "./SupportRequestsCard";
import RecentNotificationsCard from "./RecentNotificationsCard";

import { Menu } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { useTheme } from "../../../layout/context";

const SalesHomepage = () => {
  const theme = useTheme();
  let [dropdownToggle, setDropdownToggle] = useState()
  let [dropdownContent, setDropdownContent] = useState()
  let { styles, attributes } = usePopper(dropdownToggle, dropdownContent, {
      placement : theme.direction === "rtl" ? "bottom-start" : "bottom-end",
      modifiers: [
          {name: 'offset', options: { offset: [0,4]}},
          {name: 'preventOverflow', options: { padding: 8 }},
      ],
  })
  return (
    <>
      <Head title="Sales Dashboard" />
      <PageHead>
        <PageHead.Group>
          <PageHead.Title>Sales Overview</PageHead.Title>
          <PageHead.SubTitle>Welcome to DashParabellumGroups Dashboard Template.</PageHead.SubTitle>
        </PageHead.Group>
        <PageHead.Group>
          <PageHead.Option>
            <ul className="flex items-center gap-4 px-3.5 py-5 sm:py-0">
                <li>
                  <Menu as="div" className="inline-flex relative">
                    {({ open }) => (
                        <>
                            <Menu.Button as='div' className={`inline-flex${open ? ' active' : ''}`} ref={setDropdownToggle}>
                                <Button size="rg" variant="white-outline">
                                  <Icon className="text-xl/4.5 me-3 hidden sm:inline" name="calender-date" />
                                  <span className="me-4"><span className="hidden md:inline">Last</span> 30 Days</span>
                                  <Icon className="text-xl/4.5 rtl:-scale-x-100" name="chevron-right" />
                                </Button>
                            </Menu.Button>
                            <Menu.Items modal={false} ref={setDropdownContent} style={styles.popper} {...attributes.popper} className="absolute border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 rounded-md shadow z-[1000] min-w-[180px]">
                                <ul className="py-2">
                                    <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 30 Days</span></Menu.Item></li>
                                    <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 6 Months</span></Menu.Item></li>
                                    <li><Menu.Item as="button" className="w-full relative px-5 py-2.5 flex items-center rounded-[inherit] text-xs leading-5 font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 hover:bg-slate-50 hover:dark:bg-gray-900 transition-all duration-300"><span>Last 1 Years</span></Menu.Item></li>
                                </ul>
                            </Menu.Items>
                        </>
                    )}
                  </Menu>
                </li>
                <li className="ms-auto">
                    <Button size="rg" variant="primary">
                        <Icon className="text-xl/4.5" name="reports" />
                        <span className="ms-3">Reports</span>
                    </Button>
                </li>
            </ul>
          </PageHead.Option>
        </PageHead.Group>
      </PageHead>
      <div className="grid grid-flow-dense grid-cols-12 gap-7">
        <div className="col-span-12 lg:col-span-6 2xl:col-span-6 lg:row-span-2 2xl:row-span-1">
          <SalesRevenueCard />
        </div>
        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <ActiveSubscriptionsCard />
        </div>
        <div className="col-span-12 sm:col-span-6 2xl:col-span-3">
          <AvgSubscriptionsCard />
        </div>
        <div className="col-span-12 2xl:col-span-6 2xl:row-span-2 2xl:col-start-7 2xl:row-start-1">
          <SalesOverviewCard />
        </div>
        <div className="col-span-12 2xl:col-span-8">
          <RecentTransactionCard />
        </div>
        <div className="col-span-12 md:col-span-6 2xl:col-span-4">
          <RecentActivitiesCard />
        </div>
        <div className="col-span-12 md:col-span-6 2xl:col-span-4">
          <NewUsersCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <SupportRequestsCard />
        </div>
        <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
          <RecentNotificationsCard />
        </div>
      </div>
    </>
  );
};
export default SalesHomepage;
