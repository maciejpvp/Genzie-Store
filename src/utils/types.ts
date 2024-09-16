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

export type DefaultResponseType = {
  status: string;
  code: string;
  message: string;
};

export type LoginResponseType = {
  status: string;
  code: string;
  message: string;
  data: {
    token: string;
    user: {
      email: string;
      user: string;
    };
  };
};
