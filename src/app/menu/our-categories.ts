import { ProductCategory } from "./product-category";
import
{
  saucesProducts,
  supplementsProducts,
  pimpProducts,
  friesProducts,
  dessertsProducts,
  drinksProducts,
  tacosProducts 
}
from "./our-products";

// MISC

export const SaucesCategory = new ProductCategory
(
  "Sauces",
  saucesProducts,
  true
);

export const SupplementsCategory = new ProductCategory
(
  "Suppléments",
  supplementsProducts,
  true
);

export const PimpCategory = new ProductCategory
(
  "Pimp ton tacos!",
  pimpProducts,
  true
);

export const FriesCategory = new ProductCategory
(
  "Frites",
  friesProducts,
  false
);

// DESSERTS

export const DessertsCategory = new ProductCategory
(
  "Desserts",
  dessertsProducts,
  true
);

// DRINKS

export const DrinksCategory: ProductCategory = new ProductCategory
(
  "Boissons",
  drinksProducts,
  false
);

// TACOS

export const TacosCategory: ProductCategory = new ProductCategory
(
  "Tacos",
  tacosProducts,
  false
);