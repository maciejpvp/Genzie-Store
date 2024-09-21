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

export interface CartResponse {
  status: string;
  code: string;
  message: string;
  data: Data;
}

export interface Data {
  cart: Cart;
}

export interface Cart {
  _id: string;
  user: string;
  items: ItemElement[];
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface ItemElement {
  item: ItemItem;
  quantity: number;
  size: string;
  _id: string;
}

export interface ItemItem {
  _id: string;
  name: string;
  price: number;
  images: string[];
}
