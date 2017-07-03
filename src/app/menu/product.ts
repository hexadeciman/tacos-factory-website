export class Product
{
  private name: string;
  private description: string;
  private price: number;
  
  constructor(name: string, description: string, price: number)
  {
    this.name = name;
    this.description = description;
    this.price = price;
  }
  
  getName(): string
  {
    return this.name;
  }
  
  getDescription(): string
  {
    return this.description;
  }
  
  getPrice(): number
  {
    return this.price;
  }
}