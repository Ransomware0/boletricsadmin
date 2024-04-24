export const LeftSideMenuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <i className="las la-home"></i>,
    submenus: [
      { title: "Style 01", url: "/dashboards/style-01" },
      { title: "Style 02", url: "/dashboards/style-02" },
      { title: "Style 03", url: "/dashboards/style-03" },
      { title: "Style 04", url: "/dashboards/style-04" },
      { title: "Style 05", url: "/dashboards/style-05" },
    ],
  },
  {
    id: 2,
    name: "Accounts",
    icon: <i className="las la-piggy-bank"></i>,
    submenus: [
      { title: "Bank Account", url: "/accounts/bank-account" },
      { title: "Account Overview", url: "/accounts/account-overview" },
      { title: "Account Details", url: "/accounts/account-details" },
      { title: "Deposit Details", url: "/accounts/deposit-details" },
    ],
  },
  {
    id: 3,
    name: "Cards",
    icon: <i className="las la-credit-card"></i>,
    submenus: [
      { title: "Card Overview", url: "/cards/card-overview" },
      { title: "Card Details", url: "/cards/card-details" },
    ],
  },
  {
    id: 4,
    name: "Transaction",
    icon: <i className="las la-exchange-alt"></i>,
    submenus: [
      { title: "Style 01", url: "/transaction/style-01" },
      { title: "Style 02", url: "/transaction/style-02" },
      { title: "Style 03", url: "/transaction/style-03" },
    ],
  },
  {
    id: 5,
    name: "Payment",
    icon: <i className="las la-wallet"></i>,
    submenus: [
      { title: "Payment Overview", url: "/payment/payment-overview" },
      { title: "Payment Providers", url: "/payment/payment-providers" },
      { title: "Exchange", url: "/payment/exchange" },
      { title: "Make a Payment", url: "/payment/make-payment" },
    ],
  },
  {
    id: 6,
    name: "Private Transfers",
    icon: <i className="las la-coins"></i>,
    submenus: [
      { title: "Add New Contact", url: "/private/add-contact" },
      { title: "Transfer Overview", url: "/private/transfer-overview" },
      { title: "Make Transfer", url: "/private/make-transfer" },
      { title: "Chat", url: "/private/chat" },
    ],
  },
  {
    id: 7,
    name: "Invoicing",
    icon: <i className="las la-file-invoice"></i>,
    submenus: [
      { title: "Add New Invoice", url: "/invoicing/add-new" },
      { title: "Invoice Style 01", url: "/invoicing/style-01" },
      { title: "Invoice Style 02", url: "/invoicing/style-02" },
    ],
  },
];

export const rightSideMenuItems = [
  {
    id: 8,
    name: "Trading",
    icon: <i className="las la-chart-bar"></i>,
    submenus: [
      { title: "Trading Style 01", url: "/trading/style-01" },
      { title: "Trading Style 02", url: "/trading/style-02" },
      { title: "Trading Style 03", url: "/trading/style-03" },
    ],
  },
  {
    id: 9,
    name: "Reports",
    icon: <i className="las la-chart-pie"></i>,
    submenus: [
      { title: "Reports Style 01", url: "/reports/style-01" },
      { title: "Reports Style 02", url: "/reports/style-02" },
    ],
  },
  {
    id: 10,
    name: "Settings",
    icon: <i className="las la-cog"></i>,
    submenus: [
      { title: "Profile", url: "/settings/profile" },
      { title: "Security", url: "/settings/security" },
      { title: "Social Network", url: "/settings/social-network" },
      { title: "Notification", url: "/settings/notification" },
      { title: "Payment Limits", url: "/settings/payment-limits" },
    ],
  },
  {
    id: 11,
    name: "Authentication",
    icon: <i className="las la-user-circle"></i>,
    submenus: [
      { title: "Sign Up", url: "/auth/sign-up" },
      { title: "Sign In", url: "/auth/sign-in" },
      { title: "Sign In QR Code", url: "/auth/signin-qrcode" },
      { title: "Error Page", url: "/auth/error" },
    ],
  },
  {
    id: 12,
    name: "Support",
    icon: <i className="las la-handshake"></i>,
    submenus: [
      { title: "Help Center", url: "/support/help-center" },
      { title: "Privacy Policy", url: "/support/privacy-policy" },
      { title: "Contact Us", url: "/support/contact-us" },
    ],
  },
];
