export type Address = {
  addressType: string;
  receiverName: string;
  addressId: string;
  isDisposable: false;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: number;
  neighborhood: string;
  complement: string;
  reference: string;
  geoCoordinates: number[];
  addressQuery: string;
};

export type Shipping = {
  withdrawThird: {
    firstName: string;
    lastName: string;
    document: string;
  };
  grouping: [
    {
      name: string;
      shippingMethods: [
        {
          id: string;
          name: string;
          selected: true;
          price: number;
          availableDeliveryWindows: [
            {
              startDateUtc: string;
              endDateUtc: string;
            },
          ];
          deliveryWindow: string;
          deliveryChannel: string;
          businessHours: [
            {
              cayOfWeek: string;
              openingTime: string;
              closingTime: string;
            },
          ];
          pickupStoreInfo: {
            address: Address;
            friendlyName: string;
            additionalInfo: string;
          };
        },
      ];
      items: [
        {
          itemIndex: number;
          selectedDeliveryChannel: string;
          addressId: string;
          itemId: string;
          sku: string;
          selectedShippingMethod: string;
          shippingMethods: string[];
        },
      ];
    },
  ];
  selectedAddresses: Address[];
};
