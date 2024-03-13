import { CommertialOffer } from '@entities/commertial-offer';
import { ReferenceIdEntity } from './reference-id';
import { Color } from './get-colors.response';

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
  colorCodes?: {
    color: string;
    value: string;
  }[];
  colorPalettes?: Color[] | null;
};

export type { GetProduct, Item };
