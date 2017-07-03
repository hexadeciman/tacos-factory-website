import { Injectable } from '@angular/core';

import { Product } from './product';
import { ProductCategory } from './product-category';
import { Formula } from './formula';

//
// -- PRODUCTS --
//

// MISC

const saucesProducts =
[
  new Product
  (
    "Gruyère (maison)",
    null,
    null
  ),
  new Product
  (
    "Roquefort (maison)",
    null,
    null
  ),
  new Product
  (
    "Forestière (maison)",
    null,
    null
  ),
  new Product
  (
    "Samourai",
    null,
    null
  ),
];

const supplementsProducts =
[
  new Product
  (
    "Sauce Maison",
    null,
    1
  ),
  new Product
  (
    "Vache qui rit",
    null,
    1
  ),
  new Product
  (
    "Poivrons grillés",
    null,
    1
  )
];

const pimpProducts =
[
  new Product
  (
    "Coulis de sauce maison",
    null,
    2
  ),
  new Product
  (
    "Grattinage Emmental",
    null,
    2
  ),
  new Product
  (
    "Grattinage chèvre chaud",
    null,
    3
  )
];

// DRINKS

const drinksProducts =
[
  new Product
  (
    "Eau 50cl",
    null,
    2.5
  ),
  new Product
  (
    "Coca Cola 50cl",
    null,
    3
  ),
  new Product
  (
    "Fanta 50cl",
    null,
    3
  )
];

// TACOS

const tacosProducts =
[
  new Product
  (
    "Le poulet",
    "Filet de poulet, tomates, oignons, c'est très bon!",
    11
  ),
  new Product
  (
    "Le curry",
    "Filet de poulet au curry (bim bim), tomates, oignons, c'est très bonnard t'as vu!",
    12
  ),
  new Product
  (
    "Le Thai",
    "Filet de poulet mariné façon thai (du lourd!), tomates, oignons, c'est très bon!",
    12
  )
];

//
// -- CATEGORIES --
//

// MISC

const SaucesCategory = new ProductCategory
(
  "Sauces",
  saucesProducts
);

const SupplementsCategory = new ProductCategory
(
  "Suppléments",
  supplementsProducts
);

const PimpCategory = new ProductCategory
(
  "Pimp ton tacos!",
  pimpProducts
);

// DRINKS

const DrinksCategory: ProductCategory = new ProductCategory
(
  "Boissons",
  drinksProducts
);

// TACOS

const TacosCategory: ProductCategory = new ProductCategory
(
  "Tacos",
  tacosProducts
);

//
// -- FORMULAS --
//

// TACOS

const TacosOnlyFormula: Formula = new Formula
(
  "Tacos Solo",
  null,
  null,
  [TacosCategory, SaucesCategory, SupplementsCategory, PimpCategory]
);

const TacosMenu1Formula: Formula = new Formula
(
  "Menu Tacos + Boisson",
  TacosOnlyFormula,
  14.5,
  [DrinksCategory]
);

@Injectable()
export class MenuService
{
  constructor()
  {
    
  }

  getTacosFormulas(): Formula[]
  {
    return [TacosOnlyFormula, TacosMenu1Formula];
  }
  
  getBurgersFormulas(): Formula[]
  {
    return [];
  }
}