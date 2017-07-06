import { Formula } from "./formula";
import
{
  TacosCategory,
  SaucesCategory,
  SupplementsCategory,
  PimpCategory,
  FriesCategory,
  DessertsCategory,
  DrinksCategory 
}
from "./our-categories";

//
// -- TACOS --
//

export const TacosOnlyFormula: Formula = new Formula
(
  "Tacos Solo",
  null,
  8,
  [TacosCategory, SaucesCategory, SupplementsCategory, PimpCategory]
);

export const TacosMenu1Formula: Formula = new Formula
(
  "Menu Tacos + Boisson",
  TacosOnlyFormula,
  14.5,
  [DrinksCategory]
);

export const TacosMenu2Formula: Formula = new Formula
(
    "Menu Tacos + Boisson + Frites",
    TacosMenu1Formula,
    17,
    [FriesCategory]
);

export const TacosMenu3Formula: Formula = new Formula
(
    "Menu Tacos + Boisson + Frites + Dessert",
    TacosMenu2Formula,
    20,
    [DessertsCategory]
);