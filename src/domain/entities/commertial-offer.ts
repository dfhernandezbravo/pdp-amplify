import {
  DeliverySlaSamplesEntity,
  DeliverySlaSamplesPerRegion,
} from './delivery-sla-sample';
import { DiscountHighLightEntity } from './discount-highlight';
import { InstallmentsEntity } from './installments';
import { PaymentOptions } from './payment-option';

type Prices = {
  brandPrice: number;
  currency: string;
  normalPrice: number;
  offerPrice: number;
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
  ListPrice: number;
  PriceWithoutDiscount: number;
  RewardValue: number;
  PriceValidUntil: string;
  AvailableQuantity: number;
  IsAvailable: boolean;
  Tax: number;
  DeliverySlaSamples?: DeliverySlaSamplesEntity[];
  GetInfoErrorMessage?: null;
  CacheVersionUsedToCallCheckout: string;
  PaymentOptions: PaymentOptions;
};
