import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainSelectionComponent } from './main-view/main-selection/main-selection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuService } from './menu/menu.service';
import { TacosSelectionComponent } from './main-view/tacos-selection/tacos-selection.component';
import { UIRouterModule } from "@uirouter/angular";
import { TacosSelection2Component } from './main-view/tacos-selection-2/tacos-selection-2.component';
import { TacosSelection3Component } from './main-view/tacos-selection-3/tacos-selection-3.component';


// To be moved in a seperate file
let tacosSelection3 = { name: 'tacosSelection2.tacosSelection3',
                        url: '/details',
                        component: TacosSelection3Component
                      };

let tacosSelection2 = { name: 'tacosSelection2',
                        url: '/select-tacos',
                        component: TacosSelection2Component,
                      };

let tacosSelection1 = { name: 'tacosSelection1',
                        url: '/select-tacos-formula',
                        component: TacosSelectionComponent
                      };

const appRoutes: Routes =
[
  { path: 'Command', component: MainViewComponent },
  { path: '',
    redirectTo: '/Command',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavigationComponent,
    MainSelectionComponent,
    TacosSelectionComponent,
    TacosSelection2Component,
    TacosSelection3Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    UIRouterModule.forRoot({ states: [ tacosSelection3, tacosSelection2, tacosSelection1 ], useHash: false })
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})

export class AppModule { }
