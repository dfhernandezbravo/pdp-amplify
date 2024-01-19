import { CommertialOffer } from '@entities/commertial-offer';
import { ReferenceIdEntity } from './reference-id';

type Item = {
  ean: string;
  referenceId: ReferenceIdEntity[];
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
      commertialOffer: CommertialOffer;
    },
  ];
  itemSpecifications: {
    [key: string]: string[];
  };

  offering: {
    name: string;
    value: number;
  };
};

type GetProduct = {
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
  items: Item[];
};

export type { GetProduct, Item };
