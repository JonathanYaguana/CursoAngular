import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapScreen',
  standalone: true,
  imports: [],
  templateUrl: './mapScreen.component.html',
  styleUrls: ['./mapScreen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
