import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower = 'Fernando';
  public nameUpper = 'fernando';
  public fullName = 'fErnANDO';

  public customDate: Date = new Date();
}
