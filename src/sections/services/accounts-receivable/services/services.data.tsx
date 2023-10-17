import Overview from "@root/assets/services/icons/red.svg";
import AgingAnalysis from "@root/assets/services/icons/blue.svg";
import InvoiceManagement from "@root/assets/services/icons/orange.svg";
import PaymentReminders from "@root/assets/services/icons/purple.svg";

export const dataArray = [
  {
    id: 1,
    src: Overview,
    title: "Overview",
    desc: "Get a quick summary of your outstanding invoices, providing you with an instant snapshot of your current financial position.",
  },
  {
    id: 2,
    src: AgingAnalysis,
    title: "Aging Analysis",
    desc: "Break down your receivables by age to identify where your cash is tied up and prioritize collections effectively.",
  },
  {
    id: 3,
    src: InvoiceManagement,
    title: "Invoice Management",
    desc: "Track all your issued invoices in one place, making it easier than ever to manage your billing process efficiently.",
  },
  {
    id: 4,
    src: PaymentReminders,
    title: "Payment Reminders",
    desc: "Set up automated payment reminders to ensure your clients never miss a due date, reducing late payments.",
  },
];
