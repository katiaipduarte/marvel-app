export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObj[];
  resourceURI: string;
  urls: Urls[];
  series: Items;
  variants: Items[];
  collections: Items[];
  collectedIssues: Items[];
  dates: Dates[];
  prices: Prices[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: Images[];
  creators: {
    available: number;
    returned: number;
    collectionURI: string;
    items: Items[];
  };
  characters: {
    available: number;
    returned: number;
    collectionURI: string;
    items: Items[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: Items[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: Items[];
  };
};

type Items = {
  resourceURI: string;
  name: string;
  type?: string;
  role?: string;
};

type Urls = {
  type: string;
  url: string;
};

type TextObj = {
  type: string;
  language: string;
  text: string;
};

type Dates = {
  type: string;
  date: string;
};

type Prices = {
  type: string;
  price: number;
};

type Images = {
  path: string;
  extension: string;
};
