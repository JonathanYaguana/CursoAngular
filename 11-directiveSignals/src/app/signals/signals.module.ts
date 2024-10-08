import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';


@NgModule({
  declarations: [
    PropertiesPageComponent,
    SideMenuComponent,
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ]
})
export class SignalsModule { }
