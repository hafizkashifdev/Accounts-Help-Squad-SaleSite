import { Typography } from "@mui/material";
import { ListsItems } from "../lists-items/ListsItems";
import { Descriptors } from "../descriptors/Descriptors";

export const privacyPolicyDocumentData = [
  {
    id: 1,
    component: Descriptors,
    componentProps: {
      mainHeading: "Information you provide to us:",
    },
  },
  {
    id: 2,
    component: Descriptors,
    componentProps: {
      heading: "Contact Details",
      description:
        " Such as your first and last name, email address, state, and phone number. ",
    },
  },
  {
    id: 3,
    component: Descriptors,
    componentProps: {
      heading: "Usage Information",
    },
  },
  {
    id: 4,
    component: ListsItems,
    componentProps: {
      items: [
        {
          id: 1,
          value: "IP address",
        },
        {
          id: 2,
          value: "Browser type and version",
        },
        {
          id: 3,
          value: "Operating system",
        },
        {
          id: 4,
          value: "Date and time of access",
        },
        {
          id: 5,
          value: "Pages visited",
        },
        {
          id: 6,
          value: "Referring URL",
        },
      ],
    },
  },
  {
    id: 5,
    component: Descriptors,
    componentProps: {
      mainHeading: "Cloud Infrastructure",
      description: `All of our services run in the cloud. We don t host or run our own routers, load balancers, DNS servers, or physical servers. Our service is built on AWS  Cloud Platform. They provide strong
security measures to protect our infrastructure and are compliant with most certifications. You can read more about their practices here: `,
    },
  },
  {
    id: 6,
    component: Descriptors,
    componentProps: {
      heading: "Communications",
      description:
        "that wee exchange with you, including when you contact us with questions, feedback, or otherwise",
    },
  },
  {
    id: 7,
    component: Descriptors,
    componentProps: {
      heading: "Marketing data",
      description:
        "such as your preferences for receiving our marketing communications, and details about your engagement with them.",
    },
  },
  {
    id: 8,
    component: Descriptors,
    componentProps: {
      heading: "Other data",
      description:
        "not specifically listed here, which we will use as described in this Privacy Policy or as otherwise disclosed at the time of collection.",
    },
  },
  {
    id: 9,
    component: Descriptors,
    componentProps: {
      heading: "Third party sources",
      description:
        "We may combine personal information we receive from you with personal information we obtain from other sources, such as:",
    },
  },
  {
    id: 10,
    component: Descriptors,
    componentProps: {
      listItem: "Third party sources",
      description: " such as data providers, event co sponsors, and others.",
    },
  },
  {
    id: 11,
    component: Descriptors,
    componentProps: {
      listItem: "Public Sources",
      description: " such as social media platforms",
    },
  },
  {
    id: 12,
    component: Descriptors,
    componentProps: {
      heading: "Automatic data collection",
      description:
        "We and our service providers may automatically log information about you, your computer or mobile device, and your interaction over time with the Service, such as:",
    },
  },
  {
    id: 13,
    component: Descriptors,
    componentProps: {
      listItem: "Device data",
      description: `such as your computer s or mobile device s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g.,
phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and
general location information such as city, state or geographic area.`,
    },
  },
  {
    id: 14,
    component: Descriptors,
    componentProps: {
      listItem: "Online activity data",
      description: ` such as pages or screens you viewed, how long you spent on a page or screen, the website you visited before browsing to the website, navigation paths between pages or screens,
information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them. `,
    },
  },
  {
    id: 15,
    component: Descriptors,
    componentProps: {
      listItem: "Cookies",
      description: ` which are text files that websites store on a visitor s device to uniquely identify the visitor s browser or to store information or settings in the browser for the purpose of helping you navigate
between pages efficiently, remembering your preferences, enabling functionality, helping us understand user activity and patterns, and facilitating online advertising.`,
    },
  },
  {
    id: 16,
    component: Descriptors,
    componentProps: {
      listItem: "Local storage technologies",
      description: `  like HTML5, that provide cookie equivalent functionality but can store larger amounts of data, including on your device outside of your browser in connection with specific applications. Web
beacons, also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email was accessed or opened, or that certain content was viewed or clicked. `,
    },
  },
  {
    id: 17,
    component: Descriptors,
    componentProps: {
      listItem: "Public sources",
      description: ` We may combine personal information we receive from you with personal information we obtain from public sources, such as social media platforms.`,
    },
  },
  {
    id: 18,
    component: Descriptors,
    componentProps: {
      mainHeading: "How We Use Your Personal Information",
      description: ` We use your personal information for the following purposes or as otherwise described at the time of collection: `,
    },
  },
  {
    id: 19,
    component: Descriptors,
    componentProps: {
      heading: "Service delivery",
      description: "We use your personal information to:",
    },
  },
  {
    id: 20,
    component: ListsItems,
    componentProps: {
      items: [
        {
          id: 1,
          value: "Provide, operate and improve the Services and our business",
        },
        {
          id: 2,
          value:
            "Communicate with you about the Services, including by sending announcements, updates, security alerts, and support and administrative messages; and",
        },
        {
          id: 3,
          value:
            "Provide support for the Services, and respond to your requests, questions and feedback.",
        },
      ],
    },
  },
  {
    id: 21,
    component: Descriptors,
    componentProps: {
      heading: "Research and development",
      description: `As part of these activities, we may create aggregated, de identified or other anonymous data from personal information we collect. We may use this anonymous data and share it with third
parties for our lawful business purposes, including to analyze and improve the Services, and promote our business.`,
    },
  },
  {
    id: 22,
    component: Descriptors,
    componentProps: {
      heading: "Marketing and advertising",
      description: `We may collect and use your personal information for marketing and advertising purposes, including:`,
    },
  },
  {
    id: 23,
    component: Descriptors,
    componentProps: {
      listItem: "Direct marketing",
      description: `We may send you direct marketing communications as permitted by law, including by email. You may opt out of our marketing communications as described in the Opt out of marketing
communications section below. `,
    },
  },
  {
    id: 24,
    component: Descriptors,
    componentProps: {
      listItem: "Interest based advertising",
      description: ` We engage our advertising partners, including third party advertising companies and social media companies, to advertise our and our customers and partners Services. We and our
advertising partners may use cookies and similar technologies to collect information about your interaction (including the data described in the Automatic data collection section above)
over time across the web, our communications and other online services, and use that information to serve online ads. You can learn more about your choices for limiting interest based
advertising in the Online tracking opt out section below.`,
    },
  },
  {
    id: 25,
    component: Descriptors,
    componentProps: {
      heading: "Compliance and protection",
    },
  },
  {
    id: 26,
    component: ListsItems,
    componentProps: {
      items: [
        {
          id: 1,
          value:
            "Comply with applicable laws, lawful requests, and legal process, such as to respond to subpoenas or requests from government authorities",
        },
        {
          id: 2,
          value:
            "Protect our, your or others rights, privacy, safety or property (including by making and defending legal claims)",
        },
        {
          id: 3,
          value:
            "Audit our internal processes for compliance with legal and contractual requirements and internal policies",
        },
        {
          id: 4,
          value:
            "Enforce the terms and conditions that govern our website and Services; and",
        },
        {
          id: 5,
          value:
            " Prevent, identify, investigate and deter fraudulent, harmful, unauthorized, unethical or illegal activity, including cyberattacks and identity theft.",
        },
      ],
    },
  },
  {
    id: 27,
    component: Descriptors,
    componentProps: {
      mainHeading: "How We Can Share Your Personal Information",
      description: ` We may share your personal information with:`,
    },
  },
  {
    id: 28,
    component: Descriptors,
    componentProps: {
      listItem: " Affiliates",
      description:
        "  Our corporate parent, subsidiaries, and affiliates, for purposes consistent with this Privacy Policy",
    },
  },
  {
    id: 29,
    component: Descriptors,
    componentProps: {
      listItem: " Service providers",
      description: `Companies and individuals that provide services on our behalf or help us operate our Services or our business (such as hosting, information technology, customer support, email delivery,
and website analytics services)`,
    },
  },
  {
    id: 30,
    component: Descriptors,
    componentProps: {
      heading: "Advertising partners",
      description: `Third party advertising companies, including for the interest based advertising purposes described above, that may collect information on our website through cookies and other automated
technologies. `,
    },
  },
  {
    id: 31,
    component: Descriptors,
    componentProps: {
      listItem: " Professional advisors",
      description: `Professional advisors, such as lawyers, auditors, bankers and insurers, where necessary in the course of the professional services that they render to us. `,
    },
  },
  {
    id: 32,
    component: Descriptors,
    componentProps: {
      listItem: "Authorities and others",
      description: ` Law enforcement, government authorities, and private parties, as we believe in good faith to be necessary or appropriate for the compliance and protection purposes described above.`,
    },
  },
  {
    id: 33,
    component: Descriptors,
    componentProps: {
      listItem: " Business transferees",
      description: ` Acquirers and other relevant participants in business transactions (or negotiations for such transactions) involving a corporate divestiture, merger, consolidation, acquisition, reorganization,
sale or other disposition of all or any portion of the business or assets of, or equity interests in, Accounts Help Squad or our affiliates (including, in connection with a bankruptcy or similar
proceedings). `,
    },
  },
  {
    id: 34,
    component: Descriptors,
    componentProps: {
      mainHeading: "Business Continuity and Disaster Recovery ",
      description: ` We back up all our critical assets and regularly attempt to restore the backup to guarantee a fast recovery in case of disaster. All our backups are encrypted. `,
    },
  },
  {
    id: 35,
    component: Descriptors,
    componentProps: {
      heading: " Opt out of marketing communications",
      description: `You may opt out of marketing related communications by following the opt out or unsubscribe instructions contained in the marketing communications we send you.`,
    },
  },
  {
    id: 36,
    component: Descriptors,
    componentProps: {
      heading: " Online tracking opt out",
      description: `There are a number of ways to limit online tracking, which we have summarized below: `,
    },
  },
  {
    id: 37,
    component: Descriptors,
    componentProps: {
      listItem: " Blocking cookies in your browser.",
      description: (
        <>
          Most browsers let you remove or reject cookies, including cookies used
          for interest based advertising. To do this, follow the instructions in
          your browser settings. Many browsers accept cookies by default until
          you change your settings. For more information about cookies,
          including how to see what cookies have been set on your device and how
          to manage and delete them, visit{" "}
          <a
            // href=" http://www.allaboutcookies.org"
            // target="_blank"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            www.allaboutcookies.org
          </a>
        </>
      ),
    },
  },
  {
    id: 38,
    component: Descriptors,
    componentProps: {
      listItem: "Blocking advertising ID use in your mobile settings",
      description: ` Your mobile device settings may provide functionality to limit use of the advertising ID associated with your mobile device for interest based advertising purposes.  `,
    },
  },
  {
    id: 39,
    component: Descriptors,
    componentProps: {
      listItem: "  Using privacy plug ins or browsers",
      description: (
        <>
          You can block our websites from setting cookies used for interest
          based ads by using a browser with privacy features, like Brave, or
          installing browser plugins like Privacy Badger, Ghostery, or uBlock
          Origin, and configuring them to block third party cookies/trackers.
          You can also opt out of Google Analytics by downloading and installing
          the browser plug in available at:{" "}
          <a
            // href=" https://tools.google.com/dlpage/gaoptout"
            // target="_blank"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            https://tools.google.com/dlpage/gaoptout`
          </a>
        </>
      ),
    },
  },
  {
    id: 40,
    component: Descriptors,
    componentProps: {
      listItem: "  Platform opt outs",
      description: (
        <>
          <Typography
            sx={{ fontWeight: 500, color: "primary.lighter", display: "block" }}
            variant="body2"
            component={"span"}
          >
            {" "}
            Google :{" "}
            <a
              // href=" https://www.adsettings.google.com"
              // target="_blank"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              www.adsettings.google.com{" "}
            </a>{" "}
          </Typography>
          <Typography
            component={"span"}
            sx={{ fontWeight: 500, color: "primary.lighter", display: "block" }}
            variant="body2"
          >
            {" "}
            Facebook :{" "}
            <a
              // href="https://www.facebook.com/about/ads"
              // target="_blank"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              {" "}
              www.facebook.com/about/ads{" "}
            </a>{" "}
          </Typography>
          <Typography
            component={"span"}
            sx={{ fontWeight: 500, color: "primary.lighter", display: "block" }}
            variant="body2"
          >
            {" "}
            Twitter :{" "}
            <a
              // href="https://www.twitter.com/settings/personalization"
              // target="_blank"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              : www.twitter.com/settings/personalization
            </a>{" "}
          </Typography>
        </>
      ),
    },
  },
  {
    id: 41,
    component: Descriptors,
    componentProps: {
      listItem: " Advertising industry opt out tools",
      description: `You can also use these opt out options to limit use of your information for interest based advertising by participating companiesD`,
    },
  },
  {
    id: 42,
    component: ListsItems,
    componentProps: {
      style: { marginRight: 3 },
      items: [
        {
          id: 1,
          value: (
            <>
              Digital Advertising Alliance for Websites:{" "}
              <a
                // href=" https://outout.aboutads.info"
                // target="_blank"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                outout.aboutads.info
              </a>
            </>
          ),
        },
        {
          id: 2,
          value: (
            <>
              Digital Advertising Alliance for Mobile Apps:{" "}
              <a
                // href="https://youradchoices.com/appchoices"
                // target="_blank"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                https://youradchoices.com/appchoices
              </a>
            </>
          ),
        },
        {
          id: 3,
          value: (
            <>
              Network Advertising Initiative:{" "}
              <a
                // href="https://optout.networkadvertising.org/"
                // target="_blank"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                optout.networkadvertising.org
              </a>
            </>
          ),
        },
      ],
    },
  },
  {
    id: 43,
    component: Descriptors,
    componentProps: {
      description: `Note that because these opt out mechanisms are specific to the device or browser on which they are exercised, you will need to opt out on every browser and device that you use.`,
    },
  },
  {
    id: 44,
    component: Descriptors,
    componentProps: {
      heading: "Do Not Track",
      description: (
        <>
          Some Internet browsers may be configured to send Do Not Track signals
          to the online services that you visit. We currently do not respond to
          Do Not Track or similar signals. To find out more about Do Not Track,
          please visit{" "}
          <a
            // href="http://www.allaboutdnt.com"
            // target="_blank"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            http://www.allaboutdnt.com.
          </a>
        </>
      ),
    },
  },
  {
    id: 45,
    component: Descriptors,
    componentProps: {
      heading: "Your Rights ",
      description: `You have the following rights regarding your personal information: `,
    },
  },
  {
    id: 46,
    component: Descriptors,
    componentProps: {
      listItem: " Right to access",
      description: `You may request access to the personal information we hold about you`,
    },
  },
  {
    id: 47,
    component: Descriptors,
    componentProps: {
      listItem: " Right to rectification",
      description: `Right to rectification: You may request the correction of inaccuracies in your personal information.`,
    },
  },
  {
    id: 48,
    component: Descriptors,
    componentProps: {
      listItem: " Right to erasure",
      description: `You may request the deletion of your personal information. `,
    },
  },
  {
    id: 49,
    component: Descriptors,
    componentProps: {
      listItem: " Right to data portability",
      description: `You may request the transfer of your personal information to another party. `,
    },
  },
  {
    id: 50,
    component: Descriptors,
    componentProps: {
      description: `To exercise these rights or for any questions or concerns regarding your personal information, please contact us using the information provided below.  `,
    },
  },
  {
    id: 51,
    component: Descriptors,
    componentProps: {
      mainHeading: "Other Sites and Services",
      description: `Our Services may contain links to websites and other online services operated by third parties. In addition, our content may be integrated into web pages or other online services that are not
associated with us. These links and integrations are not an endorsement of, or representation that we are affiliated with, any third party. We do not control websites or online services
operated by third parties, and we are not responsible for their actions. `,
    },
  },
  {
    id: 52,
    component: Descriptors,
    componentProps: {
      mainHeading: "Security ",
      description: `We employ a number of technical, organizational and physical safeguards designed to protect the personal information we collect. However, no security measures are failsafe and we cannot
guarantee the security of your personal information. `,
    },
  },
  {
    id: 53,
    component: Descriptors,
    componentProps: {
      mainHeading: "Children ",
      description: `The Services are not intended for use by children under 18 years of age. If we learn that we have collected personal information through our Services from a child under 18 without the
consent of the child s parent or guardian as required by law, we will delete it.`,
    },
  },
  {
    id: 54,
    component: Descriptors,
    componentProps: {
      mainHeading: "Changes to This Privacy Policy",
      description: `We reserve the right to modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by updating the date of this Privacy Policy and posting it on
the website `,
    },
  },
  {
    id: 55,
    component: Descriptors,
    componentProps: {
      mainHeading: "How to Contact Us",
      description: (
        <>
          You can reach us by email at:{" "}
          <a
            // href="mailto:legal@accountshelpsquad.co.uk"
            style={{ textDecoration: "underline", fontWeight: "bold" }}
          >
            legal@accountshelpsquad.co.uk{" "}
          </a>
          or at the following mailing address: <b>The Square UB111FW</b>
        </>
      ),
    },
  },
];
