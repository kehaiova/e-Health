import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_PATHS} from './routing/top-routes';
import {LoginComponent} from './layout/login/login.component';
import {MenuComponent} from './layout/menu/menu.component';
import {ERecipesComponent} from './e-recipes/e-recipes.component';
import {RegisterComponent} from './layout/register/register.component';
import {EReferralsComponent} from "./e-referrals/e-referrals.component";
import {ReferencesComponent} from "./references/references.component";
import {AccountComponent} from "./layout/account/account.component";

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
    path: ROUTE_PATHS.register,
    component: RegisterComponent
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
    path: ROUTE_PATHS.references,
    component: ReferencesComponent
  },
  {
    path: ROUTE_PATHS.referrals,
    component: EReferralsComponent
  },
  {
    path: ROUTE_PATHS.account,
    component: AccountComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
