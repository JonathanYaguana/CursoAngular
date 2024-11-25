import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  public usersService = inject( UsersService )
}
