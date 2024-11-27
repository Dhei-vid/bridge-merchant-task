export type ICategories = string[];

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export type IProducts = IProduct[];

export type IFilteredData = IProducts | ICategories;
