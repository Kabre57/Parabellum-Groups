import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../layout/main";
import FullScreenLayout from "../layout/full-screen";

// Import the ProtectedRoute component
import ProtectedRoute from "./ProtectedRoute"; // Path should be correct

// Import the AuthProvider
import { AuthProvider } from "../contexts/AuthContext"; // Path should be correct

// Dashboard Pages
import EcommerceHomepage from "../pages/dashboard/Ecommerce";
import CopywriterHomepage from "../pages/dashboard/Copywriter";
import InvestHomepage from "../pages/dashboard/Invest";
import AnalyticsHomepage from "../pages/dashboard/Analytics";
import CryptoHomepage from "../pages/dashboard/Crypto";
import SalesHomepage from "../pages/dashboard/Sales";

// Apps Pages
import MessagesPage from "../pages/apps/Messages";
import InboxPage from "../pages/apps/Inbox";
import FileManagerPage from "../pages/apps/FileManager";
import ChatsPage from "../pages/apps/Chats";
import CalendarPage from "../pages/apps/Calendar";

// Pre-built Pages
import ProjectsCardPage from "../pages/pre-built/projects/CardView";
import ProjectsListPage from "../pages/pre-built/projects/ListView";
import ProductsListPage from "../pages/pre-built/products/ListView";
import ProductsCardPage from "../pages/pre-built/products/CardView";
import ProductsDetailsPage from "../pages/pre-built/products/Details";
import InvoiceListPage from "../pages/pre-built/invoice/ListView";
import InvoiceDetailsPage from "../pages/pre-built/invoice/Details";
import InvoicePrintPage from "../pages/pre-built/invoice/Print";
import CustomersListPage from "../pages/pre-built/customers/ListView";
import CustomersDetailsPage from "../pages/pre-built/customers/Details";
import UsersListPage from "../pages/pre-built/users/ListView";
import UsersListCompactPage from "../pages/pre-built/users/ListViewCompact";
import UsersCardPage from "../pages/pre-built/users/CardView";
import UserDetailsPage from "../pages/pre-built/users/Details";
import UserProfilePage from "../pages/pre-built/users/Profile";
import PricingTablePage from "../pages/pre-built/PricingTable";
import ImageGalleryPage from "../pages/pre-built/ImageGallery";

// Error Pages
import Error404Page from "../pages/errors/404";
import Error404ModernPage from "../pages/errors/404Modern";
import Error504Page from "../pages/errors/504";
import Error504ModernPage from "../pages/errors/504Modern";

// Auth Pages (Using /pages/auths/)
import LoginPage from "../pages/auths/Login.jsx"; // Updated path
import ForgotPage from "../pages/auths/Forgot.jsx"; // Updated path for Forgot
import ResetPasswordPage from "../pages/auths/ResetPasswordPage.jsx"; // Updated path for ResetPassword
import RegisterPage from "../pages/auths/Register.jsx"; // Assuming RegisterPage exists here and is adapted
// Remove unused Success page import if applicable
// import SuccessPage from "../pages/auths/Success.jsx";

// Misc Pages
import BlankPage from "../pages/Blank";
import FaqsPage from "../pages/misc/Faqs";
import TermsPolicyPage from "../pages/misc/TermsPolicy";
import RegularV1Page from "../pages/misc/RegularV1";
import RegularV2Page from "../pages/misc/RegularV2";

// Components Pages
import ComponentList from "../pages/components";
import NioIconsPage from "../pages/components/NioIcons";
import SvgIconsPage from "../pages/components/SvgIcons";
import ChartJsPage from "../pages/components/ChartJs";
import TailwindConfigPage from "../pages/components/TailwindConfig";

// Elements Pages
import Alerts from "../pages/components/elements/Alerts";
import Accordions from "../pages/components/elements/Accordions";
import AvatarPage from "../pages/components/elements/Avatars";
import ButtonPage from "../pages/components/elements/Buttons";
import ButtonGroupPage from "../pages/components/elements/ButtonGroup";
import BadgePage from "../pages/components/elements/Badges";
import BreadcrumbPage from "../pages/components/elements/Breadcrumb";
import CardsPage from "../pages/components/elements/Cards";
import DropdownPage from "../pages/components/elements/Dropdowns";
import ModalPage from "../pages/components/elements/Modals";
import PaginationPage from "../pages/components/elements/Paginations";
import PopoverPage from "../pages/components/elements/Popovers";
import ProgressPage from "../pages/components/elements/Progress";
import SpinnerPage from "../pages/components/elements/Spinners";
import TabsPage from "../pages/components/elements/Tabs";
import ToastPage from "../pages/components/elements/Toasts";
import TooltipsPage from "../pages/components/elements/Tooltips";
import TypographyPage from "../pages/components/elements/Typography";

// Forms Pages
import AdvancedControlPage from "../pages/components/forms/AdvancedControls";
import DateTimePickerPage from "../pages/components/forms/DateTimePicker";
import CheckboxRadioPage from "../pages/components/forms/CheckboxRadio";
import FormElementsPage from "../pages/components/forms/FormElements";
import FormLayoutsPage from "../pages/components/forms/FormLayouts";
import FormUploadPage from "../pages/components/forms/FormUpload";
import FormValidationPage from "../pages/components/forms/FormValidation";
import InputGroupPage from "../pages/components/forms/InputGroup";
import NoUiSliderPage from "../pages/components/forms/NoUiSlider";
import NumberSpinnerPage from "../pages/components/forms/NumberSpinner";

// Tables Pages
import BasicTablesPage from "../pages/components/tables/BasicTables";
import DataTablesPage from "../pages/components/tables/DataTables";

import ThemeProvider from "../layout/context";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

// ProtectedRoute is now imported, no need for inline definition

function Router() {
  return (
    // Wrap the entire application with AuthProvider
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<ThemeProvider />}>
              {/* Routes publiques (Auth) - Utiliser FullScreenLayout ou un layout dédié */}
              <Route element={<FullScreenLayout />}>
                {/* Updated Auth Routes using /pages/auths/ components */}
                <Route path="auths/login" element={<LoginPage />} />
                <Route path="auths/register" element={<RegisterPage />} /> 
                <Route path="auths/forgot" element={<ForgotPage />} /> {/* Path for Forgot.jsx */} 
                <Route path="auths/reset-password/:token" element={<ResetPasswordPage />} /> {/* Path for ResetPasswordPage.jsx */} 
                {/* Remove old auth routes like /auth-success if not needed */}
                {/* <Route path="auths/auth-success" element={<SuccessPage />} /> */}

                {/* Error pages and other public routes inside FullScreenLayout */}
                {/* Catch-all for non-matched routes within FullScreenLayout */} 
                {/* <Route path="*" element={<Error404ModernPage />} /> -> This might conflict if placed here, better handled inside protected routes or at the very end */}
                <Route path="errors/404-classic" element={<Error404Page />} />
                <Route path="errors/404-modern" element={<Error404ModernPage />} />
                <Route path="errors/504-classic" element={<Error504Page />} />
                <Route path="errors/504-modern" element={<Error504ModernPage />} />
                <Route path="invoice-print/:invoiceId" element={<InvoicePrintPage />} />
              </Route>

              {/* Routes protégées - Layout principal */}
              {/* Use the imported ProtectedRoute component */} 
              <Route
                path="/" 
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                {/* Nested protected routes */}
                <Route index element={<EcommerceHomepage />} />
                <Route path="home" element={<EcommerceHomepage />} />
                <Route path="copywriter" element={<CopywriterHomepage />} />
                <Route path="sales" element={<SalesHomepage />} />
                <Route path="crypto" element={<CryptoHomepage />} />
                <Route path="analytics" element={<AnalyticsHomepage />} />
                <Route path="invest" element={<InvestHomepage />} />

                <Route path="apps-messages" element={<MessagesPage />} />
                <Route path="apps-inbox" element={<InboxPage />} />
                <Route path="apps-file-manager" element={<FileManagerPage />} />
                <Route path="apps-chats" element={<ChatsPage />} />
                <Route path="apps-calendar" element={<CalendarPage />} />

                <Route path="project-card" element={<ProjectsCardPage />} />
                <Route path="project-list" element={<ProjectsListPage />} />
                <Route path="product-list" element={<ProductsListPage />} />
                <Route path="invoice-list" element={<InvoiceListPage />} />
                <Route path="invoice-details/:invoiceId" element={<InvoiceDetailsPage />} />
                <Route path="user-list-regular" element={<UsersListPage />} />
                <Route path="user-list-compact" element={<UsersListCompactPage />} />
                <Route path="user-card" element={<UsersCardPage />} />
                <Route path="user-details/:userId" element={<UserDetailsPage />} />
                <Route path="user-profile-regular" element={<UserProfilePage />} />
                <Route path="customer-list" element={<CustomersListPage />} />
                <Route path="pricing-table" element={<PricingTablePage />} />
                <Route path="gallery" element={<ImageGalleryPage />} />
                <Route path="_blank" element={<BlankPage />} />
                <Route path="faqs" element={<FaqsPage />} />
                <Route path="terms-policy" element={<TermsPolicyPage />} />
                <Route path="regular-v1" element={<RegularV1Page />} />
                <Route path="regular-v2" element={<RegularV2Page />} />

                <Route path="components">
                  <Route index element={<ComponentList />} />
                  <Route path="elements/alerts" element={<Alerts />} />
                  <Route path="elements/accordions" element={<Accordions />} />
                  <Route path="elements/avatar" element={<AvatarPage />} />
                  <Route path="elements/badges" element={<BadgePage />} />
                  <Route path="elements/buttons" element={<ButtonPage />} />
                  <Route path="elements/buttons-group" element={<ButtonGroupPage />} />
                  <Route path="elements/breadcrumb" element={<BreadcrumbPage />} />
                  <Route path="elements/cards" element={<CardsPage />} />
                  <Route path="elements/list-dropdown" element={<DropdownPage />} />
                  <Route path="elements/modals" element={<ModalPage />} />
                  <Route path="elements/pagination" element={<PaginationPage />} />
                  <Route path="elements/popover" element={<PopoverPage />} />
                  <Route path="elements/progress" element={<ProgressPage />} />
                  <Route path="elements/spinner" element={<SpinnerPage />} />
                  <Route path="elements/tabs" element={<TabsPage />} />
                  <Route path="elements/toast" element={<ToastPage />} />
                  <Route path="elements/tooltip" element={<TooltipsPage />} />
                  <Route path="elements/typography" element={<TypographyPage />} />
                  
                  <Route path="forms/advanced-controls" element={<AdvancedControlPage />} />
                  <Route path="forms/datetime-picker" element={<DateTimePickerPage />} />
                  <Route path="forms/checkbox-radio" element={<CheckboxRadioPage />} />
                  <Route path="forms/form-elements" element={<FormElementsPage />} />
                  <Route path="forms/form-layouts" element={<FormLayoutsPage />} />
                  <Route path="forms/form-validation" element={<FormValidationPage />} />
                  <Route path="forms/form-upload" element={<FormUploadPage />} />
                  <Route path="forms/input-group" element={<InputGroupPage />} />
                  <Route path="forms/nouislider" element={<NoUiSliderPage />} />
                  <Route path="forms/number-spinner" element={<NumberSpinnerPage />} />

                  <Route path="tables/basic-table" element={<BasicTablesPage />} />
                  <Route path="tables/data-table" element={<DataTablesPage />} />

                  <Route path="chartjs" element={<ChartJsPage />} />
                  <Route path="nioicon" element={<NioIconsPage />} />
                  <Route path="svg-icons" element={<SvgIconsPage />} />
                  <Route path="tailwind-config" element={<TailwindConfigPage />} />
                </Route>
                {/* Catch-all for non-matched routes INSIDE the protected layout */}
                <Route path="*" element={<Navigate to="/errors/404-modern" replace />} /> 
              </Route>

              {/* Routes protégées - Layout avec container */}
              {/* Use the imported ProtectedRoute component */}
              <Route
                element={
                  <ProtectedRoute>
                    <Layout container />
                  </ProtectedRoute>
                }
              >
                <Route path="product-card" element={<ProductsCardPage />} />
                <Route path="product-details/:productId" element={<ProductsDetailsPage />} />
                <Route path="customer-details/:customerId" element={<CustomersDetailsPage />} />
              </Route>

              {/* Catch-all for any other non-matched top-level routes - Redirect to login or 404? */}
              {/* Let's redirect to 404 for clarity */}
              <Route path="*" element={<Navigate to="/errors/404-modern" replace />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;

