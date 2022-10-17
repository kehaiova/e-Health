import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATHS} from './routing/top-routes';
import { LoginComponent } from './layout/login/login.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ERecipesComponent } from './e-recipes/e-recipes.component';
import { OutpationListComponent } from './outpation-list/outpation-list.component';
import { ReferallsComponent } from './referrals/referalls.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },

  {
    path: ROUTE_PATHS.login,
    component: LoginComponent
  },
  {
    path: ROUTE_PATHS.menu,
    component: MenuComponent
  },
  {
    path: ROUTE_PATHS.recipes,
    component: ERecipesComponent
  },
  {
    path: ROUTE_PATHS.outpation,
    component: OutpationListComponent
  },
  {
    path: ROUTE_PATHS.referrals,
    component: ReferallsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
