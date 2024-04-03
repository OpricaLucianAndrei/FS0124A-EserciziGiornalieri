import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component'; 
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: 'form',
      loadChildren: () =>
          import('./components/form/form.module').then(
              (m) => m.FormModule
          )
  },
  {
      path: 'account',
      loadChildren: () =>
          import('./components/account/account.module').then(
              (m) => m.AccountModule
          )
  },
  {
      path: 'profilo',
      loadChildren: () =>
          import('./components/profilo/profilo.module').then(
              (m) => m.ProfiloModule
          )
  },
  {
      path: 'login',
      component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
