import { getLocalStorage } from "../../utils/localStorageHelpers";
import { DashboardCashflow } from "./dashboard-cashflow";
import { DashboardPayable } from "./dashboard-payable";
import { DashboardReceivable } from "./dashboard-receivable";

const selectDashboard = {
    "Account Receivable": <DashboardReceivable />,
    "Account Payable": <DashboardPayable />,
    "Cashflow": <DashboardCashflow />
}

export const Dashboard = () => {
    return (selectDashboard[getLocalStorage("pName")]);
}
