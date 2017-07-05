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
    "Filet de poulet, tomates, oignons rouges, tranche de cheddar, sauces au choix",
    11
  ),
  new Product
  (
    "Le curry",
    "Filet de poulet mariné façon curry (curcuma, coriandre, fenugrec, cumin, poivre), " +
    "tomates, oignons rouges, tranche de cheddar, sauces au choix",
    12
  ),
  new Product
  (
    "Le Thaï",
    "Filet de poulet mariné façon thaï (épice, sel, ail, coriandre, piment, cumin), tomates, " +
    "oignons rouges, tranche de cheddar, sauces au choix",
    12
  ),
  new Product
  (
    "Le Steak",
    "Steak haché de boeuf (165g), tomates, oignons rouges, tranche de cheddar, sauces au choix",
    12
  ),
  new Product
  (
    "Le Sega",
    "Steak haché de boeuf (165g) assaisonné (sel, poivre noir, oignons rouges, coriandre), " +
    "tomates, oignons rouges, tranche de cheddar, sauces au choix",
    12
  ),
  new Product
  (
    "Le Merguez",
    "Double merguez, tomates, oignons rouges, tranche de cheddar, sauces au choix",
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
  8,
  [TacosCategory, SaucesCategory, SupplementsCategory, PimpCategory]
);

const TacosMenu1Formula: Formula = new Formula
(
  "Menu Tacos + Boisson",
  TacosOnlyFormula,
  14.5,
  [DrinksCategory]
);

const TacosMenu2Formula: Formula = new Formula
(
    "Menu Tacos + Boisson + Frites",
    TacosMenu1Formula,
    17,
    [DrinksCategory]
);

const TacosMenu3Formula: Formula = new Formula
(
    "Menu Tacos + Boisson + Frites + Dessert",
    TacosMenu2Formula,
    20,
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
    return [TacosOnlyFormula, TacosMenu1Formula, TacosMenu2Formula, TacosMenu3Formula];
  }

  getTacosProducts(): Product[]
  {
    return tacosProducts;
  }
  
  getBurgersFormulas(): Formula[]
  {
    return [];
  }
}