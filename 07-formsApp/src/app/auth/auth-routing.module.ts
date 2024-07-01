import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPAgeComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sing-up', component: RegisterPAgeComponent },
      { path: '**', redirectTo: 'sign-up' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
