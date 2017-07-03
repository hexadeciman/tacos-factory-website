import { Product } from './product';
import { ProductCategory } from './product-category';

export class Formula // This is a crappy name
{
  private name: string;
  private parent: Formula;
  private price: number;
  private elements: ProductCategory[];
  
  constructor(name: string, parent: Formula, price: number, elements: ProductCategory[])
  {
    this.name = name;
    this.parent = parent;
    this.price = price;
    this.elements = elements;
  }
  
  getName(): string
  {
    return this.name;
  }

  getParent(): Formula
  {
    return this.parent;
  }

  getPrice(): number
  {
    return this.price;
  }

  getElements(): ProductCategory[]
  {
    return this.elements;
  }
}