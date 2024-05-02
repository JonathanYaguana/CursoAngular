import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jonathan'
  public gener: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  chageClient(): void {
    this.name = 'Jaina';
    this.gener = 'female';
  }

  // i18nPlural
  public clintes: string[] = ['Jaina', 'Lyn', 'Churon', 'Niña', 'Negrito', 'Max', 'Jolly', 'Liam', 'Zeus', 'Kukis']
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clintes.shift();
  }

}
