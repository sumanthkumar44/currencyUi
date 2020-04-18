import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyHistoryComponent } from './currency-history/currency-history.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'home', component: CurrencyHistoryComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
