import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./homeLayout/HomeLayout";
import AccountReceivablePage from "./features/home-page/account-receivable/AccountReceivablePage";
import Signin from "./features/signin/Signin";
import MySignUpForm2 from "./components/SignUp_form/SignUp_form2";
import MySignUpForm from "./components/SignUp_form/SignUp_form";
import HomeHero from "./features/home-page/hero/HomeHero";
import Layout from "./layout/layout";
import { Dashboard } from "./pages/dashboard";
import DashboaedSettings from "./pages/dashboard-settings";
import InvoiceListing from "./features/Invoices/components/InvoiceListing";
import { Notifications } from "./pages/notifications";
import ClientListing from "./pages/client-listing";
import Clientdetails from "./pages/client-details";
import PerformanceAnalysis from "./pages/Performance-Analysis";
import ClientComparison from "./features/performance-analysis/ClientComparison/ClientComparison";
import DSO_Month from "./features/Reports/DSO_Report/DSO_Month";
import MainReport from "./pages/MainReport";

// const UserArray = ["ap"];
// const otherRoutes =
//   UserArray.includes("ar") && UserArray.includes("ap")
//     ? [...ARDashboard, ...APDashboard]
//     : UserArray.includes("ar")
//     ? [...ARDashboard]
//     : UserArray.includes("ap")
//     ? [...APDashboard]
//     : [];
// const routes = createBrowserRouter([...otherRoutes, ...CommonRouter]);
export const ARDashboard = [
  {
    path: "/ar",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/ar/settings",
        element: <DashboaedSettings />,
      },
      {
        path: "/ar/invoices",
        element: <InvoiceListing />,
      },
      {
        path: "/ar/notifications",
        element: <Notifications />,
      },
      {
        path: "/ar/clients-listing",
        element: <ClientListing />,
      },
      {
        path: "/ar/clients-details/:id",
        element: <Clientdetails />,
      },

      {
        path: "/ar/reports",
        element: <MainReport />,
      },
      {
        path: "/ar/reports/:id",
        element: <ReportInfo />,
      },
      {
        path: "/ar/report-details/month/:id",
        element: <DSO_Month />,
      },
      {
        path: "/ar/performance-analysis",
        element: <PerformanceAnalysis />,
        children: [
          {
            path: "/ar/performance-analysis/client/:id",
            element: <ClientComparison />,
          },
        ],
      },
    ],
  },
];
export const APDashboard = [
  {
    path: "/ap",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <>Helloo</>,
      },
      {
        path: "/ap/settings",
        element: <DashboaedSettings />,
      },
      {
        path: "/ap/invoices",
        element: <InvoiceListing />,
      },
      {
        path: "/ap/notifications",
        element: <Notifications />,
      },
      {
        path: "/ap/clients-listing",
        element: <ClientListing />,
      },
      {
        path: "/ap/clients-details/:id",
        element: <Clientdetails />,
      },

      {
        path: "/ap/reports",
        element: <MainReport />,
      },
      {
        path: "/ap/reports/:id",
        element: <ReportInfo />,
      },
      {
        path: "/ap/report-details/month/:id",
        element: <DSO_Month />,
      },
      {
        path: "/ap/performance-analysis",
        element: <PerformanceAnalysis />,
        children: [
          {
            path: "/ap/performance-analysis/client/:id",
            element: <ClientComparison />,
          },
        ],
      },
    ],
  },
];
export const CommonRouter = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <MySignUpForm />,
  },
  {
    path: "/sign-up-2",
    element: <MySignUpForm2 />,
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeHero />,
      },

      {
        path: "/account-receivable",
        element: <AccountReceivablePage />,
      },
      {
        path: "/account-payable",
        element: <AccountReceivablePage />,
      },
      {
        path: "/cashflow",
        element: <AccountReceivablePage />,
      },
    ],
  },

  {
    path: "/not-found",
    element: <h1>Not found</h1>,
  },
];
