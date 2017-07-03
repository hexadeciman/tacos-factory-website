import { Product } from './product';

export class ProductCategory
{
  private name: string;
  private products: Product[];
  
  constructor(name: string,  products: Product[])
  {
    this.name = name;
    this.products = products;
  }
  
  getName(): string
  {
    return this.name;
  }
  
  getProducts(): Product[]
  {
    return this.products;
  }
}