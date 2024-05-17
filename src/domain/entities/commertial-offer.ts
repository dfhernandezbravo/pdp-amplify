import {
  DeliverySlaSamplesEntity,
  DeliverySlaSamplesPerRegion,
} from './delivery-sla-sample';
import { DiscountHighLightEntity } from './discount-highlight';
import { InstallmentsEntity } from './installments';
import { PaymentOptions } from './payment-option';

type Prices = {
  brandPrice: number | null;
  currency: string;
  normalPrice: number;
  offerPrice: number | null;
};

export type CommertialOffer = {
  DeliverySlaSamplesPerRegion: DeliverySlaSamplesPerRegion;
  Installments?: InstallmentsEntity[];
  DiscountHighLight?: DiscountHighLightEntity[];
  GiftSkuIds?: unknown[];
  Teasers?: unknown[];
  PromotionTeasers?: unknown[];
  BuyTogether?: unknown[];
  ItemMetadataAttachment?: unknown[];
  prices: Prices;
  pricesM2?: Prices;
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: string;
  availableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples?: DeliverySlaSamplesEntity[];
  GetInfoErrorMessage?: null;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
  adjustments: {
    name: string;
    id: string;
    priceType: string;
    percentDiscount: string;
    value: number;
    description: string;
  }[];
};
