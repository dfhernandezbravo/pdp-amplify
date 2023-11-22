type GetProduct = [
  {
    productId: string;
    productName: string;
    brand: string;
    specifications: {
      [key: string]: string[];
    };
    allSpecificationsGroups: string[];
    linkText: string;
    link: string;
    metaTagDescription: string;
    description: string;
    categories: string[];
    categoriesIds: string[];
    productClusters: string[];
    searchableClusters: string[];
    items: [
      {
        ean: string;
        referenceId: [
          {
            key: string;
            value: string;
          },
        ];
        itemId: string;
        name: string;
        nameComplete: string;
        measurementUnit: string;
        unitMultiplier: number;
        images: [
          {
            imageUrl: string;
            imageText: string;
          },
        ];
        sellers: [
          {
            sellerId: string;
            sellerName: string;
            addToCartLink: string;
            commertialOffer: {
              price: number;
              availableQuantity: number;
              priceWithoutDiscount: number;
              priceCenco: number;
              discountCenco: number;
              discount: number;
              installments: [
                {
                  value: number;
                  interestRate: number;
                  totalValuePlusInterestRate: number;
                  numberOfInstallments: number;
                  paymentSystemName: string;
                  name: string;
                },
              ];
              promotions: [
                {
                  id: number;
                  name: string;
                  value: string;
                  type: string;
                },
              ];
            };
          },
        ];
        itemSpecifications: {
          [key: string]: string[];
        };
        offering: {
          name: string;
          value: number;
        };
      },
    ];
  },
];

export type { GetProduct };
