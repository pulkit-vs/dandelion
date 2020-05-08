export const productSettings = [
    {
      key: "products",
      name: "Products",
      icon: "ios-appstore-outline",
      child: [
        {
          key: "productAccess",
          name: "Product access",
          link: "/settings/product/products/product-access",
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
            link: "/settings/product/karya-software/karya-software-configuration",
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
            link: "/settings/product/integrations/application-links",
            icon: "ios-contact-outline",
          },
          {
            key: "dvcsAccounts",
            name: "DVCS accounts",
            link: "/settings/product/integrations/dvcs-accounts",
            icon: "ios-contact-outline",
          },
        ],
      },
  ];
  