import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatBadgeModule} from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, } from '@angular/material/bottom-sheet';
import { OptionsBottomShettComponent } from './ui/options-bottom-shett/options-bottom-shett.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatBottomSheetModule,
  ],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  })
export default class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);

  openBottomShee(){
    this._bottomSheet.open(OptionsBottomShettComponent);
  }
}
