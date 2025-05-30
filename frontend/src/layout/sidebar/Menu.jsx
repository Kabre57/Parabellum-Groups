import React, {Fragment, useEffect} from 'react'

import slideUp from '../../utilities/slideUp';
import slideDown from '../../utilities/slideDown';
import getParents from '../../utilities/getParents';

import { NavLink, useLocation } from "react-router-dom";

const menuData = [
    { heading: "Dashboards" },
    { icon: "cart", text: "Ecommerce", link: "/home" },
    { icon: "edit-alt", text: "AI Copywriter", link: "/copywriter" },
    { icon: "cc-alt2", text: "Sales", link: "/sales" },
    { icon: "bitcoin-cash", text: "Crypto", link: "/crypto" },
    { icon: "growth", text: "Analytics", link: "/analytics" },
    { icon: "coins", text: "Invest", link: "/invest" },    
    { heading: "Pre-Built Pages" },
    { 
        icon: "tile-thumb", text: "Projects", link: "#",
        sub: [
            { text:"Project Cards", link: "/project-card" },
            { text:"Project List", link: "/project-list" }
        ]
    },    
    {
        icon: "users", text: "User Manage", link: "#",
        sub: [
            { text:"User List - Regular", link: "/user-list-regular" },
            { text:"User List - Compact", link: "/user-list-compact" },
            { text:"User Details - Regular", link: "/user-details/1" },
            { text:"User Profile - Regular", link: "/user-profile-regular" },
            { text:"User Contact - Card", link: "/user-card" }
        ]
    },  
    {
        icon: "user-list", text: "Customers", link: "#",
        sub: [
            { text:"Customer List", link: "/customer-list" },
            { text:"Customer Details", link: "/customer-details/1" }
        ]
    },
    {
        icon: "grid-alt", text: "Applications", link: "#",
        sub: [
            { text:"Messages",link: "/apps-messages" },
            { text:"Inbox / Mail",link: "/apps-inbox" },
            { text:"File Manager",link: "/apps-file-manager" },
            { text:"Chats / Messenger", link: "/apps-chats" },
            { text:"Calendar", link: "/apps-calendar" }
        ]
    },   
    {
        icon: "file-docs", text: "Invoice", link: "#",
        sub: [
            { text:"Invoice List", link: "/invoice-list" },
            { text:"Invoice Details", link: "/invoice-details/1" }
        ]
    },  
    {
        icon: "card-view", text: "Products", link: "#",
        sub: [
            { text:"Product List", link: "/product-list" },
            { text:"Product Card", link: "/product-card" },
            { text:"Product Details", link: "/product-details/1" }
        ]
    },  
    { icon: "view-col", text: "Pricing Table", link: "/pricing-table" }, 
    { icon: "img", text: "Image Gallery", link: "/gallery" },     
    { heading: "Misc Pages" },
    {
        icon: "signin", text: "Auth Pages", link: "#",
        sub: [
            { text:"Login / Signin", link: "/auths/auth-login", blank:'true' },
            { text:"Register / Signup", link: "/auths/auth-register", blank:'true'  },
            { text:"Forgot Password", link: "/auths/auth-reset", blank:'true'  },
            { text:"Success / Confirm", link: "/auths/auth-success", blank:'true'  },
            { 
                text:"Classic Version - v2", link: "#",
                sub: [
                    { text:"Login / Signin", link: "/auths/auth-login-v2", blank:'true' },
                    { text:"Register / Signup", link: "/auths/auth-register-v2", blank:'true' },
                    { text:"Forgot Password", link: "/auths/auth-reset-v2", blank:'true' },
                    { text:"Success / Confirm", link: "/auths/auth-success-v2", blank:'true' }
                ] 
            },
            { 
                text:"No Slider Version - v3", link: "#",
                sub: [
                    { text:"Login / Signin", link: "/auths/auth-login-v3", blank:'true' },
                    { text:"Register / Signup", link: "/auths/auth-register-v3", blank:'true' },
                    { text:"Forgot Password", link: "/auths/auth-reset-v3", blank:'true' },
                    { text:"Success / Confirm", link: "/auths/auth-success-v3", blank:'true' }
                ]
            }
        ]
    }, 
    {
        icon: "files", text: "Error Pages", link: "#",
        sub: [
            { text:"404 Classic", link: "/errors/404-classic", blank:'true' },
            { text:"504 Classic", link: "/errors/504-classic", blank:'true' },
            { text:"404 Modern", link: "/errors/404-modern", blank:'true' },
            { text:"504 Modern", link: "/errors/504-modern", blank:'true' }
        ]
    }, 
    {
        icon: "files", text: "Other Pages", link: "#",
        sub: [
            { text:"Blank / Startup", link: "/_blank" },
            { text:"Faqs / Help", link: "/faqs" },
            { text:"Terms / Policy", link: "/terms-policy" },
            { text:"Regular Page - v1", link: "/regular-v1" },
            { text:"Regular Page - v2", link: "/regular-v2" }
        ]
    }, 
    { heading: "Components" },
    {
        icon: "layers", text: "Ui Elements", link: "#",
        sub: [
            { text:"Alerts", link: "/components/elements/alerts" },
            { text:"Accordions", link: "/components/elements/accordions" },
            { text:"Avatar", link: "/components/elements/avatar" },
            { text:"Badges", link: "/components/elements/badges" },
            { text:"Buttons", link: "/components/elements/buttons" },
            { text:"Button Group", link: "/components/elements/buttons-group" },
            { text:"Breadcrumb", link: "/components/elements/breadcrumb" },
            { text:"Cards", link: "/components/elements/cards" },
            { text:"List Dropdown", link: "/components/elements/list-dropdown" },
            { text:"Modals", link: "/components/elements/modals" },
            { text:"Pagination", link: "/components/elements/pagination" },
            { text:"Popovers", link: "/components/elements/popover" },
            { text:"Progress", link: "/components/elements/progress" },
            { text:"Spinner", link: "/components/elements/spinner" },
            { text:"Tabs", link: "/components/elements/tabs" },
            { text:"Toasts", link: "/components/elements/toast" },
            { text:"Tooltip", link: "/components/elements/tooltip" },
            { text:"Typography", link: "/components/elements/typography" }
        ]
    },  
    {
        icon: "card-view", text: "Forms", link: "#",
        sub: [
            { text:"Form Elements", link: "/components/forms/form-elements" },
            { text:"Checkbox Radio", link: "/components/forms/checkbox-radio" },
            { text:"Advanced Controls", link: "/components/forms/advanced-controls" },
            { text:"Input Group", link: "/components/forms/input-group" },
            { text:"Form Upload", link: "/components/forms/form-upload" },
            { text:"Date & Time Picker", link: "/components/forms/datetime-picker" },
            { text:"Number Spinner", link: "/components/forms/number-spinner" },
            { text:"noUiSlider", link: "/components/forms/nouislider" },
            { text:"Form Layouts", link: "/components/forms/form-layouts" },
            { text:"Form Validation", link: "/components/forms/form-validation" }
        ]
    }, 
    { icon: "tailwind", text: "Tailwind Config", link: "/components/tailwind-config" }, 
    {
        icon: "dot-box", text: "Crafted Icons", link: "#",
        sub: [
            { text:"SVG Icon - Exclusive", link: "/components/svg-icons" },
            { text:"Nioicon - HandCrafted", link: "/components/nioicon" }
        ]
    }, 
    {
        icon: "table-view", text: "Tables", link: "#",
        sub: [
            { text:"Basic Tables", link: "/components/tables/basic-table" },
            { text:"DataTables", link: "/components/tables/data-table" }
        ]
    }, 
    {
        icon: "pie", text: "Chart JS", link: "/components/chartjs"
    }
]

const Menu = ({setSidebarVisibility}) => {
    const location = useLocation();
    // variables for Sidebar
    let menu = {
        classes: {
            main: 'nk-menu',
            item:'nk-menu-item',
            link:'nk-menu-link',
            toggle: 'nk-menu-toggle',
            sub: 'nk-menu-sub',
            subparent: 'has-sub',
            active: 'active',
            current: 'current-page'
        },
    };

    let currentLink = function(selector){
        let elm = document.querySelectorAll(selector);
        elm.forEach(function(item){
            var activeRouterLink = item.classList.contains('active');
            if (activeRouterLink) {
                let parents = getParents(item,`.${menu.classes.main}`, menu.classes.item);
                parents.forEach(parentElemets =>{
                    parentElemets.classList.add(menu.classes.active, menu.classes.current);
                    let subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
                    subItem !== null && (subItem.style.display = "block")
                })
                
            } else {
                item.parentElement.classList.remove(menu.classes.active, menu.classes.current);
            }
        })
    } 
    // dropdown toggle
    let dropdownToggle = function(elm){
        let parent = elm.parentElement;
        let nextelm = elm.nextElementSibling;
        let speed = nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
        if(!parent.classList.contains(menu.classes.active)){
            parent.classList.add(menu.classes.active);
            slideDown(nextelm,speed);
        }else{
            parent.classList.remove(menu.classes.active);
            slideUp(nextelm,speed);
        }
    }

    // dropdown close siblings
    let closeSiblings = function(elm){
        let parent = elm.parentElement;
        let siblings = parent.parentElement.children;
        Array.from(siblings).forEach(item => {
        if(item !== parent){
            item.classList.remove(menu.classes.active);
            if(item.classList.contains(menu.classes.subparent)){
            let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
            subitem.forEach(child => {
                child.parentElement.classList.remove(menu.classes.active);
                slideUp(child,400);
            })
            }
        }
        });
    }

    let menuToggle = function(e){
        e.preventDefault();
        let item = e.target.closest(`.${menu.classes.toggle}`)
        dropdownToggle(item);
        closeSiblings(item);
    }

    let routeChange = function(e){
        let selector = document.querySelectorAll(".nk-menu-link")
        selector.forEach((item, index)=>{
            if(item.classList.contains('active')){
                closeSiblings(item);
                item.parentElement.classList.add("active");
            }else{
                item.parentElement.classList.remove("active");
                currentLink(`.${menu.classes.link}`);
            }
        })
    }
    
    useEffect(() =>{
        routeChange();
    },[location.pathname])

    useEffect(() =>{
        currentLink(`.${menu.classes.link}`);
        // eslint-disable-next-line
    },[null])

  return (
    <ul className="nk-menu">
        {menuData.map((item,index) => 
            <Fragment key={index}>
                {!item.heading ? 
                    (
                        !item.sub ? 
                        <li className={`nk-menu-item py-0.5 group/item ${item.sub ? 'has-sub' : ''}`} >
                            <NavLink onClick={()=> setSidebarVisibility(false)} target={item.blank && "_blank"} className="nk-menu-link nk-route-toggle flex relative items-center align-middle py-2.5 ps-6 pe-10 font-heading font-bold tracking-snug group" to={item.link} end>
                                {item.icon && <span className="font-normal tracking-normal w-9 inline-flex flex-grow-0 flex-shrink-0 text-slate-400 group-[.active]/item:text-primary-500 group-hover:text-primary-500"><em className={`text-2xl leading-none text-current transition-all duration-300 icon ni ni-${item.icon}`}></em></span>}
                                {item.text && <span className="group-[&.is-compact:not(.has-hover)]/sidebar:opacity-0 flex-grow-1 inline-block whitespace-nowrap transition-all duration-300 text-slate-600 dark:text-slate-500 group-[.active]/item:text-primary-500 group-hover:text-primary-500">{item.text}</span>}
                            </NavLink>
                        </li>
                        : 
                        <li className={`nk-menu-item py-0.5 group/item ${item.sub ? 'has-sub' : ''}`} >
                            <a className="nk-menu-link nk-menu-toggle flex relative items-center align-middle py-2.5 ps-6 pe-10 font-heading font-bold tracking-snug group" onClick={menuToggle} href="#expand">
                                {item.icon && <span className="font-normal tracking-normal w-9 inline-flex flex-grow-0 flex-shrink-0 text-slate-400 group-[.active]/item:text-primary-500 group-hover:text-primary-500"><em className={`text-2xl leading-none text-current transition-all duration-300 icon ni ni-${item.icon}`}></em></span>}
                                {item.text && <span className="group-[&.is-compact:not(.has-hover)]/sidebar:opacity-0 flex-grow-1 inline-block whitespace-nowrap transition-all duration-300 text-slate-600 dark:text-slate-500 group-[.active]/item:text-primary-500 group-hover:text-primary-500">{item.text}</span>}
                                <em className="group-[&.is-compact:not(.has-hover)]/sidebar:opacity-0 text-base leading-none text-slate-400 group-[.active]/item:text-primary-500 absolute end-5 top-1/2 -translate-y-1/2 rtl:-scale-x-100 group-[.active]/item:rotate-90 group-[.active]/item:rtl:-rotate-90 transition-all duration-300 icon ni ni-chevron-right"></em>
                            </a>
                            <ul className="nk-menu-sub mb-1 hidden group-[&.is-compact:not(.has-hover)]/sidebar:!hidden">
                                {item.sub.map((itemsub1,index1) => 
                                    <Fragment key={index1}>
                                        {!itemsub1.sub ? 
                                            <li className={`nk-menu-item py-px group/sub1`} >
                                                <NavLink  onClick={()=> setSidebarVisibility(false)} target={itemsub1.blank && "_blank"} to={itemsub1.link} className="nk-menu-link nk-route-toggle flex relative items-center align-middle py-1.5 pe-10 ps-[calc(theme(spacing.6)+theme(spacing.9))] font-normal leading-5 text-sm tracking-normal normal-case" end>
                                                    <span className="text-slate-600 dark:text-slate-500 group-[.active]/sub1:text-primary-500 hover:text-primary-500 whitespace-nowrap flex-grow inline-block">{itemsub1.text}</span>
                                                </NavLink>
                                            </li>
                                            :
                                            <li className={`nk-menu-item py-px group/sub1 ${itemsub1.sub ? 'has-sub' : ''}`}>
                                                <a className="nk-menu-link nk-menu-toggle flex relative items-center align-middle py-1.5 pe-10 ps-[calc(theme(spacing.6)+theme(spacing.9))] font-normal leading-5 text-sm tracking-normal normal-case" onClick={menuToggle} href="#expand">
                                                    <span className="text-slate-600 dark:text-slate-500 group-[.active]/sub1:text-primary-500 hover:text-primary-500 whitespace-nowrap flex-grow inline-block">{itemsub1.text}</span>
                                                    <em className="text-base leading-none text-slate-400 group-[.active]/sub1:text-primary-500 absolute end-5 top-1/2 -translate-y-1/2 rtl:-scale-x-100 group-[.active]/sub1:rotate-90 group-[.active]/sub1:rtl:-rotate-90 transition-all duration-300 icon ni ni-chevron-right"></em>
                                                </a>
                                                <ul className="nk-menu-sub hidden ms-[calc(theme(spacing.6)+theme(spacing.9))] border-s border-gray-300 dark:border-gray-900 my-2">
                                                    {itemsub1.sub.map((itemsub2,index2) => 
                                                        <Fragment key={index2}>
                                                            <li className={`nk-menu-item py-px group/sub2`}>
                                                                <NavLink onClick={()=> setSidebarVisibility(false)} target={itemsub2.blank && "_blank"} to={itemsub2.link} className="nk-menu-link nk-route-toggle flex relative items-center align-middle py-1.5 pe-10 ps-4 font-normal leading-5 text-sm tracking-normal normal-case" end>
                                                                    <span className="text-slate-600 dark:text-slate-500 group-[.active]/sub2:text-primary-500 hover:text-primary-500 whitespace-nowrap flex-grow inline-block">{itemsub2.text}</span>
                                                                </NavLink>
                                                            </li>
                                                        </Fragment>
                                                    )}
                                                </ul>
                                            </li>}
                                    </Fragment>
                                )}
                            </ul>
                        </li>
                    )
                : 
                <li className="relative first:pt-1 pt-10 pb-2 px-6 before:absolute before:h-px before:w-full before:start-0 before:top-1/2 before:bg-gray-200 dark:before:bg-gray-900 first:before:hidden before:opacity-0 group-[&.is-compact:not(.has-hover)]/sidebar:before:opacity-100" >
                    <h6 className="group-[&.is-compact:not(.has-hover)]/sidebar:opacity-0 text-slate-400 dark:text-slate-300 whitespace-nowrap uppercase font-bold text-xs tracking-relaxed leading-tight">{item.heading}</h6>
                </li>}
            </Fragment>
        )}
    </ul>
  )
}

export default Menu