import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../menu/menu.service';
import {Formula} from "../../menu/formula";

@Component({
  selector: 'app-main-selection',
  templateUrl: './main-selection.component.html',
  styleUrls: ['./main-selection.component.css']
})
export class MainSelectionComponent implements OnInit
{
  selectedFoodType: string = '';

  constructor()
  {
    
  }

  ngOnInit()
  {
    this.selectFood('Tacos');
  }
  
    
  getSelectedFood(): string
  {
    return this.selectedFoodType;
  }

  isFoodSelected(foodType: string): boolean
  {
    return (this.selectedFoodType === '' || this.selectedFoodType === foodType);
  }

  selectFood(foodType: string): void {
    this.selectedFoodType = foodType;
  }
}
