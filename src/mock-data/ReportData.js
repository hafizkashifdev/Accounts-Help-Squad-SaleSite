import { ReactComponent as Img1 } from "../assests/images/report/Frame.svg";
import { ReactComponent as Img2 } from "../assests/images/report/Frame (1).svg";
import { ReactComponent as Img3 } from "../assests/images/report/Cash collection.svg";
import { ReactComponent as Img4 } from "../assests/images/report/Frame (2).svg";
import { ReactComponent as Img5 } from "../assests/images/report/undraw_bookmarks_re_mq1u 1.svg";

export const ReportDataReceiveable = [
  {
    id: 1,
    title: "Days Sale Outstanding (DSO) Report",
    image: <Img1 />,
    param: "dso",
  },
  {
    id: 2,
    title: "Cashflow Forecasting Report",
    image: <Img2 />,
    param: "cashflow-forecasting-report",
  },
  {
    id: 3,
    title: "Cash Collection Report",
    image: <Img3 />,
    param: "cash-collection-report",
  },
  {
    id: 4,
    title: "Aging Buckets Report",
    image: <Img4 />,
    param: "aging-buckets-report",
  },
  {
    id: 5,
    title: "Workflows Report",
    image: <Img5 />,
    param: "workflows-report",
  },
];

export const ReportDataPayable = [
  {
    id: 1,
    title: "Vendors Report",
    image: <Img2 />,
    param: "vendors-report",
  },
  {
    id: 2,
    title: "Aging Buckets Report",
    image: <Img4 />,
    param: "aging-buckets-report-payable",
  },
  {
    id: 3,
    title: "Forecasting Report",
    image: <Img3 />,
    param: "forecasting-report",
  },
  {
    id: 4,
    title: "Total Cash Paid Report",
    image: <Img5 />,
    param: "total-cash-paid-report",
  },
];

export const CashCollectionReportData = [
  {
    id: 1,
    invoiceId: "01",
    client: "Jacob",
    amount: "£1234",
    issueDate: "19 Oct, 1999",
    dueDate: "19 Oct, 1999",
    paidOn: "19 Oct, 1999",
  },
  {
    id: 21,
    invoiceId: "02",
    client: "Jacob",
    amount: "£1234",
    issueDate: "19 Oct, 1999",
    dueDate: "19 Oct, 1999",
    paidOn: "19 Oct, 1999",
  },
  {
    id: 3,
    invoiceId: "03",
    client: "Jacob",
    amount: "£1234",
    issueDate: "19 Oct, 1999",
    dueDate: "19 Oct, 1999",
    paidOn: "19 Oct, 1999",
  },
];
