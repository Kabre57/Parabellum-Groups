import React from 'react'
import { Block, Head, Icon } from '../../componenets'
import { Link } from 'react-router-dom'

const ComponentList = () => {
  const data = [
    {
      title:"Alerts",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/alerts"
    },
    {
      title:"Accordions",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/accordions"
    },
    {
      title:"Avatar",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/avatar"
    },
    {
      title:"Badges",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/badges"
    },
    {
      title:"Buttons",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/buttons"
    },
    {
      title:"Button Group",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/buttons-group"
    },
    {
      title:"Breadcrumb",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/breadcrumb"
    },
    {
      title:"Cards",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/cards"
    },
    {
      title:"Dropdowns",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/list-dropdown"
    },
    {
      title:"Modals",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/modals"
    },
    {
      title:"Pagination",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/pagination"
    },
    {
      title:"Popover",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/popover"
    },
    {
      title:"Progress",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/progress"
    },
    {
      title:"Spinner",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/spinner"
    },
    {
      title:"Tabs",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/tabs"
    },
    {
      title:"Toasts",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/toast"
    },
    {
      title:"Tooltip",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/elements/tooltip"
    },
    {
      title:"Basic Tables",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/tables/basic-table"
    },
    {
      title:"Datatables",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/tables/data-table"
    },
    {
      title:"Form Elements",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/form-elements"
    },
    {
      title:"Form Upload",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/form-upload"
    },
    {
      title:"Checkbox Radio",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/checkbox-radio"
    },
    {
      title:"Advanced Control",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/advanced-controls"
    },
    {
      title:"Date & Time Picker",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/datetime-picker"
    },
    {
      title:"Form Validation",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/forms/form-validation"
    },
    {
      title:"Chart JS",
      desc:"A Handful and flexible alert messages examples.",
      link:"/components/chartjs"
    }
  ]
  return (
    <>
        <Head title="Components" />
        <div className="lg:max-w-[960px] mx-auto">
          <Block.PageHead className="md:max-w-[720px]">
              <Block.Back to="/home">Dashboard</Block.Back>
              <Block.TitleLg>Components</Block.TitleLg>
              <Block.LeadText><strong>DashParabellumGroups </strong> includes all the necessary components and elements with utility classes that helps you to create your web apps or application faster.</Block.LeadText>
          </Block.PageHead>
          <Block>
              <div className="flex flex-wrap -m-3.5">
                {data.map((item,index)=>
                  <div key={index} className="p-3.5 w-full lg:w-1/2">
                      <Link to={item.link} className="group relative block border rounded-md bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-900 h-full p-6 overflow-hidden">
                          <div className="flex items-center justify-between">
                              <div>
                                  <h6 className="font-heading font-bold text-base/tighter -tracking-snug text-slate-700 dark:text-white mb-1">{item.title}</h6>
                                  <p className="text-sm text-slate-400">{item.desc}</p>
                              </div>
                              <div className="-me-2">
                                  <span className="inline-flex items-center justify-center isolate relative h-9 w-9 px-1.5 before:content-[''] before:absolute before:-z-[1] before:h-5 before:w-5 hover:before:h-10 hover:before:w-10 group-hover:before:h-10 group-hover:before:w-10 before:rounded-full before:opacity-0 hover:before:opacity-100 group-hover:before:opacity-100 before:transition-all before:duration-300 before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:bg-gray-200 dark:before:bg-gray-900">
                                      <Icon className="text-xl/none rtl:-scale-x-100" name="chevron-right"></Icon>
                                  </span>
                              </div>
                          </div>
                      </Link>
                  </div>
                )}
              </div>
          </Block>
        </div>
    </>
  )
}

export default ComponentList