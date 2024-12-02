import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-options-bottom-shett',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './options-bottom-shett.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsBottomShettComponent {

  openLink(event: MouseEvent): void {
    console.log('openLink', event);
  }
}
