import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-main-selection',
  templateUrl: './main-selection.component.html',
  styleUrls: ['./main-selection.component.css']
})
export class MainSelectionComponent implements OnInit
{
  selectedFormulas = {};
  
  constructor(private menuService: MenuService)
  {
    
  }

  ngOnInit()
  {
    
  }
  
  displayTacosFormulas(): void
  {
    this.selectedFormulas = this.menuService.getTacosFormulas();
  }
  
  displayBurgersFormulas(): void
  {
    this.selectedFormulas = this.menuService.getBurgersFormulas();
  }
}
