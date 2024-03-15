export interface IProduct {
  id: number;
  name: string;
  price: number;
  imgURL: string;
  categoryID: number;
  description: string;
  quantity: number;
  material?: string;
  discount?: number;
  netSalary?: number;
}
