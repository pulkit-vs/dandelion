export const productSettings = [
    {
      key: "products",
      name: "Products",
      icon: "ios-appstore-outline",
      child: [
        {
          key: "productAccess",
          name: "Product access",
          link: "/products/product-access",
          icon: "ios-contact-outline",
        },
      ],
    },
    {
        key: "karyaSoftware",
        name: "Karya Software",
        icon: "ios-appstore-outline",
        child: [
          {
            key: "karyaSoftwareConfiguration",
            name: "Karya Software Configuration",
            link: "/karya-software/karya-software-configuration",
            icon: "ios-contact-outline",
          },
        ],
      },
      {
        key: "integrations",
        name: "Integrations",
        icon: "ios-appstore-outline",
        child: [
          {
            key: "applicationLinks",
            name: "Application links",
            link: "/integrations/application-links",
            icon: "ios-contact-outline",
          },
          {
            key: "dvcsAccounts",
            name: "DVCS accounts",
            link: "/integrations/dvcs-accounts",
            icon: "ios-contact-outline",
          },
        ],
      },
  ];
  