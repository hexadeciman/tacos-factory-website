import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainSelectionComponent } from './main-view/main-selection/main-selection.component';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavigationComponent,
    MainSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
