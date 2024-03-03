export interface IProduct {
    productId: number;
    name: string;
    description: string;
    price: number;
    categoryName: string;
    imageUrl: string;
    count?:number
  }