import { Adjustment } from './adjustment';
import { Customer } from './customer';
import { Item } from './item';
import { Shipping } from './shipping';

export type GetCart = {
  id: string;
  loggedIn: true;
  canEdit: true;
  currencyCode: string;
  items: Item[];
  adjustments: Adjustment[];
  shipping: Shipping;
  customer: Customer;
  payments: {};
  paymentMethods: [
    {
      paymentSystem: number;
      name: string;
      groupName: string;
      value: number;
      installments: [
        {
          count: number;
          value: number;
          total: number;
        },
      ];
    },
  ];
  taxes: {};
  totals: {
    subtotal: number;
    discount: number;
    shippingDiscount: number;
    shippingPrice: number;
    totalCardPrice: number;
    totalPrice: number;
  };
  messagesErrors: [
    {
      code: string;
      text: string;
      status: string;
      fields: {
        id: string;
      };
    },
  ];
  openTextField: {
    firstName: string;
    lastName: string;
    document: string;
  };
  channel: string;
};

export type SetShoppingCartItemsRequest = {
  orderItems: {
    index: number;
    quantity: number;
  }[];
};

export type SaveShoppingCartItemsRequest = {
  orderItems: {
    id: string;
    quantity: number;
  }[];
};

export type AddServiceRequest = {
  id: string;
};
