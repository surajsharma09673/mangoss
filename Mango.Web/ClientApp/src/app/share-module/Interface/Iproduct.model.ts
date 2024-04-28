export interface IProduct {
  productId: number;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  imageUrl?: string;
  imageLocalPath?: string;
  count: number;
  image?: Blob | null;
}