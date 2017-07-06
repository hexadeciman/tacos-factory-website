import { Product } from './product';

export class ProductCategory
{
  private name: string;
  private products: Product[];
  private optional: boolean;
  
  constructor(name: string,  products: Product[], optional: boolean)
  {
    this.name = name;
    this.products = products;
    this.optional = optional;
  }
  
  getName(): string
  {
    return this.name;
  }
  
  getProducts(): Product[]
  {
    return this.products;
  }
  
  isOptional(): boolean
  {
    return this.optional;
  }
}