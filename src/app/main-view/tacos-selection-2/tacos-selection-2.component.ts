import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../menu/menu.service";
import {Product} from "../../menu/product";
import { StateService } from "@uirouter/angular";

@Component({
  selector: 'app-tacos-selection-2',
  templateUrl: './tacos-selection-2.component.html',
  styleUrls: ['./tacos-selection-2.component.css']
})
export class TacosSelection2Component implements OnInit {

  tacosProducts: Product[];

  constructor(private menuService: MenuService, private $state: StateService) { }

  ngOnInit() {
    this.tacosProducts = this.menuService.getTacosProducts();
  }

  goToMenuSetup(tacos: Product): void {
    //TODO: Most likely pass tacos as a param in $state.go function. TBD
    console.log(tacos);
    console.log(this.$state);
  }
}
