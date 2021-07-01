export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: Urls[];
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
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
  series: {
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
};

type Urls = {
  type: string;
  url: string;
};
