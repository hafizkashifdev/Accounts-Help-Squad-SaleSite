
import {ReactComponent as DashboardIcon} from "../../../assests/svg/sidebar/dashboard-icon.svg";
import {ReactComponent as InvoicesIcon} from "../../../assests/svg/sidebar/invoice-Icon.svg";
import {ReactComponent as ClientsIcon} from "../../../assests/svg/sidebar/clients-icon.svg";
import {ReactComponent as PerformanceAnalysisIcon} from "../../../assests/svg/sidebar/performance-icon.svg";
import {ReactComponent as WorkflowsIcon} from "../../../assests/svg/sidebar/workflow-icon.svg";
import {ReactComponent as NotificationsIcon} from "../../../assests/svg/sidebar/notification-icon.svg";
import {ReactComponent as ReportsIcon} from "../../../assests/svg/sidebar/reports-icon.svg";
import {ReactComponent as UserManagementIcon} from "../../../assests/svg/sidebar/user-management-icon.svg";
import {ReactComponent as SettingsIcon} from "../../../assests/svg/sidebar/setting-icon.svg";
import {ReactComponent as CategoriesIcon} from "../../../assests/svg/sidebar/categories-icon.svg";
import {ReactComponent as KPIIcon} from "../../../assests/svg/sidebar/kpi-icon.svg";
import {ReactComponent as TransactionsIcon} from "../../../assests/svg/sidebar/transaction-icon.svg";

import {ReactComponent as DashboardActiveIcon} from "../../../assests/svg/sidebar/dashboard-active-icon.svg";
import {ReactComponent as InvoicesActiveIcon} from "../../../assests/svg/sidebar/invoice-active-Icon.svg";
import {ReactComponent as ClientsActiveIcon} from "../../../assests/svg/sidebar/clients-active-icon.svg";
import {ReactComponent as PerformanceAnalysisActiveIcon} from "../../../assests/svg/sidebar/performance-active-icon.svg";
import {ReactComponent as WorkflowsActiveIcon} from "../../../assests/svg/sidebar/workflow-active-icon.svg";
import {ReactComponent as NotificationsActiveIcon} from "../../../assests/svg/sidebar/notification-active-icon.svg";
import {ReactComponent as ReportsActiveIcon} from "../../../assests/svg/sidebar/reports-active-icon.svg";
import {ReactComponent as UserManagementActiveIcon} from "../../../assests/svg/sidebar/user-management-active-icon.svg";
import {ReactComponent as SettingsActiveIcon} from "../../../assests/svg/sidebar/setting-active-icon.svg";
import {ReactComponent as CategoriesActiveIcon} from "../../../assests/svg/sidebar/categories-active-icon.svg";
import {ReactComponent as KPIActiveIcon} from "../../../assests/svg/sidebar/kpi-active-icon.svg";
import {ReactComponent as TransactionsActiveIcon} from "../../../assests/svg/sidebar/transaction-active-icon.svg";

import { AP, AR, CASHFLOW } from "../../../constants/portal-type-constants";
import { TOACTIVITYLOG, TOBILLS, TOCATEGORIES, TOCLIENTS, TODASHBOARD, TOIMPORTTRANSACTIONS, TOINVOICES, TOKPI, TONOTIFICATIONS, TOPAYMENTSOURCES, TOPERFORMANCEANALYSIS, TOREPORTS, TOSETTINGS, TOSUBSCRIPTIONINVOICES, TOTRANSACTIONS, TOUSERMANAGEMENT, TOVATMANAGEMENT, TOVENDORMANAEMENT, TOWORKFLOWS } from "../../../constants/routes-constant";

export const SIDEBARDATA = [
  {
    id: "1",
    title: "Dashboard",
    path: TODASHBOARD,
    allowedPortal: [AP,AR,CASHFLOW],
    icon: <DashboardIcon />,
    hoverdIcon: <DashboardActiveIcon />,
  },
  {
    id: "17.1",
    title: "Transactions",
    path: TOTRANSACTIONS,
    allowedPortal: [CASHFLOW],
    icon: <TransactionsIcon />,
    hoverdIcon: <TransactionsActiveIcon />,
  },
  {
    id: "17.2",
    title: "VAT Management",
    path: TOVATMANAGEMENT,
    allowedPortal: [CASHFLOW],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "17.3",
    title: "Categories",
    path: TOCATEGORIES,
    allowedPortal: [CASHFLOW],
    icon: <CategoriesIcon />,
    hoverdIcon: <CategoriesActiveIcon />,
  },
  {
    id: "17.4",
    title: "Key Performance Indicator",
    path: TOKPI,
    allowedPortal: [CASHFLOW],
    icon: <KPIIcon />,
    hoverdIcon: <KPIActiveIcon />,
  },
  {
    id: "17.5",
    title: "Import Transactions",
    path: TOIMPORTTRANSACTIONS,
    allowedPortal: [CASHFLOW],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "17.6",
    title: "Subscription Invoices",
    path: TOSUBSCRIPTIONINVOICES,
    allowedPortal: [CASHFLOW],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "133.6",
    title: "Invoices",
    path: TOINVOICES,
    allowedPortal: [AR],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "15",
    title: "Bills",
    path: TOBILLS,
    allowedPortal: [AP],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "16",
    title: "Payment Sources",
    path: TOPAYMENTSOURCES,
    allowedPortal: [AP],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: ".1",
    title: "Vendor Management",
    path: TOVENDORMANAEMENT,
    allowedPortal: [AP],
    icon: <InvoicesIcon />,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "3",
    title: "Clients",
    path: TOCLIENTS,
    allowedPortal: [AR],
    icon: <ClientsIcon />,
    hoverdIcon: <ClientsActiveIcon />,
  },
  {
    id: "1.1",
    title: "Performance Analysis",
    path: TOPERFORMANCEANALYSIS,
    allowedPortal: [AR],
    icon: <PerformanceAnalysisIcon />,
    hoverdIcon: <PerformanceAnalysisActiveIcon />,
  },
  {
    id: "1.2",
    title: "Workflows",
    path: TOWORKFLOWS,
    allowedPortal: [AP,AR],
    icon: <WorkflowsIcon />,
    hoverdIcon: <WorkflowsActiveIcon />,
  },
  {
    id: "4",
    title: "Notifications",
    path: TONOTIFICATIONS,
    allowedPortal: [AR],
    icon: <NotificationsIcon />,
    hoverdIcon: <NotificationsActiveIcon />,
  },
  {
    id: "18",
    title: "Activity Log",
    path: TOACTIVITYLOG,
    allowedPortal: [AP],
    icon: <InvoicesIcon/>,
    hoverdIcon: <InvoicesActiveIcon />,
  },
  {
    id: "6",
    title: "Reports",
    path: TOREPORTS,
    allowedPortal: [AP,AR],
    icon: <ReportsIcon />,
    hoverdIcon: <ReportsActiveIcon />,
  },
  {
    id: "10",
    title: "User Management",
    path: TOUSERMANAGEMENT,
    allowedPortal: [AR],
    icon: <UserManagementIcon />,
    hoverdIcon: <UserManagementActiveIcon />,
  },
  {
    id: "14",
    title: "Settings",
    path: TOSETTINGS,
    allowedPortal: [AR],
    icon: <SettingsIcon />,
    hoverdIcon: <SettingsActiveIcon />,
  },
];