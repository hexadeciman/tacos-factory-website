import { Component, OnInit } from '@angular/core';
import { Formula } from "../../menu/formula";
import { StateService } from "@uirouter/angular";

import {MenuService} from "../../menu/menu.service";

@Component({
  selector: 'tacos-selection',
  templateUrl: './tacos-selection.component.html',
  styleUrls: ['./tacos-selection.component.css']
})
export class TacosSelectionComponent implements OnInit {
  tacosFormulas: Formula[];

  constructor(private menuService: MenuService, private $state: StateService) { }

  ngOnInit() {
    this.tacosFormulas = this.menuService.getTacosFormulas();
  }

  selectTacosFormula(formula: Formula): void
  {
    //TODO: save formula somewhere somehow, or save as a param in $state.go function. TBD
    console.log(formula);
    this.$state.go('tacosSelection2');
  }

}
