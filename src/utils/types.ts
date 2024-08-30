export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string[];
  images: string[];
};

export type ProductResponseType = {
  data: {
    items: Product[];
  };
};

export type OneProductResponseType = {
  data: {
    item: Product;
  };
  code: string;
  message: string;
};
