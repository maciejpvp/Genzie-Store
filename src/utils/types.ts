export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string[];
  images: string[];
  stock: number[];
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

export type SignupResponseType = {
  status: string;
  code: string;
  message: string;
};
