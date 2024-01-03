import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    mainPageComponent
  ]
})
export class DbzModule { }
