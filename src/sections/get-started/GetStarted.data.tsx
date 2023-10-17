import { RHFCheckbox, RHFDatePicker, RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/react-hook-form";
import * as Yup from "yup";
export const getStartedDefaultFormValues = {
    name: "",
    email: "",
    phoneNo: "",
    companyName: "",
    moduleYouAreIntrested: [],
    businessType: "",
    companySize: "",
    industry: "",
    budget: "",
    timeFrame: "",
    perferredContactMethod: "",
    acceptTerms: false,
    comments: "",
    subscribeToNewsLetter: false,
};

export const getStartedFormSchema: any = Yup.object().shape({
    name: Yup.string().required("Required Field").min(3,"Minmum 3 Charachters"),
    email: Yup.string().email("Please Provide Valid Email").required("Required Field").test(
        "Validate Email",
        "Please Provide Valid Email",
        (value) => {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(value).toLowerCase())
        },
    ),
    phoneNo: Yup.string().required("Required Field"),
    companyName: Yup.string().required("Required Field").min(3,"Minmum 3 Charachters"),
    moduleYouAreIntrested: Yup.array(),
    businessType: Yup.string(),
    companySize: Yup.string(),
    industry: Yup.string(),
    budget: Yup.string(),
    timeFrame: Yup.date(),
    perferredContactMethod: Yup.string(),
    acceptTerms: Yup.boolean(),
    comments: Yup.string(),
    subscribeToNewsLetter: Yup.boolean(),
});

export const getStartedDefaultFormValuesFunction = (
    data: any = getStartedDefaultFormValues
) => {
    return {
        name: data?.name,
        email: data?.email,
        phoneNo: data?.phoneNo,
        comments: data?.comments,
    };
};

export const getStartedFormFieldsDataFunction = (isFieldDisable = false) => [
    {
        id: 2,
        component: RHFTextField,
        gridLength: 12,
        required: true,
        componentProps: {
            fullWidth: true,
            name: "name",
            label: "Name",
            placeholder: "Enter Name",
            disabled: isFieldDisable,
        },
    },
    {
        id: 920,
        required: true,
        componentProps: {
            fullWidth: true,
            name: "email",
            label: "Email",
            placeholder: "Enter Email",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFTextField,
    },
    {
        id: 150,
        required: true,
        componentProps: {
            fullWidth: true,
            name: "phoneNo",
            label: "Phone No",
            placeholder: "Enter Phone No",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFTextField,
    },
    {
        id: 20,
        required: true,
        componentProps: {
            fullWidth: true,
            name: "companyName",
            label: "Company name (if applicable)",
            placeholder: "Enter company",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFTextField,
    },
    {
        id: 921,
        componentProps: {
            fullWidth: true,
            name: "moduleYouAreIntrested",
            label: "Select the Module or Service you’re interested in:",
            placeholder: "Select",
            disabled: isFieldDisable,
            multiple: true,
            options: [{
                label: 'Company Incorporation',
                value: 'companyIncorporation',
            },
            {
                label: 'Banking Services',
                value: 'bankingServices',
            },
            {
                label: 'License Finder',
                value: 'licenseFinder',
            },
            {
                label: 'Document Services',
                value: 'documentServices',
            },
            {
                label: 'Registered Office Services',
                value: 'registeredOfficeServices',
            },
            {
                label: 'Online Advertising & Marketing',
                value: 'onlineAdvertisingMarketing',
            },
            {
                label: 'Domain Registration',
                value: 'domainRegistration',
            },
            {
                label: 'Annual Compliance',
                value: 'annualCompliance',
            },
            {
                label: 'Mail and Address Services',
                value: 'mailAddressServices',
            },
            {
                label: 'Tax and Regulatory Services',
                value: 'taxRegulatoryServices',
            },
            {
                label: 'Legal Compliance',
                value: 'legalCompliance',
            },
            {
                label: 'Corporate Governance',
                value: 'corporateGovernance',
            },
            {
                label: 'Directors Services',
                value: 'directorsServices',
            },
            {
                label: 'Special Name Exemption',
                value: 'specialNameExemption',
            },
            {
                label: 'Intellectual Property Rights',
                value: 'intellectualPropertyRights',
            },
            {
                label: 'Customer Support',
                value: 'customerSupport',
            },
            {
                label: 'Accounts Receivable',
                value: 'accountsReceivable',
            },
            {
                label: 'Accounts Payable',
                value: 'accountsPayable',
            },
            {
                label: 'Cash Flow Management',
                value: 'cashFlowManagement',
            },
            {
                label: 'R&D Tax Claim',
                value: 'rdTaxClaim',
            },
            {
                label: 'Other (Please specify)',
                value: 'other',
            },]
        },
        gridLength: 12,
        component: RHFSelect,
    },
    {
        id: 922,
        componentProps: {
            fullWidth: true,
            name: "businessType",
            label: "Business Type",
            placeholder: "Select",
            disabled: isFieldDisable,
            options: [
                'Sole Trader',
                'Partnership',
                'Limited Company',
                'Other (Please specify)',
            ]
        },
        gridLength: 12,
        component: RHFSelect,
    },
    {
        id: 922,
        componentProps: {
            fullWidth: true,
            name: "companySize",
            label: "Company Size",
            placeholder: "Select",
            disabled: isFieldDisable,
            options: [
                '50-100',
                '150-200',
                '250-300',
                '350-400',
            ]
        },
        gridLength: 12,
        component: RHFSelect,
    },
    {
        id: 923,
        componentProps: {
            fullWidth: true,
            name: "industry",
            label: "Industry or Sector",
            placeholder: "Select",
            disabled: isFieldDisable,
            options: [
                "Information Technology",
                "Healthcare",
                "Finance",
                "Manufacturing",
                "Retail",
                "Energy",
                "Hospitality and Tourism",
                "Transportation",
                "Real Estate",
                "Entertainment",
                "Agriculture",
                "Education",
                "Telecommunications",
                "Environmental",
                "Government and Public Sector",
            ]
        },
        gridLength: 12,
        component: RHFSelect,
    },
    {
        id: 151,
        componentProps: {
            fullWidth: true,
            name: "budget",
            label: "Budget (if applicable)",
            placeholder: "Enter Budget",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFTextField,
    },
    {
        id: 153,
        componentProps: {
            fullWidth: true,
            name: "timeFrame",
            label: "Timeframe",
            placeholder: "Select Date",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFDatePicker,
    },
    {
        id: 925,
        componentProps: {
            fullWidth: true,
            name: "perferredContactMethod",
            label: "Preferred Contact Method",
            disabled: isFieldDisable,
            options: [
                {
                    label: 'Email',
                    value: 'email',
                },
                {
                    label: 'Phone',
                    value: 'phone',
                },
            ]
        },
        gridLength: 12,
        component: RHFRadioGroup,
    },
    {
        id: 153,
        componentProps: {
            fullWidth: true,
            name: "acceptTerms",
            label: "By submitting this form, you consent to our Terms of Service and Privacy Policy.",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFCheckbox,
    },
    {
        id: 152,
        componentProps: {
            fullWidth: true,
            name: "comments",
            label: "Additional Comments",
            placeholder: "Please provide any other comments, questions, or specific details about your requirements.",
            multiline: true,
            rows: 3,
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFTextField,
    },
    {
        id: 153,
        componentProps: {
            fullWidth: true,
            name: "subscribeToNewsLetter",
            label: "Subscribe to Our Newsletter, if applicable",
            disabled: isFieldDisable,
        },
        gridLength: 12,
        component: RHFCheckbox,
    },
];
