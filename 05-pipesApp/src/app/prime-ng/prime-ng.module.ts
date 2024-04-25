import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
//import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    //MenuModule,
    PanelModule,
    MenubarModule
  ]
})

export class PrimeNgModule { }
