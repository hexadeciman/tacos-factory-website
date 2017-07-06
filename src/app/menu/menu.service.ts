import { Injectable } from '@angular/core';

import { Product } from './product';
import { ProductCategory } from './product-category';
import { Formula } from './formula';
import
{
  TacosOnlyFormula,
  TacosMenu1Formula,
  TacosMenu2Formula,
  TacosMenu3Formula
}
from "./our-formulas";

@Injectable()
export class MenuService
{
  constructor()
  {
    
  }

  getTacosFormulas(): Formula[]
  {
    return [TacosOnlyFormula, TacosMenu1Formula, TacosMenu2Formula, TacosMenu3Formula];
  }

  getTacosProducts(): Product[]
  {
    // return tacosProducts;
    return TacosOnlyFormula.getElements()[0].getProducts();
  }
  
  getBurgersFormulas(): Formula[]
  {
    return [];
  }
}